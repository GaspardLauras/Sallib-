//Permet de comparer la liste des salles existantes à la liste des salles occupées pour
//avoir la liste des salles libres
function compare(Salles_possibles, salles_occupées){
  var SL = [];
  for(var i = 0; i<Salles_possibles.length; i++){
    var libre = true;
    for(var j = 0; i<salles_occupées.length; j++){
      if(Salles_possibles[i]==salles_occupées[j]){
        libre = false;
      }
    }
    if(libre){
      SL.push(Salles_possibles[i]);
    }
  }
  return SL;
}

//Permet d'ajouter les salles d'une liste
function ajoutSallesH(arraySalles, classDivCree, attrDivCible){
  for(var i = 0; i < arraySalles.length; i++){ //ajout de toutes les 'salles' dans la balise '<div class='salles_libres'/>'
    console.log('____');
    console.log(arraySalles[i]);
    console.log(arraySalles[i].room+' : '+arraySalles[i].startH+'/'+arraySalles[i].endH)
    $('div'+attrDivCible).append('<div class='+ classDivCree +'>'+
      arraySalles[i].room+' : '+arraySalles[i].startH+'/'+arraySalles[i].endH+
      '</div>');
  }

  //Mise en page des div de salles libres
  $('div.'+classDivCree).css('height','30px');
  $('div.'+classDivCree).css('width','200px');
  $('div.'+classDivCree).css('margin','0 auto');
  $('div.'+classDivCree).css('margin-bottom','10px');
}

//Permet d'afficher sur le font les différentes salles
function AffichageFront(occupiedRooms){
  occupiedRooms = occupiedRooms[0];
        console.log(occupiedRooms);

        ajoutSallesH(occupiedRooms.epi1, 'salles_libres_div', '.salles_libres');
        ajoutSallesH(occupiedRooms.epi2, 'salles_libres_div', '.salles_libres');
        ajoutSallesH(occupiedRooms.epi3, 'salles_libres_div', '.salles_libres');
        ajoutSallesH(occupiedRooms.epi4, 'salles_libres_div', '.salles_libres');
        ajoutSallesH(occupiedRooms.epi5, 'salles_libres_div', '.salles_libres');
        ajoutSallesH(occupiedRooms.epi6, 'salles_libres_div', '.salles_libres');
        ajoutSallesH(occupiedRooms.autres, 'salles_libres_div', '.salles_libres');


        $('div.salles_libres_div').hide();//salles libres cachées par défaut
        $('div.salles_libres').click(function(){
          $('div.salles_libres_div').toggle(300);//Permet de cacher et d'afficher les salles libres
          //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
        });

        ajoutSallesH(occupiedRooms.epi1, 'salles_libres_epi1', '#epi_1');
        $('div.salles_libres_epi1').hide();//salles libres cachées par défaut
        $('div#epi_1').click(function(){
          $('div.salles_libres_epi1').toggle(300);//Permet de cacher et d'afficher les salles libres
          //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
        });

        ajoutSallesH(occupiedRooms.epi2, 'salles_libres_epi2', '#epi_2');
        $('div.salles_libres_epi2').hide();//salles libres cachées par défaut
        $('div#epi_2').click(function(){
          $('div.salles_libres_epi2').toggle(300);//Permet de cacher et d'afficher les salles libres
          //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
        });

        ajoutSallesH(occupiedRooms.epi3, 'salles_libres_epi3', '#epi_3');
        $('div.salles_libres_epi3').hide();//salles libres cachées par défaut
        $('div#epi_3').click(function(){
          $('div.salles_libres_epi3').toggle(300);//Permet de cacher et d'afficher les salles libres
          //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
        });

        ajoutSallesH(occupiedRooms.epi4, 'salles_libres_epi4', '#epi_4');
        $('div.salles_libres_epi4').hide();//salles libres cachées par défaut
        $('div#epi_4').click(function(){
          $('div.salles_libres_epi4').toggle(300);//Permet de cacher et d'afficher les salles libres
          //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
        });

        ajoutSallesH(occupiedRooms.epi5, 'salles_libres_epi5', '#epi_5');
        $('div.salles_libres_epi5').hide();//salles libres cachées par défaut
        $('div#epi_5').click(function(){
          $('div.salles_libres_epi5').toggle(300);//Permet de cacher et d'afficher les salles libres
          //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
        });

        ajoutSallesH(occupiedRooms.epi6, 'salles_libres_epi6', '#epi_6');
        $('div.salles_libres_epi6').hide();//salles libres cachées par défaut
        $('div#epi_6').click(function(){
          $('div.salles_libres_epi6').toggle(300);//Permet de cacher et d'afficher les salles libres
          //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
        });

        ajoutSallesH(occupiedRooms.autres, 'salles_libres_rue', '.rue');
        $('div.salles_libres_rue').hide();//salles libres cachées par défaut
        $('div.rue').click(function(){
          $('div.salles_libres_rue').toggle(300);//Permet de cacher et d'afficher les salles libres
          //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
        });
}








