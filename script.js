$('#js-burger').click(function() {
   $('#list').removeClass('slide');
   $('#list').toggleClass('visible');
   $('#popup').removeClass('visible1');
 });
$('#visible-popup').click(function() {
   $('#list').toggleClass('slide');
   $('#popup').toggleClass('visible1');
 });
$('#back-to-list').click(function() {
   $('#list').removeClass('slide');
   $('#popup').toggleClass('visible1');
 });

