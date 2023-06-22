import { DIAMONDS } from "./assets/diamondsTexture.js";
import { FONT_STYLE, FONT_STYLE_TOTAL_POINTS } from "./assets/fontStyle.js";
import { MoveChecker } from "./js/MoveChecker.js";
import { MoveMaker } from "./js/MoveMaker.js";
import { UserMoves } from "./js/UserMoves.js";

export const app = new PIXI.Application({ width: 640, height: 640 });
document.body.appendChild(app.view);

app.ticker.add(() => { TWEEN.update() })

const MATRIX_N = 8
const ELEMENTS_NUMBER = 5
const GAME_EXPIRATION_TIME = 30
let moveMaker;

// START
start()



// FUNCTIONS
function start() {
    const skewText = new PIXI.Text('START', FONT_STYLE);
    skewText.x = 260;
    skewText.y = 280;
    skewText.cursor = 'pointer';
    skewText.interactive = true
    skewText.on('pointerdown', () => {
        app.stage.removeChildren()
        initialSetup()
        clock()
    });
    app.stage.addChild(skewText);    
}

function initialSetup() {
    let initialSetup = generateRandomMatrix();

    while (!isThereAtLeastOneMove(initialSetup)) {
        initialSetup = generateRandomMatrix()
    }

    const setup = mount(initialSetup);
    moveMaker = new MoveMaker(setup, MATRIX_N, DIAMONDS, app);

    new UserMoves(moveMaker)
}

function generateRandomMatrix() {
    const keys = Object.keys(DIAMONDS);
    const arr = []
    for (let i = 0; i < MATRIX_N; i++) {
        arr[i] = []
        for (let j = 0; j < MATRIX_N; j++) {
            arr[i][j] = keys[Math.floor(Math.random() * ELEMENTS_NUMBER)];
        }
    }
    return arr
}

function isThereAtLeastOneMove(setup) {

    for (let row = 0; row < MATRIX_N; row++) {
        for (let column = 0; column < MATRIX_N; column++) {
            const moveChecker = new MoveChecker(row, column, setup, MATRIX_N);

            if (moveChecker.up()) {
                return true;
            }

            if (moveChecker.right()) {
                return true;
            }

            if (moveChecker.down()) {
                return true;
            }

            if (moveChecker.left()) {
                return true;
            }

        }
    }
    return false
}

function mount(setup) {
    let arr = []
    for (let row = 0; row < MATRIX_N; row++) {
        arr.push([])
        for (let column = 0; column < MATRIX_N; column++) {
            const value = setup[row][column]
            const diamond = new PIXI.Sprite(DIAMONDS[value]);

            diamond.interactive = true;
            diamond.buttonMode = true;
            diamond.x = 168 + column * 40
            diamond.y = 168 + row * 40
            diamond.moveable = false
            diamond.value = value
            app.stage.addChild(diamond);
            arr[row][column] = diamond
        }
    }

    return arr
}

function clock() {
    const skewText = new PIXI.Text('00', FONT_STYLE);
    skewText.x = 300;
    skewText.y = 50;
    app.stage.addChild(skewText);
    let counter = 0
    setInterval(() => {
        counter++
        skewText.text = counter < 10 ? `0${counter}` : `${counter}`
        if (counter === GAME_EXPIRATION_TIME) {
            app.stage.removeChildren()
            displayRestart()
        }
    }, 1000)

}

function displayRestart(){    
    const restart = new PIXI.Text('RESTART', FONT_STYLE);
    const totalPoints = new PIXI.Text(`Total points: ${moveMaker.points}`, FONT_STYLE_TOTAL_POINTS);
    totalPoints.x = 235;
    totalPoints.y = 230;
    restart.x = 235;
    restart.y = 280;
    restart.cursor = 'pointer';
    restart.interactive = true
    restart.on('pointerdown', () => {
        app.stage.removeChildren()
        initialSetup()
        clock()
    });
    app.stage.addChild(restart);  
    app.stage.addChild(totalPoints);   

}