/*
    ====================================================================================================================================
                            Logs
    ====================================================================================================================================
*/

function getDate (currentD){
    return currentD.getFullYear()+ "." +((currentD.getMonth()+1)<10?"0":"") + (currentD.getMonth()+1) + "." + (currentD.getDate()<10?"0":"") + currentD.getDate();
}	


function getTime (currentD){
    return (currentD.getHours()<10?"0":"") + currentD.getHours()+ ":" + (currentD.getMinutes()<10?"0":"") + currentD.getMinutes()+ ":" + (currentD.getSeconds()<10?"0":"") + currentD.getSeconds();
}


// Journalisation des requêtes
function setLog (functionId, params, duration, size){
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

    // Ajout taille de la réponse et durée de la requête :
    logger = logger + "} " + "| Size {" + size + " items}" + " | Duration {" + duration + "ms}";
    // Journaliser :
    return logger;
}

// Journalisation des erreurs
function setErrorLog (functionId, errorMessage, duration){
    // Initialisation objet temporel :
    let currentDate = new Date();  
    // Date et heure, format [AAAA.MM.JJ - HH:MM:SS], nom de la fonction utilisée :
    var logger = "[" + getDate(currentDate) + " - " + getTime(currentDate) + "] : " + "Function {" + functionId + "} | "; 
    return logger + errorMessage;  
}










/*
====================================================================================================================================
                            Récupération date du jour - format MM/JJ/AAAA
====================================================================================================================================
*/
// Obtenir la date du jour, pour requête vers ADE en utilisant la Webapi
function getCurrentDateForEvent(){   
    let currentD = new Date();  
    return ((currentD.getMonth()+1)<10?"0":"") + (currentD.getMonth()+1) + "/" + (currentD.getDate()<10?"0":"") + currentD.getDate() + "/" + currentD.getFullYear();
}










/*
====================================================================================================================================
                            Filtrage des données remontées par ADE
====================================================================================================================================
*/
// Vérifier si de nouvelles salles ont été ajoutées sur ADE
function updateClassroomsList(sessionId, dataRooms){
    // Liste des salles par défaut :
    var previousRoomsList = EPI_1.concat(EPI_2).concat(EPI_3).concat(EPI_4).concat(EPI_5).concat(EPI_6).concat(AUTRES);
    // console.log(previousRoomsList.length);

    // Nouvelle liste des salles après filtrage :
    var roomsList = [];

    dataRooms.forEach((item, index) => {
    let isNew = 1;
    // Filtrage par indésirables :
    for(i=0; i < Filter_default.length; i++){
        if(item == Filter_default[i]){
        isNew = 0;
        break;
        }
    }
    // Filtrage par les salles valides actuelles :
    for(i=0; i < previousRoomsList.length; i++){
        if(item == previousRoomsList[i]){
        isNew = 0;
        break;
        }
    }
    // Si l'élément est nouveau :
    if (isNew == 1){
        roomsList.push(item);
    }
    })
    console.log(roomsList);

    // Déconnexion session ADE :
    disconnection(sessionId);
}

