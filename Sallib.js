//Menu


//_________________________________________
//Salles libres

var arraySalles = new Array(1,2,3,4,5,6);

for(var i =0; i< arraySalles.length; i++){
	$('div.salles_libres p').append("<p class=\"salles_libres_p\">Salle numéro "+arraySalles[i]+"</p>");
}

$('p.salles_libres_p').hide();
$('div.salles_libres p').click(function(){
  $('p.salles_libres_p').toggle(300);
});



//_________________________________________
//Carte

$('div#epi_1').click(function(){
  $('div#epi_1').css('width','500px');
  $('div#epi_1').css('height','500px');
  $('div#epi_1').click(function(){
  	$('div#epi_1').css('width','250px');
  	$('div#epi_1').css('height','');
  });
});

$('div#epi_2').click(function(){
  $('div#epi_2').css('width','500px');
  $('div#epi_2').css('height','500px');
  $('div#epi_2').click(function(){
  	$('div#epi_2').css('width','250px');
  	$('div#epi_2').css('height','');
  });
});

$('div#epi_3').click(function(){
  $('div#epi_3').css('width','500px');
  $('div#epi_3').css('height','500px');
  $('div#epi_3').click(function(){
  	$('div#epi_3').css('width','300px');
  	$('div#epi_3').css('height','');
  });
});

$('div#epi_4').click(function(){
  $('div#epi_4').css('width','500px');
  $('div#epi_4').css('height','500px');
  $('div#epi_4').click(function(){
  	$('div#epi_4').css('width','300px');
  	$('div#epi_4').css('height','');
  });
});

$('div#epi_5').click(function(){
  $('div#epi_5').css('width','500px');
  $('div#epi_5').css('height','500px');
  $('div#epi_5').click(function(){
  	$('div#epi_5').css('width','300px');
  	$('div#epi_5').css('height','');
  });
});

$('div#epi_6').click(function(){
  $('div#epi_6').css('width','500px');
  $('div#epi_6').css('height','500px');
  $('div#epi_6').click(function(){
  	$('div#epi_6').css('width','300px');
  	$('div#epi_6').css('height','');
  });
});

