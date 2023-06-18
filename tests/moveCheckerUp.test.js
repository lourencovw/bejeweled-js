import { MoveChecker } from "../js/MoveChecker.js";
import { assert } from 'chai';

describe('Up move', function () {
  it('should return true', function () {
    const setup = [
      ['abc', 'UP', 'abc'],
      ['UP', 'abc', 'abc'],
      ['abc', 'UP', 'abc'],
    ]
    const column = 1
    const row = 2
    const matrixSize = 3
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isTrue(moveChecker.up());

  });
  it('should return true', function () {
    const setup = [
      ['abc', 'UP', 'abc'],
      ['abc', 'abc', 'UP'],
      ['abc', 'UP', 'abc'],
    ]
    const column = 1
    const row = 2
    const matrixSize = 3
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isTrue(moveChecker.up());

  });
  it('should return false', function () {
    const setup = [
      ['abc', 'UP', 'abc'],
      ['abc', 'abc', 'abc'],
      ['abc', 'UP', 'abc'],
    ]
    const column = 1
    const row = 2
    const matrixSize = 3
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isFalse(moveChecker.up());

  });
  it('should return false', function () {
    const setup = [
      ['abc', 'UP', 'abc'],
      ['abc', 'abc', 'abc'],
      ['abc', 'UP', 'UP'],
    ]
    const column = 1
    const row = 2
    const matrixSize = 3
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isFalse(moveChecker.up());

  });


  it('should return true', function () {
    const setup = [
      ['abc', 'UP', 'abc', 'abc'],
      ['abc', 'UP', 'abc', 'abc'],
      ['abc', 'abc', 'abc', 'abc'],
      ['abc', 'UP', 'abc', 'abc'],
    ]
    const column = 1
    const row = 3
    const matrixSize = 4
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isTrue(moveChecker.up());

  });
  it('should return true', function () {
    const setup = [
      ['abc', 'abc', 'UP', 'abc'],
      ['abc', 'abc', 'UP', 'abc'],
      ['abc', 'abc', 'abc', 'abc'],
      ['abc', 'abc', 'UP', 'abc'],
    ]
    const column = 2
    const row = 3
    const matrixSize = 4
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isTrue(moveChecker.up());

  });
  it('should return false', function () {
    const setup = [
      ['abc', 'abc', 'UP', 'abc'],
      ['abc', 'abc', 'abc', 'abc'],
      ['abc', 'abc', 'abc', 'abc'],
      ['abc', 'abc', 'UP', 'abc'],
    ]
    const column = 2
    const row = 3
    const matrixSize = 4
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isFalse(moveChecker.up());

  });
  it('should return false', function () {
    const setup = [
      ['abc', 'abc', 'abc', 'abc'],
      ['abc', 'abc', 'UP', 'abc'],
      ['abc', 'abc', 'abc', 'abc'],
      ['abc', 'abc', 'UP', 'abc'],
    ]
    const column = 2
    const row = 3
    const matrixSize = 4
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isFalse(moveChecker.up());

  });
});