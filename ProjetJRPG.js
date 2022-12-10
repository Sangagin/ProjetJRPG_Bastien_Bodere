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



//récup de la barre de progress des héros
manaHeros1Recup = document.getElementById("manaHeros1");
manaHeros2Recup = document.getElementById("manaHeros2");
manaHeros3Recup = document.getElementById("manaHeros3");
manaHeros4Recup = document.getElementById("manaHeros4");

//récupération des images des vaisseaux
imgVaisseau1 = document.getElementById("vaisseau1");
imgVaisseau2 = document.getElementById("vaisseau2");
imgVaisseau3 = document.getElementById("vaisseau3");
imgVaisseau4 = document.getElementById("vaisseau4");



//images des mobs pour selection
monstre1 = document.getElementById("mob1");
monstre2 = document.getElementById("mob2");
monstre3 = document.getElementById("mob3");



//récup des vies des enemies
vieMonstre1Recup = document.getElementById("pdvMob1");
vieMonstre2Recup = document.getElementById("pdvMob2");
vieMonstre3Recup = document.getElementById("pdvMob3");


//récupération des boutons du vaisseau 1
bouttonAtk1 = document.getElementById("bouton1_0");
bouttonDef1 = document.getElementById("bouton1_1");
bouttonSpe1 = document.getElementById("bouton1_2");

//récupération des boutons du vaisseau 2
bouttonAtk2 = document.getElementById("bouton2_0");
bouttonDef2 = document.getElementById("bouton2_1");
bouttonSpe2 = document.getElementById("bouton2_2");

//récupération des boutons du vaisseau 3
bouttonAtk3 = document.getElementById("bouton3_0");
bouttonDef3 = document.getElementById("bouton3_1");
bouttonSpe3 = document.getElementById("bouton3_2");

//récupération des boutons du vaisseau 4
bouttonAtk4 = document.getElementById("bouton4_0");
bouttonDef4 = document.getElementById("bouton4_1");
bouttonSpe4 = document.getElementById("bouton4_2");

//récupde la zone de message
afficheAction = document.getElementById("afficheAction");



var tourActuel = 0;
herosVivants = 4;
monstresVivants = 3;
tourMob=1;
mobSelection=1;
defencePerso1 = false;
defencePerso2 = false;
defencePerso3 = false;
defencePerso4 = false;
monstre1vivant = true;
monstre2vivant = true;
monstre3vivant = true;

boutonUtilisePrecedentHeros1=999
boutonUtilisePrecedentHeros2=999
boutonUtilisePrecedentHeros3=999
boutonUtilisePrecedentHeros4=999


//lancement de l'init (cache juste les boutons en trop)
window.onload = intro;








function intro() {

  //on cache les boutons non désirés et des stats de vies des ennemis au début de la page
  bouttonAtk2.hidden = true;
  bouttonDef2.hidden = true;
  bouttonSpe2.hidden = true;
  bouttonAtk3.hidden = true;
  bouttonDef3.hidden = true;
  bouttonSpe3.hidden = true;
  bouttonAtk4.hidden = true;
  bouttonDef4.hidden = true;
  bouttonSpe4.hidden = true;
 
  document.getElementById("statsMob1").hidden = true; 
  document.getElementById("statsMob2").hidden = true; 
  document.getElementById("statsMob3").hidden = true; 


  afficheAction.innerHTML = "Bienvenue pilotes !" + "</br>" + "En tant que fine fleur de notre armée galactique, veuillez détruire ces aliens !";


}


//detection des appuis boutons
bouttonAtk1.addEventListener('click', boutonAttaquePerso1)
bouttonDef1.addEventListener('click', boutonDefendrePerso1)
bouttonSpe1.addEventListener('click', boutonSpePerso1)

bouttonAtk2.addEventListener('click', boutonAttaquePerso2)
bouttonDef2.addEventListener('click', boutonDefendrePerso2)
bouttonSpe2.addEventListener('click', boutonSpePerso2)

bouttonAtk3.addEventListener('click', boutonAttaquePerso3)
bouttonDef3.addEventListener('click', boutonDefendrePerso3)
bouttonSpe3.addEventListener('click', boutonSpePerso3)


bouttonAtk4.addEventListener('click', boutonAttaquePerso4)
bouttonDef4.addEventListener('click', boutonDefendrePerso4)
bouttonSpe4.addEventListener('click', boutonSpePerso4)


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
  //mise en buffer de l'action utilisée pour le tour prochain
  boutonUtilisePrecedentHeros1=0;
  console.log("action utilisée : " + boutonUtilisePrecedentHeros1);
  imgVaisseau1.src = "img/anims/tirVaisseaux/tir_vaisseau_1.gif"
  //on attends la fin du gif en désactivant tous les boutons, puis on les réactive et on passe au tour suivant
  bouttonAtk1.disabled=true;
  bouttonDef1.disabled=true;
  bouttonSpe1.disabled=true;
  setTimeout(function(){
    imgVaisseau1.src="img/vaisseau1.png"; 
    finTourPerso1();
    bouttonAtk1.disabled=false;
    bouttonDef1.disabled=false;
    bouttonSpe1.disabled=false;
        
  },1500);
  console.log("c'est le tour du héros " + tourActuel);

}

//bouton attaque perso 2

