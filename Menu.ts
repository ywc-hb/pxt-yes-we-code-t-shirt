function menuChoice () {
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
} 