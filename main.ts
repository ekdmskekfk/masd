input.onGesture(Gesture.ScreenDown, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . .
        . . # # #
        . . # . #
        . . # # #
        . . . . .
        `)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showString("failing the game")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . . .
        # # # . .
        # . # . .
        # # # . .
        . . . . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        . . . . .
        `)
})
basic.showIcon(IconNames.SmallSquare)
