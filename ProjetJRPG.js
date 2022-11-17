maDiv = document.getElementById("maDiv");
divTest = document.getElementById("test");
valeurResultat = document.getElementById("valeurResultat");
vieGirafeRecup = document.getElementById("vieMonstre");
viePersoRecup = document.getElementById("pdvPerso");
rangeHerosRecup = document.getElementById("vieHeros");
rangeEnnemieRecup = document.getElementById("vieEnemie");
afficheAction = document.getElementById("afficheAction");







divTest.onclick = function() {

    //calcul des dégats joueurs
    degats =Math.floor(Math.random() * 10) + 1;

    //action des dégats
    vieGirafeRecup.innerHTML = vieGirafeRecup.innerHTML - degats;
    rangeEnnemieRecup.value = vieGirafeRecup.innerHTML;

   // afficheAction.innerHTML = "Tu as cliqué sur toi !";

    //test si monstre mort
    if (vieGirafeRecup.innerHTML <= 0) {
        afficheAction.innerHTML = "Félicitation, vous êtes maintenant recherché par interpol pour crime contre la nature";
        //window.close();

      }

    else {
        //calcul dégats riposte
        degatsMob =Math.floor(Math.random() * 10) + 1;

        //affichage de vos dégats dans boite de dialogue et de la riposte
        afficheAction.innerHTML = "Vous avez infligé " + degats + " points de dégats au monstre"  + "</br>" + "</br>" + "Le Monstre riposte !" + "</br>" + "</br>" + "Il vous inflige " + degatsMob + " de dégats !";

        //action de la riposte
        viePersoRecup.innerHTML = viePersoRecup.innerHTML - degatsMob;
        rangeHerosRecup.innerHTML = viePersoRecup.innerHTML;
        rangeHerosRecup.value = viePersoRecup.innerHTML;

        //vérification que perso mort ou pas
        if (viePersoRecup.innerHTML <= 0) {
            afficheAction.innerHTML = "Vous êtes mort";
    
          }
    }
    
}



//ajout bouton dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}






