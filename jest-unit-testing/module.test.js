// module.test.js
import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing div func -- success', () => {
    const expected = 9;
    const got = mut.div(45, 5);
    expect(got).toBe(expected);
})

test('Testing div zero -- success', () => {
    const expected = Infinity;
    const got = mut.div(1, 0);
    expect(got).toBe(expected);
})

test('Testing containNumbers func -- success', () => {
    const st = "has321";
    const got = mut.containsNumbers(st);
    expect(got).toBe(true);
})

test('Testing containNumbers func -- success', () => {
    const st = "none";
    const got = mut.containsNumbers(st);
    expect(got).toBe(false);
})

test('Testing containsNumbers -- empty string', () => {
    const st = "";
    const got = mut.containsNumbers(st);
    expect(got).toBe(false);
});

test('Testing containsNumbers -- space string', () => {
    const st = " ";
    const got = mut.containsNumbers(st);
    expect(got).toBe(false);
});