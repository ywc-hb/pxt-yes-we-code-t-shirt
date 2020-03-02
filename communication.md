# La communication #
Les données sont envoyés sur le canal 69.
La puissance du signal est idéalement réglée sur 6 ou 7.

Données envoyés par le t-shirt contrôlant le personnage de droite (pour le personnage de gauche, il suffit de remplacer les _R_ en _L_) : 

### Correspondance touche - combinaison pins ###
Flèche W --> pins 3 et 4     
Flèche E --> pins 3 et 1     
Flèche N --> pins 3 et 10     
Flèche S --> pins 3 et 2     
Flèche NE --> pins 0 et 1     
Flèche NW --> pins 0 et 10     
Flèche SE --> pins 4 et 2     
Flèche SW --> pins 4 et 10     

Tirer --> pins 1 et 2     
Recharger --> pins 1 et 10     
Pause --> pins 0 et 2     

(combinaison restante : pins 2 et 10, peut-être pour un bouton de validation)     

### T-shirt controlant le joueur de droite ###
Flèche gauche --> 'R_move_W'     
Flèche droite --> 'R_move_E'     
Flèche haut --> 'R_move_N'     
Flèche bas --> 'R_move_S'     

Tirer --> 'R_shoot_' suivi de la direction     
Recharger --> 'R_charg'     
Pause --> 'R_pause'     

### Code permettant de revivre ###

La liste des boutons est la suivante (l'ordre est à respecter) :     
`[ArrowNames.North, ArrowNames.South, ArrowNames.East, ArrowNames.West, ArrowNames.SouthEast, ArrowNames.SouthWest, ArrowNames.NorthEast, ArrowNames.NorthWest, "T", "R"]`         
Le code permettant de revivre est envoyé sous la forme suivante :        
    *"R_code_"* suivi directement des indices de la liste de boutons
    (Voici un exemple pour le code *Flèche Nord, Flèche Sud, Tirer, Flèche Est* : *"R_code_0_1_8_2"*)

Lorsque "R_dead" est reçu, le t-shirt teste si le code pour revivre est bien tapé. Si oui, il renvoie "R_reliv" sinon il renvoie "R_kaput"
