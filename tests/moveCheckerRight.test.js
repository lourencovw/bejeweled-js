import { MoveChecker } from "../js/MoveChecker.js";
import { assert } from 'chai';

describe('Right move', function () {
  it('should return true', function () {
    // 🟦 🟥 🟦 🟦
    const setup = [
      ['abc', 'abc', 'abc', 'abc'],
      ['abc', 'abc', 'abc', 'abc'],
      ['RIGHT', 'abc', 'RIGHT', 'RIGHT'],
      ['abc', 'abc', 'abc', 'abc'],
    ]
    const column = 0
    const row = 2
    const matrixSize = 4
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isTrue(moveChecker.right());
  });
  it('should return true', function () {
    //    🟦
    //    🟦
    // 🟦 🟥
    const setup = [
      ['abc', 'abc', 'RIGHT'],
      ['abc', 'abc', 'RIGHT'],
      ['abc', 'RIGHT', 'abc'],
    ]
    const column = 1
    const row = 2
    const matrixSize = 3
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isTrue(moveChecker.right());
  });
  it('should return true', function () {
    //    🟦
    // 🟦 🟥
    //    🟦
    const setup = [
      ['abc', 'RIGHT', 'abc'],
      ['RIGHT', 'abc', 'abc'],
      ['abc', 'RIGHT', 'abc'],
    ]
    const column = 0
    const row = 1
    const matrixSize = 3
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isTrue(moveChecker.right());

  });
  it('should return true', function () {
    // 🟦 🟥
    //    🟦
    //    🟦
    const setup = [
      ['abc', 'RIGHT', 'abc'],
      ['abc', 'abc', 'RIGHT'],
      ['abc', 'abc', 'RIGHT'],
    ]
    const column = 1
    const row = 0
    const matrixSize = 3
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isTrue(moveChecker.right());

  });
  it('should return false', function () {
    const setup = [
      ['abc', 'abc', 'RIGHT'],
      ['RIGHT', 'abc', 'RIGHT'],
      ['abc', 'abc', 'abc'],
    ]
    const column = 0
    const row = 1
    const matrixSize = 3
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isFalse(moveChecker.right());

  });
  it('should return false', function () {
    const setup = [
      ['abc', 'abc', 'abc', 'abc'],
      ['RIGHT', 'abc', 'abc', 'RIGHT'],
      ['abc', 'abc', 'abc', 'abc'],
      ['abc', 'abc', 'abc', 'abc'],
    ]
    const column = 0
    const row = 1
    const matrixSize = 4
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isFalse(moveChecker.right());

  });
  it('should return false', function () {
    const setup = [
      ['abc', 'abc', 'abc', 'abc'],
      ['abc', 'abc', 'abc', 'abc'],
      ['RIGHT', 'abc', 'RIGHT', 'abc'],
      ['abc', 'abc', 'abc', 'abc'],
    ]
    const column = 0
    const row = 2
    const matrixSize = 4
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isFalse(moveChecker.right());

  });
  it('should return false', function () {
    const setup = [
      ['abc', 'abc', 'abc', 'abc'],
      ['abc', 'RIGHT', 'abc', 'abc'],
      ['RIGHT', 'abc', 'abc', 'RIGHT'],
      ['abc', 'abc', 'abc', 'abc'],
    ]
    const column = 0
    const row = 2
    const matrixSize = 4
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isFalse(moveChecker.right());

  });
  it('should return false', function () {
    const setup = [
      ['abc', 'abc', 'abc', 'abc'],
      ['abc', 'RIGHT', 'abc', 'RIGHT'],
      ['abc', 'abc', 'RIGHT', 'abc'],
      ['abc', 'abc', 'abc', 'abc'],
    ]
    const column = 1
    const row = 1
    const matrixSize = 4
    const moveChecker = new MoveChecker(row, column, setup, matrixSize);
    assert.isFalse(moveChecker.right());

  });
});