// Pré-filtrage de la liste des salles récupérées
function filter(roomsFrame){
    // Liste des salles filtrée :
    var filter1 = [];
    // Filtrage retirant de la trame de salles retournée les éléments non pertinents :
    roomsFrame.forEach((item, index) => {
        let isToSuppr = 0;
        for(let i=0; i<Filter_default.length; i++){
        // Appliquer filtre sur chaque salle récupérée :
        if(item.room == Filter_default[i]){
            isToSuppr = 1;
            break;
        }

        }
        // Item ajouté à la liste :
        if(isToSuppr == 0){
        filter1.push(item);
        }
        // Item n'apparaissant pas dans la liste car non désiré :
        else {
        console.log(item);
        }
    })
    return filter1;
}

// Liste des salles occupées classées par secteur (épi) - Rappelons que chaque salle est un objet correspondant à une réservation de cette salle (avec dates de début et de fin) d'où les doublons dans les noms
function occupiedRoomsPerEpi(occupiedRoomsList) {
    // Listes contenant les salles occupées selon leur localisation :
    var occupiedRooms_epi1 = [];
    var occupiedRooms_epi2 = [];
    var occupiedRooms_epi3 = [];
    var occupiedRooms_epi4 = [];
    var occupiedRooms_epi5 = [];
    var occupiedRooms_epi6 = [];
    var occupiedRooms_autres = [];

    // Filtrage par EPI :
    occupiedRoomsList.forEach((item, index) => {
    // Filtrage EPI 1 :
    for(i=0; i < EPI_1.length; i++){
        if(item.room == EPI_1[i]){
        occupiedRooms_epi1.push(item);
        break;
        }
    }
    // Filtrage EPI 2 :
    for(i=0; i < EPI_2.length; i++){
        if(item.room == EPI_2[i]){
        occupiedRooms_epi2.push(item);
        break;
        }
    }
    // Filtrage EPI 3 :
    for(i=0; i < EPI_3.length; i++){
        if(item.room == EPI_3[i]){
        occupiedRooms_epi3.push(item);
        break;
        }
    }
    // Filtrage EPI 4 :
    for(i=0; i < EPI_4.length; i++){
        if(item.room == EPI_4[i]){
        occupiedRooms_epi4.push(item);
        break;
        }
    }
    // Filtrage EPI 5 :
    for(i=0; i < EPI_5.length; i++){
        if(item.room == EPI_5[i]){
        occupiedRooms_epi5.push(item);
        break;
        }
    }
    // Filtrage EPI 6 :
    for(i=0; i < EPI_6.length; i++){
        if(item.room == EPI_6[i]){
        occupiedRooms_epi6.push(item);
        break;
        }
    }
    // Filtrage EPI 1 :
    for(i=0; i < AUTRES.length; i++){
        if(item.room == AUTRES[i]){
        occupiedRooms_autres.push(item);
        break;
        }
    }
    })

    // Retourner les différentes listes :
    return [{epi1 : occupiedRooms_epi1, epi2 : occupiedRooms_epi2, epi3 :  occupiedRooms_epi3, epi4 :  occupiedRooms_epi4, epi5 : occupiedRooms_epi5, epi6 :  occupiedRooms_epi6, autres : occupiedRooms_autres}];
}










/*
====================================================================================================================================
                            Requêtes http
====================================================================================================================================
*/
// Récupération de l'identifiant des projets ADE
function getProjectId(sessionId){
    var getProj = baseURL + '?sessionId='+ sessionId + '&function=getProjects&detail=2';
    // Requête http :
    var startRequest6 = new Date().getTime(); 
    fetch(proxyUrl + getProj)
    .then(response=>response.text())  
    .then(data => {
        // Parser réponse en XML :
        let parser = new DOMParser();	
        let xmlResponse = parser.parseFromString(data, "application/xml");
        // Log :
        var endRequest6 = new Date().getTime();
        var requestDuration6 = endRequest6 - startRequest6;    
        // Récupération de projectId :
        let project = xmlResponse.getElementsByTagName('project');
        let projId = project[0].getAttribute('id');
        console.log(setLog('get projects', [['Session ID', sessionId], ['detail', 2]], requestDuration6, data.length));
        
        // Set project :
        settingProject(sessionId, projId);
    })
    .catch(e => {
        console.log(e);
        return e;
    }
    );
}

