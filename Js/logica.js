let peopleAhead;
  let timeRemaining;
  let intervalId;

  function joinQueue() {
    // Establece personas en la fila y tiempo total
    peopleAhead = Math.floor(Math.random() * 10) + 5; // Número aleatorio de personas en la fila
    timeRemaining = peopleAhead * 5; // 5 segundos por persona

    document.getElementById('peopleAhead').innerText = peopleAhead;
    document.getElementById('queueInfo').classList.add('active');

    // Inicia el temporizador que actualiza la fila cada segundo
    intervalId = setInterval(updateQueue, 1000);
  }

  function updateQueue() {
    if (timeRemaining > 0 && peopleAhead > 0) {
      timeRemaining--;

      // Reduce el número de personas en la fila cada 5 segundos
      if (timeRemaining % 5 === 0) {
        peopleAhead--;
        document.getElementById('peopleAhead').innerText = peopleAhead;
      }

      // Actualiza el temporizador
      let minutes = Math.floor(timeRemaining / 60);
      let seconds = timeRemaining % 60;
      document.getElementById('timer').innerText = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
      clearInterval(intervalId);
      document.getElementById('timer').innerText = "¡Es tu turno!";
    }
  }