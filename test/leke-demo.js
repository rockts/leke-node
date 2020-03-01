const chai = require("chai");
const expect = chai.expect;
const LekeDemo = require("../lib/leke-demo");

var demo = new LekeDemo();

describe("LekeDemo", function() {
  it("单价是 10 块钱的 3 件商品小计金额应该是 30 块", function() {
    var subtotal = demo.subtotal(10, 3);
    expect(subtotal).to.equal(30);
  });
});