// Création d'un projet ADE 
function settingProject(sessionId, projectId){
    const setProject = baseURL + '?sessionId='+ sessionId +'&function=setProject' + '&projectId=' + projectId;
    // Requête http :
    var startRequest2 = new Date().getTime();  
    fetch(proxyUrl + setProject)
    .then(response=>response.text()) 
    .then(data => {
        // Parser réponse en XML :
        let parser = new DOMParser();	
        let xmlResponse = parser.parseFromString(data, "application/xml"); 
        // console.log(xmlResponse);
        // Récupération de projectId :
        let settingProject  = xmlResponse.getElementsByTagName('setProject');
        let sessionIdent = settingProject[0].getAttribute('sessionId');
        let projectIdent = settingProject[0].getAttribute('projectId');        
        // Log :
        var endRequest2 = new Date().getTime();
        var requestDuration2 = endRequest2 - startRequest2;
        if(sessionIdent == 'undefined'){
            console.log(setErrorLog('set project', 'ERROR "session Id" is undefined !', requestDuration2));
        }
        else {
            console.log(setLog('set project', [['Session ID', sessionIdent], ['Project ID', projectIdent]], requestDuration2,  data.length));  
        }

        // Pour mettre à jour la liste des salles (indicateur des salles non-traitées) :
        // getClassroomsTot(sessionId);

        // Get events :
        getEvents(sessionId);
    })
    .catch(e => {
        console.log(e);           // A logger avec events du pdf + avec heure et nb trames etc.
        return e;
    });	
}

// Récupérer les events de ADE 
function getEvents(sessionId){
    var date = '02/24/2020';
    // var date = getCurrentDateForEvent();
    const events = baseURL + '?sessionId='+ sessionId +'&function=getEvents&tree=true&date=' + date + '&detail=8';
    // Requête http :
    var startRequest3 = new Date().getTime(); 
    fetch(proxyUrl + events)
    .then(response=>response.text()) 
    .then(data => {
        // Parser réponse en XML :
        let parser = new DOMParser();	
        let xmlResponse = parser.parseFromString(data, "application/xml"); 
        // Log :
        console.log(xmlResponse);
        var endRequest3 = new Date().getTime();
        var requestDuration3 = endRequest3 - startRequest3;
        console.log(setLog('get events', [['Session ID', sessionId], ['tree', true], ['detail', 8], ['date', date]], requestDuration3, data.length)); 
        // Récupération des balises <events> :
        let event  = xmlResponse.getElementsByTagName('event');
        // Récupération des balises inférieures <resources> :
        var resources  = xmlResponse.getElementsByTagName('resources');
        // Array de 3 valeurs par élément pour répertorier chaque salle avec ses dates de réservation programmé (https://stackoverflow.com/questions/13219348/adding-multiple-values-to-an-array-in-javascript)
        var occupiedRooms = [];
        // Parcourir chaque event de la trame xml retournée :
        for(j=0; j < event.length; j++){
          // Date de début de réservation de salle :
          let startHour = event[j].getAttribute('startHour');
          // Date de fin de réservation de salle :
          let endHour = event[j].getAttribute('endHour');   
          // Récupère les éléments fils de <resources> :
          var childNodesResources = resources[j].children;
          // Parcourir les balises <resources> :
          for(i=0; i< childNodesResources.length; i++){
              // Parcourir les balises <resource> - tester s'il s'agit d'une ressource de type 'salle' :
              if(childNodesResources[i].getAttribute('category') == 'classroom'){
              // Récupérer le nom de la salle :
              occupiedRooms.push({startH : startHour, endH : endHour, room : childNodesResources[i].getAttribute('name')});
              }
          }
        }

        // Pré-filtrage des salles :
        var processedList = filter(occupiedRooms);
        // console.log(processedList);

        // Filtrage par épi :
        var occupiedRooms = occupiedRoomsPerEpi(processedList);
        console.log('OCCUPIED ROOMS:')
        //console.log(occupiedRooms);
        // utilisable en faisant occupiedRooms.epi1 etc.

        //Affichage sur le Front
        AffichageFront(occupiedRooms);

        // Disconnection
        disconnection(sessionId);
        alert('FIN DE LA REQUETE, LE SITE EST PRET A ETRE UTILISE');
    })
    .catch(e => {
        console.log(e);           // A logger avec events du pdf + avec heure et nb trames etc.
        return e;
    });	
}

