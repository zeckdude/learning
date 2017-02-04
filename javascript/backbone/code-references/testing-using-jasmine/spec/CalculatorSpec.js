
// Define a new Suite of tests (a class)
describe('Calculator', function() {
  var calculator;

  // This method is automatically run before running each test (spec)
  beforeEach(function(){
    calculator = new Calculator();
  });

  // This method is automatically run after running each test (spec)
  afterEach(function(){
    // Code goes here
  });

  // Define a suite (a specific method)
  describe('add', function() {
    // Define a test to run
    // Provide a description of the test
    it('should be able to add 2 numbers', function(){
      var result = calculator.add(2, 3);

      // Define a condition that a variable should meet
      // In this case, we assert that the result of the calculator.add() call will equal 5
      expect(result).toEqual(5);
    });

    it('should throw an error if both arguments are not provided', function() {
      // In this case, we assert that the function call will throw an error (because it should have two arguments)
      expect(function(){
        calculator.add(1);
      }).toThrow();
    });

    it('should be called with the right arguments', function() {
      // Simulate an ajax response with a response value of 7 by running the `SpyOn` method followed by the method call
      spyOn(calculator, 'add').and.returnValue(7); // Without specifying the return value, it will always return undefined
      var result = calculator.add(3, 4);

      // Assert that the specified variable is undefined
      //expect(result).toBeUndefined();

      expect(result).toEqual(7);

      // Assert that the specified method has been called
      expect(calculator.add).toHaveBeenCalled();

      // Assert that the specified method has been called with the specified arguments
      expect(calculator.add).toHaveBeenCalledWith(3, 4);
    });

    it('should throw an error on the BE', function() {
      // Simulate an ajax response which throws an error
      spyOn(calculator, 'add').and.throwError('someError');

      // assert that the BE throws a specific error
      expect(function() {
        var result = calculator.add(6, 2);
      }).toThrowError('someError');
    });
  });
});


// Other Jasmine possible assertions
// expect(value).toBe(true);
// expect(value).not.toBe(true);
// expect(actualObject).toEqual(expectedObject);
// expect(value).toBeDefined();
// expect(value).toBeUndefined();
// expect(value).toBeNull();
// expect(value).toBeTruthy();
// expect(value).tobeFalsy();
// expect(array).toContain(“element”)
// expect(value).toBeLessThan(5);
// expect(value).toBeGreaterThan(5);
