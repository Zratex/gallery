var isPlaying=1;
// Variable définissant si la musique est en train d'être joué ou non
var GameSet=0;
// Variable définissant si le jeu est terminé ou non
var winner=0;
// Variable définissant quel est le gagnant du round. 0=humain, 1=bot, 2=égalité
var setscore=document.getElementById("setscoreHuman");
// test

function winCondition(option) {
    //Basiquement le code du fonctionnement du RPS
    let CPUselect=Number(String(Math.random()*3)[0]);
    if (CPUselect==0) { //Bot sélection Pierre
        //Humain sélectione Pierre
        if (option==0) {
            winner=2;
            document.getElementById("commentary").innerHTML="Egalité | DRAW (Rock Vs Rock)";
        }
        //Humain sélectionne Papier
        if (option==1) {
            winner=0;
            document.getElementById("commentary").innerHTML="Bien joué ! Vous avez gagné ce round | Well played! Human won the round (Paper Vs Rock)";
        }
        //Humain sélectionne Ciseaux
        if (option==2) {
            winner=1;
            document.getElementById("commentary").innerHTML="Dommage.. | Nice try.. CPU won the round (Scissors Vs Rock)";
        }
    }
    if (CPUselect==1) { //Bot sélection Papier
        //Humain sélectione Pierre
        if (option==0) {
            winner=1;
            document.getElementById("commentary").innerHTML="Dommage.. | Nice try.. CPU won the round (Rock Vs Paper)";
        }
        //Humain sélectionne Papier
        if (option==1) {
            winner=2;
            document.getElementById("commentary").innerHTML="Egalité | DRAW (Paper Vs Paper)";
        }
        //Humain sélectionne Ciseaux
        if (option==2) {
            winner=0;
            document.getElementById("commentary").innerHTML="Bien joué ! Vous avez gagné ce round | Well played! Human won the round (Scissors Vs Paper)";
        }
    }
    if (CPUselect==2) { //Bot sélection Ciseaux
        //Humain sélectione Pierre
        if (option==0) {
            winner=0;
            document.getElementById("commentary").innerHTML="Bien joué ! Vous avez gagné ce round | Well played! Human won the round (Rock Vs Scissors)";
        }
        //Humain sélectionne Papier
        if (option==1) {
            winner=1;
            document.getElementById("commentary").innerHTML="Dommage.. | Nice try.. CPU won the round (Paper Vs Scissors)";
        }
        //Humain sélectionne Ciseaux
        if (option==2) {
            winner=2;
            document.getElementById("commentary").innerHTML="Egalité | DRAW (Scissors Vs Scissors)";
        }
    }
}
function endround() {
    let gamescoreHuman=parseInt(document.getElementById("gamescoreHuman").textContent);
    let gamescoreCPU=parseInt(document.getElementById("gamescoreCPU").textContent);
    if (winner==0) {
        gamescoreHuman=gamescoreHuman+1;
        document.getElementById("gamescoreHuman").innerHTML=gamescoreHuman;
    } else {
        if (winner==1) {
            gamescoreCPU=gamescoreCPU+1;
            document.getElementById("gamescoreCPU").innerHTML=gamescoreCPU;
        }
    }
    //Changement de la musique en fonction de l'état de la partie :
    if (gamescoreHuman==3 || gamescoreCPU==3) {
        MusicManager(3);
    } else {
        if (gamescoreHuman==2 && gamescoreCPU==2) {
            MusicManager(2);
        } else {
            MusicManager(1);
        }
    };
}
function rockSelected() {
    if (window.getComputedStyle(document.getElementById("next_set")).display=="none") {
        if (GameSet==0) {
            winner=0;
            winCondition(0);
            endround();
        }
    }  
}
function paperSelected() {
    if (window.getComputedStyle(document.getElementById("next_set")).display=="none") {
        if (GameSet==0) {
            winner=0;
            winCondition(1);
            endround();
        }
    }
}
function scissorsSelected() {
    if (window.getComputedStyle(document.getElementById("next_set")).display=="none") {
        if (GameSet==0) {
            winner=0;
            winCondition(2);
            endround();
        }
    }
}
function MusicManager(state) {
    document.getElementById("SFX").pause();
    if (window.getComputedStyle(document.getElementById("next_set")).display=="none") {
        document.getElementById("SFX").setAttribute("src","SFX/Select.wav");
    } else {
        document.getElementById("SFX").setAttribute("src","SFX/Next Round.wav");
    }
    document.getElementById("SFX").play();
    document.getElementById("SFX").volume=0.2;
    if (state==1 && (document.getElementById("gamescoreHuman").textContent!=2 && document.getElementById("gamescoreCPU").textContent!=2)) {
        //Met la track du round 1 quand la valeur est à 1
        if (document.getElementById("OST").getAttribute("src")!="OST Battle/Round 1 - Not A Little Girl.mp3" && document.getElementById("setscoreHuman").textContent=="0" && document.getElementById("setscoreCPU").textContent=="0") {
            document.getElementById("OST").setAttribute("src","OST Battle/Round 1 - Not A Little Girl.mp3");
            document.getElementById("OST").play();
            document.getElementById("OST").loop=true;
            document.getElementById("OST").volume = 0.1;
        } else {
            if (document.getElementById("OST").getAttribute("src")!="OST Battle/Round 2 - Not A Little Girl.mp3"
            && (document.getElementById("setscoreHuman").textContent=="1" || document.getElementById("setscoreCPU").textContent=="1") && (document.getElementById("setscoreHuman").textContent!="2" && document.getElementById("setscoreCPU").textContent!="2")
            ) {
                if (document.getElementById("gamescoreHuman").textContent=="0" && document.getElementById("gamescoreCPU").textContent=="0") {
                    document.getElementById("OST").setAttribute("src","OST Battle/Round 2 - Not A Little Girl.mp3");
                    document.getElementById("OST").play();
                    document.getElementById("OST").loop=true;
                    document.getElementById("OST").volume = 0.1;
                }
            } else {
                if (document.getElementById("OST").getAttribute("src")!="OST Battle/Round 3 - Not A Little Girl.mp3") {
                    if (document.getElementById("setscoreHuman").textContent=="2" || document.getElementById("setscoreCPU").textContent=="2") {
                        if (document.getElementById("gamescoreHuman").textContent=="0" && document.getElementById("gamescoreCPU").textContent=="0") {
                            document.getElementById("Announcer").setAttribute("src","Announcer/Final Round.wav");
                            document.getElementById("Announcer").play()
                            document.getElementById("Announcer").volume=0.2;
                            document.getElementById("OST").setAttribute("src","OST Battle/Round 3 - Not A Little Girl.mp3");
                            document.getElementById("OST").play();
                            document.getElementById("OST").loop=true;
                            document.getElementById("OST").volume = 0.1;
                        }
                    }
                }
            }
        };
    } else {
        if (state==2 && document.getElementById("OST").getAttribute("src")!="OST Battle/Low Health - Not A Little Girl.mp3") {
            //Introduction de la phase low health
            document.getElementById("OST").setAttribute("src","OST Battle/Low Health (intro) - Not A Little Girl.mp3");
            document.getElementById("OST").play();
            document.getElementById("OST").volume = 0.1;
            setTimeout(() => {
                //Transition à la phase low health
                document.getElementById("OST").pause();
                document.getElementById("OST").setAttribute("src","OST Battle/Low Health - Not A Little Girl.mp3");
                document.getElementById("OST").play();
                document.getElementById("OST").loop=true;
            },1300);
        } else {
            if (state==3) {
                //Quand un set se termine
                document.getElementById("next_set").style.display="inline-block";
                if (winner==0) { //Actualise le set score si l'humain gagne
                    setscore=document.getElementById("setscoreHuman");
                    setscore=parseInt(setscore.textContent)+1;
                    document.getElementById("setscoreHuman").innerHTML=setscore
                } else { //Si c'est le bot qui gagne
                    setscore=document.getElementById("setscoreCPU");
                    setscore=parseInt(setscore.textContent)+1;
                    document.getElementById("setscoreCPU").innerHTML=setscore
                }
                
                // Si c'est le dernier set, donc la fin du jeu
                if (document.getElementById("setscoreHuman").textContent==3 || document.getElementById("setscoreCPU").textContent==3) {
                    document.getElementById("next_set").innerHTML="GAME SET";
                    document.getElementById("commentary").innerHTML=document.getElementById("commentary").textContent+"| SET ENDED";
                    document.getElementById("setAnnonce").innerHTML="GAME SET";
                    GameSet=1;
                    if (document.getElementById("setscoreHuman").textContent==3) {
                        document.getElementById("Announcer").setAttribute("src","Announcer/[Announcer]_SFIII_3rd_Strike_-_You_win.mp3");
                    } else {
                        document.getElementById("Announcer").setAttribute("src","Announcer/[Announcer]_SFIII_3rd_Strike_-_You_lose.mp3");
                    }
                    document.getElementById("Announcer").play();
                    document.getElementById("OST").setAttribute("src","OST Battle/End - Not A Little Girl.mp3");
                    document.getElementById("OST").loop=false;
                    document.getElementById("OST").play();
                    document.getElementById("OST").volume=0.2;
                } else {
                    // Transition sur le prochain set
                    document.getElementById("commentary").innerHTML=document.getElementById("commentary").textContent+"| SET ENDED";
                    if (winner==0) {
                        setscore=document.getElementById("setscoreHuman");
                    } else {
                        setscore=document.getElementById("setscoreCPU");
                    }
                    if (setscore.textContent==2) {
                        document.getElementById("OST").setAttribute("src","OST Battle/Transition - Not A Little Girl.mp3");
                    } else {
                        // Transition sur le dernier set
                        document.getElementById("OST").setAttribute("src","OST Battle/Round End - Not A Little Girl.mp3");
                    }
                    document.getElementById("OST").play();
                    document.getElementById("OST").loop=true;
                    document.getElementById("OST").volume = 0.1;
                }
            }
        }
    }
}
function muteMusic() {
    if (isPlaying==1) {
        document.getElementById("OST").pause();
		isPlaying = 0;
		let texte = "[EN PAUSE]";
		document.getElementById("musicpause").innerHTML=texte;
    } else {
        document.getElementById("OST").play();
        document.getElementById("OST").volume = 0.1;
		isPlaying = 1;
		let texte = "[EN LECTURE]";
		document.getElementById("musicpause").innerHTML=texte;
    }
}
function next_round() {
    document.getElementById("gamescoreHuman").innerHTML=0;
    document.getElementById("gamescoreCPU").innerHTML=0;
    document.getElementById("commentary").innerHTML="New set..";
    document.getElementById("setAnnonce").innerHTML="Set "+(parseInt(document.getElementById("setscoreHuman").innerText)+parseInt(document.getElementById("setscoreCPU").innerText)+1);
    
    MusicManager(1);
    document.getElementById("next_set").style.display="none";
}