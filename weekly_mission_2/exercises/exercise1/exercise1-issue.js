const issue = {
    title: "LaunchX Issue",
    repositoryNameAssociated: "SaraiMV",
    status: "Open",
    numberOfComments: 100,
    labels: 'LaunchX',
    author: 'SaraiMV',
    dateCreated: '15 Abril 2022',
    lastUpdated: '15 Abril 2022',
    getTitleAndAuthor: function(){
    return `Título: ${this.title} \n Autor: ${this.author}`
    },
    getGeneralInfo: function(){
      return `This repository ${this.title} was created by ${this.author}`
    }
   }
   
   console.log("Título del issue:" + issue.title)
   console.log(issue.getTitleAndAuthor())
   console.log(issue.getGeneralInfo())