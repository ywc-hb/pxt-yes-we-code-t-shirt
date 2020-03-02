//  /!\ Code pour le t-shirt controlant le personnage de droite /!\

radio.setGroup(69);
let pause_play = false;
let menu = true;

input.onPinPressed(TouchPin.P0 && TouchPin.P1, function () {
    if (pause_play) {
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
    else if (receivedString.substr(0, 6) == "R_dead") {
        pause_play = true;
    }
})