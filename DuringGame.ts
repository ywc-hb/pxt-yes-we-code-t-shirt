function testingKeys () {
    pause_play = false;
    let i = 0;
    while (!pause_play) {
        basic.showNumber(1);
        let pin0: number = analog2digital(pins.analogReadPin(AnalogPin.P0));
        let pin1: number = analog2digital(pins.analogReadPin(AnalogPin.P1));
        let pin2: number = analog2digital(pins.analogReadPin(AnalogPin.P2));
        let pin3: number = analog2digital(pins.analogReadPin(AnalogPin.P3));
        let pin4: number = analog2digital(pins.analogReadPin(AnalogPin.P4));
        let pin10: number = analog2digital(pins.analogReadPin(AnalogPin.P10));

        // Voir la correspondance des pins sur le github
        if (!(pin1 && pin2)) {
            if (pin3 && pin4) {
                radio.sendString("R_move_W");
            }
            else if (pin3 && pin1) {
                radio.sendString("R_move_E");
            }
            else if (pin3 && pin10) {
                radio.sendString("R_move_N");
            }
            else if (pin3 && pin2) {
                radio.sendString("R_move_S");
            }
            else if (pin0 && pin1) {
                radio.sendString("R_move_NE");
            }
            else if (pin0 && pin10) {
                radio.sendString("R_move_NW");
            }
            else if (pin4 && pin2) {
                radio.sendString("R_move_SE");
            }
            else if (pin4 && pin10) {
                radio.sendString("R_move_SW");
            }
        }

        if (pin1 && pin2) {
            if (pin3 && pin4) {
                radio.sendString("R_shoot_W");
            }
            else if (pin3 && pin1) {
                radio.sendString("R_shoot_E");
            }
            else if (pin3 && pin10) {
                radio.sendString("R_shoot_N");
            }
            else if (pin3 && pin2) {
                radio.sendString("R_shoot_S");
            }
            else if (pin0 && pin1) {
                radio.sendString("R_shoot_NE");
            }
            else if (pin0 && pin10) {
                radio.sendString("R_shoot_NW");
            }
            else if (pin4 && pin2) {
                radio.sendString("R_shoot_SE");
            }
            else if (pin4 && pin10) {
                radio.sendString("R_shoot_SW");
            }
        }

        if (pin1 && pin10) {
            radio.sendString("R_charg");
        }

        if (pin1/* && pin2*/) {
            radio.sendString("R_pause");
            pause_play = true;
            basic.showNumber(2)
        }

        basic.pause(100);
    }
}
 