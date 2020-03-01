const chai = require("chai");
const expect = chai.expect;

describe("LekeDemo", function() {
  it("使用 expect 风格的断言测试", function() {
    var value = "hello";
    var number = 3;

    expect(number).to.be.at.most(5);
    expect(number).to.be.at.least(3);
    expect(number).to.be.within(1, 3);

    expect(value).to.exist;
    expect(value).to.be.a("string");
    expect(value).to.equal("hello");
    expect(value).to.not.equal("您好");
    expect(value).to.have.length(5);
  });
});
