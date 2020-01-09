//Menu


//_________________________________________
//Salles libres
var arraySalles = new Array(1,2,3,4,5,6);

for(var i = 0; i < arraySalles.length; i++){ //ajout de toutes les "salles" dans la balise '<div class="salles_libres"/>'
  $('div.salles_libres').append("<div class='salles_libres_salles_div'>Salles numéro "+
    arraySalles[i]+
    "</div>");
}

//Mise en page des div de salles libres
$('div.salles_libres_salles_div').css('height','30px');
$('div.salles_libres_salles_div').css('width','200px');
$('div.salles_libres_salles_div').css('margin','0 auto');
$('div.salles_libres_salles_div').css('border','2px solid black');
$('div.salles_libres_salles_div').css('margin-bottom','10px');



$('div.salles_libres_salles_div').hide();//salles libres cachées par défaut

$('div.salles_libres').click(function(){
  $('div.salles_libres_salles_div').toggle(300);//Permet de cacher et d'afficher les salles libres
  //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
});



//_________________________________________
//Carte
//-------
//EPI1
var arraySallesEpi1 = new Array(1051,1052,1053,1054,1055,1056);

for(var i = 0; i < arraySallesEpi1.length; i++){ //ajout de toutes les "salles" dans la balise '<div class="salles_libres"/>'
  $('div#epi_1').append("<div class='salles_carte_epi1'>"+
  	arraySallesEpi1[i]
  	+"</div>");
}

$('div.salles_carte_epi1').hide();
$('div#epi_1').click(function(){
  $('div.salles_carte_epi1').toggle(300);//Permet de cacher et d'afficher les salles libres
  //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
});

$('div.salles_carte_epi1').css('height','30px');
$('div.salles_carte_epi1').css('width','200px');
$('div.salles_carte_epi1').css('margin','0 auto');
$('div.salles_carte_epi1').css('border','2px solid black');
$('div.salles_carte_epi1').css('margin-bottom','10px');



//-------
//EPI2
var arraySallesEpi2 = new Array(2051,2052,2053,2054,2055,2056);

for(var i = 0; i < arraySallesEpi1.length; i++){ //ajout de toutes les "salles" dans la balise '<div class="salles_libres"/>'
  $('div#epi_2').append("<div class='salles_carte_epi2'>"+
  	arraySallesEpi2[i]
  	+"</div>");
}

$('div.salles_carte_epi2').hide();
$('div#epi_2').click(function(){
  $('div.salles_carte_epi2').toggle(300);//Permet de cacher et d'afficher les salles libres
  //Le paramètre est le temps que met le navigateur à afficher ou cacher en ms
});

$('div.salles_carte_epi2').css('height','30px');
$('div.salles_carte_epi2').css('width','200px');
$('div.salles_carte_epi2').css('margin','0 auto');
$('div.salles_carte_epi2').css('border','2px solid black');
$('div.salles_carte_epi2').css('margin-bottom','10px');



//______________________________
//Cette partie sera à virer et à remplacer par la méthode ci-dessus

$('div#epi_3').click(function(){
  $('div#epi_3').css('width','500px');
  $('div#epi_3').css('height','500px');
  $('div#epi_3').click(function(){
  	$('div#epi_3').css('width','250px');
  	$('div#epi_3').css('height','');
  });
});

$('div#epi_4').click(function(){
  $('div#epi_4').css('width','500px');
  $('div#epi_4').css('height','500px');
  $('div#epi_4').click(function(){
  	$('div#epi_4').css('width','250px');
  	$('div#epi_4').css('height','');
  });
});

$('div#epi_5').click(function(){
  $('div#epi_5').css('width','500px');
  $('div#epi_5').css('height','500px');
  $('div#epi_5').click(function(){
  	$('div#epi_5').css('width','250px');
  	$('div#epi_5').css('height','');
  });
});

$('div#epi_6').click(function(){
  $('div#epi_6').css('width','500px');
  $('div#epi_6').css('height','500px');
  $('div#epi_6').click(function(){
  	$('div#epi_6').css('width','250px');
  	$('div#epi_6').css('height','');
  });
});

