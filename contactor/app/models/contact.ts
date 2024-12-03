export interface Contact {
    id: string;
    name: string;
    phoneNumber: string;
    thumbnail?: string;
  }

export class ContactModel {
  constructor(
    public name: string,
    public phoneNumber: string,
    public thumbnail?: string

  ){}
  
  toJson():string {
    return JSON.stringify({
      name: this.name,
      phoneNumber: this.phoneNumber,
      image: this.thumbnail || null,
    });
  }
  fromJSON(json: string): ContactModel {
    const data = JSON.parse(json);
    return new ContactModel(data.name, data.phoneNumber, data.image);
  }
}

export default Contact;