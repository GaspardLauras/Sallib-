//Permet d'ajouter les salles d'une liste
function ajoutSallesH(arraySalles, classDivCree, attrDivCible){
    // Si aucune salle de l'épi n'est libre sur le créneau :
    if(arraySalles.length == 0){
        $('div'+attrDivCible).append('<div class='+ classDivCree +'> AUCUNE SALLE DISPONIBLE </div>');
    }
    else {
        //ajout de toutes les 'salles' dans la balise '<div class='salles_libres'/>'
        for(var i = 0; i < arraySalles.length; i++) { 
            // Affichage des salles en colonne :
            $('div'+attrDivCible).append('<div class='+ classDivCree +'>'+ arraySalles[i].name +'</div>');
        }
    }

  //Mise en page des div de salles libres 
  $('div.'+classDivCree).css('margin','0 auto');
  $('div.'+classDivCree).css('margin-bottom','10px');
}

/*
var colone = 0;
function AjoutSallecolones(arraySalles){
    for(var i = 0; i < arraySalles.length; i++){ //ajout de toutes les 'salles' dans la balise '<div class='salles_libres'/>'
        colone ++;
        $('div.salles_libres_containeur_'+colone).append('<div class="salles">'+arraySalles[i]+'</div>');
        if(colone == 4){colone = 0;}
    }

    $('div.salles').css('margin','10px');
}
*/

function ajoutClique(){
    $('div.salles_libres').click(function(){
        $('div.salles_libres_containeur').toggle(300);//Permet de cacher et d'afficher les salles libres
      //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
    });

    $('div#epi_1').click(function(){
        $('div.salles_libres_epi1').toggle(300);//Permet de cacher et d'afficher les salles libres
        //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
    });

   

    $('div#epi_2').click(function(){
        $('div.salles_libres_epi2').toggle(300);//Permet de cacher et d'afficher les salles libres
        //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
        $('.epi#epi_2 p').css('transform', 'rotate(deg')
    });


    $('div#epi_3').click(function(){
        $('div.salles_libres_epi3').toggle(300);//Permet de cacher et d'afficher les salles libres
        //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
    });


    $('div#epi_4').click(function(){
        $('div.salles_libres_epi4').toggle(300);//Permet de cacher et d'afficher les salles libres
        //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
    });


    $('div#epi_5').click(function(){
        $('div.salles_libres_epi5').toggle(300);//Permet de cacher et d'afficher les salles libres
        //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
    });


    $('div#epi_6').click(function(){
        $('div.salles_libres_epi6').toggle(300);//Permet de cacher et d'afficher les salles libres
        //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
    });


    $('div.rue').click(function(){
        $('div.salles_libres_rue').toggle(300);//Permet de cacher et d'afficher les salles libres
        //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
    });
}

