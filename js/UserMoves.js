import { MoveChecker } from "./MoveChecker.js";
import { stage } from "./index.js";

export class UserMoves {
    constructor(moveMaker) {
        this.moveMaker = moveMaker
        this.matrixSize = moveMaker.matrixSize
        this.addInteractivity();
    }


    addInteractivity() {
        for (let row = 0; row < this.matrixSize; row++) {
            for (let col = 0; col < this.matrixSize; col++) {
                const diamond = this.moveMaker.setup[row][col]
                diamond.on('pointerdown', () => this.pointerDown(row, col, diamond));
                diamond.on('pointerup', () => this.pointerUp(row, col, diamond));
            }
        }
    }

    pointerUp(row, column) {
        this.currentPointerUp = [row, column]
        if (!Array.isArray(this.currentPointerUp) || !Array.isArray(this.currentPointerDown)) {
            return
        }
        if (this.moveDiamonds()) {
            this.moveMaker.start(this.currentPointerDown)
        } else {
            this.shakeDiamonds()
        }
    }

    pointerDown(row, column) {
        this.currentPointerDown = [row, column]

    }

    moveDiamonds() {
        const up = this.currentPointerUp;
        const down = this.currentPointerDown;

        const isRowEqual = up[0] === down[0]
        const isColEqual = up[1] === down[1]
        const isSamePosition = isRowEqual && isColEqual

        if (isSamePosition) {
            return false
        }

        if (isRowEqual) {
            const isRight = up[1] - down[1] > 0
            const isLeft = up[1] - down[1] < 0
            const isNear = Math.abs(up[1] - down[1]) === 1
            if (isNear) {
                const setup = this.moveMaker.setup.map(row => row.map(item => item.value));
                const moveChecker = new MoveChecker(down[0], down[1], setup, this.matrixSize);

                if (isRight && moveChecker.right()) {
                    this.moveRight()
                    return true;
                }

                if (isLeft && moveChecker.left()) {
                    this.moveLeft()
                    return true;
                }
            }
        }


        if (isColEqual) {
            const isUp = up[0] - down[0] < 0
            const isDown = up[0] - down[0] > 0
            const isNear = Math.abs(up[0] - down[0]) === 1
            if (isNear) {
                const setup = this.moveMaker.setup.map(row => row.map(item => item.value));
                const moveChecker = new MoveChecker(down[0], down[1], setup, this.matrixSize);
                if (isUp && moveChecker.up()) {
                    this.moveUp()
                    return true;
                }

                if (isDown && moveChecker.down()) {
                    this.moveDown()
                    return true;
                }
            }
        }
        return false

    }

    moveUp() {
        const row = this.currentPointerDown[0]
        const col = this.currentPointerDown[1]
        const initColor = this.moveMaker.setup[row][col].value
        const finalColor = this.moveMaker.setup[row - 1][col].value

        this.moveMaker.setup[row][col].texture = this.moveMaker.diamonds[finalColor]
        this.moveMaker.setup[row - 1][col].texture = this.moveMaker.diamonds[initColor]

        this.moveMaker.setup[row][col].value = finalColor
        this.moveMaker.setup[row - 1][col].value = initColor

    }

    moveDown() {
        const row = this.currentPointerDown[0]
        const col = this.currentPointerDown[1]
        const initColor = this.moveMaker.setup[row][col].value
        const finalColor = this.moveMaker.setup[row + 1][col].value

        this.moveMaker.setup[row][col].texture = this.moveMaker.diamonds[finalColor]
        this.moveMaker.setup[row + 1][col].texture = this.moveMaker.diamonds[initColor]

        this.moveMaker.setup[row][col].value = finalColor
        this.moveMaker.setup[row + 1][col].value = initColor

    }

    moveRight() {
        const row = this.currentPointerDown[0]
        const col = this.currentPointerDown[1]
        const initColor = this.moveMaker.setup[row][col].value
        const finalColor = this.moveMaker.setup[row][col + 1].value

        this.moveMaker.setup[row][col].texture = this.moveMaker.diamonds[finalColor]
        this.moveMaker.setup[row][col + 1].texture = this.moveMaker.diamonds[initColor]

        this.moveMaker.setup[row][col].value = finalColor
        this.moveMaker.setup[row][col + 1].value = initColor

    }

    moveLeft() {
        const row = this.currentPointerDown[0]
        const col = this.currentPointerDown[1]
        const initColor = this.moveMaker.setup[row][col].value
        const finalColor = this.moveMaker.setup[row][col - 1].value

        this.moveMaker.setup[row][col].texture = this.moveMaker.diamonds[finalColor]
        this.moveMaker.setup[row][col - 1].texture = this.moveMaker.diamonds[initColor]

        this.moveMaker.setup[row][col].value = finalColor
        this.moveMaker.setup[row][col - 1].value = initColor

    }

    shakeDiamonds() {
        for (let row = 0; row < this.matrixSize; row++) {
            for (let col = 0; col < this.matrixSize; col++) {
                const onComplete = () => this.moveMaker.setup[row][col].rotation = 0
                TweenMax
                .to(this.moveMaker.setup[row][col], 0.1, {rotation:"+=20", onComplete , yoyo:true, repeat:2})
            }
        }
    }


}