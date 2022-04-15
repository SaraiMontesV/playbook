class Post {
  constructor(
    title,
    photo,
    videos,
    tag_people,
    location,
    feeling,
    gif,
    live_video,
    important_event
  ) {
    this.title = title;
    this.photo = photo;
    this.videos = videos;
    this.tag_people = tag_people;
    this.location = location;
    this.feeling = feeling;
    this.gif = gif;
    this.live_video = live_video;
    this.important_event = important_event;
  }

  sendPost() {
    return `Tu post titulado ${this.title} fue publicado con éxito`;
  }
}

const post = new Post(
  "Mi publicación",
  ["photo1.png", "photo2.png"],
  [],
  ["@amigo1", "@amigo2"],
  "Hacienda panoaya",
  "Contento",
  "",
  "",
  ""
);
console.log(post.sendPost());
