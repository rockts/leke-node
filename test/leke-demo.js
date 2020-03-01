describe("LekeDemo", function() {
  describe("方法 1", function() {
    before(function() {
      console.log("--- 测试之前");
    });
    after(function() {
      console.log("--- 测试之后");
    });
    beforeEach(function() {
      console.log("------ 每条测试之前");
    });
    afterEach(function() {
      console.log("------ 每条测试之后");
    });
    context("情境 1", function() {
      it("方法 1", function() {});
      it("方法 2", function() {});
    });
  });
});