// Déconnexion de session ADE
function disconnection(sessionId){
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
        if(sessionIdent == 'undefined'){
            console.log(setErrorLog('disconnect', 'ERROR "session Id" is undefined !', requestDuration4));
        }
        else {
            console.log(setLog('disconnect', [['Session ID', sessionIdent]], requestDuration4, data.length));  
        }
    })
    .catch(e => {
        console.log(e);
        return e;
    });	
}

// Récupérer liste de toutes les salles de l'ESIEE répertoriées sur ADE
function getClassroomsTot(sessionId){
    const classrooms = baseURL + '?sessionId='+ sessionId +'&function=getResources&category=classroom&detail=2';
    // Requête http :
    var startRequest5 = new Date().getTime(); 
    fetch(proxyUrl + classrooms)
        .then(response=>response.text()) 
        .then(data => {
        // Parser réponse en XML :
        let parser = new DOMParser();	
        let xmlResponse = parser.parseFromString(data, "application/xml"); 
        // Log :
        // console.log(xmlResponse);
        var endRequest5 = new Date().getTime();
        var requestDuration5 = endRequest5 - startRequest5;      
        console.log(setLog('get resources', [['Session ID', sessionId], ['detail', 2], ['category', 'classroom']], requestDuration5, data.length)); 
        // Récupération des balises <room> :
        var rooms  = xmlResponse.getElementsByTagName('room');
        // Liste contenant les noms des salles récupérées :
        var roomsESIEE = [];
        // Lister les noms des différentes salles :
        for(i=0; i < rooms.length; i++){
            roomsESIEE.push(rooms[i].getAttribute('name'));
        }
        // Vérification nouvelles salles :
        updateClassroomsList(sessionId, roomsESIEE);
        })
        .catch(e => {
        console.log(e);           // A logger avec events du pdf + avec heure et nb trames etc.
        return e;
        });	
}

// Création d'une session ADE
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
            console.log(setLog('connect', [['Session ID', sessionId]], requestDuration, data.length));

            // Get Project Id:
            getProjectId(sessionId);
        })
        .catch(e => {
            console.log(e);
            return e;
        });	
    })

}










/*
    ====================================================================================================================================
                            Logs
    ====================================================================================================================================
*/
// Date traduite à partir de l'objet temporel currentD :
function getDate (currentD){
    return currentD.getFullYear()+ "." +((currentD.getMonth()+1)<10?"0":"") + (currentD.getMonth()+1) + "." + (currentD.getDate()<10?"0":"") + currentD.getDate();
}	

// Heure traduite à partir de l'objet temporel currentD :
function getTime (currentD){
    return (currentD.getHours()<10?"0":"") + currentD.getHours()+ ":" + (currentD.getMinutes()<10?"0":"") + currentD.getMinutes()+ ":" + (currentD.getSeconds()<10?"0":"") + currentD.getSeconds();
}

// Journalisation des requêtes
function setLog (functionId, params, duration, size){
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
    // Ajout taille de la réponse et durée de la requête :
    logger = logger + "} " + "| Size {" + size + " items}" + " | Duration {" + duration + "ms}";
    // Journaliser :
    return logger;
}

// Journalisation des erreurs
function setErrorLog (functionId, errorMessage, duration){
    // Initialisation objet temporel :
    let currentDate = new Date();  
    // Date et heure, format [AAAA.MM.JJ - HH:MM:SS], nom de la fonction utilisée :
    var logger = "[" + getDate(currentDate) + " - " + getTime(currentDate) + "] : " + "Function {" + functionId + "} | "; 
    // Renvoyer le message d'erreur :
    return logger + errorMessage;  
}










/*
====================================================================================================================================
                            Récupération date du jour - format MM/JJ/AAAA
====================================================================================================================================
*/
// Obtenir la date du jour, pour requête vers ADE en utilisant la Webapi
function getCurrentDateForEvent(){   
    let currentD = new Date();  
    return ((currentD.getMonth()+1)<10?"0":"") + (currentD.getMonth()+1) + "/" + (currentD.getDate()<10?"0":"") + currentD.getDate() + "/" + currentD.getFullYear();
}










