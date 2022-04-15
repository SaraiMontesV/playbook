const user = {
    name: 'SaraiMV',
    imageProfile:'image.png',
    currentCity: 'Ciudad de México',
    workplace: 'Ciudad de México',
    school: 'University',
    hometown: 'Estado de México',    
    emotionalSituation: 'Casada',
    hobbies: 'Senderismo',
    outstanding: 'Mis fotos destacadas',
    addStorie:function(){
        return 'Aquí puede agregar una historia'
    },
    addFriend: function(){
        return 'Aquí se puede agregar a un amigo'
    },
    addPhotoAndVideo: function(){
        return 'Aquí se puede agregar fotos y videos'
    }
}

console.log('Mi usuario de facebook es: ', user.name)
console.log(user.addStorie())