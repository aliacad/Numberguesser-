let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget = () => {
    Math.floor(Math.random()*10);
   };
     
  let compareGuesses = (humanScore, computerScore, currentRoundNumber ) => {
    if ( humanScore === computerScore) {
        return tie ;
    } else if (math.abs(humanScore - currentRoundNumber) < math.abs( computerScore - currentRoundNumber)) {
        return true;
    } else {
         return false;
    }
  };
  
  let updateScore = winner => {
  if( winner === 'human'){
        return humanScore += 1;
  } else if ( winner === 'computer')
        return computerScore += 1;
  };
  
  let  advanceRound = () => {
  currentRoundNumber +=1;
  };
  