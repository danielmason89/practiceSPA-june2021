const assert = require('assert');
const testing = require('.././testing');
describe("testing()", function () {
  // Arrange
  let greeting = 'testing';
  // Act
  let result = testing();
  // Assert
  it("it return testing", function () {
    expect(result).toEqual(greeting);
  });
});
