LA TRAME DE SALLIB'
==


* Connection au site.

* Appelle ADEConnect() --> récupère sessionId et lance getProjetctId(sessionId) récupère l'ID du projet automatiquement.

* getProjectId() lance settingProject(sessionId, projectId).

* settingProject() lance getEvents(sessionId)

* getEvents(sessionId) récupère une liste d'objet ( nom de salle, heure début et heure fin ) qui correspond à la liste des salles occupées dans la journée. Ensuite déconnexion de sessionId avec deconnexion(sessionId). Puis filtrage qui retire:
- les salles de Cergy
- le MD
- les salles de partiel
- la 7100 (salle banche)
- salle à préciser
Répartition des salles par épi

--> On obtient donc une hashMap configurée de la façon suivante:

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

--> getevents() appelle getDefaultSlots() qui renvoie le créneau horaire par défaut (h actuelle et h+2)

--> getEvents() appelle getSallesLib(sallesOccupées, heureDébut, heureFin) qui renvoie une liste de hashMap configurée comme précédement mais qui contient les salles libres selon le créneau sélectionnée.

* On appelle ensuite AffichageFront(sallesLibres) qui prend en paramètre l'objet renvoyé par getSallesLib(). 
- Pour chaque élement de la HashMap, elle appelle la fonction ajoutSalleH(arraySalles, classDivCree, attrDivCible) qui créée une div de class "classDivCree" dans la balise d'attribut "attrDivCible" et qui ajoute dans le div créé les noms de salles avec leurs horaires.