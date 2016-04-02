import assert from 'assert';
import solution from './solution';

assert.equal(18, solution(0.195, 0.5, 0.5));
assert.equal(24, solution(0.195, 0.75, 0.5));
assert.equal(2346, solution(1.105, 7.5, 10));
