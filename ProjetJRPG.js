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
defencePerso1 = false;
defencePerso2 = false;
defencePerso3 = false;
defencePerso4 = false;


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
document.getElementById("bouton1_1").addEventListener('click', boutonDefendrePerso1)

document.getElementById("bouton2_0").addEventListener('click', boutonAttaquePerso2)
document.getElementById("bouton2_1").addEventListener('click', boutonDefendrePerso2)

document.getElementById("bouton3_0").addEventListener('click', boutonAttaquePerso3)
document.getElementById("bouton3_1").addEventListener('click', boutonDefendrePerso3)

document.getElementById("bouton4_0").addEventListener('click', boutonAttaquePerso4)
document.getElementById("bouton4_1").addEventListener('click', boutonDefendrePerso4)



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







//bouton attaque perso 1

function boutonAttaquePerso1() {

  degatsSurMonstres();
  tourActuel ++;
  finTourPerso1();
  console.log("c'est le tour du héros " + tourActuel);

}

//bouton attaque perso 2

function boutonAttaquePerso2() {

  degatsSurMonstres();
  tourActuel ++;
  finTourPerso2();
  console.log("c'est le tour du héros " + tourActuel);

}

//bouton attaque perso 3

function boutonAttaquePerso3() {

  degatsSurMonstres();
  tourActuel ++;
  finTourPerso3();

  console.log("c'est le tour du héros " + tourActuel);

}

//bouton attaque perso 4

function boutonAttaquePerso4() {

  degatsSurMonstres();
  tourActuel ++;
  finTourPerso4();

  console.log("c'est le tour du héros " + tourActuel);

}




//bouton défendre
function boutonDefendrePerso1() {
  afficheAction.innerHTML = "Vous déployez votre bouclier et recevrez motié moins de dégats si les ennemis vous attaquent ce tour." ;
  defencePerso1=true;
  tourActuel ++;
  finTourPerso1();
  console.log("c'est le tour du héros " + tourActuel);
}

function boutonDefendrePerso2() {
  afficheAction.innerHTML = "Vous déployez votre bouclier et recevrez motié moins de dégats si les ennemis vous attaquent ce tour." ;
  defencePerso2=true;
  tourActuel ++;
  finTourPerso2();
  console.log("c'est le tour du héros " + tourActuel);
}

function boutonDefendrePerso3() {
  afficheAction.innerHTML = "Vous déployez votre bouclier et recevrez motié moins de dégats si les ennemis vous attaquent ce tour." ;
  defencePerso3=true;
  tourActuel ++;
  finTourPerso3();
  console.log("c'est le tour du héros " + tourActuel);
}

function boutonDefendrePerso4() {
  afficheAction.innerHTML = "Vous déployez votre bouclier et recevrez motié moins de dégats si les ennemis vous attaquent ce tour." ;
  defencePerso4=true;
  tourActuel ++;
  finTourPerso4();
  console.log("c'est le tour du héros " + tourActuel);
}


//boutons actions spéciales




//riposte des monstres
//vu que j'arrive pas a finir un tour elle est pas implémentée, mais elle fonctionne

