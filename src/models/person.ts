import { ObjectId } from 'mongodb';

class Person {
  name: string;
  url_id: string;
  _id: string;

  constructor(userId: string, name: string, url_id: string) {
    this.name = name;
    this.url_id = url_id;
    this._id = userId;
  }
}

export default Person;