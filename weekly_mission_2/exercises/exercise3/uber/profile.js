class Profile {
  constructor(
    name,
    phone,
    help,
    travels,
    wallet,
    messagges,
    configuration,
    legal,
    profile_photo
  ) {
    this.name = name;
    this.phone = phone;
    this.help = help;
    this.travels = travels;
    this.wallet = wallet;
    this.messages = messagges;
    this.configuration = configuration;
    this.legal = legal;
    this.profile_photo = profile_photo;
  }

  saveInfo() {
    return "Tu información de perfil se ha guardado con éxito";
  }
}

const profile = new Profile(
  "SaraiMV",
  "552234335",
  "Ayuda",
  "Viajes",
  "Pago",
  "Mensajes",
  "Configuración",
  "Legal",
  "perfil.png"
);
console.log(profile.saveInfo());
