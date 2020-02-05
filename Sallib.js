function ajoutSalles(arraySalles, classDivCree, attrDivCible){
  for(var i = 0; i < arraySalles.length; i++){ //ajout de toutes les 'salles' dans la balise '<div class='salles_libres'/>'
    $('div'+attrDivCible).append('<div class='+ classDivCree +'>'+
      arraySalles[i]+
      '</div>');
  }

  //Mise en page des div de salles libres
  $('div.'+classDivCree).css('height','30px');
  $('div.'+classDivCree).css('width','200px');
  $('div.'+classDivCree).css('margin','0 auto');
  $('div.'+classDivCree).css('margin-bottom','10px');
}



//Menu


//_________________________________________
//Salles libres
var arraySallesLibres = new Array(2305,5051,3207,4405,1104);
ajoutSalles(arraySallesLibres,'salles_libres_salles_div','.salles_libres');
$('div.salles_libres_salles_div').hide();//salles libres cachées par défaut
$('div.salles_libres').click(function(){
  $('div.salles_libres_salles_div').toggle(300);//Permet de cacher et d'afficher les salles libres
  //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
});



//_________________________________________
//Carte

//-------
//RUE
var arrayAmphis = new Array(110,210,160,260,'Marcel Dassault');
ajoutSalles(arrayAmphis,'amphis_carte_rue','.salles_rue_amphis');
$('div.amphis_carte_rue').hide();
$('div.rue').click(function(){
  $('div.amphis_carte_rue').toggle(300);//Permet de cacher et d'afficher les salles libres
  //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
});

var arraySallesRue = new Array(112,113,115,150,151,152);
ajoutSalles(arraySallesRue,'salles_carte_rue','.salles_rue');
$('div.salles_carte_rue').hide();
$('div.rue').click(function(){
  $('div.salles_carte_rue').toggle(300);//Permet de cacher et d'afficher les salles libres
  //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
});

//-------
//EPIS

var arraySallesEpi1 = new Array(1051,1052,1053,1054,1055,1056);
var arraySallesEpi2 = new Array(2051,2052,2053,2054,2055,2056);
var arraySallesEpi3 = new Array(3051,3052,3053,3054,3055,3056);
var arraySallesEpi4 = new Array(4051,4052,4053,4054,4055,4056);
var arraySallesEpi5 = new Array(5051,5052,5053,5054,5055,5056);
var arraySallesEpi6 = new Array(6051,6052,6053,6054,6055,6056);

var arraySallesEpis = new Array(arraySallesEpi1, 
                                arraySallesEpi2,
                                arraySallesEpi3,
                                arraySallesEpi4, 
                                arraySallesEpi5, 
                                arraySallesEpi6);

for(var i = 1; i<7; i++){
  ajoutSalles(arraySallesEpis[i-1] ,'salles_carte_epi'+i ,'#epi_'+i);
  //ajoutSalles(array_des_salles, 
  //            nom_des_balises_rajoutées, 
  //            identifiant_ciblé_pour_rajouter)
}

//EPI1
$('div.salles_carte_epi1').hide();
$('div#epi_1').click(function(){
  $('div.salles_carte_epi1').toggle(300);//Permet de cacher et d'afficher les salles libres
  //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
});


//EPI2
$('div.salles_carte_epi2').hide();
$('div#epi_2').click(function(){
  $('div.salles_carte_epi2').toggle(300);//Permet de cacher et d'afficher les salles libres
  //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
});

//EPI3
$('div.salles_carte_epi3').hide();
$('div#epi_3').click(function(){
  $('div.salles_carte_epi3').toggle(300);//Permet de cacher et d'afficher les salles libres
  //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
});

//EPI4
$('div.salles_carte_epi4').hide();
$('div#epi_4').click(function(){
  $('div.salles_carte_epi4').toggle(300);//Permet de cacher et d'afficher les salles libres
  //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
});

//EPI5
$('div.salles_carte_epi5').hide();
$('div#epi_5').click(function(){
  $('div.salles_carte_epi5').toggle(300);//Permet de cacher et d'afficher les salles libres
  //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
});

//EPI6
$('div.salles_carte_epi6').hide();
$('div#epi_6').click(function(){
  $('div.salles_carte_epi6').toggle(300);//Permet de cacher et d'afficher les salles libres
  //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
});





//UN PEU DE MISE EN PAGE
for(var i = 2; i<=6; i++){
  $('div#epi_'+i).css('border-left','2px solid whitesmoke');
}


alert('LES NUMEROS DE SALLES NE SONT PAS CORRECTS\nCE SITE EST EN COURS DE CONSTRUCTION\n\n\nTEST DE MISE A JOUR');


//Test de connexion à ADE
function ADEconnect (){
/*	var currentdate = new Date(); // pour les logs, AAAA.MM.JJ-HH:MM:SS
	console.log(getDate(currentdate)+getTime(currentdate));*/
	const baseURL = 'https://planif.esiee.fr/jsp/webapi';
	const ip = 'planif.esiee.fr';
	const port ='8443';
	const logger = '?function=connect&login=lecteur1&password=';

	// Connexion à ADE (connect) :
	const loggin = 'https://'+ ip +':'+ port +'/jsp/webapi'+logger;
	console.log(loggin);

	// Récupérer sessionId :
	var sessionId;
	var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
	fetch(proxyUrl + loggin)
	  .then(data => {
    		let parser = new DOMParser();	
       		let xmlResponse = parser.parseFromString(data, "application/xml");
		console.log("Fichier XML importé :"); 
		console.log(xmlResponse); 
		// Récupération de sessionId :
		let session = xmlResponse.getElementsByTagName('session');
		console.log(session);
		let session = xml.getElementsByTagName('session');
		sessionId = session[0].getAttribute('id');
		console.log(sessionId);
	  })
	  .catch(e => {
	    console.log(e);
	    return e;
	  });	
	console.log('Connexion à ADE');
	
	/*
	const disconnect = 'https://'+ ip +':'+ port +'/jsp/webapi?sessionId='+sessionId +'&function=disconnect';
	fetch(proxyUrl + disconnect);
	console.log("Déconnexion de session ADE");*/
}

ADEconnect();
