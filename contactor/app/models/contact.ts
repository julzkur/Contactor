export interface Contact {
  id: string;
  name: string;
  phoneNumber: string;
  thumbnail?: string; // Keep it consistent as 'thumbnail'
}

export class ContactModel {
  constructor(
    public id: string,
    public name: string,
    public phoneNumber: string,
    public thumbnail?: string,
  ) {}

  toJson(): string {
    return JSON.stringify({
      id: this.id,
      name: this.name,
      phoneNumber: this.phoneNumber,
      thumbnail: this.thumbnail || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbySPOVJMWqKXXDjw9zQLk4k7k7T2xDXjzsw&s"
    });
  }

  static fromJSON(json: string): ContactModel {
    const data = JSON.parse(json);
    return new ContactModel(data.id, data.name, data.phoneNumber, data.thumbnail); // Match the key 'thumbnail'
  }
}

export default Contact;
