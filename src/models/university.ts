class University {
  country: string;
  name: string;
  domains: string[];
  web_pages: string[];


  constructor(country: string, name: string, domains: string[], web_pages: string[]) {
    this.country = country;
    this.name = name;
    this.domains = domains;
    this.web_pages = web_pages;
  }
}

export default University;