function riposte() {
  degatsMob =Math.floor(Math.random() * 10) + 1;

  //choix aléatoire du perso visé
  herosVise = Math.floor(Math.random() * 4) + 1;
  console.log(herosVise);


  //action de la riposte
  //on vérifie que le héros visé est bien vivant
  if (herosVise == 1 && viePerso1Recup.innerHTML > 0) {

    //si le héros à utilisé l'action de défence il subit moins de dégats
    if (defencePerso1==true){
      degatsMob=degatsMob/2;
    }
    afficheAction.innerHTML += "</br>" + "</br>" + "Le Monstre riposte !" + "</br>" + "</br>" + "Il vous inflige " + degatsMob + " de dégats !";
    //ici on enlève les dégats à la variable de vie du héros, et on actualise sa barre de vie
    viePerso1Recup.innerHTML = viePerso1Recup.innerHTML - degatsMob;
    rangeHeros1Recup.innerHTML = viePerso1Recup.innerHTML;
    rangeHeros1Recup.value = viePerso1Recup.innerHTML;
    defencePerso1=false;

    //vérification que perso mort ou pas suite à l'action de riposte
    if (viePerso1Recup.innerHTML <= 0) {
      afficheAction.innerHTML += "Vaisseau 1 détruit !";
      console.log("vaisseau detruit");
      //on fait disparaitre le héros et ses boutons
      document.getElementById("bouton1_0").hidden=true;
      document.getElementById("bouton1_1").hidden=true;
      document.getElementById("bouton1_2").hidden=true;
      document.getElementById("vieHeros1").hidden=true;
      document.getElementById("pdvPerso1").hidden=true;
      document.getElementById("vaisseau1").hidden=true;
      //on actualise le nombre de héros vivants
      herosVivants = herosVivants-1;
      if(herosVivants==0) {

        console.log("GAME OVER");
        gameOver();
      }
      } 
  } 
  //si le héros est mort mais qu'il a quand même été visé aléatoirement, on relance la fonction de riposte, pour qu'un autre héros soit visé
  else if (herosVise == 1 && viePerso1Recup.innerHTML <= 0){
    riposte();
  }

  //cas où c'est le héros 2 de visé
  //on vérifie que le héros visé est bien vivant
  else if (herosVise == 2 && viePerso2Recup.innerHTML > 0){

    //si le héros à utilisé l'action de défence il subit moins de dégats
    if (defencePerso2==true){
      degatsMob=degatsMob/2;
    }

    afficheAction.innerHTML += "</br>" + "</br>" + "Le Monstre riposte !" + "</br>" + "</br>" + "Il vous inflige " + degatsMob + " de dégats !";
    //ici on enlève les dégats à la variable de vie du héros, et on actualise sa barre de vie
    viePerso2Recup.innerHTML = viePerso2Recup.innerHTML - degatsMob;
    rangeHeros2Recup.innerHTML = viePerso2Recup.innerHTML;
    rangeHeros2Recup.value = viePerso2Recup.innerHTML;
    defencePerso2=false;


    //vérification que perso mort ou pas suite à l'action de riposte
    if (viePerso2Recup.innerHTML <= 0) {
      afficheAction.innerHTML += "Vaisseau 2 détruit !";
      console.log("vaisseau detruit");
      document.getElementById("bouton2_0").hidden=true;
      document.getElementById("bouton2_1").hidden=true;
      document.getElementById("bouton2_2").hidden=true;
      document.getElementById("vieHeros2").hidden=true;
      document.getElementById("pdvPerso2").hidden=true;
      document.getElementById("vaisseau2").hidden=true;
      herosVivants = herosVivants-1;
      
      if(herosVivants==0) {

        console.log("GAME OVER");
        gameOver();
      }
    } 
  } 

  //si le héros est mort mais qu'il a quand même été visé aléatoirement, on relance la fonction de riposte, pour qu'un autre héros soit visé
  else if (herosVise == 2 && viePerso2Recup.innerHTML <= 0) {
    riposte();


  }
  else if (herosVise == 3 && viePerso3Recup.innerHTML > 0){

    //si le héros à utilisé l'action de défence il subit moins de dégats
    if (defencePerso3==true){
      degatsMob=degatsMob/2;
    }
    afficheAction.innerHTML += "</br>" + "</br>" + "Le Monstre riposte !" + "</br>" + "</br>" + "Il vous inflige " + degatsMob + " de dégats !";
    viePerso3Recup.innerHTML = viePerso3Recup.innerHTML - degatsMob;
    rangeHeros3Recup.innerHTML = viePerso3Recup.innerHTML;
    rangeHeros3Recup.value = viePerso3Recup.innerHTML;
    defencePerso3=false;


    if (viePerso3Recup.innerHTML <= 0) {
      afficheAction.innerHTML += "Vaisseau 3 détruit !";
      console.log("vaissea detruit");
      document.getElementById("bouton3_0").hidden=true;
      document.getElementById("bouton3_1").hidden=true;
      document.getElementById("bouton3_2").hidden=true;
      document.getElementById("vieHeros3").hidden=true;
      document.getElementById("pdvPerso3").hidden=true;
      document.getElementById("vaisseau3").hidden=true;
      herosVivants = herosVivants-1;
      
      if(herosVivants==0) {

        console.log("GAME OVER");
        gameOver();
      }
    } 
  } 

  //si le héros est mort mais qu'il a quand même été visé aléatoirement, on relance la fonction de riposte, pour qu'un autre héros soit visé
  else if (herosVise == 3 && viePerso3Recup.innerHTML <= 0) {
    riposte();

  }
  if (herosVise == 4 && viePerso4Recup.innerHTML > 0){
    
    //si le héros à utilisé l'action de défence il subit moins de dégats
    if (defencePerso4==true){
      degatsMob=degatsMob/2;
    }
    afficheAction.innerHTML += "</br>" + "</br>" + "Le Monstre riposte !" + "</br>" + "</br>" + "Il vous inflige " + degatsMob + " de dégats !";
    viePerso4Recup.innerHTML = viePerso4Recup.innerHTML - degatsMob;
    rangeHeros4Recup.innerHTML = viePerso4Recup.innerHTML;
    rangeHeros4Recup.value = viePerso4Recup.innerHTML;
    defencePerso4=false;


    if (viePerso4Recup.innerHTML <= 0) {
      afficheAction.innerHTML += "Vaisseau 4 détruit !";
      console.log("vaissea detruit");
      document.getElementById("bouton4_0").hidden=true;
      document.getElementById("bouton4_1").hidden=true;
      document.getElementById("bouton4_2").hidden=true;
      document.getElementById("vieHeros4").hidden=true;
      document.getElementById("pdvPerso4").hidden=true;
      document.getElementById("vaisseau4").hidden=true;     
      herosVivants = herosVivants-1;
      
      if(herosVivants==0) {

        console.log("GAME OVER");
        gameOver();
      }

    } 
  } 

  //si le héros est mort mais qu'il a quand même été visé aléatoirement, on relance la fonction de riposte, pour qu'un autre héros soit visé
  else if (herosVise == 4 && viePerso4Recup.innerHTML <= 0) {
    riposte();

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
    victoire()
    //FIN CODE A GERER
    window.stop()
    }

}



