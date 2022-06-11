//Price generator
function priceGenerator(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default priceGenerator;
