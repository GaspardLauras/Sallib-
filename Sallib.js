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



// Partie requêtes
/*
    Logs
*/
function getDate (currentD){
    return currentD.getFullYear()+ "." +((currentD.getMonth()+1)<10?"0":"")+ (currentD.getMonth()+1) + "." + (currentD.getDate()<10?"0":"") + currentD.getDate();
}	
function getTime (currentD){
    return (currentD.getHours()<10?"0":"") + currentD.getHours()+ ":" +(currentD.getMinutes()<10?"0":"") + currentD.getMinutes()+ ":" + (currentD.getSeconds()<10?"0":"") + currentD.getSeconds();
}
// Journalisation des requêtes :
function setLog (functionId, params, duration){
    // Initialisation objet temporel :
    let currentDate = new Date();  
    // Date et heure, format [AAAA.MM.JJ - HH:MM:SS], nom de la fonction utilisée :
    var logger = "[" + getDate(currentDate) + " - " + getTime(currentDate) + "] : " + "Function {" + functionId + "} | Parameters {"; 

    // Valeur des paramètres de la requête :
    debut = true;
    for(var [key, value] of params){
	logger = logger + (debut==false?", ": "") + key + "="  + value;
	if (debut==true) debut=false;
    }

    // Ajout durée de la requête :
    logger = logger + "} " + "Duration {" + duration + "ms}";
    // Journaliser :
    return logger;
}
/*
    Requêtes HTTP
*/
// Déconnexion de session ADE
function disconnection(){
	    const disconnect = baseURL + '?sessionId='+ sessionId +'&function=disconnect';
	    // Requête http :
	    var startRequest4 = new Date().getTime();  
	    fetch(proxyUrl + disconnect)
		.then(response=>response.text()) 
		.then(data => {
			// Parser réponse en XML :
			let parser = new DOMParser();	
			let xmlResponse = parser.parseFromString(data, "application/xml"); 
			// Récupération de sessionId :
			let disconnected = xmlResponse.getElementsByTagName('disconnected');
			let sessionIdent = disconnected[0].getAttribute('sessionId');
			// Log :
			var endRequest4 = new Date().getTime();
			var requestDuration4 = endRequest4 - startRequest4;
			console.log(setLog('disconnect', [['Session ID', sessionIdent]], requestDuration4));  
		})
		.catch(e => {
		    console.log(e);
		    return e;
		});	
}
// Création d'un projet ADE 
function settingProject(){
	    const setProject = baseURL + '?sessionId='+ sessionId +'&function=setProject' + '&projectId=' + projectId;
	    // Requête http :
	    var startRequest2 = new Date().getTime();  
	    fetch(proxyUrl + setProject)
		.then(response=>response.text()) 
		.then(data => {
			// Parser réponse en XML :
			let parser = new DOMParser();	
			let xmlResponse = parser.parseFromString(data, "application/xml"); 
			// Récupération de projectId :
			let settingProject  = xmlResponse.getElementsByTagName('setProject');
			let sessionIdent = settingProject[0].getAttribute('sessionId');
			let projectIdent = settingProject[0].getAttribute('projectId');        
			// Log :
			var endRequest2 = new Date().getTime();
			var requestDuration2 = endRequest2 - startRequest2;
			console.log(setLog('set project', [['Session ID', sessionIdent], ['Project ID', projectIdent]], requestDuration2));  
		})
		.catch(e => {
		    console.log(e);          
		    return e;
		});	
}
// Récupérer les events de ADE (tree = true et detail = 8)
function getEvents(){
	    const events = baseURL + '?sessionId='+ sessionId +'&function=getEvents&tree=true&detail=8';
	    // Requête http :
	    var startRequest3 = new Date().getTime(); 
	    fetch(proxyUrl + events)
		.then(response=>response.text()) 
		.then(data => {
		    // Parser réponse en XML :
		    let parser = new DOMParser();	
		    let xmlResponse = parser.parseFromString(data, "application/xml"); 
		    console.log(xmlResponse);
		    // EXPLORER RESOURCES ET HOURS ETC. => FILTRER
		    // Log :
		    var endRequest3 = new Date().getTime();
		    var requestDuration3 = endRequest3 - startRequest3;
		    console.log(setLog('get Events', [['Session ID', sessionId], ['tree', true], ['detail', 8]], requestDuration3));  
		})
		.catch(e => {
		    console.log(e);           // A logger avec events du pdf + avec heure et nb trames etc.
		    return e;
		});	
}
function ADEconnect (){          
	// Ouverture connexion à ADE 
	const loggin = baseURL + '?function=connect&login=lecteur1&password=';
	// Connexion à session ADE 
	document.addEventListener('DOMContentLoaded', ()=>{
	    // Requête http :
	    var startRequest = new Date().getTime();  
	    fetch(proxyUrl + loggin)
	    .then(response=>response.text())  
	    .then(data => {
		    // Parser réponse en XML :
		    let parser = new DOMParser();	
		    let xmlResponse = parser.parseFromString(data, "application/xml");
		    // Récupération de sessionId :
		    let session = xmlResponse.getElementsByTagName('session');
		    sessionId = session[0].getAttribute('id');
		    // Log :
		    var endRequest = new Date().getTime();
		    var requestDuration = endRequest - startRequest;
		    console.log(setLog('connect', [['Session ID', sessionId]], requestDuration));
	    })
	    .catch(e => {
		console.log(e);
		return e;
	    });	

	})

	// Renseigner le projet pour les futurs appels aux méthodes get (délai de 1 seconde)
	setTimeout(settingProject, 1000);
	
	// Récupérer évènements ADE 
        // setTimeout(getEvents, 1500);

	// Déconnexion de ADE - délai de 3 secondes pour attendre les précédentes
	setTimeout(disconnection, 3000);
}

// Paramètres pour les requêtes :
const ip = 'planif.esiee.fr';
const port ='8443'; 
// URL commune aux requêtes :
const baseURL = 'https://'+ ip +':'+ port +'/jsp/webapi';
// IDentifiant de projet ADE - mettre à jour chaque année :
const projectId = '6'; 
// Récupérer sessionId :
var sessionId;
// API that enables cross-origin requests to anywhere :
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

// Connexion à ADE (main) :
ADEconnect();