function finTourPerso1() {

  document.getElementById("bouton1_0").hidden = true;
  document.getElementById("bouton1_1").hidden = true;
  document.getElementById("bouton1_2").hidden = true;


  if(tourActuel==herosVivants) {
    //appel riposte
    console.log("c'est la RIPOSTE");
    riposte();
    tourActuel=0;

  }


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
    afficheAction.innerHTML = "GAME OVER !"
  }


}


function finTourPerso2() {
  document.getElementById("bouton2_0").hidden = true;
  document.getElementById("bouton2_1").hidden = true;
  document.getElementById("bouton2_2").hidden = true;

  if(tourActuel==herosVivants) {
    //appel riposte
    console.log("c'est la RIPOSTE");
    riposte();
    tourActuel=0;



  }


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
    afficheAction.innerHTML = "GAME OVER !"
  }
}

function finTourPerso3() {

  document.getElementById("bouton3_0").hidden = true;
  document.getElementById("bouton3_1").hidden = true;
  document.getElementById("bouton3_2").hidden = true;


  if(tourActuel==herosVivants) {
    //appel riposte
    console.log("c'est la RIPOSTE");
    riposte();
    tourActuel=0;


  }

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
    afficheAction.innerHTML = "GAME OVER !"
  }

}

function finTourPerso4() {
  document.getElementById("bouton4_0").hidden = true;
  document.getElementById("bouton4_1").hidden = true;
  document.getElementById("bouton4_2").hidden = true;

  if(tourActuel==herosVivants) {
    //appel riposte
    console.log("c'est la RIPOSTE");
    riposte();
    tourActuel=0;

  }


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
    afficheAction.innerHTML = "GAME OVER !"
  }

}



function gameOver() {

  document.getElementById("mob1").hidden = true;
  document.getElementById("mob2").hidden = true;
  document.getElementById("mob3").hidden = true;
  document.body.style.backgroundImage = "url(img/gameOver.png)";
}


function victoire() {
  document.getElementById("vieHeros1").hidden=true;
  document.getElementById("pdvPerso1").hidden=true;
  document.getElementById("vaisseau1").hidden=true;
  document.getElementById("bouton1_0").hidden = true;
  document.getElementById("bouton1_1").hidden = true;
  document.getElementById("bouton1_2").hidden = true;

  document.getElementById("vieHeros2").hidden=true;
  document.getElementById("pdvPerso2").hidden=true;
  document.getElementById("vaisseau2").hidden=true;
  document.getElementById("bouton2_0").hidden = true;
  document.getElementById("bouton2_1").hidden = true;
  document.getElementById("bouton2_2").hidden = true;

  document.getElementById("vieHeros3").hidden=true;
  document.getElementById("pdvPerso3").hidden=true;
  document.getElementById("vaisseau3").hidden=true;
  document.getElementById("bouton3_0").hidden = true;
  document.getElementById("bouton3_1").hidden = true;
  document.getElementById("bouton3_2").hidden = true;

  document.getElementById("vieHeros4").hidden=true;
  document.getElementById("pdvPerso4").hidden=true;
  document.getElementById("vaisseau4").hidden=true;
  document.getElementById("bouton4_0").hidden = true;
  document.getElementById("bouton4_1").hidden = true;
  document.getElementById("bouton4_2").hidden = true;
  document.body.style.backgroundImage = "url(img/victoire.png)";
  
}
