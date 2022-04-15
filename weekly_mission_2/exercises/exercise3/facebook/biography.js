class Biography {
  constructor(
    cover_page,
    profile,
    details,
    friends,
    photos,
    post,
    information,
    music,
    movies
  ) {
    this.cover_page = cover_page;
    this.profile = profile;
    this.details = details;
    this.friends = friends;
    this.photos = photos;
    this.post = post;
    this.information = information;
    this.music = music;
    this.movies = movies;
  }

  getInfo() {
    return `Tu biografía contiene: \n -${biography.details} \n -${biography.friends} \n -${biography.photos}`;
  }
}

const biography = new Biography(
  "portada.png",
  "perfil.png",
  "Detalles",
  "Amigos",
  "Fotos",
  "Publicaciones",
  "Información",
  "Música",
  "Películas"
);
console.log(biography.getInfo());
