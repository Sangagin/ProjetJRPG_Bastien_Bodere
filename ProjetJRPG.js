maDiv = document.getElementById("maDiv");
bouttonAttaque1 = document.getElementById("bouton1_0");
valeurResultat = document.getElementById("valeurResultat");

//récup des valeures de vie des persos
viePerso1Recup = document.getElementById("pdvPerso1");
viePerso2Recup = document.getElementById("pdvPerso2");
viePerso3Recup = document.getElementById("pdvPerso3");
viePerso4Recup = document.getElementById("pdvPerso4");


//récup de la barre de progress des héros
rangeHeros1Recup = document.getElementById("vieHeros1");
rangeHeros2Recup = document.getElementById("vieHeros2");
rangeHeros3Recup = document.getElementById("vieHeros3");
rangeHeros4Recup = document.getElementById("vieHeros4");

//images des mobs pour selection
monstre1 = document.getElementById("mob1");
monstre2 = document.getElementById("mob2");
monstre3 = document.getElementById("mob3");



//récup des vies des enemies
vieMonstre1Recup = document.getElementById("pdvMob1");
vieMonstre2Recup = document.getElementById("pdvMob2");
vieMonstre3Recup = document.getElementById("pdvMob3");






//récupde la zone de message
afficheAction = document.getElementById("afficheAction");



var tourActuel = 0;
herosVivants = 4;
finCombat=false;
finTour=false;
ancienneActionHero1=0;
mobSelection=1;


//lancement de l'init (cache juste les boutons en trop)
window.onload = intro;








function intro() {

  //on cache les boutons non désirés et des stats de vies des ennemis au début de la page
  document.getElementById("bouton2_0").hidden = true;
  document.getElementById("bouton2_1").hidden = true;
  document.getElementById("bouton2_2").hidden = true;
  document.getElementById("bouton3_0").hidden = true;
  document.getElementById("bouton3_1").hidden = true;
  document.getElementById("bouton3_2").hidden = true;
  document.getElementById("bouton4_0").hidden = true;
  document.getElementById("bouton4_1").hidden = true;
  document.getElementById("bouton4_2").hidden = true;
 
  document.getElementById("statsMob1").hidden = true; 
  document.getElementById("statsMob2").hidden = true; 
  document.getElementById("statsMob3").hidden = true; 


  afficheAction.innerHTML = "Bienvenue pilotes !" + "</br>" + "En tant que fine fleur de notre armée galactique, veuillez détruire ces aliens !";


}


//detection des appuis boutons
document.getElementById("bouton1_0").addEventListener('click', boutonAttaquePerso1)
document.getElementById("bouton1_1").addEventListener('click', boutonDefendre)

document.getElementById("bouton2_0").addEventListener('click', boutonAttaquePerso2)
document.getElementById("bouton2_1").addEventListener('click', boutonDefendre)

document.getElementById("bouton3_0").addEventListener('click', boutonAttaquePerso3)
document.getElementById("bouton3_1").addEventListener('click', boutonDefendre)

document.getElementById("bouton4_0").addEventListener('click', boutonAttaquePerso4)
document.getElementById("bouton4_1").addEventListener('click', boutonDefendre)



//selection manuelle de l'adversaire visé

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


//affichage infobulle vie ennemi 
function infobulle() {

  monstre1.title = "vie restante : " + vieMonstre1Recup.innerHTML;
  monstre2.title = "vie restante : " + vieMonstre2Recup.innerHTML;
  monstre3.title = "vie restante : " + vieMonstre3Recup.innerHTML;
}








//fonction du bouton attaque

function boutonAttaque() {

console.log("inutile");
}




//bouton attaque perso 1

function boutonAttaquePerso1() {

  degatsSurMonstres();
  document.getElementById("bouton1_0").hidden = true;
  document.getElementById("bouton1_1").hidden = true;
  document.getElementById("bouton1_2").hidden = true;
  if(viePerso2Recup.innerHTML >0) {

    document.getElementById("bouton2_0").hidden = false;
    document.getElementById("bouton2_1").hidden = false;
    document.getElementById("bouton2_2").hidden = false;

  }
  else if (viePerso3Recup.innerHTML > 0){
    document.getElementById("bouton3_0").hidden = false;
    document.getElementById("bouton3_1").hidden = false;
    document.getElementById("bouton3_2").hidden = false;
  }
  else if (viePerso4Recup.innerHTML > 0){
    document.getElementById("bouton4_0").hidden = false;
    document.getElementById("bouton4_1").hidden = false;
    document.getElementById("bouton4_2").hidden = false;
  }  
  else if (viePerso1Recup.innerHTML > 0){
    //si jamais il ne reste plus que le héros 1 c'est de nouveau son tour
    document.getElementById("bouton1_0").hidden = false;
    document.getElementById("bouton1_1").hidden = false;
    document.getElementById("bouton1_2").hidden = false;
  }
  else {
    afficheAction.innerHTML = "C'est perdu !"
  }



  console.log("c'est le tour du héros " + tourActuel);

}

