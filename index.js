let questions = [
  {
    id: "capitalOfGermany",
    title: "Was ist die Hauptstadt von Deutschland?",
    answer: ["Berlin", "München", "Hamburg", "Köln"],
    correctAnswer: "Berlin",
  },
  {
    id: "capitalOfFrance",
    title: "Was ist die Hauptstadt von Frankreich?",
    answer: ["Toulouse", "Bordeaux", "Lille", "Paris"],
    correctAnswer: "Paris",
  },
  {
    id: "capitalOfSpain",
    title: "Was ist die Hauptstadt von Spanien?",
    answer: ["Burgos", "Madrid", "Sevilla", "Valencia"],
    correctAnswer: "Madrid",
  },
];

let questionIndex = 0;

displayQuestion();

function checkAnswer(selectedAnswer) {
  const currentQuestion = questions[questionIndex];
  const selectedButton = document.getElementById(selectedAnswer);
  console.log(selectedButton);
  if (selectedAnswer === currentQuestion.correctAnswer) {
    selectedButton.classList.add("right");
    alert("Die Antwort ist richtig!");
  } else {
    selectedButton.classList.add("wrong");
    alert("Die Antwort ist falsch!");
    showSolution();
  }
}

function showSolution() {
  const currentQuestion = questions[questionIndex];
  const correctButton = document.getElementById(currentQuestion.correctAnswer);
  if (correctButton) {
    correctButton.classList.add("right");
  }
}

function displayQuestion() {
  //Verweis auf bestimmtes Fragen-Objekt mit dessen Index im Array der Fragen-Objekte
  const question = questions[questionIndex];

  //Kopie des Antworten-Arrays erstellen, damit das Original nicht verändert wird
  const answerCopy = [];
  question.answer.forEach((answer) => {
    answerCopy.push(answer);
  });
  //neues Array für ausgewählte Antworten
  const allPickedAnswers = [];
  while (answerCopy.length > 0) {
    const randomPointer = Math.floor(Math.random() * answerCopy.length);
    // Mit [0] direkt das Element aus dem gesplicten Array holen
    const pickedAnswer = answerCopy.splice(randomPointer, 1)[0];
    // In das neue Array schieben
    allPickedAnswers.push(pickedAnswer);
  }

  //Button-id = Antwort-id = correctAnswer
  //allPickedAnswers als id eintragen für zufällige Anzeige der Fragen
  const htmlString = `<h1>${question.title}</h1>
        <div class="answer-container">
          <button id="${allPickedAnswers[0]}" class="button answer" onclick="checkAnswer('${allPickedAnswers[0]}')">${allPickedAnswers[0]}</button>
          <button id="${allPickedAnswers[1]}" class="button answer" onclick="checkAnswer('${allPickedAnswers[1]}')">${allPickedAnswers[1]}</button>
          <button id="${allPickedAnswers[2]}" class="button answer" onclick="checkAnswer('${allPickedAnswers[2]}')">${allPickedAnswers[2]}</button>
          <button id="${allPickedAnswers[3]}" class="button answer" onclick="checkAnswer('${allPickedAnswers[3]}')">${allPickedAnswers[3]}</button>
        </div>`;
  //htmlString soll vorige Frage überschreiben
  document.getElementById("display-question").innerHTML = htmlString;
}

function showNextQuestion() {
  questionIndex++;
  if (questionIndex === questions.length) {
    alert("Das Quiz ist beendet. Es startet nun neu!");
    questionIndex = 0;
  }
  //Frage erst anzeigen, nachdem Index überprüft wurde
  //Sonst wird Index zuerst erhöht und überschreitet die Länge des Arrays und es kann keine Frage angezeigt werden
  displayQuestion();
}
