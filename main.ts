input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.setLedColor(0x00ff00)
})
input.onGesture(Gesture.SixG, function () {
    basic.showString("RIP")
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.setLedColor(0xff0000)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    basic.showLeds(`
        # # . # #
        # # # # #
        . # # # .
        . # # # .
        . # # # .
        `)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . # . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    . # . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    . # # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . # . . .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
	
})
