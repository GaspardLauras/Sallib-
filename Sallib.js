$('div.salles_libres p').append("<p class=\"salles_libres_p\">Text JS</p>");
$('p.salles_libres_p').hide();

$('div.salles_libres p').click(function(){
  $('p.salles_libres_p').toggle(100);
});