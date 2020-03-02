class ReviveCode {
    protected code: (ArrowNames | string)[];
    protected icons: (ArrowNames | string)[];
    protected difficulty: number;

    constructor () {
        this.difficulty = 1;
        this.icons = [ArrowNames.North, ArrowNames.South, ArrowNames.East, ArrowNames.West, ArrowNames.SouthEast, ArrowNames.SouthWest, ArrowNames.NorthEast, ArrowNames.NorthWest, "T", "R"];
        this.code = this.createReviveCode();
    }
    
    protected sendingCode(): void {
        let dataSent: string = "R_code";
        
        for (let i = 0; i < this.code.length; i++) {
            dataSent += "_" + this.icons.indexOf(this.code[i]);
        }

        radio.sendString(dataSent);
    }
    
    protected createReviveCode(): (ArrowNames | string)[] {
        let createdCode: (ArrowNames | string)[];
        let numberOfSymbol = Math.randomRange(this.difficulty * 2, this.difficulty * 3);
        let temp: number = 0;
        let tempBefore: number = 0;
        
        for (let i = 0; i < numberOfSymbol; i++) {
            while (temp != tempBefore) {    
                temp = Math.randomRange(0, 10);
            }
            tempBefore = temp;
            createdCode.push(this.icons[temp]);
        }

        return (createdCode);
    }

    protected testingReviveCode(): boolean {
        let error = false;
        let touched: (ArrowNames | string)[];

        while (touched.length < this.code.length) {
            let pin0: boolean = analog2digital(pins.analogReadPin(AnalogPin.P0));
            let pin1: boolean = analog2digital(pins.analogReadPin(AnalogPin.P1));
            let pin2: boolean = analog2digital(pins.analogReadPin(AnalogPin.P2));
            let pin3: boolean = analog2digital(pins.analogReadPin(AnalogPin.P3));
            let pin4: boolean = analog2digital(pins.analogReadPin(AnalogPin.P4));
            let pin10: boolean = analog2digital(pins.analogReadPin(AnalogPin.P10));

            // Voir la correspondance des pins sur le github
            if (pin3 && pin4) {
                touched.push(ArrowNames.West);
            }
            if (pin3 && pin1) {
                touched.push(ArrowNames.East);
            }
            if (pin3 && pin10) {
                touched.push(ArrowNames.North);
            }
            if (pin3 && pin2) {
                touched.push(ArrowNames.South);
            }
            if (pin0 && pin10) {
                touched.push(ArrowNames.NorthWest);
            }
            if (pin10 && pin4) {
                touched.push(ArrowNames.SouthWest);
            }
            if (pin0 && pin1) {
                touched.push(ArrowNames.NorthEast);
            }
            if (pin2 && pin4) {
                touched.push(ArrowNames.SouthEast);
            }
            if (pin1 && pin2) {
                touched.push("T");
            }
            if (pin1 && pin10) {
                touched.push("R");
            }
            
            basic.pause(100);
        }

        for (let i = 0; i < this.code.length; i++) {
            if (touched[i] != this.code[i]) {
                error = true;
                break;
            }
        }

        if (error) {
            return true;
        }
        else {
            return false;
        }
    }
}