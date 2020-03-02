//  /!\ Code pour le t-shirt controlant le personnage de droite /!\
radio.setGroup(69);

let pause_play = false; 
let menu = true;
let code = new ReviveCode(); //Crée le code pour revivre
control.inBackground(function () {
    menuChoice() // Choix durant le menu
})

input.onPinPressed(TouchPin.P0 && TouchPin.P2, function () {
    if (pause_play) { //Relancer `testingKeys()` uniquement si le jeu est en pause
        radio.sendString("R_play_"); //Instruction de reprendre le jeu aux autres microbit
        basic.pause(3200); //Temps de synchronisation des microbits
        control.inBackground(function () {
            testingKeys();
        })
    }
})

radio.onReceivedString(function (receivedString: string) {
    if (receivedString.substr(2, 6) == "pause") {
        pause_play = true; //Mise en pause du t-shirt
    }
    if (receivedString.substr(2, 6) == "play_") {
        control.inBackground(function () { 
            testingKeys(); //Reprise du test des touches
        })
    }
    if (receivedString == "start_game") {
        menu = false; //Quittage de la boucle pour le menu
        control.inBackground(function () {
            testingKeys(); //Démarrage du test des touches
        })
    }
    if (receivedString.substr(0, 6) == "R_dead") {
        pause_play = true; //Quittage du test des touches
        if (code.testingReviveCode()) { //Démarrage du code pour revivre
            code.createReviveCode();
            radio.sendString("R_reliv");
        }
        else {
            radio.sendString("R_kaput");
        }
    }
})
