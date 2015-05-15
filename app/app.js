
$(document).ready(function() {
  // create the board!
  for(var i=0; i<TicTacToe.magicSquare.length; i++){
    $('#gamesquares').append('<div id="'+TicTacToe.magicSquare[i]+'" class="gamepiece"></div>');
  }

  // invoke the logic!
  $('.gamepiece').on('click', function(e){
    // don't allow player to click if space is full
    if(!$(this).hasClass('taken')){
      $(this).addClass('taken');

      // variable contains X or O depending on player
      var thisPlayerString = TicTacToe.currentPlayer ? "O" : "X";

      // assign the variable thisChosenNumber to the ID of the chosen space
      var thisChosenValue = Number($(this).attr('ID'));

      // Add the string X or O
      $(this).append("<span>" + thisPlayerString + "</span>");

      // check if this wins for us

      if(TicTacToe.checkPickAgainstPairsArray(thisChosenValue)){
        $('#info').css('display', 'inline-block');
        var playerSymbol =  TicTacToe.currentPlayer ? "O" : "X";
        $('#info').css('display', 'inline')
        $('#notification').html(playerSymbol + " Wins!")


        $('.gamepiece').each(function(){
          $(this).addClass('taken');
        });

      }else{
        createSumsOfPairs(thisChosenValue);
        addPickToArray(thisChosenValue);

        if(TicTacToe.checkForTie()){
          $('#info').css('display', 'inline-block');
          $('#notification').html("Tie Game...wow!");
        }else{
         TicTacToe.togglePlayer();
        }
      }
    }

    // reset
    $('#reset').on('click', function(){
      $(".taken").removeClass("taken");
      $(".gamepiece").html('');
      $('#gamesquares').removeClass('rotate-1 rotate-2 rotate-3 rotate-4');
      $('#notification').html('');
      $('#info').css('display', 'none');
      TicTacToe.reset();
    });
  });

// controls for the silly pinwheel business
    $('#r1').on('click', function(){
      $('#gamesquares').removeClass('rotate-1');
      $('#gamesquares').removeClass('rotate-3');
      $('#gamesquares').removeClass('rotate-2');
      $('#gamesquares').addClass('rotate-4');


    });
    $('#r2').on('click', function(){
      $('#gamesquares').removeClass('rotate-1');
      $('#gamesquares').removeClass('rotate-34');
      $('#gamesquares').removeClass('rotate-2');
      $('#gamesquares').addClass('rotate-3');

    });
    $('#r3').on('click', function(){
      $('#gamesquares').removeClass('rotate-1');
      $('#gamesquares').removeClass('rotate-3');
      $('#gamesquares').removeClass('rotate-4');
      $('#gamesquares').addClass('rotate-2');

    });
    $('#r4').on('click', function(){
      $('#gamesquares').removeClass('rotate-1');
      $('#gamesquares').removeClass('rotate-2');
      $('#gamesquares').removeClass('rotate-3');
      $('#gamesquares').removeClass('rotate-4');
      $('#gamesquares').addClass('rotate-1');

    });


});
