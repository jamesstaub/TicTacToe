// add turns to the grid
    // check if place is open
    // check if gameover after move
    // can't play if gameover

// gameover if
  //

var gameboard = [[1, 1, 1],
                 [0, 1, null],
                 [null, 1, null]];


var currentPlayer = 1;
// alternate the currentplayer variable
function incPlayer(){
  currentPlayer++;
  if(currentPlayer === 2){currentPlayer = 0;}
  // currentPlayer = currentPlayer % 2;
  return currentPlayer;
}

function makeMove(y, x){
  if(currentPlayer === 0){
    gameboard[y][x] = "X";
  }else{
    gameboard[y][x] = "O";
  }
  // checkForWinner();
  incPlayer();
}



var countThree = 0;
var thisTotal = 0;

function checkThree(y, x, axis){
  var holdValue = 0;
  // z is whichever axis we're currently checking for
  var z;
  if(axis === "row"){
    z = y;
  }else if (axis === "col"){
    z = x;
  }

  // resets the countThree at beginning of each new row or column
  if(z !== thisTotal){
    countThree = 0;
  }

  // increment the countThree for every filled in piece
  if(gameboard[y][x] === currentPlayer){
    countThree++;
  }else{
    countThree = 0;
  }

  // if it hits count of 3,
  if(countThree === 3){
    console.log("winner on " + axis + " " + z);
    countThree = 0;
  }
  thisTotal = z;


}

function checkCol(y, x){
}

function checkForWinner(){
  // check for columns
  var countThree = 0;
  for(i=0; i<3; i++){
    for(j=0; j<3; j++){
      checkThree(i, j, "col");
       checkThree(i, j, "row");
      // checkThree(j, i);
      // checkDiagonal();
    }
  }
      // console.log("i: " + i + "... j: " +j+ gameboard[i][j]);

      // console.log("j mod 3: " + j % 3);
}

checkForWinner();


// check for win before incrementing turn
