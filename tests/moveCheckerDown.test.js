import { MoveChecker } from "../js/MoveChecker.js";
import { assert } from 'chai';

describe('Down move', function () {
  it('should return true', function () {
    const setup = [
      ['abc', 'DOWN', 'abc'],
      ['DOWN', 'abc', 'abc'],
      ['abc', 'DOWN', 'abc'],
    ]
    const column = 1
    const row = 0
    const matrixSize = 3
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isTrue(moveChecker.down());

  });
  it('should return true', function () {
    const setup = [
      ['abc', 'DOWN', 'abc'],
      ['abc', 'abc', 'DOWN'],
      ['abc', 'DOWN', 'abc'],
    ]
    const column = 1
    const row = 0
    const matrixSize = 3
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isTrue(moveChecker.down());

  });
  it('should return false', function () {
    const setup = [
      ['abc', 'DOWN', 'abc'],
      ['abc', 'abc', 'abc'],
      ['abc', 'DOWN', 'abc'],
    ]
    const column = 1
    const row = 0
    const matrixSize = 3
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isFalse(moveChecker.down());

  });
  it('should return false', function () {
    const setup = [
      ['abc', 'DOWN', 'DOWN'],
      ['abc', 'abc', 'abc'],
      ['abc', 'DOWN', 'abc'],
    ]
    const column = 1
    const row = 0
    const matrixSize = 3
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isFalse(moveChecker.down());

  });


  it('should return true', function () {
    const setup = [
      ['abc', 'abc', 'DOWN', 'abc'],
      ['abc', 'abc', 'abc', 'abc'],
      ['abc', 'abc', 'DOWN', 'abc'],
      ['abc', 'abc', 'DOWN', 'abc'],
    ]
    const column = 2
    const row = 0
    const matrixSize = 4
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isTrue(moveChecker.down());

  });
  it('should return true', function () {
    const setup = [
      ['abc', 'DOWN', 'abc', 'abc'],
      ['abc', 'abc', 'abc', 'abc'],
      ['abc', 'DOWN', 'abc', 'abc'],
      ['abc', 'DOWN', 'abc', 'abc'],
    ]
    const column = 2
    const row = 0
    const matrixSize = 4
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isTrue(moveChecker.down());

  });
  it('should return false', function () {
    const setup = [
      ['abc', 'abc', 'DOWN', 'abc'],
      ['abc', 'abc', 'abc', 'abc'],
      ['abc', 'abc', 'abc', 'abc'],
      ['abc', 'abc', 'DOWN', 'abc'],
    ]
    const column = 2
    const row = 0
    const matrixSize = 4
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isFalse(moveChecker.down());

  });
  it('should return false', function () {
    const setup = [
      ['abc', 'abc', 'DOWN', 'abc'],
      ['abc', 'abc', 'abc', 'abc'],
      ['abc', 'abc', 'DOWN', 'abc'],
      ['abc', 'abc', 'abc', 'abc'],
    ]
    const column = 2
    const row = 0
    const matrixSize = 4
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isFalse(moveChecker.down());

  });
});