/*
====================================================================================================================================
                            Filtrage des données remontées par ADE
====================================================================================================================================
*/
// Vérifier si de nouvelles salles ont été ajoutées sur ADE
function updateClassroomsList(sessionId, dataRooms){
    // Liste des salles par défaut :
    var previousRoomsList = EPI_1.concat(EPI_2).concat(EPI_3).concat(EPI_4).concat(EPI_5).concat(EPI_6).concat(AUTRES);
    // console.log('Nombre de salles traitées par SalleLib : ' + previousRoomsList.length);

    // Nouvelle liste des salles après filtrage :
    var roomsList = [];

    dataRooms.forEach((item, index) => {
        let isNew = 1;
        // Filtrage par indésirables :
        for(i=0; i < Filter_default.length; i++){
            if(item == Filter_default[i]){
                isNew = 0;
                break;
            }
        }
        // Filtrage par les salles valides actuelles :
        for(i=0; i < previousRoomsList.length; i++){
            if(item == previousRoomsList[i]){
                isNew = 0;
                break;
            }
        }
        // Si l'élément est nouveau :
        if (isNew == 1){
            roomsList.push(item);
        }
    })
    console.log(roomsList);

    // Déconnexion session ADE :
    disconnection(sessionId);
}

// Pré-filtrage de la liste des salles récupérées
function filter(roomsFrame){
    // Liste des salles filtrée :
    var filter1 = [];
    // Filtrage retirant de la trame de salles retournée les éléments non pertinents :
    roomsFrame.forEach((item, index) => {
        let isToSuppr = 0;
        for(let i=0; i<Filter_default.length; i++){
        // Appliquer filtre sur chaque salle récupérée :
            if(item.room == Filter_default[i]){
                isToSuppr = 1;
                break;
            }
        }
        // Item ajouté à la liste :
        if(isToSuppr == 0){
            filter1.push(item);
        }
        // Item n'apparaissant pas dans la liste car non désiré :
        else {
            console.log(item);
        }
    })
    return filter1;
}

// Liste des salles occupées classées par secteur (épi) - Rappelons que chaque salle est un objet correspondant à une réservation de cette salle (avec dates de début et de fin) d'où les doublons dans les noms
function occupiedRoomsPerEpi(occupiedRoomsList) {
    // Listes contenant les salles occupées selon leur localisation :
    var occupiedRooms_epi1 = [];
    var occupiedRooms_epi2 = [];
    var occupiedRooms_epi3 = [];
    var occupiedRooms_epi4 = [];
    var occupiedRooms_epi5 = [];
    var occupiedRooms_epi6 = [];
    var occupiedRooms_autres = [];

    // Filtrage par EPI :
    occupiedRoomsList.forEach((item, index) => {
        // Filtrage EPI 1 :
        for(i=0; i < EPI_1.length; i++){
            if(item.room == EPI_1[i]){
                occupiedRooms_epi1.push(item);
                break;
            }
        }
        // Filtrage EPI 2 :
        for(i=0; i < EPI_2.length; i++){
            if(item.room == EPI_2[i]){
                occupiedRooms_epi2.push(item);
                break;
            }
        }
        // Filtrage EPI 3 :
        for(i=0; i < EPI_3.length; i++){
            if(item.room == EPI_3[i]){
                occupiedRooms_epi3.push(item);
                break;
            }
        }
        // Filtrage EPI 4 :
        for(i=0; i < EPI_4.length; i++){
            if(item.room == EPI_4[i]){
                occupiedRooms_epi4.push(item);
                break;
            }
        }
        // Filtrage EPI 5 :
        for(i=0; i < EPI_5.length; i++){
            if(item.room == EPI_5[i]){
                occupiedRooms_epi5.push(item);
                break;
            }
        }
        // Filtrage EPI 6 :
        for(i=0; i < EPI_6.length; i++){
            if(item.room == EPI_6[i]){
                occupiedRooms_epi6.push(item);
                break;
            }
        }
        // Filtrage Autres :
        for(i=0; i < AUTRES.length; i++){
            if(item.room == AUTRES[i]){
                occupiedRooms_autres.push(item);
                break;
            }
        }
    })

    // Retourner les différentes listes :
    return [{epi1 : occupiedRooms_epi1, epi2 : occupiedRooms_epi2, epi3 :  occupiedRooms_epi3, epi4 :  occupiedRooms_epi4, epi5 : occupiedRooms_epi5, epi6 :  occupiedRooms_epi6, autres : occupiedRooms_autres}];
}










