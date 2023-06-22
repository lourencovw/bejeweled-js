export class MoveChecker {
    constructor(row, column, setup, matrixSize) {
        this.row = row
        this.column = column
        this.setup = setup
        this.color = setup[row][column]
        this.matrixSize = matrixSize

        // Firsts positions
        this.upIsWithinRange = (row - 1) >= 0
        this.rightIsWithinRange = (column + 1) < matrixSize
        this.downIsWithinRange = (row + 1) < matrixSize
        this.leftIsWithinRange = (column - 1) >= 0

        // Up
        this.secondUpIsWithinRange = (row - 2) >= 0
        this.thirdUpIsWithinRange = (row - 3) >= 0

        // Right
        this.secondRightIsWithinRange = (column + 2) < matrixSize
        this.thirdRightIsWithinRange = (column + 3) < matrixSize

        // Down
        this.secondDownIsWithinRange = (row + 2) < matrixSize
        this.thirdDownIsWithinRange = (row + 3) < matrixSize

        // Left
        this.secondLeftIsWithinRange = (column - 2) < matrixSize
        this.thirdLeftIsWithinRange = (column - 3) < matrixSize
    }

    left() {
        const currentPosition = this.color

        // 🟦 🟦 🟥 🟦
        if (this.thirdLeftIsWithinRange) {
            const twoColumnsLeft = this.setup[this.row][this.column - 2]
            const threeColumnsLeft = this.setup[this.row][this.column - 3]
            if (currentPosition === twoColumnsLeft && currentPosition === threeColumnsLeft) {
                return true
            }
        }

        // 🟥 🟦
        // 🟦  
        // 🟦
        if (this.leftIsWithinRange && this.secondDownIsWithinRange) {
            const downLeft = this.setup[this.row + 1][this.column - 1]
            const twoRowsDownOneColumnLeft = this.setup[this.row + 2][this.column - 1]
            if (currentPosition === downLeft && currentPosition === twoRowsDownOneColumnLeft) {
                return true
            }

        }

        // 🟦
        // 🟥 🟦
        // 🟦
        if (this.upIsWithinRange && this.leftIsWithinRange && this.downIsWithinRange) {
            const downLeft = this.setup[this.row + 1][this.column - 1]
            const upLeft = this.setup[this.row - 1][this.column - 1]

            if (currentPosition === downLeft && currentPosition === upLeft) {
                return true
            }
        }

        // 🟦
        // 🟦
        // 🟥 🟦
        if (this.secondUpIsWithinRange && this.leftIsWithinRange) {
            const twoRowsUpOneColumnLeft = this.setup[this.row - 2][this.column - 1]
            const oneRowUpOneColumnLeft = this.setup[this.row - 1][this.column - 1]
            if (currentPosition === twoRowsUpOneColumnLeft && currentPosition === oneRowUpOneColumnLeft) {
                return true
            }
        }

        return false
    }

    right() {
        const currentPosition = this.color

        // 🟦 🟥 🟦 🟦
        if (this.thirdRightIsWithinRange) {
            const twoPositionsAhead = this.setup[this.row][this.column + 2]
            const threePositionsAhead = this.setup[this.row][this.column + 3]
            if (currentPosition === twoPositionsAhead && currentPosition === threePositionsAhead) {
                return true
            }
        }

        //    🟦
        //    🟦
        // 🟦 🟥
        if (this.secondUpIsWithinRange && this.rightIsWithinRange) {
            const oneRowUpOneColumnRight = this.setup[this.row - 1][this.column + 1]
            const twoRowsUpOneColumnRight = this.setup[this.row - 2][this.column + 1]
            if (currentPosition === oneRowUpOneColumnRight && currentPosition === twoRowsUpOneColumnRight) {
                return true
            }

        }

        //    🟦
        // 🟦 🟥
        //    🟦
        if (this.rightIsWithinRange && this.upIsWithinRange && this.downIsWithinRange) {
            const oneRowUpOneColumnRight = this.setup[this.row - 1][this.column + 1]
            const oneRowDownOneColumnRight = this.setup[this.row + 1][this.column + 1]

            if (currentPosition === oneRowUpOneColumnRight && currentPosition === oneRowDownOneColumnRight) {
                return true
            }
        }

        // 🟦 🟥
        //    🟦
        //    🟦
        if (this.secondDownIsWithinRange && this.rightIsWithinRange) {
            const oneRowDownOneColumnRight = this.setup[this.row + 1][this.column + 1]
            const twoRowsDownOneColumnRight = this.setup[this.row + 2][this.column + 1]
            if (currentPosition === twoRowsDownOneColumnRight && currentPosition === oneRowDownOneColumnRight) {
                return true
            }
        }

        return false
    }

    up() {
        const currentPosition = this.color
        // 🟦
        // 🟦
        // 🟥
        // 🟦 
        if (this.thirdUpIsWithinRange) {
            const twoRowsUp = this.setup[this.row - 2][this.column]
            const threeRowsUp = this.setup[this.row - 3][this.column]
            if (currentPosition === twoRowsUp && currentPosition === threeRowsUp) {
                return true
            }
        }

        // 🟦 🟥 🟦
        //    🟦
        if (this.leftIsWithinRange && this.upIsWithinRange && this.rightIsWithinRange) {
            const upLeft = this.setup[this.row - 1][this.column - 1]
            const upRight = this.setup[this.row - 1][this.column + 1]

            if (currentPosition === upLeft && currentPosition === upRight) {
                return true
            }

        }

        // 🟥 🟦 🟦
        // 🟦
        if (this.upIsWithinRange && this.secondRightIsWithinRange) {
            const upRight = this.setup[this.row - 1][this.column + 1]
            const oneRowUpTwoColumnsRight = this.setup[this.row - 1][this.column + 2]

            if (currentPosition === upRight && currentPosition === oneRowUpTwoColumnsRight) {
                return true
            }
        }

        // 🟦 🟦 🟥
        //        🟦
        if (this.secondLeftIsWithinRange && this.upIsWithinRange) {
            const upLeft = this.setup[this.row - 1][this.column - 1]
            const oneRowUpTwoColumnsLeft = this.setup[this.row - 1][this.column - 2]
            if (currentPosition === upLeft && currentPosition === oneRowUpTwoColumnsLeft) {
                return true
            }
        }

        return false
    }

    down() {
        const currentPosition = this.color


        // 🟦
        // 🟥 🟦 🟦
        if (this.secondRightIsWithinRange && this.downIsWithinRange) {
            const oneRowDownOneColumnRight = this.setup[this.row + 1][this.column + 1]
            const oneRowDownTwoColumnsRight = this.setup[this.row + 1][this.column + 2]
            if (currentPosition === oneRowDownOneColumnRight && currentPosition === oneRowDownTwoColumnsRight) {
                return true
            }
        }

        //      🟦
        // 🟦   🟥  🟦
        if (this.leftIsWithinRange && this.rightIsWithinRange && this.downIsWithinRange) {
            const oneRowDownOneColumnLeft = this.setup[this.row + 1][this.column - 1]
            const oneRowDownOneColumnRight = this.setup[this.row + 1][this.column + 1]
            if (currentPosition === oneRowDownOneColumnLeft && currentPosition === oneRowDownOneColumnRight) {
                return true
            }

        }

        //          🟦
        // 🟦  🟦  🟥
        if (this.downIsWithinRange && this.thirdLeftIsWithinRange) {
            const oneRowDownTwoColumnsLeft = this.setup[this.row + 1][this.column - 2]
            const oneRowDownOneColumnLeft = this.setup[this.row + 1][this.column - 1]
            if (currentPosition === oneRowDownTwoColumnsLeft && currentPosition === oneRowDownOneColumnLeft) {
                return true
            }

        }

        // 🟦
        // 🟥
        // 🟦
        // 🟦
        if (this.thirdDownIsWithinRange) {
            const threeRowsDown = this.setup[this.row + 3][this.column]
            const twoRowsDown = this.setup[this.row + 2][this.column]
            if (currentPosition === twoRowsDown && currentPosition === threeRowsDown) {
                return true
            }

        }

        return false
    }
}