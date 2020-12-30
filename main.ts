let Dado = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    if (Dado >= 1 && Dado <= 6) {
        basic.showNumber(Dado)
    } else if (Dado == 7) {
        basic.showNumber(2)
        basic.showString("Play again")
    } else if (Dado == 8) {
        basic.showNumber(-4)
    }
})
input.onGesture(Gesture.Shake, function () {
    Dado += 0
    Dado = randint(1, 8)
    basic.showNumber(Dado)
})
