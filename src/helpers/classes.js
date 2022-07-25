export default class Оrganization {
  name;
  directorName;
  phone;
  key;
  constructor(name, directorName, phone) {
    this.name = name 
    this.directorName = directorName 
    this.phone = phone
    this.key = this.getRandomKey()
  }

  getRandomKey() {
    return (new Date()).getTime() + Math.floor(Math.random() * 10000).toString()
  }
}