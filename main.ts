radio.setGroup(69);
let pause_play = false;
let menu = true;

while (menu) {
    let pin3 = analog2digital(pins.analogReadPin(AnalogPin.P3));
    let pin10 = analog2digital(pins.analogReadPin(AnalogPin.P10));
    let pin1 = analog2digital(pins.analogReadPin(AnalogPin.P1))
    let pin2 = analog2digital(pins.analogReadPin(AnalogPin.P2));
    let side = 'R';

    if (pin3 && pin10) {
        radio.sendString(side + "_array_N");
    }
    else if (pin3 && pin2) {
        radio.sendString(side + "_array_S");
    }
    else if (pin1 && pin2) {
        radio.sendString(side + "_choix");
    }
}






input.onPinPressed(TouchPin.P0 && TouchPin.P1, function () {
    if (pause) {
        radio.sendString("R_play_");
        basic.pause(3200);
        testingKeys();
    }
})

radio.onReceivedString(function (receivedString: string) {
    if (receivedString.substr(2, 6) == "pause") {
        pause_play = true;
    }
    else if (receivedString.substr(2, 6) == "play_") {
        pause_play = false;
    }
    else if (receivedString == "start_game") {
        menu = false;
        testingKeys();
    }
})