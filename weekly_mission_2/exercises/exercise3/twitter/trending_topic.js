class TrendingTopic {
  constructor(title, hashtag, content, total_tweets, photo) {
    this.title = title;
    this.hashtag = hashtag;
    this.content = content;
    this.total_tweets = total_tweets;
    this.photo = photo;
  }
}

const trending_topic = new TrendingTopic(
  "Viernes Santo",
  "#viernesSanto",
  "Hoy es viernes santo",
  100,
  ""
);

console.log(`El trending topic es ${trending_topic.title}`);
