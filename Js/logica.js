// Objeto para almacenar información de cada fila
const queues = {};

function joinQueue(queueId, peopleAheadId, timerId) {
    // Configura una fila específica para cada película
    if (!queues[queueId]) {
        const peopleAhead = Math.floor(Math.random() * 10) + 5; // Número aleatorio de personas
        const timeRemaining = peopleAhead * 5; // 5 segundos por persona

        queues[queueId] = {
            peopleAhead,
            timeRemaining,
            intervalId: null,
            peopleAheadElement: document.getElementById(peopleAheadId),
            timerElement: document.getElementById(timerId)
        };

        document.getElementById(peopleAheadId).innerText = peopleAhead;
        document.getElementById(queueId).classList.add('active');

        // Inicia el temporizador
        queues[queueId].intervalId = setInterval(() => updateQueue(queueId), 1000);
    }
}

function updateQueue(queueId) {
    const queue = queues[queueId];

    if (queue.timeRemaining > 0 && queue.peopleAhead > 0) {
        queue.timeRemaining--;

        // Reduce el número de personas en la fila cada 5 segundos
        if (queue.timeRemaining % 5 === 0) {
            queue.peopleAhead--;
            queue.peopleAheadElement.innerText = queue.peopleAhead;
        }

        // Actualiza el temporizador
        const minutes = Math.floor(queue.timeRemaining / 60);
        const seconds = queue.timeRemaining % 60;
        queue.timerElement.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
        clearInterval(queue.intervalId);
        queue.timerElement.innerText = "¡Es tu turno!";
    }
}