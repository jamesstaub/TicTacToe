// because magic, don't worry about it
var magicSquare = [1, 6, 5, 8, 4, 0, 3, 2, 7];

// alternate the currentplayer variable
// player0 is X player 1 is O
var currentPlayer = 0;
function togglePlayer(){
  currentPlayer = 1 - currentPlayer;
}


// stores the sum of evry possible pair of magic numbers chosen by each player
// determines winner
var magicPairsX = [];
var magicPairsO = [];
function checkPickAgainstPairsArray(choiceval){
  // thisPairsArray determines which player we're dealing with
  var thisMagicPairsArray = currentPlayer ? magicPairsO : magicPairsX;
  var isWinningSum;
  if(thisMagicPairsArray.length > 0){
    thisMagicPairsArray.forEach(function(mNumber){
      if(mNumber + choiceval === 12){
        isWinningSum = true;
      } else{
        isWinningSum = false;
      }
    });
    return isWinningSum;
  }
}

// keep track of total moves
function checkForTie(){
    if(chosenValueArrayX.length + chosenValueArrayO.length === 9 ){
    return true;
  }
}

// stores individual magic number from each choice of each player
var chosenValueArrayX = [];
var chosenValueArrayO = [];
function addPickToArray(choiceval){
  // currentPlayer ? chosenValueArrayO : chosenValueArrayX;
  if(currentPlayer === 0){
    chosenValueArrayX.push(choiceval);
  }else{
    chosenValueArrayO.push(choiceval);
  }
}


function createSumsOfPairs(choiceval){
  // choose which array depending on current player
  var thisChosenValueArray = currentPlayer ? chosenValueArrayO : chosenValueArrayX;
  var thisMagicPairsArray = currentPlayer ? magicPairsO : magicPairsX;
  // iterate over the list of single chosen values to create all possible pairs
  thisChosenValueArray.forEach(function(mNumber){
    // this will execute for the first time after each player's second turn, because single values get added to array after this is gets called
      thisMagicPairsArray.push(mNumber + choiceval);
  });
}



var thisChosenValue;
$(document).ready(function() {
  // create the board!
  for(var i=0; i<magicSquare.length; i++){
    $('#gamesquares').append('<div id="'+magicSquare[i]+'" class="gamepiece"></div>');
  }

  // invoke the logic!
  $('.gamepiece').on('click', function(e){
    // don't allow player to click if space is full
    if(!$(this).hasClass('taken')){
      $(this).addClass('taken');

      // variable contains X or O depending on player
      var thisPlayerString = currentPlayer ? "O" : "X";

      // assign the variable thisChosenNumber to the ID of the chosen space
      thisChosenValue = Number($(this).attr('ID'));

      // Add the string X or O
      $(this).append("<span>"+thisPlayerString+"</span>");

      // check if this wins for us
      if(checkPickAgainstPairsArray(thisChosenValue)){
        currentPlayer =  currentPlayer ? "O" : "X";
        $('#notification').html(currentPlayer + " Wins!")

        $('.gamepiece').each(function(){
          $(this).addClass('taken');
        });


      }else{
        createSumsOfPairs(thisChosenValue);
        addPickToArray(thisChosenValue);
        if(checkForTie()){
          console.log("tie!");
        }else{
         togglePlayer();
        }
      }
    }

    // reset
    $('#reset').on('click', function(){
      $(".taken").removeClass("taken");
      $(".gamepiece").html('');
    });
  });
});

    $('#r1').on('click', function(){
      $('#gamesquares').removeClass('rotate-1');
      $('#gamesquares').removeClass('rotate-3');
      $('#gamesquares').removeClass('rotate-2');
      $('#gamesquares').addClass('rotate-4');
      $('body').addClass('pinwheel');
    });

    $('#r2').on('click', function(){
      $('#gamesquares').removeClass('rotate-1');
      $('#gamesquares').removeClass('rotate-34');
      $('#gamesquares').removeClass('rotate-2');
      $('#gamesquares').addClass('rotate-3');
      $('body').addClass('pinwheel');
    });
    $('#r3').on('click', function(){
      $('#gamesquares').removeClass('rotate-1');
      $('#gamesquares').removeClass('rotate-3');
      $('#gamesquares').removeClass('rotate-4');
      $('#gamesquares').addClass('rotate-2');
      $('body').addClass('pinwheel');
    });
    $('#r4').on('click', function(){
      $('#gamesquares').removeClass('rotate-1');
      $('#gamesquares').removeClass('rotate-2');
      $('#gamesquares').removeClass('rotate-3');
      $('#gamesquares').removeClass('rotate-4');
      $('#gamesquares').addClass('rotate-1');
      $('body').addClass('pinwheel');
    });


// check for win before incrementing turn


// add turns to the grid
    // check if place is open
    // check if gameover after move
    // can't play if gameover

// gameover if

function playerMove(y, x, currentplayer){
  gameboard[y][x] = currentPlayer;
}
