LA TRAME DE SALLIB'
==


1. Connexion au site.

2. Appelle ADEConnect() --> récupère sessionId et lance getProjetctId(sessionId) qui récupère l'ID du projet.

3. getProjectId() lance settingProject(sessionId, projectId).

4. settingProject() lance getEvents(sessionId)

5. getEvents(sessionId) récupère une liste d'objets ( nom de salle, heure début et heure fin ) qui correspond à la liste des "salles" occupées dans la journée. Ensuite déconnexion de sessionId avec disconnection(sessionId). 
a) Puis filtrage qui retire:
- les salles de Cergy
- le MD
- les salles de partiel
- la 7100 (salle banche)
- "salle à préciser 1"
b) Tri : répartition des salles occupées par épi -> stocké dans une variable globale (planifRooms)

On obtient donc une hashMap configurée de la façon suivante:

[
epi1:{(1203, 8:00, 10:00),  
	   (1407, 8:00, 10:00),  
	   ...},  
epi2:{...},  
epi3:{...},  
epi4:{...},  
epi5:{...},  
epi6:{...},  
autres:{amphis,113...}  
]  


getEvents() appelle getDefaultSlots() qui renvoie le créneau horaire par défaut (h actuelle et h+2)

getEvents() appelle getSallesLib(sallesOccupées, heureDébut, heureFin) qui renvoie une liste de hashMap configurée comme précédement mais qui contient les salles libres selon le créneau spécifié.

NB : getEvents() peut aussi faire appel à getClassroomsTot qui liste toutes les salles d'ADE, qui elle-même fait appel à updateClassroomsList pour afficher les salles non-traitées par SalleLib' (permet de savoir si des salles ont été oubliées, ou si de nouvelles salles ont été enregistrées côté ADE).

6. On appelle ensuite AffichageFront(sallesLibres) qui prend en paramètre l'objet renvoyé par getSallesLib().  
Pour chaque élement de la HashMap, elle appelle la fonction ajoutSalleH(arraySalles, classDivCree, attrDivCible) qui créée une div de class "classDivCree" dans la balise d'attribut "attrDivCible" et qui ajoute dans le div créé les noms de salles avec leurs horaires.



TODO : update la liste des salles libres par épi avec le bouton "chercher" qui fait appel à getSallesLib, à la variable globale contenant les salles occupées (planifRooms), et les nouveaux créneaux de début et de fin séléctionnés par l'utilisateur.