function boutonAttaquePerso2() {

  degatsSurMonstres();
  tourActuel ++;
  //mise en buffer de l'action utilisée pour le tour prochain
  boutonUtilisePrecedentHeros2=0;
  console.log("action utilisée : " + boutonUtilisePrecedentHeros2);
  document.getElementById("vaisseau2").src = "img/anims/tirVaisseaux/tir_vaisseau_2.gif"
  //on attends la fin du gif en désactivant tous les boutons, puis on les réactive et on passe au tour suivant
  bouttonAtk2.disabled=true;
  bouttonDef2.disabled=true;
  bouttonSpe2.disabled=true;
  setTimeout(function(){
    document.getElementById("vaisseau2").src="img/vaisseau2.png"; 
    finTourPerso2();
    bouttonAtk2.disabled=false;
    bouttonDef2.disabled=false;
    bouttonSpe2.disabled=false;
        
  },1500);  
  
  console.log("c'est le tour du héros " + tourActuel);

}

//bouton attaque perso 3

function boutonAttaquePerso3() {

  degatsSurMonstres();
  tourActuel ++;
  //mise en buffer de l'action utilisée pour le tour prochain
  boutonUtilisePrecedentHeros3=0;
  document.getElementById("vaisseau3").src = "img/anims/tirVaisseaux/tir_vaisseau_3.gif"
  //on attends la fin du gif en désactivant tous les boutons, puis on les réactive et on passe au tour suivant
  bouttonAtk3.disabled=true;
  bouttonDef3.disabled=true;
  bouttonSpe3.disabled=true;
  setTimeout(function(){
    document.getElementById("vaisseau3").src="img/vaisseau3.png"; 
    finTourPerso3();
    bouttonAtk3.disabled=false;
    bouttonDef3.disabled=false;
    bouttonSpe3.disabled=false;
        
  },1500);  
  console.log("c'est le tour du héros " + tourActuel);

}

//bouton attaque perso 4

function boutonAttaquePerso4() {

  degatsSurMonstres();
  tourActuel ++;
  //mise en buffer de l'action utilisée pour le tour prochain
  boutonUtilisePrecedentHeros4=0;
  document.getElementById("vaisseau4").src = "img/anims/tirVaisseaux/tir_vaisseau_4.gif"
  //on attends la fin du gif en désactivant tous les boutons, puis on les réactive et on passe au tour suivant
  bouttonAtk4.disabled=true;
  bouttonDef4.disabled=true;
  bouttonSpe4.disabled=true;
  setTimeout(function(){
    document.getElementById("vaisseau4").src="img/vaisseau4.png"; 
    finTourPerso4();
    bouttonAtk4.disabled=false;
    bouttonDef4.disabled=false;
    bouttonSpe4.disabled=false;
        
  },1500);  
  console.log("c'est le tour du héros " + tourActuel);

}




//bouton défendre
function boutonDefendrePerso1() {
  afficheAction.innerHTML = "Vous déployez votre bouclier et recevrez motié moins de dégats si les ennemis vous attaquent ce tour." ;
  //activation de la défense
  defencePerso1=true;
  tourActuel ++;
  boutonUtilisePrecedentHeros1=1;
  finTourPerso1();
  console.log("c'est le tour du héros " + tourActuel);
}

function boutonDefendrePerso2() {
  afficheAction.innerHTML = "Vous déployez votre bouclier et recevrez motié moins de dégats si les ennemis vous attaquent ce tour." ;
  defencePerso2=true;
  tourActuel ++;
  boutonUtilisePrecedentHeros2=1;
  finTourPerso2();
  console.log("c'est le tour du héros " + tourActuel);
}

function boutonDefendrePerso3() {
  afficheAction.innerHTML = "Vous déployez votre bouclier et recevrez motié moins de dégats si les ennemis vous attaquent ce tour." ;
  defencePerso3=true;
  tourActuel ++;
  boutonUtilisePrecedentHeros3=1;
  finTourPerso3();
  console.log("c'est le tour du héros " + tourActuel);
}

function boutonDefendrePerso4() {
  afficheAction.innerHTML = "Vous déployez votre bouclier et recevrez motié moins de dégats si les ennemis vous attaquent ce tour." ;
  defencePerso4=true;
  tourActuel ++;
  boutonUtilisePrecedentHeros4=1;
  finTourPerso4();
  console.log("c'est le tour du héros " + tourActuel);
}


//boutons actions spéciales
function boutonSpePerso1() {
  //test s'il reste du mana
  if (manaHeros1Recup.value>=20){
    afficheAction.innerHTML="Vaisseau 1 tire un énorme laser !" +"</br>" + "</br>" + "Inflige 5 de dégats à tous les ennemis !"
    manaHeros1Recup.value=manaHeros1Recup.value-20;
    vieMonstre1Recup.innerHTML = vieMonstre1Recup.innerHTML - 5;
    vieMonstre2Recup.innerHTML = vieMonstre2Recup.innerHTML - 5;
    vieMonstre3Recup.innerHTML = vieMonstre3Recup.innerHTML - 5;
    //test si monstre 1 mort
    if (vieMonstre1Recup.innerHTML <= 0 && monstre1vivant == true) {
      afficheAction.innerHTML = "Félicitation, vous avez vaincu le monstre 1 !";
      document.getElementById("mob1").hidden = true;
      monstresVivants=monstresVivants-1;
      mortMonstre();
      monstre1vivant = false;
    }
    if (vieMonstre2Recup.innerHTML <= 0 && monstre2vivant == true) {
      afficheAction.innerHTML = "Félicitation, vous avez vaincu le monstre 2 !";
      document.getElementById("mob2").hidden = true;
      monstresVivants=monstresVivants-1;
      mortMonstre();
      monstre2vivant = false;

    }
    if (vieMonstre3Recup.innerHTML <= 0 && monstre2vivant == true) {
      afficheAction.innerHTML = "Félicitation, vous avez vaincu le monstre 3 !";
      document.getElementById("mob3").hidden = true;
      monstresVivants=monstresVivants-1;
      mortMonstre();
      monstre3vivant = false;

    }
    tourActuel ++;
    boutonUtilisePrecedentHeros1=2;
    finTourPerso1();
    console.log("c'est le tour du héros " + tourActuel);
  }



}



