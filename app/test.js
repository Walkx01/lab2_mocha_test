const calculator = require('./calculator');
const assert = require('assert');

describe('Calculator Tests', () => {
it('Addition test', () => {
assert.equal(calculator.add(5, 2), 7);
});

it('Addition test (fail)', () => {
assert.notEqual(calculator.add(5, 2), 8);
});

it('Subtraction test', () => {
assert.equal(calculator.sub(5, 2), 3);
});

it('Subtraction test (fail)', () => {
assert.notEqual(calculator.sub(5, 2), 5);
});

it('Multiplication test', () => {
assert.equal(calculator.mul(5, 2), 10);
});

it('Multiplication test (fail)', () => {
assert.notEqual(calculator.mul(5, 2), 12);
});

it('Division test', () => {
assert.equal(calculator.div(10, 2), 5);
});

it('Division test (fail)', () => {
assert.notEqual(calculator.div(10, 2), 2);
});
});



