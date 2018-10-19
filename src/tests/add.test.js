const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello, ${name}!`;

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('generateGreeting(\"Joe\") should return \"Hello, Joe!\"', () => {
  expect(generateGreeting('Joe')).toBe('Hello, Joe!');
});