function boutonSpePerso2() {
  //test s'il reste du mana
  if (manaHeros2Recup.value>=20){
    afficheAction.innerHTML="Vaisseau 2 utilise ses nanobots pour se réparer !" +"</br>" + "</br>" + "Il récupère 10 points de vie !"
    manaHeros2Recup.value=manaHeros2Recup.value-20;
    
    //soin 
    viePerso2Recup.innerHTML = viePerso2Recup.innerHTML - (-10);

    //mise à jour des barres de vie
    rangeHeros2Recup.innerHTML = viePerso2Recup.innerHTML;
    rangeHeros2Recup.value = viePerso2Recup.innerHTML;
    
    //si vie supérieure à 100 après soin, on remet à 100
    if(viePerso2Recup.innerHTML > 100) {
      viePerso2Recup.innerHTML = 100;

      rangeHeros2Recup.innerHTML = 100;
      rangeHeros2Recup.value = 100;

    }
    
    tourActuel ++;
    boutonUtilisePrecedentHeros2=2;
    finTourPerso2();
    console.log("c'est le tour du héros " + tourActuel);
  }



}


function boutonSpePerso3() {
  if (manaHeros2Recup.value>=20){
    afficheAction.innerHTML="Vaisseau 3 active son canon à particule, infligeant 15 dégtas à l'ennemi selectionné !"
    manaHeros3Recup.value=manaHeros3Recup.value-20;

    if (mobSelection==1){
      vieMonstre1Recup.innerHTML = vieMonstre1Recup.innerHTML - 15;
    //test si monstre 1 mort
      if (vieMonstre1Recup.innerHTML <= 0 && monstre1vivant == true) {
        afficheAction.innerHTML = "Félicitation, vous avez vaincu le monstre 1 !";
        document.getElementById("mob1").hidden = true;
        monstresVivants=monstresVivants-1;
        mortMonstre();
        monstre1vivant = false;
      }
    }
  
    if (mobSelection==2){
      vieMonstre2Recup.innerHTML = vieMonstre2Recup.innerHTML - 15;
  
      //test si monstre 2 mort
      if (vieMonstre2Recup.innerHTML <= 0 && monstre2vivant == true) {
        afficheAction.innerHTML = "Félicitation, vous avez vaincu le monstre 2 !";
        document.getElementById("mob2").hidden = true;
        monstresVivants=monstresVivants-1;
        mortMonstre();
        monstre2vivant=false;
      }
    }
    if (mobSelection==3){
      vieMonstre3Recup.innerHTML = vieMonstre3Recup.innerHTML - 15;
  
        
      //test si monstre 3 mort
      if (vieMonstre3Recup.innerHTML <= 0 && monstre3vivant == true) {
        afficheAction.innerHTML = "Félicitation, vous avez vaincu le monstre 3 !";
        document.getElementById("mob3").hidden = true;
        monstresVivants=monstresVivants-1;
        mortMonstre();
        monstre3vivant = false;
      }
    }

    
    tourActuel ++;
    boutonUtilisePrecedentHeros3=2;
    finTourPerso3();
    console.log("c'est le tour du héros " + tourActuel);
  }



}


function boutonSpePerso4() {
  if (manaHeros1Recup.value>=20){
    afficheAction.innerHTML="Vaisseau 4 projette des coques d'urgence, qui protègent ses alliés de la moitié des dégats jusqu'à leur prochain tour !"
    manaHeros4Recup.value=manaHeros4Recup.value-20;

    //activation de toutes les défences, elles seront desactivées à la fin de la prochaine riposte
    defencePerso1=true;
    defencePerso2=true;
    defencePerso3=true;
    defencePerso4=true;

    tourActuel ++;
    boutonUtilisePrecedentHeros4=2;
    finTourPerso4();
    console.log("c'est le tour du héros " + tourActuel);


  }
}


//riposte des monstres

