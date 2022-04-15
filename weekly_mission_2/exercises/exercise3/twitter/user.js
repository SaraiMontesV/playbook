class User {
  constructor(name, biography, location, web_site, birthdate) {
    this.name = name;
    this.biography = biography;
    this.location = location;
    this.website = web_site;
    this.birthdate = birthdate;
  }

  switchToProfessionalAccount() {
    return "Tu tipo de cuenta se ha cambiado a profesional";
  }
}

const user = new User("SaraiMV", "", "", "", "");
console.log(`El perfil de twitter es ${user.name}`);
console.log(user.switchToProfessionalAccount());
