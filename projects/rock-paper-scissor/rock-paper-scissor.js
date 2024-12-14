
    let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0,
      };

    updateScoreElement();

    let isAutoPlaying = false;
    let intervalId;

    //const autoPlay = () => {


    //};

    function autoPlay() {

      if (!isAutoPlaying) {
        intervalId = setInterval(() => {
          const playerMove = pickComputerMove();
          playGame(playerMove);
        }, 1000);
        
        isAutoPlaying = true;
      } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
      }

    };

    document.querySelector('.js-rock-button').addEventListener('click', () => {
      playGame('rock');
    });

    document.querySelector('.js-paper-button').addEventListener('click', () => {
      playGame('paper');
    });

    document.querySelector('.js-scissor-button').addEventListener('click', () => {
      playGame('scissor');
    })

    document.body.addEventListener('keydown', (event) => { 
      if (event.key === 'r') {
        playGame('rock')
      } else if (event.key === 'p') {
        playGame('paper')
      } else if (event.key === 's') {
        playGame('scissor')
      }
    });
    
    function playGame(playerMove) {
      switch (playerMove) {
        case 'rock':
          playerMove = rockImageURL;
          break;
        case 'paper':
          playerMove = paperImageURL;
          break;
        case 'scissor':
          playerMove = scissorsImageURL;
          break;
      } 

      let computerMove = pickComputerMove(); 
      switch (computerMove) {
        case 'rock':
          computerMove = rockImageURL;
          break;
        case 'paper':
          computerMove = paperImageURL;
          break;
        case 'scissor':
          computerMove = scissorsImageURL;
          break;
      } 

      const movesElement = document.body.querySelector('.js-moves');

      movesElement.innerHTML = `You<img src="${playerMove}" class="move-icon"><img src=${computerMove} class="move-icon">computer`

      /*updateMovesElement(playerMove, computerMove);*/

      let result = document.body.querySelector('.js-result');

        if (computerMove === playerMove) {
          result.innerHTML = 'tie';
        } else if ((playerMove === rockImageURL && computerMove === scissorsImageURL)||(playerMove === scissorsImageURL && computerMove === rockImageURL)||(playerMove === scissorsImageURL && computerMove === paperImageURL)) {
          result.innerHTML = 'you win'
        } else {
          result.innerHTML = 'you lose'
        };
      
      /*updateResultElement(result);*/

      if (result.innerHTML === 'you win') {
        score.wins += 1;
      } else if (result.innerHTML === 'you lose') {
        score.losses += 1;
      } else if (result.innerHTML === 'tie') {
        score.ties += 1;
      };
        
      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();

    };
    
    function pickComputerMove() {
      const randomNumber = Math.random();

      let computerMove = '';
        
      if (randomNumber>=0 && randomNumber < 1/3) {
        computerMove = 'rock';
      } else if (randomNumber>= 1/3 && randomNumber<2/3) {
        computerMove = 'paper';
      } else if (randomNumber>=2/3 && randomNumber<1) {
        computerMove = 'scissor';
      };

      return computerMove
    };
    
    function updateScoreElement() {

      if (document.querySelector('.js-result').innerText === '') {
      document.body.querySelector('.js-score').innerHTML = `Last Match: Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      } else {
      document.body.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }
    };

    function resetScore() {
      const moves = document.body.querySelector('.js-moves');
      
      const score = document.querySelector('.score')
      
      const result = document.body.querySelector('.result');

      moves.innerHTML = '';

      result.innerHTML = ''; 

      score.innerHTML = 'Wins: 0, Losses: 0, Ties: 0'

      localStorage.removeItem('score')

      moves.innerHTML = '';


    }

    /*function updateResultElement(result) {
      document.body.querySelector('.js-result').innerHTML = result
    };

    /*function updateScoreElement() {
      document.body.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    };*/

