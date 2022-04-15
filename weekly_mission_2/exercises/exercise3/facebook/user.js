class User {
  constructor(
    name,
    imageProfile,
    currentCity,
    workplace,
    school,
    hometown,
    emotionalSituation,
    hobbies,
    outstanding
  ) {
    this.name = name;
    this.imageProfile = imageProfile;
    this.currentCity = currentCity;
    this.workplace = workplace;
    this.school = school;
    this.hometown = hometown;
    this.emotionalSituation = emotionalSituation;
    this.hobbies = hobbies;
    this.outstanding = outstanding;
  }

  addStorie() {
    return "Aquí puede agregar una historia";
  }
  addFriend() {
    return "Aquí se puede agregar a un amigo";
  }
  addPhotoAndVideo() {
    return "Aquí se puede agregar fotos y videos";
  }
}

const user = new User(
  "SaraiMV",
  "image.png",
  "Ciudad de México",
  "Ciudad de México",
  "University",
  "Estado de México",
  "Casada",
  "Senderismo",
  "Mis fotos destacadas"
);
console.log(`Agregar historia: `, user.addStorie());
