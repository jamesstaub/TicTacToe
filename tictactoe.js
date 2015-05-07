/* global gameboard; */
var gameboard = [[0, 1, 1],
                 [0, 1, 0],
                 [null, 1, null]];

var currentPlayer = 1;
// alternate the currentplayer variable
function incPlayer(){
  currentPlayer++;
  currentPlayer = currentPlayer % 2;

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
 var holdValue = 0;
function checkOneCell(y, x, axis){

  // z is whichever axis we're currently checking for
  // use ternary
  var z;
  if(axis === "row"){
    z = y;

  }else if (axis === "col"){
    z = x;
  }
  // resets the countThree at beginning of each new row or column
  if(z !== holdValue){
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
  //  sets holdValue to the current
  holdValue = z;

}



function checkForWinner(){
  //
  var countThree = 0;
  for(e=0; e<2; e++){
    for(i=0; i<3; i++){
      for(j=0; j<3; j++){
        if(e === 0){ checkThree(j, i, "col");}
        if(e === 1){checkThree(i, j, "row");}
      }
    }
  }

      // console.log("i: " + i + "... j: " +j+ gameboard[i][j]);

      // console.log("j mod 3: " + j % 3);
}

checkForWinner();


// check for win before incrementing turn


// add turns to the grid
    // check if place is open
    // check if gameover after move
    // can't play if gameover

// gameover if
  //

function playerMove(y, x, currentplayer){
  gameboard[y][x] = currentPlayer
}
