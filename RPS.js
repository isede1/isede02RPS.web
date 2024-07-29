let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    lose: 0,
    Ties: 0,
  };
  
  
  function Scorereading() {
    score.wins = 0; 
    score.lose = 0; 
    score.Ties = 0;
    localStorage.removeItem('score');
    document.querySelector('p');
  };
  console.log(score);


  function playgame(playermove) {
  const randomnumber = Math.random();
  
  let computerMove = '';
  
  
  
  if (randomnumber >= 0 && randomnumber < 1/3)  
  {
      computerMove = 'paper';
  } else if (randomnumber >= 1/3 && randomnumber < 2/3)
    {
      computerMove = 'rock';
    }
    else if(randomnumber >= 2/3 && randomnumber < 1)
    {
      computerMove = 'scissors';
    }
  
    console.log(computerMove);
  
    let result = '';
  
    if (playermove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'lose.';
      } else if (computerMove === 'paper') {
        result = 'win.'
      } else if (computerMove === 'scissors') {
        result = 'Ties.';
      } 
  }else if (playermove === 'paper') {
    if (computerMove === 'rock') {
        result = 'win.';
      } else if (computerMove === 'paper') {
        result = 'Ties.'
      } else if (computerMove === 'scissors') {
        result = 'lose.';
      } 
  }else if  (playermove === 'rock') {
    if (computerMove === 'rock') {
          result = 'Ties.';
      } else if (computerMove === 'paper') {
        result = 'lose.'
      } else if (computerMove === 'scissors') {
        result = 'win.';
      } 
  }
  
  if (result === "win.") {
    score.wins += 1;
  }else if (result === "lose.") {
    score.lose += 1;
  }else if (result === "Ties.") {
    score.Ties += 1;
  }
  
  localStorage.setItem('score', JSON.stringify(score));
  
  document.getElementById("js-result")
  .innerHTML = `you ${result}`;
  
  
  document.getElementById("js-score")
  .innerHTML = `you picked ${playermove}. computer picked ${computerMove}`
  
  document.getElementById("p1")
  .innerHTML = `wins: ${score.wins}, lose: ${score.lose}, Ties: ${score.Ties}`;
  
    return computerMove;
    
  }
  