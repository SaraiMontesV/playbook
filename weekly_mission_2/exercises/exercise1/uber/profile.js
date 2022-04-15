const profile = {
    name: 'SaraiMV',
    phone: '552234335',
    help: 'Ayuda',
    travels:'Viajes',
    wallet:'Pago',
    messagges: 'Mensajes',
    configuration:'Configuración',
    legal:'Legal',
    profile_photo: 'perfil.png',
    saveInfo: function() {
        return 'Tu información de perfil se ha guardado con éxito'
    }
}

console.log(profile.saveInfo())