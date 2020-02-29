radio.setGroup(69);
let pause_play = true;
input.onPinPressed(TouchPin.P0 && TouchPin.P1, function () {
    if (pause_play) {
        testingKeys();
    }
})