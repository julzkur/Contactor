
import * as FileSystem from 'expo-file-system';
import { uuidv7 } from 'uuidv7';
import Contact, { ContactModel } from '../models/contact';

export const dummyContacts: ContactModel[] = [
  new ContactModel("1", "Pabbi labbi", "+0987654321", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbySPOVJMWqKXXDjw9zQLk4k7k7T2xDXjzsw&s",),
  new ContactModel("2", "Mamma besta", "+0987654321", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbySPOVJMWqKXXDjw9zQLk4k7k7T2xDXjzsw&s",),
]

const CONTACTS_DIRECTORY = FileSystem.documentDirectory + 'contacts/'; // var auka skastrik a undan, fann ekki directory

export class ContactService {
  async ensureDirectory() {
    const directoryExists = await FileSystem.getInfoAsync(CONTACTS_DIRECTORY);
    if (!directoryExists.exists){ // vantadi, annars com bara finn ekki directory
      await FileSystem.makeDirectoryAsync(CONTACTS_DIRECTORY, { intermediates: true})
    }
    console.log(FileSystem.documentDirectory);
  }

  // fun to save dummy data contacts so we have something to test with :))
  async saveContacts(contact: Contact) {
    const filePath = `${CONTACTS_DIRECTORY}/${contact.name}-${contact.id}.json`;
    await FileSystem.writeAsStringAsync(filePath, JSON.stringify(contact));
  }

  saveContact = async (contact: ContactModel) => {
    try {
      const contactId = await this.createContact(
        contact.name,
        contact.phoneNumber, 
        contact.thumbnail
      );
      console.log('Contact saved:', contactId);
      return contactId;
    } catch (error) {
      console.error('Error saving contact:', error);
    }
  };

  saveImportedContact = async (importedContact: ContactModel) => {
    const savedContactId = await this.saveContact(importedContact);
    console.log('Imported contact saved with ID:', savedContactId);
  }

  getAllContacts = async (): Promise<ContactModel[]> => {
    await this.ensureDirectory();
    const files = await FileSystem.readDirectoryAsync(CONTACTS_DIRECTORY);

    console.log("Files in directory:", files);

    if (files.length === 0) { 
      return [];
    }

    const contactFiles = files.filter(file => file.endsWith(".json"));

    const contacts = await Promise.all(
      contactFiles.map(async (file) => {
        const fileUri = `${CONTACTS_DIRECTORY}/${file}`;
        const data = await FileSystem.readAsStringAsync(fileUri);
        return JSON.parse(data);
      })
    );

    return contacts.sort((a, b) => a.name.localeCompare(b.name));
  };

  getContactById = async (id:string): Promise<ContactModel | undefined> => {
    await this.ensureDirectory();
    const allContacts:ContactModel[] = await this.getAllContacts();
    return allContacts.find(contact => contact.id === id);
  }

  getContactByName = async (name:string): Promise<ContactModel[]> => {
    await this.ensureDirectory();
    const allContacts:ContactModel[] = await this.getAllContacts();
    return allContacts.filter(contact => contact.name === name);
  }

  getContactByNumber = async (number:string): Promise<ContactModel[]> => {
    await this.ensureDirectory();
    const allContacts:ContactModel[] = await this.getAllContacts();
    return allContacts.filter(contact => contact.phoneNumber === number);
  }

  createContact = async (name:string, phoneNumber:string, thumbnail?:string): Promise<string> => {
    await this.ensureDirectory();
    
    const id = uuidv7();
    const contact = new ContactModel(id, name, phoneNumber, thumbnail);
    const filename = `${CONTACTS_DIRECTORY}/${name}-${id}.json`;
    await FileSystem.writeAsStringAsync(filename, contact.toJson());
    return id;
  }

  // might break
  editContact = async (id: string, name: string, phoneNumber: string, thumbnail: string): Promise<void> => {
    await this.ensureDirectory();
    const filePath = `${CONTACTS_DIRECTORY}/${name}-${id}.json`;

    const updatedContact = new ContactModel(id, name, phoneNumber, thumbnail);

    // Overwrite or create a new file for the updated contact
    await FileSystem.writeAsStringAsync(filePath, updatedContact.toJson());
  };

  // might break
  deleteContact = async (id:string) => {
    await this.ensureDirectory();
    const files = await FileSystem.readDirectoryAsync(CONTACTS_DIRECTORY);
    const fileToDelete = files.find(file => file.includes(id));

    if (fileToDelete){
      await FileSystem.deleteAsync(CONTACTS_DIRECTORY + fileToDelete);
    }
  }

  async resetDirectory() {
    try {
      const directoryExists = await FileSystem.getInfoAsync(CONTACTS_DIRECTORY);
      if (directoryExists.exists) {
        await FileSystem.deleteAsync(CONTACTS_DIRECTORY, { idempotent: true });
        console.log("Contacts directory deleted successfully.");
      }
      await FileSystem.makeDirectoryAsync(CONTACTS_DIRECTORY, { intermediates: true });
      console.log("Contacts directory recreated successfully.");
    } catch (error) {
      console.error("Error resetting contacts directory:", error);
    }
  }
}