/*
====================================================================================================================================
                            Requêtes http
====================================================================================================================================
*/
// Récupération de l'identifiant des projets ADE
function getProjectId(sessionId){
    var getProj = baseURL + '?sessionId='+ sessionId + '&function=getProjects&detail=2';
    // Requête http :
    var startRequest6 = new Date().getTime(); 
    fetch(proxyUrl + getProj)
        .then(response=>response.text())  
        .then(data => {
            // Parser réponse en XML :
            let parser = new DOMParser();	
            let xmlResponse = parser.parseFromString(data, "application/xml");
            // Log :
            var endRequest6 = new Date().getTime();
            var requestDuration6 = endRequest6 - startRequest6;    
            // Récupération de projectId :
            let project = xmlResponse.getElementsByTagName('project');
            let projId = project[0].getAttribute('id');
            console.log(setLog('get projects', [['Session ID', sessionId], ['detail', 2]], requestDuration6, data.length));
            
            // Set project :
            settingProject(sessionId, projId);
        })
        .catch(e => {
            console.log(e);
            return e;
        });
}

// Création d'un projet ADE 
function settingProject(sessionId, projectId){
    const setProject = baseURL + '?sessionId='+ sessionId +'&function=setProject' + '&projectId=' + projectId;
    // Requête http :
    var startRequest2 = new Date().getTime();  
    fetch(proxyUrl + setProject)
    .then(response=>response.text()) 
    .then(data => {
        // Parser réponse en XML :
        let parser = new DOMParser();	
        let xmlResponse = parser.parseFromString(data, "application/xml"); 
        // console.log(xmlResponse);
        // Récupération de projectId :
        let settingProject  = xmlResponse.getElementsByTagName('setProject');
        let sessionIdent = settingProject[0].getAttribute('sessionId');
        let projectIdent = settingProject[0].getAttribute('projectId');        
        // Log :
        var endRequest2 = new Date().getTime();
        var requestDuration2 = endRequest2 - startRequest2;
        if(sessionIdent == 'undefined'){
            console.log(setErrorLog('set project', 'ERROR "session Id" is undefined !', requestDuration2));
        }
        else {
            console.log(setLog('set project', [['Session ID', sessionIdent], ['Project ID', projectIdent]], requestDuration2,  data.length));  
        }

        // Pour mettre à jour la liste des salles (indicateur des salles non-traitées) :
        // getClassroomsTot(sessionId);

        // Get events :
        getEvents(sessionId);
    })
    .catch(e => {
        console.log(e);           // A logger avec events du pdf + avec heure etc.
        return e;
    });	
}

// Déconnexion de session ADE
function disconnection(sessionId){
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
            if(sessionIdent == 'undefined'){
                console.log(setErrorLog('disconnect', 'ERROR "session Id" is undefined !', requestDuration4));
            }
            else {
                console.log(setLog('disconnect', [['Session ID', sessionIdent]], requestDuration4, data.length));  
            }
        })
        .catch(e => {
            console.log(e);
            return e;
        });	
}

