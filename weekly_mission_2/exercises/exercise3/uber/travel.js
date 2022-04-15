class Travel {
  constructor(
    origin,
    destination,
    uber_type,
    price,
    driver,
    stars,
    date,
    receipt
  ) {
    this.origin = origin;
    this.destination = destination;
    this.uber_type = uber_type;
    this.price = price;
    this.driver = driver;
    this.stars = stars;
    this.date = date;
    this.receipt = receipt;
  }

  splitRate() {
    return "Aquí puedes dividir las tarifas";
  }
  qualifyTravel() {
    return "Aquí puedes calificar tu viaje";
  }
  getReceipt() {
    return "Aquí puedes obtener tu recibo";
  }
}

const travel = new Travel(
  "Chalco",
  "Estado de México",
  "Uber MX",
  "$230.00",
  "Roberto",
  "4",
  "14/04/2022",
  "Si"
);
console.log(`Tu viaje es de ${travel.origin} a ${travel.destination}`);
console.log(travel.getReceipt());
