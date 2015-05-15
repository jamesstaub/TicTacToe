var TicTacToe = TicTacToe || {};
    // because magic, don't worry about it
TicTacToe.magicSquare = [1, 6, 5, 8, 4, 0, 3, 2, 7];
// stores the sum of evry possible pair of magic numbers chosen by each player
TicTacToe.magicPairsX = [];
TicTacToe.magicPairsO = [];

// stores individual magic number from each choice of each player
TicTacToe.chosenValueArrayX = [];
TicTacToe.chosenValueArrayO = [];
TicTacToe.currentPlayer = 0;


TicTacToe.checkForTie = function(){
   if(this.chosenValueArrayX.length + this.chosenValueArrayO.length === 9 ){
    return true;
  }
}

TicTacToe.reset = function(){
  this.chosenValueArrayX = [];
  this.chosenValueArrayO = [];
  this.currentPlayer = 0;
  this.magicPairsX = [];
  this.magicPairsO = [];

}

TicTacToe.togglePlayer = function(){
  this.currentPlayer = 1 - this.currentPlayer;
};


TicTacToe.checkPickAgainstPairsArray = function(choiceval){

  // thisPairsArray determines which player we're dealing with
  var thisMagicPairsArray = this.currentPlayer ? this.magicPairsO : this.magicPairsX;
  var thisChosenValueArray = this.currentPlayer ? this.chosenValueArrayO : this.chosenValueArrayX;
  var isWinningSum;

  if(thisMagicPairsArray.length > 0){
    thisMagicPairsArray.forEach(function(mNumber){
      if(mNumber + choiceval === 12){ isWinningSum = true; }else{ isWinningSum = false; }
    });
    return isWinningSum;


  }

};

function addPickToArray(choiceval){
  var thisChosenValueArray = TicTacToe.currentPlayer ? TicTacToe.chosenValueArrayO : TicTacToe.chosenValueArrayX;
  // console.log("add pick function's choiceval: " + choiceval);
  // console.log("add pick function's chosenvaluearray: " + thisChosenValueArray);
  thisChosenValueArray.push(choiceval);

}

function createSumsOfPairs(choiceval){
  // choose which array depending on current player
  var thisMagicPairsArray = TicTacToe.currentPlayer ? TicTacToe.magicPairsO : TicTacToe.magicPairsX;
  var thisChosenValueArray = TicTacToe.currentPlayer ? TicTacToe.chosenValueArrayO : TicTacToe.chosenValueArrayX;

  // iterate over the list of single chosen values to create all possible pairs
  //

  thisChosenValueArray.forEach(function(mNumber){
    // this will execute for the first time after each player's second turn, because single values get added to array after this is gets called
    thisMagicPairsArray.push(mNumber + choiceval);

  });
}