// Récupérer liste de toutes les salles de l'ESIEE répertoriées sur ADE
function getClassroomsTot(sessionId){
    const classrooms = baseURL + '?sessionId='+ sessionId +'&function=getResources&category=classroom&detail=2';
    // Requête http :
    var startRequest5 = new Date().getTime(); 
    fetch(proxyUrl + classrooms)
        .then(response=>response.text()) 
        .then(data => {
        // Parser réponse en XML :
        let parser = new DOMParser();	
        let xmlResponse = parser.parseFromString(data, "application/xml"); 
        // Log :
        // console.log(xmlResponse);
        var endRequest5 = new Date().getTime();
        var requestDuration5 = endRequest5 - startRequest5;      
        console.log(setLog('get resources', [['Session ID', sessionId], ['detail', 2], ['category', 'classroom']], requestDuration5, data.length)); 
        // Récupération des balises <room> :
        var rooms  = xmlResponse.getElementsByTagName('room');
        // Liste contenant les noms des salles récupérées :
        var roomsESIEE = [];
        // Lister les noms des différentes salles :
        for(i=0; i < rooms.length; i++){
            roomsESIEE.push(rooms[i].getAttribute('name'));
        }
        // Vérification nouvelles salles :
        updateClassroomsList(sessionId, roomsESIEE);
        })
        .catch(e => {
            console.log(e);           // A logger avec events du pdf + avec heure etc.
            return e;
        });	
}

// Création d'une session ADE
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
                console.log(setLog('connect', [['Session ID', sessionId]], requestDuration, data.length));

                // Get Project Id:
                getProjectId(sessionId);
            })
            .catch(e => {
                console.log(e);
                return e;
            });	
    })

}










/*
====================================================================================================================================
                            Main
====================================================================================================================================
*/
// Liste des salles par épi :   
const EPI_1 = ['1001V', '1007V+', '1005', '1007V', '1051', '1055V+', '1103', '1105', '1107V+', '1109V+', '1201+', '1205V+', '1207V+', '1209V+', '1301+', '1305', '1307', '1309', '1401', '1403', '1405', '1407', '1409', '1452', '1456'];
const EPI_2 = ['2101', '2102', '2103', '2104', '2105','2107', '2105', '2107', '2108', '2201+', '2205', '2207', '2209', '2305V+','2309+','2401V+','2409V+'];  
const EPI_3 = ['3001', '3005', '3007', '3051', '3053', '3055', '3103', '3105', '3107', '3109', '3201', '3203', '3207+', '3301V+', '3305', '3307+', '3401V+', '3407V'];
const EPI_4 = ['4003V+', '4007V', '4105V', '4109', '4201+', '4305', '4307+', '4401', '4403'];
const EPI_5 = ['5004','5006V+','5008V++','5101+','5103+', '5105V', '5107V', '5155', '5201V+', '5207+', '5209V', '5301V','5308', '5309V', '5401V', '5403V','5407V'];
const EPI_6 = ['6301','6401+','6409V'];
const AUTRES = ['0110', '0210', '0160', '0260', '0112', '0113', '0114', '0115', '0162V', '0163', '0164V','0165V','0232', '0244', '0351'];

//const PROFS = 


// Liste salles de Cergy :
const Cergy = ['108', '109', '110', '204', '208', 'B5', 'B6', 'C1', 'C2', 'C3', 'C4', 'P1', 'P2', 'P3', 'TP1', 'TP2', 'TP3', 'TP4', 'TPR1', 'TPR2'];
// Liste des élements indésirables (salle à préciser, MD, salles de partiels):
const Indesirables = ['salle à préciser 1', 'M.D.', '4405', '4405-2', '4405-3', '4405-4', , '4405-5', '4451','4451-2','4451-3', '7100'];
// Elaboration du fitre qui va pré-traiter les données remontées :
const Filter_default = Cergy.concat(Indesirables);

// Paramètres pour les requêtes :
const ip = 'planif.esiee.fr';
const port ='8443'; 
// URL commune aux requêtes :
const baseURL = 'https://'+ ip +':'+ port +'/jsp/webapi';

// API that enables cross-origin requests to anywhere :
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';  // Trouver une solution viable ! + CORS demander à D.B.

// Connexion à ADE (main) :
ADEconnect();










//Test pour le bouton et les inputs
var horaire_debut = document.querySelector('input#debut');
horaire_debut.addEventListener('input',function(){
  console.log(horaire_debut.value);
});

var horaire_fin = document.querySelector('input#fin');
horaire_fin.addEventListener('input',function(){
  console.log(horaire_fin.value);
});

$('input#bouton_recherche').click(function(){
  console.log('WOW ca marche');
  console.log('DEBUT : '+horaire_debut.value+' / FIN : '+horaire_fin.value);
});