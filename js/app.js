$(document).ready(function() {
  $('.resume img').mouseenter(function() {
    showTitle(0);
  })
  .mouseleave(function() {
    showTitle(-1)
  });
  $('.smlBusLan img').mouseenter(function() {
    showTitle(1);
  })
  .mouseleave(function() {
    showTitle(-1)
  });
  $('.streetFighter img').mouseenter(function() {
    showTitle(2);
  })
  .mouseleave(function() {
    showTitle(-1)
  });
  $('.shoppingList img').mouseenter(function() {
    showTitle(3);
  })
  .mouseleave(function() {
    showTitle(-1)
  });
  $('.hotOrCold img').mouseenter(function() {
    showTitle(4);
  })
  .mouseleave(function() {
    showTitle(-1)
  });
  $('.quizApp img').mouseenter(function() {
    showTitle(5);
  })
  .mouseleave(function() {
    showTitle(-1)
  });
  $('.stackOverflowAPI img').mouseenter(function() {
    showTitle(6);
  })
  .mouseleave(function() {
    showTitle(-1)
  });
});
var project_titles = [];
project_titles[0] = "HTML Resume Page (Click for more)";
project_titles[1] = "Small-Business Landing Page";
project_titles[2] = "Street Fighter App";
project_titles[4] = "Hot-or-Cold App";
project_titles[3] = "Shopping List App";
project_titles[5] = "Quiz App";
project_titles[6] = "Stack Overflow API Hack App";

function showTitle(title){
  if(title>=0&&title<=6){
    $(".h3container h3").empty();
    $('.h3container h3').text(project_titles[title]);
  }
  else{
    $(".h3container h3").empty();
    $('.h3container h3').text("Projects Completed during Thinkful Front-End Web-Dev Course");
  }
}
/*$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
    //alert("mouseenter");
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
    //alert("mouseleave");
  })
  .mousedown(function() {
    // play hadouken sound
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show();
    // animate hadouken to the right of the screen
    ();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate({'left': '0px'},200,
      function () {
        $(this).hide();
        $(this).css('left', '661px');
     });
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
  $(this).keydown(function(event) {
  	//event.stopPropagation();
  	//if (e.keyCode == 88)
    if ( event.which == 88 ) {
	    if ( $('.ryu-cool')!==true ){
	    $('.ryu-still, .ryu-ready,.ryu-throwing').hide();
	    $('.ryu-cool').show();};
	    //alert("x key pressed");
    };   
  })
  .keyup(function(event) {
  		event.stopPropagation();
	if ( event.which == 88 ){
		if ( $('.ryu-still')!=true ){
	    $('.ryu-cool, .ryu-ready,.ryu-throwing').hide();
	    $('.ryu-still').show();};
	};
  });

 });
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}*/
/*$( "#target" ).keydown(function( event ) {
  if ( event.which == 13 ) {
   event.preventDefault();
  }
  });*/