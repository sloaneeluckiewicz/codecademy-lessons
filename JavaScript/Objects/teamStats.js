const team= {
    _players: [
      {firstName: 'Seth',
      lastName: 'Rogers',
      age: 24},
  
      {firstName: 'Gina',
      lastName: 'Jioio',
      age: 22},
  
      {firstName: 'Leslie',
      lastName: 'Lane',
      age: 28}
    ],
    _games: [
      {opponent: 'Blue Jays',
      teamPoints: 45,
      opponentPoints: 32},
  
      {opponent: 'Giants',
      teamPoints: 23,
      opponentPoints: 37},
  
      {opponent: 'Sharks',
      teamPoints: 57,
      opponentPoints: 40}
    ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge){
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this.games.push(game);
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  
  team.addGame('Titans', 100, 98);
  console.log(team.games);
  
  