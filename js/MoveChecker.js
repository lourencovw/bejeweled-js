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
        
        if (this.thirdLeftIsWithinRange) {
            const twoPositionsBehind = this.setup[this.row][this.column - 2]
            const threePositionsBehind = this.setup[this.row][this.column - 3]
            if (currentPosition === twoPositionsBehind && currentPosition === threePositionsBehind) {
                return true
            }
        }

        if (this.upIsWithinRange && this.secondLeftIsWithinRange) {
            const upLeft = this.setup[this.row - 1][this.column - 1]
            const twoColumnsLeft = this.setup[this.row][this.column - 2]
            if (currentPosition === upLeft && currentPosition === twoColumnsLeft) {
                return true
            }

        }

        if (this.downIsWithinRange && this.secondLeftIsWithinRange) {
            const downLeft = this.setup[this.row + 1][this.column - 1]
            const twoColumnsLeft = this.setup[this.row][this.column - 2]

            if (currentPosition === downLeft && currentPosition === twoColumnsLeft) {
                return true
            }
        }

        return false

    }

    right() {
        const currentPosition = this.color
        
        if (this.thirdRightIsWithinRange) {
            const twoPositionsAhead = this.setup[this.row][this.column + 2]
            const threePositionsAhead = this.setup[this.row][this.column + 3]
            if (currentPosition === twoPositionsAhead && currentPosition === threePositionsAhead) {
                return true
            }
        }

        if (this.upIsWithinRange && this.secondRightIsWithinRange) {
            const upRight = this.setup[this.row - 1][this.column + 1]
            const twoColumnsRight = this.setup[this.row][this.column + 2]
            if (currentPosition === upRight && currentPosition === twoColumnsRight) {
                return true
            }

        }

        if (this.downIsWithinRange && this.secondRightIsWithinRange) {
            const downRight = this.setup[this.row + 1][this.column + 1]
            const twoColumnsRight = this.setup[this.row][this.column + 2]

            if (currentPosition === downRight && currentPosition === twoColumnsRight) {
                return true
            }
        }

        return false
    }

    up() {
        const currentPosition = this.color
        
        if (this.thirdUpIsWithinRange) {
            const twoPositionsUp = this.setup[this.row - 2][this.column]
            const threePositionsUp = this.setup[this.row - 3][this.column]
            if (currentPosition === twoPositionsUp && currentPosition === threePositionsUp) {
                return true
            }
        }

        if (this.leftIsWithinRange && this.secondUpIsWithinRange) {
            const upLeft = this.setup[this.row - 1][this.column - 1]
            const twoPositionsUp = this.setup[this.row - 2][this.column]
            if (currentPosition === upLeft && currentPosition === twoPositionsUp) {
                return true
            }

        }

        if (this.rightIsWithinRange && this.secondUpIsWithinRange) {
            const upRight = this.setup[this.row - 1][this.column + 1]
            const twoPositionsUp = this.setup[this.row - 2][this.column]

            if (currentPosition === upRight && currentPosition === twoPositionsUp) {
                return true
            }
        }


        return false

    }

    down() {
        const currentPosition = this.color
        
        if (this.thirdDownIsWithinRange) {
            const twoPositionsDown = this.setup[this.row + 2][this.column]
            const threePositionsDown = this.setup[this.row + 3][this.column]
            if (currentPosition === twoPositionsDown && currentPosition === threePositionsDown) {
                return true
            }
        }

        if (this.leftIsWithinRange && this.secondDownIsWithinRange) {
            const downLeft = this.setup[this.row + 1][this.column - 1]
            const twoPositionsDown = this.setup[this.row + 2][this.column]
            if (currentPosition === downLeft && currentPosition === twoPositionsDown) {
                return true
            }

        }

        if (this.rightIsWithinRange && this.secondDownIsWithinRange) {
            const downRight = this.setup[this.row + 1][this.column + 1]
            const twoPositionsDown = this.setup[this.row + 2][this.column]

            if (currentPosition === downRight && currentPosition === twoPositionsDown) {
                return true
            }
        }

        return false

    }
}