//bouton attaque perso 2

function boutonAttaquePerso2() {

  degatsSurMonstres();
  document.getElementById("bouton2_0").hidden = true;
  document.getElementById("bouton2_1").hidden = true;
  document.getElementById("bouton2_2").hidden = true;

  if (viePerso3Recup.innerHTML > 0){
    document.getElementById("bouton3_0").hidden = false;
    document.getElementById("bouton3_1").hidden = false;
    document.getElementById("bouton3_2").hidden = false;
  }
  else if (viePerso4Recup.innerHTML > 0){
    document.getElementById("bouton4_0").hidden = false;
    document.getElementById("bouton4_1").hidden = false;
    document.getElementById("bouton4_2").hidden = false;
  }  
  else if (viePerso1Recup.innerHTML > 0){
    document.getElementById("bouton1_0").hidden = false;
    document.getElementById("bouton1_1").hidden = false;
    document.getElementById("bouton1_2").hidden = false;
  }
  else if(viePerso2Recup.innerHTML >0) {
    //si jamais il ne reste plus que le héros 2 c'est de nouveau son tour
    document.getElementById("bouton2_0").hidden = false;
    document.getElementById("bouton2_1").hidden = false;
    document.getElementById("bouton2_2").hidden = false;

  }
  else {
    afficheAction.innerHTML = "C'est perdu !"
  }

}

//bouton attaque perso 3

function boutonAttaquePerso3() {

  degatsSurMonstres();
  document.getElementById("bouton3_0").hidden = true;
  document.getElementById("bouton3_1").hidden = true;
  document.getElementById("bouton3_2").hidden = true;


  if (viePerso4Recup.innerHTML > 0){
    document.getElementById("bouton4_0").hidden = false;
    document.getElementById("bouton4_1").hidden = false;
    document.getElementById("bouton4_2").hidden = false;
  }  
  else if (viePerso1Recup.innerHTML > 0){
    document.getElementById("bouton1_0").hidden = false;
    document.getElementById("bouton1_1").hidden = false;
    document.getElementById("bouton1_2").hidden = false;
  }
  else if(viePerso2Recup.innerHTML >0) {
    document.getElementById("bouton2_0").hidden = false;
    document.getElementById("bouton2_1").hidden = false;
    document.getElementById("bouton2_2").hidden = false;

  }
  else if (viePerso3Recup.innerHTML > 0){
        //si jamais il ne reste plus que le héros 3 c'est de nouveau son tour
    document.getElementById("bouton3_0").hidden = false;
    document.getElementById("bouton3_1").hidden = false;
    document.getElementById("bouton3_2").hidden = false;
  }
  else {
    afficheAction.innerHTML = "C'est perdu !"
  }

  console.log("c'est le tour du héros " + tourActuel);

}

//bouton attaque perso 4

function boutonAttaquePerso4() {

  degatsSurMonstres();
  document.getElementById("bouton4_0").hidden = true;
  document.getElementById("bouton4_1").hidden = true;
  document.getElementById("bouton4_2").hidden = true;



  if (viePerso1Recup.innerHTML > 0){
    document.getElementById("bouton1_0").hidden = false;
    document.getElementById("bouton1_1").hidden = false;
    document.getElementById("bouton1_2").hidden = false;
  }
  else if(viePerso2Recup.innerHTML >0) {
    document.getElementById("bouton2_0").hidden = false;
    document.getElementById("bouton2_1").hidden = false;
    document.getElementById("bouton2_2").hidden = false;

  }
  else if (viePerso3Recup.innerHTML > 0){
    document.getElementById("bouton3_0").hidden = false;
    document.getElementById("bouton3_1").hidden = false;
    document.getElementById("bouton3_2").hidden = false;
  }
  else if (viePerso4Recup.innerHTML > 0){
    //si jamais il ne reste plus que le héros 4 c'est de nouveau son tour
    document.getElementById("bouton4_0").hidden = false;
    document.getElementById("bouton4_1").hidden = false;
    document.getElementById("bouton4_2").hidden = false;
  }  
  else {
    afficheAction.innerHTML = "C'est perdu !"
  }

  console.log("c'est le tour du héros " + tourActuel);

}




