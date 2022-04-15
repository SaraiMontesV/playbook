const post = {
    title: 'Mi publicación',
    photo: ['photo1.png', 'photo2.png'],
    videos: [],
    tag_people: ['@amigo1' , '@amigo2'],
    location: 'Hacienda panoaya',
    feeling: 'Contento',
    gif:'',
    live_video: '',
    important_event:'',
    sendPost: function(){
        return 'enviando el post'
    }
}

console.log(`El nombre de mi post es ${post.title}`)
console.log(post.sendPost())