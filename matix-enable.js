led.enable(true)
pins.analogWritePin(AnalogPin.P2, 0)
pins.analogWritePin(AnalogPin.P16, 0)
pins.analogWritePin(AnalogPin.P0, 0)
basic.forever(function () {
    for (let index = 0; index <= 3071; index++) {
        if (index < 2046) {
            if (index <= 1023) {
                pins.analogWritePin(AnalogPin.P2, index)
            } else {
                pins.analogWritePin(AnalogPin.P2, 1023 - (index - 1023))
            }
        } else {
            pins.analogWritePin(AnalogPin.P2, 0)
        }
        if (index > 1023) {
            if (index <= 2046) {
                pins.analogWritePin(AnalogPin.P16, index - 1023)
            } else {
                pins.analogWritePin(AnalogPin.P16, 1023 - (index - 2047))
            }
        } else {
            pins.analogWritePin(AnalogPin.P16, 0)
        }
        if (index < 1023) {
            pins.analogWritePin(AnalogPin.P0, 1022 - index)
        } else if (index > 2048) {
            pins.analogWritePin(AnalogPin.P0, index - 2048)
        } else {
            pins.analogWritePin(AnalogPin.P0, 0)
        }
        control.waitMicros(1000)

    }
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
    }
})
