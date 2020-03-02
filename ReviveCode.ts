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

        while (!pause) {
            let touched: (ArrowNames | string)[];
            let pin0: boolean = analog2digital(pins.analogReadPin(AnalogPin.P0));
            let pin1: boolean = analog2digital(pins.analogReadPin(AnalogPin.P1));
            let pin2: boolean = analog2digital(pins.analogReadPin(AnalogPin.P2));
            let pin3: boolean = analog2digital(pins.analogReadPin(AnalogPin.P3));
            let pin4: boolean = analog2digital(pins.analogReadPin(AnalogPin.P4));
            let pin10: boolean = analog2digital(pins.analogReadPin(AnalogPin.P10));

            // Voir la correspondance des pins sur le github
            if (pin)
            basic.pause(100);
        }

        if (error) {
            return true;
        }
        else {
            return false;
        }
    }
}