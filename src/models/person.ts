class Person {
  id: string;
  name: string;
  url_id: string;

  constructor(userId: string, name: string, url_id: string) {
    this.id = userId;
    this.name = name;
    this.url_id = url_id;
  }
}

export default Person;