document.addEventListener("DOMContentLoaded", function() {
    var darkmode=0;
    var DOOMmode=0;
    // Votre code JavaScript ici, y compris le code pour les variables CSS personnalisées
    ResizeDimension();
    var themeChangeButton = document.getElementById("themeChangeButton");
    themeChangeButton.addEventListener("click",function(){
        DOOMmode=DOOMmode+1;
        if (darkmode==0){
            changeTheme("black")
            darkmode=1;
        } else {
            changeTheme("white")
            darkmode=0;
        }
        if (DOOMmode==10){
            changeTheme("red")
        }
    })
});

// Quand la dimension de l'affichage change :
window.addEventListener("resize",function(){
    // Code à exécuter lorsque la fenêtre du navigateur est redimensionnée
    ResizeDimension();
});

function ResizeDimension(){
    // Obtenir la hauteur totale de la page
    var pageHeight = document.documentElement.scrollHeight;

    // Obtenir la largeur totale de la page
    var pageWidth = document.documentElement.scrollWidth;
    // Créer une balise style pour injecter les valeurs dans le CSS
    var styleTag = document.createElement("style");
    styleTag.innerHTML = `
        :root {
            --page-height: ${pageHeight}px;
            --page-width: ${pageWidth}px;
        }
    `;
    document.head.appendChild(styleTag);
}

function changeTheme(couleur){
    var temp = document.getElementById("Background").style.background=couleur;
    if (couleur=="black") {
        var temp2 = document.getElementById("login-form").style.background="#222202";
        var bouton = document.getElementById("themeChangeButton").style.background="white";
        var bouton0 = document.getElementById("themeChangeButton").style.color="black";
    } else {
        if (couleur=="white"){
            var temp2 = document.getElementById("login-form").style.background="#FDFDDD";
            var bouton = document.getElementById("themeChangeButton").style.background="black";
            var bouton0 = document.getElementById("themeChangeButton").style.color="white";
        } else {
            var temp2 = document.getElementById("login-form").style.background="#99226F";
        }
    }
}