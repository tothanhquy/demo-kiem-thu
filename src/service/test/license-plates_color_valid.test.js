
const TestService = require( '../license-plates_color_valid');

it('Test 1', () => {
  expect(TestService("blue", "white")).toBe(true);
});
it('Test 2', () => {
    expect(TestService("blue", "red")).toBe(true);
  });