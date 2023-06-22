import { FONT_STYLE } from "../assets/fontStyle.js"
import { app } from "../index.js"

export class MoveMaker {
    constructor(setup, matrixSize, diamonds, app) {
        this.setup = setup
        this.matrixSize = matrixSize
        this.diamonds = diamonds
        this.readyForUserMove = false
        this.duration = 200
        this.start()

        // Create points message
        this.points = 0
        this.pointsMessage = new PIXI.Text(`Points: ${this.points}`, FONT_STYLE);
        this.updatePoints(0)
        app.stage.addChild(this.pointsMessage); 
    }

    start() {
        var t = this;
        const resultsLog = []
        let counter = 0
        const interval = setInterval(function () {
            let runAgain;
            const isEven = counter % 2 == 0
            if (isEven) {
                runAgain = t.removeMatchedPatternHorizontally()
            } else {
                runAgain = t.removeMatchedPatternVertically()
            }

            resultsLog.push(runAgain)
            const lastResult = resultsLog[resultsLog.length - 1]
            const secondToLastResulto = resultsLog[resultsLog.length - 2]
            const thereAreNoMoreChanges = !lastResult && !secondToLastResulto
            if (counter !== 0) {
                if (thereAreNoMoreChanges) {
                    this.readyForUserMove = true
                    clearInterval(interval);
                    return;
                }
            }
            counter++
        }, this.duration * 2);
    }

    removeMatchedPatternHorizontally() {
        for (let row = 0; row < this.matrixSize; row++) {
            for (let col = 2; col < this.matrixSize; col++) {
                const firstValue = this.setup[row][col].value
                const secondValue = this.setup[row][col - 1].value
                const thirdValue = this.setup[row][col - 2].value
                if (firstValue === secondValue && firstValue === thirdValue) {
                    let counter = col - 2
                    while (counter < this.matrixSize && firstValue === this.setup[row][counter].value) {
                        this.updatePoints(1)
                        this.rearrangeHorizontally(row, counter)
                        counter++;
                    }
                    col = counter - 1
                    return true;
                }
            }
        }
        return false;
    }

    rearrangeHorizontally(row, col) {
        while (row >= 0) {
            const targetY = this.setup[row][col].y;  // Calculate the target X position
            const isTheFirstRow = row === 0
            if (isTheFirstRow) {
                const color = this.getRandomColor();
                this.setup[row][col].texture = this.diamonds[color]
                this.setup[row][col].value = color
                this.setup[row][col].y = -40
            } else {
                this.setup[row][col].texture = this.setup[row - 1][col].texture
                this.setup[row][col].y = this.setup[row - 1][col].y
                this.setup[row][col].value = this.setup[row - 1][col].value
            }

            // Create the tween animation
            new TWEEN.Tween(this.setup[row][col])
                .to({ y: targetY }, this.duration)
                .easing(TWEEN.Easing.Linear.None) // You can choose a different easing function if desired
                .start();

            row--
        }
    }

    removeMatchedPatternVertically() {
        for (let col = 0; col < this.matrixSize; col++) {
            for (let row = 2; row < this.matrixSize; row++) {
                const firstValue = this.setup[row][col].value
                const secondValue = this.setup[row - 1][col].value
                const thirdValue = this.setup[row - 2][col].value

                if (firstValue === secondValue && firstValue === thirdValue) {
                    let counter = row - 2
                    let columnHeight = 0
                    while (counter < this.matrixSize && firstValue === this.setup[counter][col].value) {
                        counter++;
                        columnHeight++;
                    }
                    this.updatePoints(columnHeight)
                    this.rearrangeVertically(row, col, columnHeight)
                    row = counter - 1
                    return true;
                }
            }
        }
        return false;
    }

    rearrangeVertically(row, col, counter) {
        row = row + counter - 3
        while (row >= 0) {
            console.log(row, col);
            const targetY = this.setup[row][col].y;  // Calculate the target Y position
            if (row - counter < 0) {
                const color = this.getRandomColor();
                this.setup[row][col].texture = this.diamonds[color]
                this.setup[row][col].value = color
                this.setup[row][col].y = -40 * counter
            } else {
                this.setup[row][col].texture = this.setup[row - counter][col].texture
                this.setup[row][col].y = this.setup[row - counter][col].y
                this.setup[row][col].value = this.setup[row - counter][col].value
            }

            // Create the tween animation
            new TWEEN.Tween(this.setup[row][col])
                .to({ y: targetY }, this.duration)
                .easing(TWEEN.Easing.Linear.None) // You can choose a different easing function if desired
                .start();

            row--
        }
    }

    getRandomColor() {
        const keys = Object.keys(this.diamonds);
        const randomKey = keys[Math.floor(Math.random() * keys.length)]
        return randomKey
    }

    updatePoints(add) {
        this.points += add

        this.pointsMessage.text = `Points: ${this.points}`
    }
}