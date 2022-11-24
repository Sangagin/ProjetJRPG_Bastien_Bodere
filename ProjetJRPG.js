maDiv = document.getElementById("maDiv");
bouttonAttaque1 = document.getElementById("bouton1_0");
valeurResultat = document.getElementById("valeurResultat");

//récup des valeures de vie des persos
viePerso1Recup = document.getElementById("pdvPerso1");
viePerso2Recup = document.getElementById("pdvPerso2");
viePerso3Recup = document.getElementById("pdvPerso3");
viePerso4Recup = document.getElementById("pdvPerso4");


//récup de la barre de progress des héros
rangeHerosRecup = document.getElementById("vieHeros1");

//images des mobs pour selection
monstre1 = document.getElementById("mob1");
monstre2 = document.getElementById("mob2");
monstre3 = document.getElementById("mob3");

//récup des vies des enemies
vieMonstre1Recup = document.getElementById("pdvMob1");
vieMonstre2Recup = document.getElementById("pdvMob2");
vieMonstre3Recup = document.getElementById("pdvMob3");


//récup de la barre de progress de la vie des enemies
rangeEnnemi1Recup = document.getElementById("vieEnnemi1");
rangeEnnemi2Recup = document.getElementById("vieEnnemi2");
rangeEnnemi3Recup = document.getElementById("vieEnnemi3");




//récupde la zone de message
afficheAction = document.getElementById("afficheAction");



var tourActuel = 0;

//lancement de l'init (cache juste les boutons en trop)
window.onload = intro;





//ajout bouton dropdown



function intro() {

  //on cache les boutons non désirés au début de la page
  document.getElementById("bouton2_0").hidden = true;
  document.getElementById("bouton2_1").hidden = true;
  document.getElementById("bouton2_2").hidden = true;
  document.getElementById("bouton3_0").hidden = true;
  document.getElementById("bouton3_1").hidden = true;
  document.getElementById("bouton3_2").hidden = true;
  document.getElementById("bouton4_0").hidden = true;
  document.getElementById("bouton4_1").hidden = true;
  document.getElementById("bouton4_2").hidden = true;
  


  afficheAction.innerHTML = "Bienvenue pilotes !" + "</br>" + "En tant que fine fleur de notre armée galactique, veuillez détruire ces aliens !";





}


//detection de l'ctivation du bouton attaque A CONCATENER AVEC LES AUTRES ATTAQUES PLUTOT QUE DE DUPLIQUER
bouttonAttaque1.onclick = function() {

  //calcul des dégats joueurs
  degats =Math.floor(Math.random() * 10) + 1;

  //action des dégats en fonction de l'ennemi visé
  if (mobSelection==1){
    vieMonstre1Recup.innerHTML = vieMonstre1Recup.innerHTML - degats;
    rangeEnnemi1Recup.value = vieMonstre1Recup.innerHTML;
    
  //test si monstre 1 mort
    if (vieMonstre1Recup.innerHTML <= 0) {
      afficheAction.innerHTML = "Félicitation, vous avez vaincu le monstre 1 !";
    }
  }

  if (mobSelection==2){
    vieMonstre2Recup.innerHTML = vieMonstre2Recup.innerHTML - degats;
    rangeEnnemi2Recup.value = vieMonstre2Recup.innerHTML;

    //test si monstre 2 mort
    if (vieMonstre2Recup.innerHTML <= 0) {
      afficheAction.innerHTML = "Félicitation, vous avez vaincu le monstre 2 !";
    }
  }
  if (mobSelection==3){
    vieMonstre3Recup.innerHTML = vieMonstre3Recup.innerHTML - degats;
    rangeEnnemi3Recup.value = vieMonstre3Recup.innerHTML;
      
    //test si monstre 3 mort
    if (vieMonstre3Recup.innerHTML <= 0) {
      afficheAction.innerHTML = "Félicitation, vous avez vaincu le monstre 3 !";
    }
  }



  else {
    // RIPOSTE A METTRE APRES TOUS LES TOURS DES PERSOS


      //calcul dégats riposte
      degatsMob =Math.floor(Math.random() * 10) + 1;

      //affichage de vos dégats dans boite de dialogue et de la riposte
      afficheAction.innerHTML = "Vous avez infligé " + degats + " points de dégats au monstre"  + "</br>" + "</br>" + "Le Monstre riposte !" + "</br>" + "</br>" + "Il vous inflige " + degatsMob + " de dégats !";

      //action de la riposte
      viePerso1Recup.innerHTML = viePerso1Recup.innerHTML - degatsMob;
      rangeHerosRecup.innerHTML = viePerso1Recup.innerHTML;
      rangeHerosRecup.value = viePerso1Recup.innerHTML;

      //vérification que perso mort ou pas
      if (viePerso1Recup.innerHTML <= 0) {
          afficheAction.innerHTML = "Vous êtes mort";

  
        } 
  }
  



  tourActuel +=1;  

//vérification du tour en log pour moi
  if (tourActuel == 0) {
    console.log("tour0")
  } 
  else if (tourActuel == 1) {
    console.log("tour1")
  }


  //on cache les boutons du perso dont le tour se termine et on affiche les suivants
  document.getElementById("bouton1_0").hidden = true;
  document.getElementById("bouton1_1").hidden = true;
  document.getElementById("bouton1_2").hidden = true;
  document.getElementById("bouton3_0").hidden = false;
  document.getElementById("bouton3_1").hidden = false;
  document.getElementById("bouton3_2").hidden = false;



}



//selection de l'adversaire visé
mobSelection=1;
monstre1.onclick = function() {

  afficheAction.innerHTML = "Vous avez selectionné le Monstre 1 comme cible";
  console.log("SELECT 1")
  mobSelection=1;
}

monstre2.onclick = function() {

  afficheAction.innerHTML = "Vous avez selectionné le Monstre 2 comme cible";
  console.log("SELECT 2")
  mobSelection=2;

}

monstre3.onclick = function() {

  afficheAction.innerHTML = "Vous avez selectionné le Monstre 3 comme cible";
  console.log("SELECT 3")
  mobSelection=3;

}