//bouton défence
function boutonDefendre() {
  afficheAction.innerHTML = "Vous déployez votre bouclier et recevrez motié moins de dégats si les ennemis vous attaquent ce tour." ;
  tourActuel +=1;
  console.log(tourActuel);

}

//boutons spé




//riposte des monstres
//vu que j'arrive pas a finir un tour elle est pas implémentée, mais elle fonctionne

function riposte() {
  degatsMob =Math.floor(Math.random() * 10) + 1;
  afficheAction.innerHTML += "</br>" + "</br>" + "Le Monstre riposte !" + "</br>" + "</br>" + "Il vous inflige " + degatsMob + " de dégats !";

  //choix aléatoire du perso visé
  herosVise = Math.floor(Math.random() * herosVivants) + 1;


  //action de la riposte
  if (herosVise == 1) {
    viePerso1Recup.innerHTML = viePerso1Recup.innerHTML - degatsMob;
    rangeHeros1Recup.innerHTML = viePerso1Recup.innerHTML;
    rangeHeros1Recup.value = viePerso1Recup.innerHTML;
  }
  else if (herosVise == 2){
    viePerso2Recup.innerHTML = viePerso2Recup.innerHTML - degatsMob;
    rangeHeros2Recup.innerHTML = viePerso2Recup.innerHTML;
    rangeHeros2Recup.value = viePerso2Recup.innerHTML;
  }
  else if (herosVise == 3){
    viePerso3Recup.innerHTML = viePerso3Recup.innerHTML - degatsMob;
    rangeHeros3Recup.innerHTML = viePerso3Recup.innerHTML;
    rangeHeros3Recup.value = viePerso3Recup.innerHTML;
  }
  else if (herosVise == 4){
    viePerso4Recup.innerHTML = viePerso4Recup.innerHTML - degatsMob;
    rangeHeros4Recup.innerHTML = viePerso4Recup.innerHTML;
    rangeHeros4Recup.value = viePerso4Recup.innerHTML;
  }

   //vérification que perso mort ou pas a faire qu'une fois les actions, c'est lourd pour rine sinon
  if (viePerso1Recup.innerHTML <= 0) {
    afficheAction.innerHTML = "Le vaisseau 1 à été détruit !";
    document.getElementById("bouton1_0").hidden=true;
    document.getElementById("bouton1_1").hidden=true;
    document.getElementById("bouton1_2").hidden=true;
    document.getElementById("vieHeros1").hidden=true;
    document.getElementById("pdvPerso1").hidden=true;
    document.getElementById("vaisseau1").hidden=true;


  } 


}


function degatsSurMonstres() {


  degats =Math.floor(Math.random() * 10) + 1;
  afficheAction.innerHTML = "Vous avez infligé " + degats + " points de dégats au monstre" ;

  //action des dégats en fonction de l'ennemi visé
  if (mobSelection==1){
    vieMonstre1Recup.innerHTML = vieMonstre1Recup.innerHTML - degats;
  //test si monstre 1 mort
    if (vieMonstre1Recup.innerHTML <= 0) {
      afficheAction.innerHTML = "Félicitation, vous avez vaincu le monstre 1 !";
      document.getElementById("mob1").hidden = true;
      mortMonstre();
    }
  }

  if (mobSelection==2){
    vieMonstre2Recup.innerHTML = vieMonstre2Recup.innerHTML - degats;

    //test si monstre 2 mort
    if (vieMonstre2Recup.innerHTML <= 0) {
      afficheAction.innerHTML = "Félicitation, vous avez vaincu le monstre 2 !";
      document.getElementById("mob2").hidden = true;
      mortMonstre();
    }
  }
  if (mobSelection==3){
    vieMonstre3Recup.innerHTML = vieMonstre3Recup.innerHTML - degats;

      
    //test si monstre 3 mort
    if (vieMonstre3Recup.innerHTML <= 0) {
      afficheAction.innerHTML = "Félicitation, vous avez vaincu le monstre 3 !";
      document.getElementById("mob3").hidden = true;
      mortMonstre();
    }
  }


}


function mortMonstre() {

  //changement de monstre selectionné et condition de victoire
  if (!(document.getElementById("mob1").hidden)){
    console.log("SELECT 1")
    mobSelection=1;
  }
  else if (!(document.getElementById("mob2").hidden)) {
    console.log("SELECT 2")
    mobSelection=2;
  }
  else if (!(document.getElementById("mob3").hidden)) {
    console.log("SELECT 3")
    mobSelection=3;
  }
  else {
    console.log("tout gagné")
  }

}













//fonction pour actualiser le tour actuel, pas propre, a modifier




