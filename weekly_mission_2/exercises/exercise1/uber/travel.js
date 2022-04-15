const travel = {
    origin:'Chalco',
    destination: 'Estado de México',
    uber_type: 'Uber MX',
    price: '$230.00',
    driver: 'Roberto',
    stars:'4',
    date: '14/04/2022',
    receipt: 'Si',
    splitRate: function(){
        return 'Aquí puedes dividir las tarifas'
    },
    qualifyTravel: function(){
        return 'Aquí puedes calificar tu viaje'
    },
    getReceipt: function(){
        return 'Aquí puedes obtener tu recibo'
    }
}

console.log(`Tu viaje es de ${travel.origin} a ${travel.destination}`)
console.log(travel.getReceipt())