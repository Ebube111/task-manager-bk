const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math')

test('Should calculate total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
   
})

test('should calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

test("covert fahrenheit to celsius", () => {
    const temp = fahrenheitToCelsius(32)
    expect(temp).toBe(0)
})

test("convert celsius to fahrenheit", () => {
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32)
})