let awake: boolean = false
let screenFoos = [screen1, screen2, screen3, screen4, screen5]
let gestures = [Gesture.Shake, Gesture.LogoDown, Gesture.LogoUp,
Gesture.TiltRight, Gesture.TiltLeft]

let gest: Gesture = Gesture.Shake

input.onGesture(Gesture.LogoUp, function () {
    gest = Gesture.LogoUp
    start = input.runningTime()
})
input.onGesture(Gesture.LogoDown, function () {
    gest = Gesture.LogoDown
    start = input.runningTime()
})
input.onGesture(Gesture.Shake, function () {
    gest = Gesture.Shake
    start = input.runningTime()
})
input.onGesture(Gesture.TiltLeft, function () {
    gest = Gesture.TiltLeft
    start = input.runningTime()
})
input.onGesture(Gesture.TiltRight, function () {
    gest = Gesture.TiltRight
    start = input.runningTime()
})

function screen1() {
    let x: number = 4
    let y: number = 0
    let a: number = 0
    let b: number = 0
    for (let z = 0; z < 4; z++) {
        for (a = a; a < 5; a++) {
            led.plot(b, y)
            led.plot(b, x)
            x--
            y++
            b++
        }
        for (a = a; a > 4 && a < 9; a++) {
            led.plot(b, y)
            led.plot(b, x)
            x++
            y--
            b++
        }
        a = 1 + z + 1
        x = 4 - z - 1
        y = 0 + z + 1
        b = 0
        basic.pause(1000)
        basic.clearScreen()
        pins.analogWritePin(AnalogPin.P0, 1023)
        pins.analogWritePin(AnalogPin.P2, 1023)
        pins.analogWritePin(AnalogPin.P16, 1023)
    }

}
function screen2() {
    let y: number = 2
    let z: number = 4
    let a: number = 0
    for (let b = 0; b < 5; b++) {
        for (let x = 0; x < 5; x++) {
            led.plot(x, a)
            led.plot(x, y)
            led.plot(x, z)

            if (y < 4) {
                y++
            } else y = -1
            if (z < 5) {
                z++
            } else z = 0
            if (a < 5) {
                a++
            } else a = 0
        }
        basic.pause(1000)
        basic.clearScreen()
    }
}

function screen3() {
    let y: number = 4
    let z: number = 2
    let a: number = 0
    let x: number = 1
    for (let b = 0; b < 4; b++) {

        for (x = 0; x < 5; x++) {
            led.plot(a, x)
            led.plot(y, x)
            led.plot(x, z)
            y++
            z++
            a++
            if (y > 4) {
                y = 0
            }
            if (z > 4) {
                z = 0
            }
            if (a > 4) {
                a = 0
            }

        }
        if (a + 1 < 4) {
            a = a + 1
        } else a = 0
        if (y + 1 < 4) {
            y = y + 1
        } else y = 0
        if (z + 1 < 4) {
            z = z + 1
        } else z = 0
        x = 0
        basic.pause(1000)
        basic.clearScreen()

    }
}

function screen4() {
    let y: boolean = true
    let a: number = 0
    for (let z = 0; z < 5; z++) {
        if (y) {
            led.plot(a, 0)
            led.plot(a, 4)
            a++
            y = false
        } else {
            led.plot(a, 1)
            led.plot(a, 3)
            a++
            y = true
        }
        basic.pause(1000)
        basic.clearScreen()
    }
    basic.pause(1000)
    basic.clearScreen()
}
function screen5() {
    let y: boolean = true
    let a: number = 0
    for (let z = 0; z < 5; z++) {
        if (y) {
            led.plot(a, 0)
            led.plot(a, 4)
            a++
            y = false
        } else {
            led.plot(a, 1)
            led.plot(a, 3)
            a++
            y = true
        }
        basic.pause(1000)
    }

    basic.clearScreen()
}

let start: number = input.runningTime()
const screenOff: number = 10000

input.onButtonPressed(Button.B, function () {
    awake = true
})

input.onButtonPressed(Button.A, function () {
    awake = false
})


basic.forever(function () {
    if (awake) {
        basic.showString("Hello!")

    } else {
        if ((input.runningTime() - start) < screenOff) {
            screenFoos[gestures.indexOf(gest)]()
        }
    }

})
