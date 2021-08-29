$(document).ready(function(){

$('#sh-btn1').click(function(){
$('h2').hide();
});
$('#sh-btn2').click(function(){
$('h2').show();
});
$('#sh-btn3').click(function(){
$('h2').toggle(500);//toggle (500[ms]) means hide and show time in mili-second.
});
// fade -
$('#sh-btn4').click(function(){
$('#f-h2').fadeOut();
});
$('#sh-btn5').click(function(){
$('#f-h2').fadeIn();
});
$('#sh-btn6').click(function(){
$('#f-h2').fadeToggle(500);
});
$('#sh-btn7').click(function(){
$('#f-h2').fadeTo(500,.5);// fadeTO () passes two parameter one is mili-second 2nd is opacity.
});
$('.panel').click(function(){
$('.flip').slideToggle();
})
// drag
$( "#draggable" ).draggable();
// accordion
$( "#accordion" ).accordion();
// auto_complite
var availableTags = [
"ActionScript",
"AppleScript",
"Asp",
"BASIC",
"C",
"C++",
"Clojure",
"COBOL",
"ColdFusion",
"Erlang",
"Fortran",
"Groovy",
"Haskell",
"Java",
"JavaScript",
"Lisp",
"Perl",
"PHP",
"Python",
"Ruby",
"Scala",
"Scheme"
];
$( "#tags" ).autocomplete({
source: availableTags
});
// button
$( ".widget input[type=submit], .widget a, .widget button" ).button();
$( "button, input, a" ).click( function( event ) {
event.preventDefault();
});
// cheakboxradio
  $("input").checkboxradio();

// controlgroup
 $( ".controlgroup" ).controlgroup()
    $( ".controlgroup-vertical" ).controlgroup({
      "direction": "vertical"
    });
    // coloranimation
     var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
    // procgressbar
     $( "#progressbar" ).progressbar({
      value: 37
    });

});
 
   
 