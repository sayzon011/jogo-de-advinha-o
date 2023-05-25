
<script>
    // Variáveis do jogo
    var randomNumber;
    var attempts = [];
    var score = 100;

    // Elementos do DOM
    var result = document.getElementById('result');
    var scoreElement = document.getElementById('score');
    var attemptsList = document.getElementById('attempts');
    var guessInput = document.getElementById('guess');

    // Função para iniciar um novo jogo
    function startNewGame() {
      randomNumber = Math.floor(Math.random() * 101);
      attempts = [];
      result.textContent = '';
      attemptsList.innerHTML = '';
      guessInput.value = '';
      guessInput.disabled = false;
      score = 100;
      updateScore();
    }

    // Função para verificar o palpite do usuário
    function checkGuess() {
      var guess = parseInt(guessInput.value);

      if (isNaN(guess) || guess < 0 || guess > 100) {
        result.textContent = 'NÚMEROS DE 0 A 100 SEU IDIOTA!';
        return;
      }

      attempts.push(guess);

      if (guess === randomNumber) {
        result.textContent = 'Parabéns! Você acertou o número!';
        guessInput.disabled = true;
        score += 10;
      } else if (guess < randomNumber) {
        result.textContent = 'Tente um número maior.';
        score -= 10;
      } else {
        result.textContent = 'Tente um número menor.';
        score -= 10;
      }

      if (score <= 0) {
        result.textContent = 'Você perdeu! O número correto era ' + randomNumber + '.';
        guessInput.disabled = true;
      }

      updateScore();
      displayAttempts();
    }

    // Função para atualizar a pontuação
    function updateScore() {
      scoreElement.textContent = 'Pontuação: ' + score;
    }

    // Função para exibir as tentativas anteriores
    function displayAttempts() {
      attemptsList.innerHTML = '';

      for (var i = 0; i < attempts.length; i++) {
        var li = document.createElement('li');
        li.textContent = 'Tentativa ' + (i + 1) + ': ' + attempts[i];
        attemptsList.appendChild(li);
      }
    }

    // Função para iniciar um novo jogo
    function newGame() {
      startNewGame();
    }

    // Iniciar um novo jogo ao carregar a página
    startNewGame();
  </script>