function riposte() {
  
  //calcul des dégats des monstres
  //augmenter le chiffre après * pour augmenter les dégats max et tester les anims de morts, les sélections des héros par les enemis et l'écran de game over
  //si les dégats sont trop important, lance une pseudo boucle infinie au game over qui se résout en quelques secondes mais flood la console
  //et je vois pas d'où ça vient
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
    afficheAction.innerHTML += "</br>" + "</br>" + "Il vous inflige " + degatsMob + " de dégats !";
    //ici on enlève les dégats à la variable de vie du héros, et on actualise sa barre de vie
    viePerso1Recup.innerHTML = viePerso1Recup.innerHTML - degatsMob;
    rangeHeros1Recup.innerHTML = viePerso1Recup.innerHTML;
    rangeHeros1Recup.value = viePerso1Recup.innerHTML;

    //on affiche l'animation en fonction du tour du monstre
    if(tourMob==1){
      imgVaisseau1.src="img/anims/attaquesSurPersos/mob1/vaisseau1Attaque1.gif"
      //on attends la fin du gif
      setTimeout(function(){
        imgVaisseau1.src="img/vaisseau1.png";         
      },1000);
    } else if(tourMob==2){
      imgVaisseau1.src="img/anims/attaquesSurPersos/mob2/vaisseau1Attaque2.gif"
      //on attends la fin du gif
      setTimeout(function(){
        imgVaisseau1.src="img/vaisseau1.png";         
      },1000);
    } else if(tourMob==3){
      imgVaisseau1.src="img/anims/attaquesSurPersos/mob3/vaisseau1Attaque3.gif"
      //on attends la fin du gif
      setTimeout(function(){
        imgVaisseau1.src="img/vaisseau1.png";         
      },1000);
    }

    

    //vérification que perso mort ou pas suite à l'action de riposte
    if (viePerso1Recup.innerHTML <= 0) {
      afficheAction.innerHTML += "Vaisseau 1 détruit !";
      console.log("vaisseau detruit");
      //on fait disparaitre le héros et ses boutons
      bouttonAtk1.hidden=true;
      bouttonDef1.hidden=true;
      bouttonSpe1.hidden=true;
      document.getElementById("vieHeros1").hidden=true;
      document.getElementById("pdvPerso1").hidden=true; 
      manaHeros1Recup.hidden=true;
      imgVaisseau1.src = "img/anims/morts/explosionVaisseau1.gif"
      //on attends la fin du gif
      setTimeout(function(){
        imgVaisseau1.hidden=true;         
      },1500);

      
      //on actualise le nombre de héros vivants
      herosVivants = herosVivants-1;
      if(herosVivants<=0) {
        //test de game over
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

    afficheAction.innerHTML += "</br>" + "</br>" + "Il vous inflige " + degatsMob + " de dégats !";
    //ici on enlève les dégats à la variable de vie du héros, et on actualise sa barre de vie
    viePerso2Recup.innerHTML = viePerso2Recup.innerHTML - degatsMob;
    rangeHeros2Recup.innerHTML = viePerso2Recup.innerHTML;
    rangeHeros2Recup.value = viePerso2Recup.innerHTML;
    defencePerso2=false;
    //on affiche l'animation en fonction du tour du monstre
    if(tourMob==1){
      imgVaisseau2.src="img/anims/attaquesSurPersos/mob1/vaisseau2Attaque1.gif"
      //on attends la fin du gif
      setTimeout(function(){
        imgVaisseau2.src="img/vaisseau2.png";         
      },1000);
    } else if(tourMob==2){
      imgVaisseau2.src="img/anims/attaquesSurPersos/mob2/vaisseau2Attaque2.gif"
      //on attends la fin du gif
      setTimeout(function(){
        imgVaisseau2.src="img/vaisseau2.png";         
      },1000);
    } else if(tourMob==3){
      imgVaisseau2.src="img/anims/attaquesSurPersos/mob3/vaisseau2Attaque3.gif"
      //on attends la fin du gif
      setTimeout(function(){
        imgVaisseau2.src="img/vaisseau2.png";         
      },1000);
    }


    //vérification que perso mort ou pas suite à l'action de riposte
    if (viePerso2Recup.innerHTML <= 0) {
      afficheAction.innerHTML += "Vaisseau 2 détruit !";
      console.log("vaisseau detruit");
      bouttonAtk2.hidden=true;
      bouttonDef2.hidden=true;
      bouttonSpe2.hidden=true;
      document.getElementById("vieHeros2").hidden=true;
      document.getElementById("pdvPerso2").hidden=true;
      manaHeros2Recup.hidden=true;
      document.getElementById("vaisseau2").src = "img/anims/morts/explosionVaisseau2.gif"
      //on attends la fin du gif
      setTimeout(function(){
        document.getElementById("vaisseau2").hidden=true;         
      },1500);


      herosVivants = herosVivants-1;
      
      if(herosVivants<=0) {
        //test de game over
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
    afficheAction.innerHTML += "</br>" + "</br>" + "Il vous inflige " + degatsMob + " de dégats !";
    //ici on enlève les dégats à la variable de vie du héros, et on actualise sa barre de vie
    viePerso3Recup.innerHTML = viePerso3Recup.innerHTML - degatsMob;
    rangeHeros3Recup.innerHTML = viePerso3Recup.innerHTML;
    rangeHeros3Recup.value = viePerso3Recup.innerHTML;
    defencePerso3=false;
    if(tourMob==1){
      imgVaisseau3.src="img/anims/attaquesSurPersos/mob1/vaisseau3Attaque1.gif"
      //on attends la fin du gif
      setTimeout(function(){
        imgVaisseau3.src="img/vaisseau3.png";         
      },1000);
    } else if(tourMob==2){
      imgVaisseau3.src="img/anims/attaquesSurPersos/mob2/vaisseau3Attaque2.gif"
      //on attends la fin du gif
      setTimeout(function(){
        imgVaisseau3.src="img/vaisseau3.png";         
      },1000);
    } else if(tourMob==3){
      imgVaisseau3.src="img/anims/attaquesSurPersos/mob3/vaisseau3Attaque3.gif"
      //on attends la fin du gif
      setTimeout(function(){
        imgVaisseau3.src="img/vaisseau3.png";         
      },1000);
    }

    //vérification que perso mort ou pas suite à l'action de riposte
    if (viePerso3Recup.innerHTML <= 0) {
      afficheAction.innerHTML += "Vaisseau 3 détruit !";
      console.log("vaisseau detruit");
      bouttonAtk3.hidden=true;
      bouttonDef3.hidden=true;
      bouttonSpe3.hidden=true;
      document.getElementById("vieHeros3").hidden=true;
      document.getElementById("pdvPerso3").hidden=true;
      manaHeros3Recup.hidden=true;
      herosVivants = herosVivants-1;
      document.getElementById("vaisseau3").src = "img/anims/morts/explosionVaisseau3.gif"
      //on attends la fin du gif
      setTimeout(function(){
        document.getElementById("vaisseau3").hidden=true;         
      },1500);
      if(herosVivants<=0) {
        //test de game over
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
    afficheAction.innerHTML += "</br>" + "</br>" + "Il vous inflige " + degatsMob + " de dégats !";
    //ici on enlève les dégats à la variable de vie du héros, et on actualise sa barre de vie
    viePerso4Recup.innerHTML = viePerso4Recup.innerHTML - degatsMob;
    rangeHeros4Recup.innerHTML = viePerso4Recup.innerHTML;
    rangeHeros4Recup.value = viePerso4Recup.innerHTML;
    defencePerso4=false;
    if(tourMob==1){
      imgVaisseau4.src="img/anims/attaquesSurPersos/mob1/vaisseau4Attaque1.gif"
      //on attends la fin du gif
      setTimeout(function(){
        imgVaisseau4.src="img/vaisseau4.png";         
      },1000);
    } else if(tourMob==2){
      imgVaisseau4.src="img/anims/attaquesSurPersos/mob2/vaisseau4Attaque2.gif"
      //on attends la fin du gif
      setTimeout(function(){
        imgVaisseau4.src="img/vaisseau4.png";         
      },1000);
    } else if(tourMob==3){
      imgVaisseau4.src="img/anims/attaquesSurPersos/mob3/vaisseau4Attaque3.gif"
      //on attends la fin du gif
      setTimeout(function(){
        imgVaisseau4.src="img/vaisseau4.png";         
      },1000);
    }

    //vérification que perso mort ou pas suite à l'action de riposte
    if (viePerso4Recup.innerHTML <= 0) {
      afficheAction.innerHTML += "Vaisseau 4 détruit !";
      console.log("vaisseau detruit");
      bouttonAtk4.hidden=true;
      bouttonDef4.hidden=true;
      bouttonSpe4.hidden=true;
      document.getElementById("vieHeros4").hidden=true;
      document.getElementById("pdvPerso4").hidden=true;
      manaHeros4Recup.hidden=true;
      herosVivants = herosVivants-1;
      document.getElementById("vaisseau4").src = "img/anims/morts/explosionVaisseau4.gif"
      //on attends la fin du gif
      setTimeout(function(){
        document.getElementById("vaisseau4").hidden=true;         
      },1500);
      
      if(herosVivants<=0) {
        //test de game over
        console.log("GAME OVER");
        gameOver();
      }

    } 
  } 

  //si le héros est mort mais qu'il a quand même été visé aléatoirement, on relance la fonction de riposte, pour qu'un autre héros soit visé
  else if (herosVise == 4 && viePerso4Recup.innerHTML <= 0) {
    riposte();

  }

  //on réinitialise les défences
  defencePerso1=false;
  defencePerso2=false;
  defencePerso3=false;
  defencePerso4=false;

}


function degatsSurMonstres() {

  //calcul des dégats aléatoires
  degats =Math.floor(Math.random() * 100) + 1;
  afficheAction.innerHTML = "Vous avez infligé " + degats + " points de dégats au monstre" ;

  //action des dégats en fonction de l'ennemi visé
  if (mobSelection==1){
    vieMonstre1Recup.innerHTML = vieMonstre1Recup.innerHTML - degats;
  //test si monstre 1 mort
    if (vieMonstre1Recup.innerHTML <= 0 && monstre1vivant == true) {
      afficheAction.innerHTML = "Félicitation, vous avez vaincu le monstre 1 !";
      document.getElementById("mob1").hidden = true;
      //on actualise le nombre de monstres estants
      monstresVivants=monstresVivants-1;
      mortMonstre();
      //on déclare le monstre mort, pour qu'il ne soit pas pris en compte dans l'utilisation du spécial du héros 1
      monstre1vivant = false;
    }
  }

  if (mobSelection==2){
    vieMonstre2Recup.innerHTML = vieMonstre2Recup.innerHTML - degats;

    //test si monstre 2 mort
    if (vieMonstre2Recup.innerHTML <= 0 && monstre2vivant == true) {
      afficheAction.innerHTML = "Félicitation, vous avez vaincu le monstre 2 !";
      document.getElementById("mob2").hidden = true;
      monstresVivants=monstresVivants-1;
      mortMonstre();
      //on déclare le monstre mort, pour qu'il ne soit pas pris en compte dans l'utilisation du spécial du héros 1
      monstre2vivant=false;
    }
  }
  if (mobSelection==3){
    vieMonstre3Recup.innerHTML = vieMonstre3Recup.innerHTML - degats;

      
    //test si monstre 3 mort
    if (vieMonstre3Recup.innerHTML <= 0 && monstre3vivant == true) {
      afficheAction.innerHTML = "Félicitation, vous avez vaincu le monstre 3 !";
      document.getElementById("mob3").hidden = true;
      monstresVivants=monstresVivants-1;
      mortMonstre();
      //on déclare le monstre mort, pour qu'il ne soit pas pris en compte dans l'utilisation du spécial du héros 1
      monstre3vivant = false;
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
    //si tous les monstres sont tués, c'est gagné !
    console.log("tout gagné");
    victoire();
    afficheAction.innerHTML = "Victoire !";
    //exit pour quitter le programme, et vu que les boutons sont cachés par la fonction victoire, on peut plus relancer, comme prévu
    exit()

    }

}



function finTourPerso1() {

  bouttonAtk1.hidden = true;
  bouttonDef1.hidden = true;
  bouttonSpe1.hidden = true;
  imgVaisseau1.src = "img/vaisseau1.png"


  if(tourActuel==herosVivants) {
    console.log("c'est la RIPOSTE");

    appelRiposte();

    
    tourActuel=0;

  }


  if(viePerso2Recup.innerHTML >0) {

    bouttonAtk2.hidden = false;
    bouttonDef2.hidden = false;
    bouttonSpe2.hidden = false;
    document.getElementById("vaisseau2").src = "img/vaisseau2Surbrillance.png"
    if(boutonUtilisePrecedentHeros2==0) {
      bouttonAtk2.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros2==1) {
      bouttonDef2.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros2==2) {
      bouttonSpe2.hidden = true;
    }


  }
  else if (viePerso3Recup.innerHTML > 0){
    bouttonAtk3.hidden = false;
    bouttonDef3.hidden = false;
    bouttonSpe3.hidden = false;
    document.getElementById("vaisseau3").src = "img/vaisseau3Surbrillance.png"
    if(boutonUtilisePrecedentHeros3==0) {
      bouttonAtk3.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros3==1) {
      bouttonDef3.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros3==2) {
      bouttonSpe3.hidden = true;
    }

  }
  else if (viePerso4Recup.innerHTML > 0){
    bouttonAtk4.hidden = false;
    bouttonDef4.hidden = false;
    bouttonSpe4.hidden = false;
    document.getElementById("vaisseau4").src = "img/vaisseau4Surbrillance.png"
    if(boutonUtilisePrecedentHeros4==0) {
      bouttonAtk4.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros4==1) {
      bouttonDef4.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros4==2) {
      bouttonSpe4.hidden = true;
    }

  }  
  else if (viePerso1Recup.innerHTML > 0){
    //si jamais il ne reste plus que le héros 1 c'est de nouveau son tour
    bouttonAtk1.hidden = false;
    bouttonDef1.hidden = false;
    bouttonSpe1.hidden = false;
    imgVaisseau1.src = "img/vaisseau1Surbrillance.png"
    if(boutonUtilisePrecedentHeros1==0) {
      bouttonAtk1.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros1==1) {
      bouttonDef1.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros1==2) {
      bouttonSpe1.hidden = true;
    }

  }
  else {
    afficheAction.innerHTML = "GAME OVER !"
  }


}


function finTourPerso2() {
  bouttonAtk2.hidden = true;
  bouttonDef2.hidden = true;
  bouttonSpe2.hidden = true;
  document.getElementById("vaisseau2").src = "img/vaisseau2.png"


  if(tourActuel==herosVivants) {
    //appel riposte
    console.log("c'est la RIPOSTE");
    appelRiposte();

    tourActuel=0;



  }


  if (viePerso3Recup.innerHTML > 0){
    bouttonAtk3.hidden = false;
    bouttonDef3.hidden = false;
    bouttonSpe3.hidden = false;
    document.getElementById("vaisseau3").src = "img/vaisseau3Surbrillance.png"
    if(boutonUtilisePrecedentHeros3==0) {
      bouttonAtk3.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros3==1) {
      bouttonDef3.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros3==2) {
      bouttonSpe3.hidden = true;
    }

  }
  else if (viePerso4Recup.innerHTML > 0){
    bouttonAtk4.hidden = false;
    bouttonDef4.hidden = false;
    bouttonSpe4.hidden = false;
    document.getElementById("vaisseau4").src = "img/vaisseau4Surbrillance.png"
    if(boutonUtilisePrecedentHeros4==0) {
      bouttonAtk4.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros4==1) {
      bouttonDef4.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros4==2) {
      bouttonSpe4.hidden = true;
    }

  }  
  else if (viePerso1Recup.innerHTML > 0){
    bouttonAtk1.hidden = false;
    bouttonDef1.hidden = false;
    bouttonSpe1.hidden = false;
    imgVaisseau1.src = "img/vaisseau1Surbrillance.png"
    if(boutonUtilisePrecedentHeros1==0) {
      bouttonAtk1.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros1==1) {
      bouttonDef1.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros1==2) {
      bouttonSpe1.hidden = true;
    }

  }
  else if(viePerso2Recup.innerHTML >0) {
    //si jamais il ne reste plus que le héros 2 c'est de nouveau son tour
    bouttonAtk2.hidden = false;
    bouttonDef2.hidden = false;
    bouttonSpe2.hidden = false;
    document.getElementById("vaisseau2").src = "img/vaisseau2Surbrillance.png"
    if(boutonUtilisePrecedentHeros2==0) {
      bouttonAtk2.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros2==1) {
      bouttonDef2.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros2==2) {
      bouttonSpe2.hidden = true;
    }


  }
  else {
    afficheAction.innerHTML = "GAME OVER !"
  }
}

function finTourPerso3() {

  bouttonAtk3.hidden = true;
  bouttonDef3.hidden = true;
  bouttonSpe3.hidden = true;
  document.getElementById("vaisseau3").src = "img/vaisseau3.png"



  if(tourActuel==herosVivants) {
    //appel riposte
    console.log("c'est la RIPOSTE");
    appelRiposte();

    tourActuel=0;


  }

  if (viePerso4Recup.innerHTML > 0){
    bouttonAtk4.hidden = false;
    bouttonDef4.hidden = false;
    bouttonSpe4.hidden = false;
    document.getElementById("vaisseau4").src = "img/vaisseau4Surbrillance.png"
    if(boutonUtilisePrecedentHeros4==0) {
      bouttonAtk4.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros4==1) {
      bouttonDef4.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros4==2) {
      bouttonSpe4.hidden = true;
    }

  }  
  else if (viePerso1Recup.innerHTML > 0){
    bouttonAtk1.hidden = false;
    bouttonDef1.hidden = false;
    bouttonSpe1.hidden = false;
    imgVaisseau1.src = "img/vaisseau1Surbrillance.png"
    if(boutonUtilisePrecedentHeros1==0) {
      bouttonAtk1.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros1==1) {
      bouttonDef1.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros1==2) {
      bouttonSpe1.hidden = true;
    }

  }
  else if(viePerso2Recup.innerHTML >0) {
    bouttonAtk2.hidden = false;
    bouttonDef2.hidden = false;
    bouttonSpe2.hidden = false;
    document.getElementById("vaisseau2").src = "img/vaisseau2Surbrillance.png"
    if(boutonUtilisePrecedentHeros2==0) {
      bouttonAtk2.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros2==1) {
      bouttonDef2.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros2==2) {
      bouttonSpe2.hidden = true;
    }


  }
  else if (viePerso3Recup.innerHTML > 0){
        //si jamais il ne reste plus que le héros 3 c'est de nouveau son tour
        bouttonAtk3.hidden = false;
        bouttonDef3.hidden = false;
        bouttonSpe3.hidden = false;
    document.getElementById("vaisseau3").src = "img/vaisseau3Surbrillance.png"
    if(boutonUtilisePrecedentHeros3==0) {
      bouttonAtk3.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros3==1) {
      bouttonDef3.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros3==2) {
      bouttonSpe3.hidden = true;
    }

  }
  else {
    afficheAction.innerHTML = "GAME OVER !"
  }

}

function finTourPerso4() {
  bouttonAtk4.hidden = true;
  bouttonDef4.hidden = true;
  bouttonSpe4.hidden = true;
  document.getElementById("vaisseau4").src = "img/vaisseau4.png"


  if(tourActuel==herosVivants) {
    //appel riposte

    appelRiposte();

    
    console.log("c'est la RIPOSTE");
    tourActuel=0;

  }


  if (viePerso1Recup.innerHTML > 0){
    bouttonAtk1.hidden = false;
    bouttonDef1.hidden = false;
    bouttonSpe1.hidden = false;
    imgVaisseau1.src = "img/vaisseau1Surbrillance.png"
    if(boutonUtilisePrecedentHeros1==0) {
      bouttonAtk1.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros1==1) {
      bouttonDef1.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros1==2) {
      bouttonSpe1.hidden = true;
    }

  }
  else if(viePerso2Recup.innerHTML >0) {
    bouttonAtk2.hidden = false;
    bouttonDef2.hidden = false;
    bouttonSpe2.hidden = false;
    document.getElementById("vaisseau2").src = "img/vaisseau2Surbrillance.png"
    if(boutonUtilisePrecedentHeros2==0) {
      bouttonAtk2.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros2==1) {
      bouttonDef2.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros2==2) {
      bouttonSpe2.hidden = true;
    }


  }
  else if (viePerso3Recup.innerHTML > 0){
    bouttonAtk3.hidden = false;
    bouttonDef3.hidden = false;
    bouttonSpe3.hidden = false;
    document.getElementById("vaisseau3").src = "img/vaisseau3Surbrillance.png"
    if(boutonUtilisePrecedentHeros3==0) {
      bouttonAtk3.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros3==1) {
      bouttonDef3.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros3==2) {
      bouttonSpe3.hidden = true;
    }

  }
  else if (viePerso4Recup.innerHTML > 0){
    //si jamais il ne reste plus que le héros 4 c'est de nouveau son tour
    bouttonAtk4.hidden = false;
    bouttonDef4.hidden = false;
    bouttonSpe4.hidden = false;
    document.getElementById("vaisseau4").src = "img/vaisseau4Surbrillance.png"
    if(boutonUtilisePrecedentHeros4==0) {
      bouttonAtk4.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros4==1) {
      bouttonDef4.hidden = true;
    }
    else if(boutonUtilisePrecedentHeros4==2) {
      bouttonSpe4.hidden = true;
    }

  }  
  else {
    afficheAction.innerHTML = "GAME OVER !"
  }

}

function appelRiposte(){
  //on désactive tous les boutons le temps de l'anim de riposte
  //il y a une méthode qui fait ça en une seule ligne, mais je n'arrive pas à la faire fonctionner

  desacBoutons();
  
  //si le monstre 1 est encore vivant, on fait sont anim puis on appelle la fonction de dégats de riposte
  if(monstre1vivant){
    tourMob=1;
    afficheAction.innerHTML += "</br>" + "</br>" + "Le Triangle Impossible riposte !";
    monstre1.src="img/monstre1Atk.png";
    setTimeout(function(){
      monstre1.src="img/monstre1.png"; 
      setTimeout(function(){
        monstre1.src="img/monstre1Atk.png"; 
        setTimeout(function(){
          monstre1.src="img/monstre1.png"; 
          riposte()

          //on vérifie ensuite si le monstre 2 est aussi vivant, on fait sont anim puis on appelle la fonction de dégats de riposte

          if(monstre2vivant){
            tourMob=2;
            afficheAction.innerHTML += "</br>" + "</br>" + "La Gueule de l'Enfer riposte !";
            monstre2.src="img/monstre3Atk.png";
            setTimeout(function(){
              monstre2.src="img/monstre3.png"; 
              setTimeout(function(){
                monstre2.src="img/monstre3Atk.png"; 
                setTimeout(function(){
                  monstre2.src="img/monstre3.png"; 
                  riposte()

                  //on vérifie ensuite si le monstre 3 est aussi vivant, on fait sont anim puis on appelle la fonction de dégats de riposte

                  if(monstre3vivant){
                    tourMob=3;
                    afficheAction.innerHTML += "</br>" + "</br>" + "L'Observateur Implacable riposte !";
                    monstre3.src="img/monstre2Atk.png";
                    setTimeout(function(){
                      monstre3.src="img/monstre2.png"; 
                      setTimeout(function(){
                        monstre3.src="img/monstre2Atk.png"; 
                        setTimeout(function(){
                          monstre3.src="img/monstre2.png"; 
                          riposte()

                          //et on réactive les boutons, sinon on est bloqués !
                          acBoutons();


                        },300);
                      },300);
                    },300);
                  } else {
                    //situation ou seul le monstre 1 et 2 sont vivant, on réactive les boutons
                    acBoutons();
                  }



                },300);
              },300);
            },300);
          }

          //on vérifie si le monstre 2 est mort mais que le monstre 3 est vivant
          if(monstre2vivant==false && monstre3vivant==true){
            tourMob=3;
            afficheAction.innerHTML += "</br>" + "</br>" + "L'Observateur Implacable riposte !";
            monstre3.src="img/monstre2Atk.png";
            setTimeout(function(){
              monstre3.src="img/monstre2.png"; 
              setTimeout(function(){
                monstre3.src="img/monstre2Atk.png"; 
                setTimeout(function(){
                  monstre3.src="img/monstre2.png"; 
                  riposte()

                  //et on réactive les boutons, sinon on est bloqués !
                  acBoutons();


                },300);
              },300);
            },300);
          } else {
            //situation ou seul le monstre 1 et 2 sont vivant, on réactive les boutons
            acBoutons();
          }

        },300);
      },300);
    },300);

  }


  else if(monstre1vivant==false && monstre2vivant==true){
    //si le monstre 1 n'est pas vivant, on vérifie si le monstre 2 l'est toujours, et on fait la même chose qu'au dessus, sans passer par le mob1
    tourMob=2;
    afficheAction.innerHTML += "</br>" + "</br>" + "La Gueule de l'Enfer riposte !";
    monstre2.src="img/monstre3Atk.png";
    setTimeout(function(){
      monstre2.src="img/monstre3.png"; 
      setTimeout(function(){
        monstre2.src="img/monstre3Atk.png"; 
        setTimeout(function(){
          monstre2.src="img/monstre3.png"; 
          riposte()

          //on vérifie ensuite si le monstre 3 est aussi vivant, on fait sont anim puis on appelle la fonction de dégats de riposte

          if(monstre3vivant){
            tourMob=3;
            afficheAction.innerHTML += "</br>" + "</br>" + "L'Observateur Implacable riposte !";
            monstre3.src="img/monstre2Atk.png";
            setTimeout(function(){
              monstre3.src="img/monstre2.png"; 
              setTimeout(function(){
                monstre3.src="img/monstre2Atk.png"; 
                setTimeout(function(){
                  monstre3.src="img/monstre2.png"; 
                  riposte()

                  //et on réactive les boutons, sinon on est bloqués !
                  acBoutons();


                },300);
              },300);
            },300);
          } else {
            //situation ou seul le monstre 2 est vivant, on réactive les boutons
            acBoutons();
          }



        },300);
      },300);
    },300);  }


  //si les monstre 1 et 2 ne sont pas vivant, on vérifie si le monstre 3 l'est toujours, et on fait la même chose qu'au dessus, sans passer par les mob 1 et 2

  else if(monstre1vivant==false && monstre2vivant==false && monstre3vivant==true){
    //situation ou seul le monstre 3 est encore vivant
    tourMob=3;
    afficheAction.innerHTML += "</br>" + "</br>" + "L'Observateur Implacable riposte !";
    monstre3.src="img/monstre2Atk.png";
    setTimeout(function(){
      monstre3.src="img/monstre2.png"; 
      setTimeout(function(){
        monstre3.src="img/monstre2Atk.png"; 
        setTimeout(function(){
          monstre3.src="img/monstre2.png"; 
          riposte()

          //et on réactive les boutons, sinon on est bloqués !
          acBoutons();


        },300);
      },300);
    },300);

  } else {
    //situation où seul le monstre 1 est encore vivant
    acBoutons();
  }


}

function acBoutons(){
  bouttonAtk1.disabled=false;
  bouttonDef1.disabled=false;
  bouttonSpe1.disabled=false;
  bouttonAtk2.disabled=false;
  bouttonDef2.disabled=false;
  bouttonSpe2.disabled=false;
  bouttonAtk3.disabled=false;
  bouttonDef3.disabled=false;
  bouttonSpe3.disabled=false;
  bouttonAtk4.disabled=false;
  bouttonDef4.disabled=false;
  bouttonSpe4.disabled=false;

}

function desacBoutons(){
  bouttonAtk1.disabled=true;
  bouttonDef1.disabled=true;
  bouttonSpe1.disabled=true;
  bouttonAtk2.disabled=true;
  bouttonDef2.disabled=true;
  bouttonSpe2.disabled=true;
  bouttonAtk3.disabled=true;
  bouttonDef3.disabled=true;
  bouttonSpe3.disabled=true;
  bouttonAtk4.disabled=true;
  bouttonDef4.disabled=true;
  bouttonSpe4.disabled=true;
  
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
  imgVaisseau1.hidden=true;
  bouttonAtk1.hidden = true;
  bouttonDef1.hidden = true;
  bouttonSpe1.hidden = true;

  document.getElementById("vieHeros2").hidden=true;
  document.getElementById("pdvPerso2").hidden=true;
  document.getElementById("vaisseau2").hidden=true;
  bouttonAtk2.hidden = true;
  bouttonDef2.hidden = true;
  bouttonSpe2.hidden = true;

  document.getElementById("vieHeros3").hidden=true;
  document.getElementById("pdvPerso3").hidden=true;
  document.getElementById("vaisseau3").hidden=true;
  bouttonAtk3.hidden = true;
  bouttonDef3.hidden = true;
  bouttonSpe3.hidden = true;

  document.getElementById("vieHeros4").hidden=true;
  document.getElementById("pdvPerso4").hidden=true;
  document.getElementById("vaisseau4").hidden=true;
  bouttonAtk4.hidden = true;
  bouttonDef4.hidden = true;
  bouttonSpe4.hidden = true;
  document.body.style.backgroundImage = "url(img/victoire.png)";
  manaHeros1Recup.hidden = true;
  manaHeros2Recup.hidden = true;
  manaHeros3Recup.hidden = true;
  manaHeros4Recup.hidden = true;


  

}


