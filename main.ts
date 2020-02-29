radio.setGroup(69);

function analog2digital (pin: number): boolean {
    let limit: number = 600;
    if (pin > limit) {
        return (true);
    }
    else {
        return (false);
    }
}


while (true) {
    let pin0: boolean = analog2digital(pins.analogReadPin(AnalogPin.P0));
    let pin1: boolean = analog2digital(pins.analogReadPin(AnalogPin.P1));
    let pin2: boolean = analog2digital(pins.analogReadPin(AnalogPin.P2));
    let pin3: boolean = analog2digital(pins.analogReadPin(AnalogPin.P3));
    let pin4: boolean = analog2digital(pins.analogReadPin(AnalogPin.P4));
    let pin10: boolean = analog2digital(pins.analogReadPin(AnalogPin.P10));

    
}