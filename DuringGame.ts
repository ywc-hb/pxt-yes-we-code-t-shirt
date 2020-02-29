function testingKeys () {
    let side = "R";
    let pause = true;
    while (!pause) {
        let pin0: boolean = analog2digital(pins.analogReadPin(AnalogPin.P0));
        let pin1: boolean = analog2digital(pins.analogReadPin(AnalogPin.P1));
        let pin2: boolean = analog2digital(pins.analogReadPin(AnalogPin.P2));
        let pin3: boolean = analog2digital(pins.analogReadPin(AnalogPin.P3));
        let pin4: boolean = analog2digital(pins.analogReadPin(AnalogPin.P4));
        let pin10: boolean = analog2digital(pins.analogReadPin(AnalogPin.P10));

        // Voir la correspondance des pins sur le github
        if (!(pin1 && pin2)) {
            if (pin3 && pin4) {
                radio.sendString(side + "_move_W");
            }
            else if (pin3 && pin1) {
                radio.sendString(side + "_move_E");
            }
            else if (pin3 && pin10) {
                radio.sendString(side + "_move_N");
            }
            else if (pin3 && pin2) {
                radio.sendString(side + "_move_S");
            }
            else if (pin0 && pin1) {
                radio.sendString(side + "_move_NE");
            }
            else if (pin0 && pin10) {
                radio.sendString(side + "_move_NW");
            }
            else if (pin0 && pin2) {
                radio.sendString(side + "_move_SE");
            }
            else if (pin4 && pin10) {
                radio.sendString(side + "_move_SW");
            }
        }

        else if (pin1 && pin2) {
            if (pin3 && pin4) {
                radio.sendString(side + "_shoot_W");
            }
            else if (pin3 && pin1) {
                radio.sendString(side + "_shoot_E");
            }
            else if (pin3 && pin10) {
                radio.sendString(side + "_shoot_N");
            }
            else if (pin3 && pin2) {
                radio.sendString(side + "_shoot_S");
            }
            else if (pin0 && pin1) {
                radio.sendString(side + "_shoot_NE");
            }
            else if (pin0 && pin10) {
                radio.sendString(side + "_shoot_NW");
            }
            else if (pin0 && pin2) {
                radio.sendString(side + "_shoot_SE");
            }
            else if (pin4 && pin10) {
                radio.sendString(side + "_shoot_SW");
            }
        }

        else if (pin1 && pin10) {
            radio.sendString(side + "_charg");
        }

        else if (pin4 && pin2) {
            radio.sendString(side + "_pause");
            pause = false;
        }

        basic.pause(100);
    }
}
 