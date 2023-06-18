import { MoveChecker } from "../js/MoveChecker.js";
import { assert } from 'chai';

describe('Left move', function () {
  it('should return true', function () {
    const setup = [
      ['abc', 'LEFT', 'abc'],
      ['LEFT', 'abc', 'LEFT'],
      ['abc', 'abc', 'abc'],
    ]
    const column = 2
    const row = 1
    const matrixSize = 3
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isTrue(moveChecker.left());

  });
  it('should return true', function () {
    const setup = [
      ['abc', 'abc', 'abc'],
      ['LEFT', 'abc', 'LEFT'],
      ['abc', 'LEFT', 'abc'],
    ]
    const column = 2
    const row = 1
    const matrixSize = 3
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isTrue(moveChecker.left());

  });
  it('should return false', function () {
    const setup = [
      ['abc', 'abc', 'abc'],
      ['LEFT', 'abc', 'LEFT'],
      ['abc', 'abc', 'abc'],
    ]
    const column = 2
    const row = 1
    const matrixSize = 3
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isFalse(moveChecker.left());

  });
  it('should return false', function () {
    const setup = [
      ['abc', 'abc', 'LEFT'],
      ['LEFT', 'abc', 'LEFT'],
      ['abc', 'abc', 'abc'],
    ]
    const column = 2
    const row = 1
    const matrixSize = 3
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isFalse(moveChecker.left());

  });


  it('should return true', function () {
    const setup = [
      ['abc', 'abc', 'abc', 'abc'],
      ['LEFT', 'LEFT', 'ABC', 'LEFT'],
      ['abc', 'abc', 'abc', 'abc'],
      ['abc', 'abc', 'abc', 'abc'],
    ]
    const column = 3
    const row = 1
    const matrixSize = 4
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isTrue(moveChecker.left());

  });
  it('should return true', function () {
    const setup = [
      ['abc', 'abc', 'abc', 'abc'],
      ['abc', 'abc', 'abc', 'abc'],
      ['LEFT', 'LEFT', 'abc', 'LEFT'],
      ['abc', 'abc', 'abc', 'abc'],
    ]
    const column = 3
    const row = 2
    const matrixSize = 4
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isTrue(moveChecker.left());

  });
  it('should return false', function () {
    const setup = [
      ['abc', 'abc', 'abc', 'abc'],
      ['abc', 'abc', 'abc', 'abc'],
      ['LEFT', 'abc', 'abc', 'LEFT'],
      ['abc', 'abc', 'abc', 'abc'],
    ]
    const column = 3
    const row = 2
    const matrixSize = 4
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isFalse(moveChecker.left());

  });
  it('should return false', function () {
    const setup = [
      ['abc', 'abc', 'abc', 'abc'],
      ['abc', 'abc', 'abc', 'abc'],
      ['abc', 'LEFT', 'abc', 'LEFT'],
      ['abc', 'abc', 'abc', 'abc'],
    ]
    const column = 3
    const row = 2
    const matrixSize = 4
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isFalse(moveChecker.left());

  });
});