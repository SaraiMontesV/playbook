const pullRequest = {
  title: "LaunchX Pull Request",
  author: 'SaraiMV',
  branchName: "Main",
  dateCreated: "15 Abril 2022",
  status: "Open",
  repositoryNameAssociated: 'LaunchX',
  getStatus: function () {
    return this.status;
  },
  getTitleAndAuthor: function () {
    return `Título: ${this.title} \n Autor: ${this.author}`;
  },
};

console.log("Título del pull request:" + pullRequest.title);
console.log("El status del pull request es:", pullRequest.getStatus());
console.log(pullRequest.getTitleAndAuthor());
