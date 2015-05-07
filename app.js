/* global gameboard; */

var gameboard = [[0, 1, 1],
                 [0, 1, 0],
                 [null, 1, null]];

$(document).ready(function() {
  for(var i=0; i<gameboard.length; i++){
    for(var j=0; j<gameboard[i].length; j++)
    $('#gamesquares').append('<li id="'+i '-' j +'" class="gamepiece"></li>')
  }


  $('.gamepiece').on(click, function(e){
    if(currentPlayer === 0){
      $(this).append("X");
    }else{
      $(this).append("O");
    }

    });
});
