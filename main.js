const weapons = ['pierre', 'papier', 'ciseaux'];
let player1Weapon = '';
let player2Weapon = '';
let winner = '';
let turn = 'player1';

function updateResult() {
  if (player1Weapon && player2Weapon) {
    if (player1Weapon === player2Weapon) {
      winner = 'draw';
    } else if (
      (player1Weapon === 'pierre' && player2Weapon === 'ciseaux') ||
      (player1Weapon === 'papier' && player2Weapon === 'pierre') ||
      (player1Weapon === 'ciseaux' && player2Weapon === 'papier')
    ) {
      winner = 'Joueur 1';
    } else {
      winner = 'Joueur 2';
    }

    const resultSection = document.querySelector('.result');
    resultSection.innerHTML = `<h3>${winner === 'draw' ? "C'est un match nul" : `Le gagnant est ${winner}`}</h3>`;

    setTimeout(function() {
        reset()
      }, 2000);
  }
}

function mainGame () {

    document.querySelectorAll('.weapon-choice').forEach(button => {
        button.addEventListener('click', function() {
          const weapon = this.id;
      
          if (turn === 'player1') {
            player1Weapon = weapon;
            document.querySelector('.player-1').style.backgroundColor = 'white';
            document.querySelector('.player-2').style.backgroundColor = 'lightblue';
            const resultSection = document.querySelector('.result');
            resultSection.innerHTML = `<h3>Au tour du joueur 2</h3>`;
            turn = 'player2';
          } else {
            player2Weapon = weapon;
            document.querySelector('.player-2').style.backgroundColor = 'lightblue';
            document.querySelector('.player-1').style.backgroundColor = 'white';
            turn = 'player1';
          }
      
          updateResult();
        });
      });
  
}

function reset () {
    document.querySelector('.player-1').style.backgroundColor = 'lightblue';
    document.querySelector('.player-2').style.backgroundColor = 'white'

    const resultSection = document.querySelector('.result');
    resultSection.innerHTML = `<h3>Au tour du joueur 1 </h3>`;

    player1Weapon = '';
    player2Weapon = '';
}

mainGame();