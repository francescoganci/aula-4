random = 0

def on_gesture_shake():
    global random
    random = randint(0, 2)
    if random == 0:
        basic.show_leds("""
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            """)
    else:
        pass
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_forever():
    pass
basic.forever(on_forever)
