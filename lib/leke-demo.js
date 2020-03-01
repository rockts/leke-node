class LekeDemo {
  waitTwoSecond(data, callback) {
    setTimeout(() => {
      callback(data);
    }, 2000);
  }
  // subtotal(unitPrice, quantity) {
  //   return unitPrice * quantity;
  // }
}

module.exports = LekeDemo;
