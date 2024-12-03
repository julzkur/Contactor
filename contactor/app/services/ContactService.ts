
import * as FileSystem from 'expo-file-system';
import { uuidv7 } from 'uuidv7';
import { ContactModel } from '../models/contact';
const newUuid = uuidv7();
const CONTACTS_DIRECTORY = FileSystem.documentDirectory + '/contacts';

export class ContactService {
  async ensureDirectory() {
    const directoryExists = await FileSystem.getInfoAsync(CONTACTS_DIRECTORY);
    if (!directoryExists){
      await FileSystem.makeDirectoryAsync(CONTACTS_DIRECTORY, { intermediates: true})
    }
  }


  getAllContacts = async (): Promise<ContactModel[]> => {
    await this.ensureDirectory();
    const files = await FileSystem.readDirectoryAsync(CONTACTS_DIRECTORY);

    const contacts = await Promise.all(
      files.map(async (file) => {
        const data = await FileSystem.readAsStringAsync(CONTACTS_DIRECTORY + file);
        return ContactModel.fromJSON(data);
      })
    );
    return contacts.sort((a, b) => a.name.localeCompare(b.name));
  }

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
  editContact = async (id:string, name:string, phoneNumber:string, thumbnail:string) => {
    await this.ensureDirectory();
    const filename = `${CONTACTS_DIRECTORY}/${name}-${id}.json`;
    const contact = new ContactModel(id, name, phoneNumber, thumbnail);
    await FileSystem.writeAsStringAsync(filename, contact.toJson());

  }

  // might break
  deleteContact = async (id:string) => {
    await this.ensureDirectory();
    const files = await FileSystem.readDirectoryAsync(CONTACTS_DIRECTORY);
    const fileToDelete = files.find(file => file.includes(id));

    if (fileToDelete){
      await FileSystem.deleteAsync(CONTACTS_DIRECTORY + fileToDelete);
    }
  }
}