//Permet d'afficher sur le font les différentes salles
function AffichageFront(rooms){
    $('div.salles').remove();
    $('div.salles_libres_epi1').remove();
    $('div.salles_libres_epi2').remove();
    $('div.salles_libres_epi3').remove();
    $('div.salles_libres_epi4').remove();
    $('div.salles_libres_epi5').remove();
    $('div.salles_libres_epi6').remove();
    $('div.salles_libres_rue').remove();

    rooms = rooms[0];

    $('div.salles_libres_containeur').hide();//salles libres cachées par défaut
    
    ajoutSallesH(rooms.epi1, 'salles_libres_epi1', '#epi_1');
    $('div.salles_libres_epi1').hide();//salles libres cachées par défaut
    ajoutSallesH(rooms.epi2, 'salles_libres_epi2', '#epi_2');
    $('div.salles_libres_epi2').hide();//salles libres cachées par défaut
    ajoutSallesH(rooms.epi3, 'salles_libres_epi3', '#epi_3');
    $('div.salles_libres_epi3').hide();//salles libres cachées par défaut
    ajoutSallesH(rooms.epi4, 'salles_libres_epi4', '#epi_4');
    $('div.salles_libres_epi4').hide();//salles libres cachées par défaut
    ajoutSallesH(rooms.epi5, 'salles_libres_epi5', '#epi_5');
    $('div.salles_libres_epi5').hide();//salles libres cachées par défaut
    ajoutSallesH(rooms.epi6, 'salles_libres_epi6', '#epi_6');
    $('div.salles_libres_epi6').hide();//salles libres cachées par défaut
    ajoutSallesH(rooms.autres, 'salles_libres_rue', '.rue');
    $('div.salles_libres_rue').hide();//salles libres cachées par défaut 
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
function setErrorLog (functionId, errorMessage, sessionId){
    // Initialisation objet temporel :
    let currentDate = new Date();  
    // Date et heure, format [AAAA.MM.JJ - HH:MM:SS], nom de la fonction utilisée :
    var logger = "[" + getDate(currentDate) + " - " + getTime(currentDate) + "] : " + errorMessage + " | Function {" + functionId + "}"+ " | SessionId {" + sessionId + "}"; 
    return logger;  
}

// Transmission des logs au fichier Drive (Google Doc) de sallelib@gmail.com via Webapp Google script
function sendLog (logMessage){
     const url = 'https://script.google.com/macros/s/AKfycbzKwNZ7Vb4epwKv2rneDLMzGyZqPsHzN7HC2v-x8W3Cn2chEjg/exec?' + 'log=' + logMessage;
     const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; 
     fetch(proxyUrl + url)
            .then(response=>response.text()) 
            .then(data => {	
                console.log(data);
            })
            .catch(e => {
                console.log(e);
                return e;
            });	
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

    // Nouvelle liste des salles après filtrage :
    var roomsList = [];
    
    dataRooms.forEach((item, index) => {
        let isNew = 1;
        // Filtrage par indésirables :
        for(i=0; i < Filter_default.length; i++){
            if(item == Filter_default[i].name){
                isNew = 0;
                break;
            }
        }
        // Filtrage par les salles valides actuelles :
        for(i=0; i < previousRoomsList.length; i++){
            if(item == previousRoomsList[i].name){
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
            if(item.room == Filter_default[i].name){
                isToSuppr = 1;
                break;
            }
        }

        // Item ajouté à la liste :
        if(isToSuppr == 0){
            filter1.push(item);
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
            if(item.room == EPI_1[i].name){
                occupiedRooms_epi1.push(item);
                break;
            }
        }
        // Filtrage EPI 2 :
        for(i=0; i < EPI_2.length; i++){
            if(item.room == EPI_2[i].name){
                occupiedRooms_epi2.push(item);
                break;
            }
        }
        // Filtrage EPI 3 :
        for(i=0; i < EPI_3.length; i++){
            if(item.room == EPI_3[i].name){
                occupiedRooms_epi3.push(item);
                break;
            }
        }
        // Filtrage EPI 4 :
        for(i=0; i < EPI_4.length; i++){
            if(item.room == EPI_4[i].name){
                occupiedRooms_epi4.push(item);
                break;
            }
        }
        // Filtrage EPI 5 :
        for(i=0; i < EPI_5.length; i++){
            if(item.room == EPI_5[i].name){
                occupiedRooms_epi5.push(item);
                break;
            }
        }
        
        // Filtrage EPI 6 :
        for(i=0; i < EPI_6.length; i++){
            if(item.room == EPI_6[i].name){
                occupiedRooms_epi6.push(item);
                break;
            }
        }
        // Filtrage AUTRES :
        for(i=0; i < AUTRES.length; i++){
            if(item.room == AUTRES[i].name){
                occupiedRooms_autres.push(item);
                break;
            }
        }
    })

    // Retourner les différentes listes :
    return [{epi1 : occupiedRooms_epi1, epi2 : occupiedRooms_epi2, epi3 :  occupiedRooms_epi3, epi4 :  occupiedRooms_epi4, epi5 : occupiedRooms_epi5, epi6 :  occupiedRooms_epi6, autres : occupiedRooms_autres}];
}

// Transforme l'heure String au format "HH:MM" en valeur numérique de la forme HH,MM       
function timeToNumeral(hourString){
    var split = hourString.split(":");
    return parseInt(split[0], 10) + parseInt((parseInt(split[1], 10))/6)/10; 
}

// Filtre les salles selon leur type (local à épi)
function getRoomsType(roomsEpi) {
  // Tri des amphis :
  amphiList = roomsEpi.filter(obj => { return obj.type === 'amphi' });
  // Tri des salles info :
  infoList = roomsEpi.filter(obj => { return obj.type === 'salle informatique' });
  // Tri des salles d'elec :
  elecList = roomsEpi.filter(obj => { return obj.type === 'laboratoire' }); 

  return [amphiList, infoList, elecList];
}

// Filtre les salles des épis par type
function classifyRoomTypes(roomsList){
  var amphiList = []; 
  var infoList = []; 
  var elecList = [];
  roomsList = roomsList[0];
  
  amphiList = getRoomsType(roomsList.epi1)[0].concat(getRoomsType(roomsList.epi2)[0]).concat(getRoomsType(roomsList.epi3)[0])
            .concat(getRoomsType(roomsList.epi4)[0]).concat(getRoomsType(roomsList.epi5)[0]).concat(getRoomsType(roomsList.epi6)[0])
            .concat(getRoomsType(roomsList.autres)[0]);
  infoList = getRoomsType(roomsList.epi1)[1].concat(getRoomsType(roomsList.epi2)[1]).concat(getRoomsType(roomsList.epi3)[1])
            .concat(getRoomsType(roomsList.epi4)[1]).concat(getRoomsType(roomsList.epi5)[1]).concat(getRoomsType(roomsList.epi6)[1])
            .concat(getRoomsType(roomsList.autres)[1]);
  elecList = getRoomsType(roomsList.epi1)[2].concat(getRoomsType(roomsList.epi2)[2]).concat(getRoomsType(roomsList.epi3)[2])
            .concat(getRoomsType(roomsList.epi4)[2]).concat(getRoomsType(roomsList.epi5)[2]).concat(getRoomsType(roomsList.epi6)[2])
            .concat(getRoomsType(roomsList.autres)[2]);

  // Renvoyer les trois listes :
  return [{amphis : amphiList, info : infoList, elec : elecList}];
}

// Tri des salles d'un épi par étage 
function clusterByFloor(epiName){
    // console.log(epiName);
    var floorRooms = [];
    for(let i=0; i<=4; i++) {
        floorRooms[i] = epiName.filter(obj => { return obj.name.substring(1,2) === (i+'') });
    }
    
    return floorRooms;
}

// Obtenir l'heure actuelle, créneau de 2h par défaut
function getDefaultSlot(){   
    // Objet temporel :
    let currentDate = new Date(); 

    // Heures et minutes :
    let HourStart = currentDate.getHours();
    let MinuteStart = currentDate.getMinutes();

    // Début du créneau qui commence à l'heure actuelle :
    let startHour = (HourStart<10?"0":"") + HourStart + ":" + (MinuteStart<10?"0":"") + MinuteStart;

    // Fin du créneau de 2 h :
    let HourEnd = HourStart + 2;
    let endHour = (HourEnd<10?"0":"") + HourEnd + ":" + (MinuteStart<10?"0":"") + MinuteStart;

    return [startHour, endHour];
}

// Filtrage des salles libres
function getSallesLib(occupiedRoomsList, startHour, endHour) {         
    
    occupiedRoomsList = occupiedRoomsList[0];
    
    var START_HOUR = timeToNumeral(startHour);
    var END_HOUR = timeToNumeral(endHour);
   
   // Copie des tableaux :
   var sallesLibEpi1 = EPI_1.slice();
   var sallesLibEpi2 = EPI_2.slice();
   var sallesLibEpi3 = EPI_3.slice();
   var sallesLibEpi4 = EPI_4.slice();
   var sallesLibEpi5 = EPI_5.slice();
   var sallesLibEpi6 = EPI_6.slice();
   var sallesLibAutres = AUTRES.slice();
   
    occupiedRoomsList.epi1.forEach((item, index) => {
        let item_startH = timeToNumeral(item.startH);
        let item_endH = timeToNumeral(item.endH);
        
        if ( ( (START_HOUR <= item_startH)  && (item_startH < END_HOUR) )
            || ( (START_HOUR < item_endH) && (item_endH <= END_HOUR) ) 
            || ( (item_startH <= START_HOUR) && (END_HOUR <= item_endH) ) ) {
                
                for(let i = 0; i<sallesLibEpi1.length; i++){
                    let offset = 0;
                    if(sallesLibEpi1[i].name== item.room){
                        sallesLibEpi1.splice(i-offset,1);
                        offset ++;
                        break;
                    }
                }
        }
    })

    occupiedRoomsList.epi2.forEach((item, index) => {
        let item_startH = timeToNumeral(item.startH);
        let item_endH = timeToNumeral(item.endH);
        
        if ( ( (START_HOUR <= item_startH)  && (item_startH < END_HOUR) )
            || ( (START_HOUR < item_endH) && (item_endH <= END_HOUR) ) 
            || ( (item_startH <= START_HOUR) && (END_HOUR <= item_endH) ) ) {

                for(let i = 0; i<sallesLibEpi2.length; i++){
                    let offset = 0;
                    if(sallesLibEpi2[i].name== item.room){
                        sallesLibEpi2.splice(i-offset,1);
                        offset ++;
                        break;
                    }
                }
        }
    })

    occupiedRoomsList.epi3.forEach((item, index) => {
        let item_startH = timeToNumeral(item.startH);
        let item_endH = timeToNumeral(item.endH);
        
        if ( ( (START_HOUR <= item_startH)  && (item_startH < END_HOUR) )
            || ( (START_HOUR < item_endH) && (item_endH <= END_HOUR) ) 
            || ( (item_startH <= START_HOUR) && (END_HOUR <= item_endH) ) ) {

                for(let i = 0; i<sallesLibEpi3.length; i++){
                    let offset = 0;
                    if(sallesLibEpi3[i].name== item.room){
                        sallesLibEpi3.splice(i-offset,1);
                        offset ++;
                        break;
                    }
                }
        }
    })

    occupiedRoomsList.epi4.forEach((item, index) => {
        let item_startH = timeToNumeral(item.startH);
        let item_endH = timeToNumeral(item.endH);
        
        if ( ( (START_HOUR <= item_startH)  && (item_startH < END_HOUR) )
            || ( (START_HOUR < item_endH) && (item_endH <= END_HOUR) ) 
            || ( (item_startH <= START_HOUR) && (END_HOUR <= item_endH) ) ) {

                for(let i = 0; i<sallesLibEpi4.length; i++){
                    let offset = 0;
                    if(sallesLibEpi4[i].name== item.room){
                        sallesLibEpi4.splice(i-offset,1);
                        offset ++;
                        break;
                    }
                }
        }
    })

    occupiedRoomsList.epi5.forEach((item, index) => {
        let item_startH = timeToNumeral(item.startH);
        let item_endH = timeToNumeral(item.endH);
        
        if ( ( (START_HOUR <= item_startH)  && (item_startH < END_HOUR) )
            || ( (START_HOUR < item_endH) && (item_endH <= END_HOUR) ) 
            || ( (item_startH <= START_HOUR) && (END_HOUR <= item_endH) ) ) {

                for(let i = 0; i<sallesLibEpi5.length; i++){
                    let offset = 0;
                    if(sallesLibEpi5[i].name== item.room){
                        sallesLibEpi5.splice(i-offset,1);
                        offset ++;
                        break;
                    }
                }
        }
    })

    occupiedRoomsList.epi6.forEach((item, index) => {
        let item_startH = timeToNumeral(item.startH);
        let item_endH = timeToNumeral(item.endH);
        
        if ( ( (START_HOUR <= item_startH)  && (item_startH < END_HOUR) )
            || ( (START_HOUR < item_endH) && (item_endH <= END_HOUR) ) 
            || ( (item_startH <= START_HOUR) && (END_HOUR <= item_endH) ) ) {

                for(let i = 0; i<sallesLibEpi6.length; i++){
                    let offset = 0;
                    if(sallesLibEpi6[i].name== item.room){
                        sallesLibEpi6.splice(i-offset,1);
                        offset ++;
                        break;
                    }
                }
        }
    })

    occupiedRoomsList.autres.forEach((item, index) => {
        let item_startH = timeToNumeral(item.startH);
        let item_endH = timeToNumeral(item.endH);
        
        if ( ( (START_HOUR <= item_startH)  && (item_startH < END_HOUR) )
            || ( (START_HOUR < item_endH) && (item_endH <= END_HOUR) ) 
            || ( (item_startH <= START_HOUR) && (END_HOUR <= item_endH) ) ) {

                for(let i = 0; i<sallesLibAutres.length; i++){
                    let offset = 0;
                    if(sallesLibAutres[i].name== item.room){
                        sallesLibAutres.splice(i-offset,1);
                        offset ++;
                        break;
                    }
                }
        }
    })

    return [{epi1 : sallesLibEpi1, epi2 : sallesLibEpi2, epi3 :  sallesLibEpi3, epi4 :  sallesLibEpi4, epi5 : sallesLibEpi5, epi6 :  sallesLibEpi6, autres : sallesLibAutres}];

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

        // Logger dans fichier Drive Sallib' :
        var log = setLog('get projects', [['Session ID', sessionId], ['detail', 2]], requestDuration6, data.length);
        sendLog(log);
        
        // Set project :
        settingProject(sessionId, projId);
    })
    .catch(e => {
        err = setErrorLog('getProjectId', e, sessionId);
        sendLog(err);
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

        // Récupération de projectId :
        let settingProject  = xmlResponse.getElementsByTagName('setProject');
        let sessionIdent = settingProject[0].getAttribute('sessionId');
        let projectIdent = settingProject[0].getAttribute('projectId');        
        // Log :
        var endRequest2 = new Date().getTime();
        var requestDuration2 = endRequest2 - startRequest2;
        if(sessionIdent == 'undefined'){
            var errLog = setErrorLog('set project', 'ERROR "session Id" is undefined !', sessionId);
            sendLog(errLog);
        }
        else {
            // Logger dans fichier Drive Sallib' :
            var log = setLog('set project', [['Session ID', sessionIdent], ['Project ID', projectIdent]], requestDuration2,  data.length);  
            sendLog(log);
        }

        // Pour mettre à jour la liste des salles (indicateur des salles non-traitées) :
        // getClassroomsTot(sessionId);

        // Get events :
        getEvents(sessionId);
    })
    .catch(e => {
        err = setErrorLog('settingProject', e, sessionId);
        sendLog(err);          
        return e;
    });	
}

