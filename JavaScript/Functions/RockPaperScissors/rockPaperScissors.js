const getUserChoice = userInput => {
    userInput= userInput.toLowerCase();
    if (userInput === 'rock' || userInput ==='paper' || userInput=== 'scissors') {
      return userInput;
    } else {
      console.log('Error: type a valid input')
    };
  };
  //console.log(getUserChoice('paper'));
  
  let getComputerChoice= () => {
    let randNumber = Math.floor(Math.random()*3)
    switch(randNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
      default:
        return 'Type in valid response';
    }
  }
  //console.log(getComputerChoice());
  
  let determinedWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return 'You tied!';
    } 
    else if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'You lost :(';
      } else {
        return 'You won :)';
      }
    }
    else if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'You lost :(';
      } else if (computerChoice ==='rock'){
        return 'You won :)';
      }
    }
    else if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
        return 'You lost :(';
      } else if (computerChoice === 'paper') {
        return 'You won :)';
      }
    }
  }
  //console.log(determinedWinner('paper', 'rock'))
  
  const playGame = () => {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log(`You chose ${userChoice}`);
    console.log(`Computer chose ${computerChoice}`);
    console.log(determinedWinner(userChoice,computerChoice));
  };
  
  playGame()
  