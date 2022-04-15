const user = {
  name: "SaraiMV",
  biography: "",
  location: "",
  web_site: "",
  birthdate:'',
  switchToProfessionalAccount: function () {
      return 'Tu tipo de cuenta se ha cambiado a profesional'
  }

};

console.log(`El perfil de twitter es ${user.name}`)
console.log(user.switchToProfessionalAccount())