// Récupérer les events de ADE 
function getEvents(sessionId){  
    var date = getCurrentDateForEvent(); 
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
            var endRequest3 = new Date().getTime();
            var requestDuration3 = endRequest3 - startRequest3;

            // Logger dans fichier Drive Sallib' :
            var log = setLog('get events', [['Session ID', sessionId], ['tree', true], ['detail', 8], ['date', date]], requestDuration3, data.length); 
            sendLog(log); 

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
            
            // Déconnexion de session ADE :
            disconnection(sessionId);
 
            // Pré-filtrage des salles :
            var processedList = filter(occupiedRooms);
            // Tri par épi :
            planifRooms = occupiedRoomsPerEpi(processedList); 
            // Slot par défaut :
            var default_slot = getDefaultSlot();
            // Filtrage des salles libres : 
            var sallesLib = getSallesLib(planifRooms, default_slot[0], default_slot[1]);      
            // Tri par type de salle :
            roomsByType = classifyRoomTypes(sallesLib);
            
            // Stockage local des données (pour communiquer aux onglets) :
            localStorage.setItem('TypeRooms', JSON.stringify(roomsByType)); // Classement par type - pour labos, salles info, amphis
            localStorage.setItem('EpiRooms', JSON.stringify(planifRooms)); // Classement par épi - pour retour au menu principal

            // Indiquer que la requête a été effectuée (pour éviter chargement à chaque retour sur la page principale)
            // Stockage de la date du jour associée : 
            localStorage.setItem('DayLoaded', getCurrentDateForEvent(new Date()));
                     
            // A utiliser :
            /*
            var sallesAmphis = JSON.parse(localStorage.getItem('TypeRooms'));
            console.log(sallesAmphis);
            localStorage.removeItem('TypeRooms');
            */
            // A utiliser :
            // clusterByFloor(sallesLib[0].epi1);
            
            // Activer les options de navigation du bandeau :
            // TODO

            // LOGGER MESSAGES ERREURS DE ADE

            // Activer les options de navigation du bandeau :
             $('ul.menu_elements').show();
            // Activer le bouton de recherche pour rechercher par créneau horaire dans la journée : 
            $('button.bouton_recherche').prop('disabled', false);

            // Affichage des salles libres par épi :
            AffichageFront(sallesLib);
            ajoutClique();
        })
        .catch(e => {
            err = setErrorLog('getEvents', e, sessionId);
            sendLog(err);      
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
            var errLog = setErrorLog('disconnect', 'ERROR "session Id" is undefined !', sessionId);
            sendLog(errLog);
        }
        else {
            // Logger dans fichier Drive Sallib' :
            var log = setLog('disconnect', [['Session ID', sessionIdent]], requestDuration4, data.length);  
            sendLog(log);
        }
    })
    .catch(e => {
        err = setErrorLog('disconnect', e, sessionId);
        sendLog(err);
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
        var endRequest5 = new Date().getTime();
        var requestDuration5 = endRequest5 - startRequest5;      
        
        // Logger dans fichier Drive Sallib' :
        var log = setLog('get resources', [['Session ID', sessionId], ['detail', 2], ['category', 'classroom']], requestDuration5, data.length); 
        sendLog(log);

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
            err = setErrorLog('getClassroomsTot', e, sessionId);
            sendLog(err);         
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

            // Logger dans fichier Drive Sallib' :
            var log = setLog('connect', [['Session ID', sessionId]], requestDuration, data.length);
            sendLog(log);

            // Get Project Id:
            getProjectId(sessionId);
        })
        .catch(e => {
            var err = e;
            if (e == "TypeError: Failed to fetch"){
                err = setErrorLog('connect', 'ERROR "Failed to fetch request !"', null);
            }
            else {
                err = setErrorLog('connect', e, null);
            }
            sendLog(err);
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
const EPI_1 = [{name :'1001V',  type : 'laboratoire'},
			   {name :'1007V+', type : 'laboratoire'},
			   {name :'1007V',  type : 'laboratoire'},
			   {name :'1051',   type : 'laboratoire'},
			   {name :'1055V+', type : 'laboratoire'},
			   {name :'1103',   type : 'classique'},
			   {name :'1105',   type : 'salle informatique'},
			   {name :'1107V+', type : 'salle informatique'},
			   {name :'1109V+', type : 'classique'},
			   {name :'1201+',  type : 'classique'},
			   {name :'1205V+', type : 'salle informatique'},
			   {name :'1207V+', type : 'salle informatique'},
			   {name :'1209V+', type : 'salle informatique'},
			   {name :'1301+',  type : 'classique'},
			   {name :'1305',   type : 'classique'},
			   {name :'1307',   type : 'classique'},
			   {name :'1309',   type : 'classique'},
			   {name :'1401',   type : 'classique'},
			   {name :'1403',   type : 'classique'},
			   {name :'1405',   type : 'classique'},
			   {name :'1407',   type : 'classique'},
			   {name :'1409',   type : 'classique'},
			   {name :'1452',   type : 'classique'},
			   {name :'1456',   type : 'classique'},];
const EPI_2 = [{name :'2101',   type : 'classique'},
			   {name :'2102',   type : 'classique'},
			   {name :'2103',   type : 'classique'},
			   {name :'2104',   type : 'classique'},
			   {name :'2105',   type : 'classique'},
			   {name :'2107',   type : 'classique'},
			   {name :'2105',   type : 'classique'},
			   {name :'2107',   type : 'classique'},
			   {name :'2108',   type : 'classique'},
			   {name :'2201+',  type : 'classique'},
			   {name :'2205',   type : 'classique'},
			   {name :'2207',   type : 'classique'},
			   {name :'2209',   type : 'classique'},
			   {name :'2305V+', type : 'salle informatique'},
			   {name :'2309+',  type : 'salle informatique'},
			   {name :'2401V+', type : 'laboratoire'}];  
const EPI_3 = [{name :'3001',   type : 'classique'},
			   {name :'3005',   type : 'classique'},
			   {name :'3007',   type : 'classique'},
			   {name :'3051',   type : 'classique'},
			   {name :'3053',   type : 'classique'},
			   {name :'3055',   type : 'classique'},
			   {name :'3103',   type : 'classique'},
			   {name :'3105',   type : 'classique'},
			   {name :'3107',   type : 'classique'},
			   {name :'3109',   type : 'classique'},
			   {name :'3201',   type : 'classique'},
			   {name :'3203',   type : 'classique'},
			   {name :'3207+',  type : 'classique'},
			   {name :'3301V+', type : 'laboratoire'},
			   {name :'3305',   type : 'classique'},
			   {name :'3307+',  type : 'classique'},
			   {name :'3401V+', type : 'laboratoire'},
			   {name :'3407V',  type : 'laboratoire'}];
const EPI_4 = [{name :'4003V+', type : 'laboratoire'},
			   {name :'4007V',  type : 'laboratoire'},
			   {name :'4105V',  type : 'laboratoire'},
			   {name :'4109',   type : 'laboratoire'},
			   {name :'4201+',  type : 'classique'},
			   {name :'4305',   type : 'classique'},
			   {name :'4307+',  type : 'classique'},
			   {name :'4401',   type : 'classique'},
			   {name :'4403',   type : 'classique'}];
const EPI_5 = [{name :'5004',   type : 'salle informatique'},
			   {name :'5101+',  type : 'salle informatique'},
			   {name :'5103+',  type : 'salle informatique'},
			   {name :'5105V',  type : 'salle informatique'},
			   {name :'5107V',  type : 'salle informatique'},
			   {name :'5155',   type : 'classique'},
			   {name :'5201V+', type : 'laboratoire'},
			   {name :'5207+',  type : 'salle informatique'},
			   {name :'5209V',  type : 'salle informatique'},
			   {name :'5301V',  type : 'salle informatique'},
			   {name :'5308',   type : 'classique'},
			   {name :'5309V',  type : 'salle informatique'},
			   {name :'5401V',  type : 'salle informatique'},
			   {name :'5403V',  type : 'salle informatique'}];
const EPI_6 = [{name :'6301' ,  type : 'laboratoire'},
			   {name :'6401+',  type : 'laboratoire'},
			   {name :'6409V',  type : 'salle informatique'}];
const AUTRES =[{name :'0110',   type : 'amphi'},
				{name :'0210',  type : 'amphi'},
				{name :'0160',  type : 'amphi'},
				{name :'0260',  type : 'amphi'},
				{name :'0112',  type : 'classique'},
				{name :'0113',  type : 'classique'},
				{name :'0114',  type : 'classique'},
                {name :'0115',  type : 'classique'}];
                
// Vérifier salles 3409 et 5304

// Liste salles de Cergy :
const Cergy = [{name :'108'}, {name :'109'}, {name :'110'}, {name :'204'}, {name :'208'}, {name :'B5'}, {name :'B6'}, {name :'C1'}, {name :'C2'}, {name :'C3'}, {name :'C4'}, {name :'P1'}, {name :'P2'}, {name :'P3'}, {name :'TP1'}, {name :'TP2'}, {name :'TP3'}, {name :'TP4'}, {name :'TPR1'}, {name :'TPR2'}];
// Liste des élements indésirables (salle à préciser, MD, salles de partiels):
const Indesirables = [{name :'salle à préciser 1'}, {name :'M.D.'}, {name :'4405'}, {name :'4405-2'}, {name :'4405-3'}, {name :'4405-4'}, {name :'4405-5'}, {name :'4451'}, {name :'4451-2'}, {name :'4451-3'}, {name :'7100'}];
// Salles non-accessibles aux étudiants :
const Inaccessibles = [{name :'1005'},{name :'2409V+'},{name :'5006V+'},{name :'5008V++'},{name :'5407V'},{name :'0162V'},{name :'0163'},{name :'0164V'},{name :'0165V'},{name :'0232'},{name :'0244'},{name :'0351'}];
// Elaboration du fitre qui va pré-traiter les données remontées :
const Filter_default = Cergy.concat(Indesirables).concat(Inaccessibles);

// Paramètres pour les requêtes :
const ip = 'planif.esiee.fr';
const port ='8443'; 
// URL commune aux requêtes :
const baseURL = 'https://'+ ip +':'+ port +'/jsp/webapi';

// API that enables cross-origin requests to anywhere :
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';  // Trouver une solution viable ! + CORS demander à D.B.

// Array qui contiendra les salles occupées (classées par épi):
var planifRooms = [];

// Array qui contient les salles classées par type :
var roomsByType = [];

// Initialisation des heures :
var now = new Date();
var horaire_debut = document.querySelector('input#debut');
var horaire_fin = document.querySelector('input#fin');

var heure = now.getHours();
var minutes = now.getMinutes();

var nextHour = parseInt(heure)+2;
var nextMinutes = minutes;

if(heure<10)
    heure = '0' + heure;    

if(minutes<10)
    minutes = '0' + minutes;

if(heure >= 22) {
    nextHour = 23;
    nextMinutes = 59;
}

if(nextHour<10)
    nextHour = '0' + nextHour;    

if(nextMinutes<10)
    nextMinutes = '0' + nextMinutes;

horaire_debut.value = heure +':'+ minutes;
horaire_fin.value = nextHour +':'+ nextMinutes;

// Faire la requête de récupération des salles de la journée uniquement si elle n'a pas déjà été faite :
var lastDL = localStorage.getItem('DayLoaded');
if (lastDL != getCurrentDateForEvent(new Date())) {
    // Désactiver les options de navigation du bandeau tant que la recherche n'est pas achevée :
    $('ul.menu_elements').hide();

    // Désactiver le bouton de recherche jusqu'au chargement des données : 
    $('button.bouton_recherche').prop('disabled', true);

    // Connexion à ADE (main) :
    ADEconnect();
}
// Si la requête a déjà été effectuée antérieurement :
else {
    // Récupération des salles occupées de la journée, triées par épi :
    planifRooms = JSON.parse(localStorage.getItem('EpiRooms'));
    // Détermination des salles libres selon le créneau spécifié, classées par épi :
    var sallib = getSallesLib(planifRooms, horaire_debut.value, horaire_fin.value); 
    // Affichage des salles libres du créneau, par épi :
    AffichageFront(sallib);
    ajoutClique();
}











/*
====================================================================================================================================
                            Paramétrage de la recherche par créneau
====================================================================================================================================
*/

// Extrait les heures et minutes du format HH:MM :
function parseHour(timeValue){
    var hora = timeValue.substring(0,2);
    var minutos = timeValue.substring(3,5);
    return [{h : hora, m : minutos}];
}

horaire_debut.addEventListener('input',function(e){
    // Heure actuelle :
    var time = new Date();
    var h = time.getHours(); 
    var min = time.getMinutes();
    
    if (e.target.valueAsDate == null){
        if(h<10)
            h = '0' + h;  
        if(min<10)
            min = '0' + min;  
        horaire_debut.value = h +':'+ min;
        horaire_fin.value = horaire_debut.value;
    }
    else {
        // Heure choisie :
        var choice = parseHour(horaire_debut.value);
        choice = choice[0];
        var choiceH = choice.h;
        var choiceMin = choice.m;

        // Empêcher que l'heure de début soit antérieure à l'heure actuelle :
        if(choiceH < h) {
            choiceH = h;
        }
        else if ((choiceH == h) && (choiceMin < min)) {
            choiceMin = min;                    
        }

        // Empêcher que l'heure de fin soit antérieure à l'heure de début :
        var choice2 = parseHour(horaire_fin.value); // Heure de fin 
        choice2 = choice2[0];
        var choiceH2 = choice2.h;
        var choiceMin2 = choice2.m;  

        if(choiceH2 < choiceH) {
            choiceH2 = choiceH;                       
            horaire_fin.value = choiceH2 +':'+ choiceMin2;           
        }
        else if ((choiceH2 == choiceH) && (choiceMin2 < choiceMin)) {
            choiceMin2 = choiceMin;                    
            horaire_fin.value = choiceH2 +':'+ choiceMin2;              
        }

        // Valeur de début après traitement :
        horaire_debut.value = choiceH +':'+ choiceMin;  
    }  
});

horaire_fin.addEventListener('input',function(e){
    // En cas d'appui sur les touches 'backspace' et 'delete' :
    if (e.target.valueAsDate == null){
        horaire_fin.value = horaire_debut.value;
    } 
    else {
        // Heure choisie :
        var choice2 = parseHour(horaire_fin.value);
        choice2 = choice2[0];
        var choiceH2 = choice2.h;
        var choiceMin2 = choice2.m;   

        // Heure de début :
        var choice = parseHour(horaire_debut.value);
        choice = choice[0];
        var choiceH = choice.h;
        var choiceMin = choice.m;

        // Empêcher que l'heure de fin soit antérieure à celle de début :
        if((choiceH2 < choiceH) || (choiceH2 <= choiceH && (choiceMin2 < choiceMin))) {    
            choiceH2 = choiceH;   
            choiceMin2 = choiceMin;                                                          
        }
        
        // Valeur de fin après traitement :
        horaire_fin.value = choiceH2 +':'+ choiceMin2;   
    }  
});

$('button.bouton_recherche').click(function(){
    console.log('RECHERCHE DES SALLES LIBRES DE\nDEBUT : '+horaire_debut.value+' / FIN : '+horaire_fin.value);
    // Mise à jour de la liste des salles libres (avec le créneau spécifié) :
    var sallib = getSallesLib(planifRooms, horaire_debut.value, horaire_fin.value); 
    // Mise à jour de la liste des salles classées par type :
    roomsByType =  classifyRoomTypes(sallib);
    // Mise à jour du stockage :
    localStorage.setItem('TypeRooms', JSON.stringify(roomsByType)); // Classement par type
    // Msie à jour de l'affichage des salles :
    AffichageFront(sallib);
});


// TESTER SALLES LIBRES EN VERIFIANT SUR PLANIF ESIEE !
