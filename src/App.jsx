import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import _ from "lodash";
import StaffQuiz from "./components/staffQuiz.jsx"; // Import the Quiz component
import FretBoardQuiz from "./components/fretboardQuiz.jsx";
import "./App.css";
import "./components/mainMenu.css"
import A1 from "./assets/images/staffA1.jpg";
import B1 from "./assets/images/staffB1.jpg";
import C2 from "./assets/images/staffC2.jpg";
import D1 from "./assets/images/staffD1.jpg";
import D2 from "./assets/images/staffD2.jpg";
import G1 from "./assets/images/staffG1.jpg";
import G2 from "./assets/images/staffG2.jpg";
import F2 from "./assets/images/staffF2.jpg";
import E2 from "./assets/images/staffE2.jpg";
import Csharp2 from "./assets/images/staffCsharp2.jpg";
import Fsharp2 from "./assets/images/staffFsharp2.jpg";
import Gsharp1 from "./assets/images/staffGsharp1.jpg";
import A from "./assets/images/staffA.jpg";
import Bb from "./assets/images/staffBb1.jpg";
import E from "./assets/images/staffE.jpg";
import E1 from "./assets/images/staffE1.jpg";
import F1 from "./assets/images/staffF1.jpg";
import C2audio from "./assets/audio/pitch recognition audio-C2.wav";
import D1audio from "./assets/audio/pitch recognition audio-D1.wav";
import D2audio from "./assets/audio/pitch recognition audio-D2.wav";
import G1audio from "./assets/audio/pitch recognition audio-G1.wav";
import A1audio from "./assets/audio/pitch recognition audio-A1.wav";
import B1audio from "./assets/audio/pitch recognition audio-B1.wav";
import E2audio from "./assets/audio/pitch recognition audio-E2.wav";
import F2audio from "./assets/audio/pitch recognition audio-F2.wav";
import G2audio from "./assets/audio/pitch recognition audio-G2.wav";
import Gsharp1audio from "./assets/audio/pitch recognition audio-Gsharp1.wav";
import Fsharp2audio from "./assets/audio/pitch recognition audio-Fsharp2.wav";
import Csharp2audio from "./assets/audio/pitch recognition audio-Csharp2.wav";
import Aaudio from "./assets/audio/pitch recognition audio-Low A.wav";
import Eaudio from "./assets/audio/pitch recognition audio-Low E.wav";
import Bbaudio from "./assets/audio/pitch recognition audio-Asharp-Bb1.wav";
import E1audio from "./assets/audio/pitch recognition audio-E1.wav";
import F1audio from "./assets/audio/pitch recognition audio-F1.wav";
import hintA1 from "./assets/images/fretboardA1.jpg";
import hintB1 from "./assets/images/fretboardB1.jpg";
import hintG1 from "./assets/images/fretboardG1.jpg";
import hintC2 from "./assets/images/fretboardC2.jpg";
import hintD2 from "./assets/images/fretboardD2.jpg";
import hintD1 from "./assets/images/fretboardD1.jpg";
import hintE2 from "./assets/images/fretboardE2.jpg";
import hintF2 from "./assets/images/fretboardF2.jpg";
import hintG2 from "./assets/images/fretboardG2.jpg";
import hintCsharp2 from "./assets/images/fretboardCsharp2.jpg";
import hintFsharp2 from "./assets/images/fretboardFsharp2.jpg";
import hintGsharp1 from "./assets/images/fretboardGsharp1.jpg";
import hintA from "./assets/images/fretboardA.jpg";
import hintE from "./assets/images/fretboardE.jpg";
import hintE1 from "./assets/images/fretboardE1.jpg";
import hintBb from "./assets/images/fretboardBb1-Asharp1.jpg";
import hintF1 from "./assets/images/fretboardF1.jpg";
var sharp = "/"
const originalQuestions = [
  {
    questionImage: F1,
    answerOptions: [
      { answerText: "A", isCorrect: false },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
      { answerText: "G", isCorrect: false },
      { answerText: "E", isCorrect: false },
      { answerText: "F", isCorrect: true },
      { answerText: "C♯", isCorrect: false},
      { answerText: "F♯", isCorrect: false},
      { answerText: "G♯", isCorrect: false},
      { answerText: "B♭", isCorrect: false}
    ],
    answeraudio: F1audio,
    answerHint: hintF1,
  },
  {
    questionImage: Bb,
    answerOptions: [
      { answerText: "A", isCorrect: false },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
      { answerText: "G", isCorrect: false },
      { answerText: "E", isCorrect: false },
      { answerText: "F", isCorrect: false },
      { answerText: "C♯", isCorrect: false},
      { answerText: "F♯", isCorrect: false},
      { answerText: "G♯", isCorrect: false},
      { answerText: "B♭", isCorrect: true}
    ],
    answeraudio: Bbaudio,
    answerHint: hintBb,
  },
  {
    questionImage: E1,
    answerOptions: [
      { answerText: "A", isCorrect: false },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
      { answerText: "G", isCorrect: false },
      { answerText: "E", isCorrect: true },
      { answerText: "F", isCorrect: false },
      { answerText: "C♯", isCorrect: false},
      { answerText: "F♯", isCorrect: false},
      { answerText: "G♯", isCorrect: false},
      { answerText: "B♭", isCorrect: false}
    ],
    answeraudio: E1audio,
    answerHint: hintE1,
  },
  {
    questionImage: E,
    answerOptions: [
      { answerText: "A", isCorrect: false },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
      { answerText: "G", isCorrect: false },
      { answerText: "E", isCorrect: true },
      { answerText: "F", isCorrect: false },
      { answerText: "C♯", isCorrect: false},
      { answerText: "F♯", isCorrect: false},
      { answerText: "G♯", isCorrect: false},
      { answerText: "B♭", isCorrect: false}
    ],
    answeraudio: Eaudio,
    answerHint: hintE,
  },
  {
    questionImage: A,
    answerOptions: [
      { answerText: "A", isCorrect: true },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
      { answerText: "G", isCorrect: false },
      { answerText: "E", isCorrect: false },
      { answerText: "F", isCorrect: false },
      { answerText: "C♯", isCorrect: false},
      { answerText: "F♯", isCorrect: false},
      { answerText: "G♯", isCorrect: false},
      { answerText: "B♭", isCorrect: false}
    ],
    answeraudio: Aaudio,
    answerHint: hintA,
  },
  {
    questionImage: C2,
    answerOptions: [
      { answerText: "A", isCorrect: false },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: true },
      { answerText: "D", isCorrect: false },
      { answerText: "G", isCorrect: false },
      { answerText: "E", isCorrect: false },
      { answerText: "F", isCorrect: false },
      { answerText: "C♯", isCorrect: false},
      { answerText: "F♯", isCorrect: false},
      { answerText: "G♯", isCorrect: false},
      { answerText: "B♭", isCorrect: false}
    ],
    answeraudio: C2audio,
    answerHint: hintC2,
  },
  {
    questionImage: D2,
    answerOptions: [
      { answerText: "A", isCorrect: false },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: true },
      { answerText: "G", isCorrect: false },
      { answerText: "E", isCorrect: false },
      { answerText: "F", isCorrect: false },
      { answerText: "C♯", isCorrect: false},
      { answerText: "F♯", isCorrect: false},
      { answerText: "G♯", isCorrect: false},
      { answerText: "B♭", isCorrect: false}
    ],
    answeraudio: D2audio,
    answerHint: hintD2,
  },
  {
    questionImage: D1,
    answerOptions: [
      { answerText: "A", isCorrect: false },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: true },
      { answerText: "G", isCorrect: false },
      { answerText: "E", isCorrect: false },
      { answerText: "F", isCorrect: false },
      { answerText: "C♯", isCorrect: false},
      { answerText: "F♯", isCorrect: false},
      { answerText: "G♯", isCorrect: false},
      { answerText: "B♭", isCorrect: false}
    ],
    answeraudio: D1audio,
    answerHint: hintD1,
  },
  {
    questionImage: G1,
    answerOptions: [
      { answerText: "A", isCorrect: false },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
      { answerText: "G", isCorrect: true },
      { answerText: "E", isCorrect: false },
      { answerText: "F", isCorrect: false },
      { answerText: "C♯", isCorrect: false},
      { answerText: "F♯", isCorrect: false},
      { answerText: "G♯", isCorrect: false},
      { answerText: "B♭", isCorrect: false}
    ],
    answeraudio: G1audio,
    answerHint: hintG1,
  },
  {
    questionImage: A1,
    answerOptions: [
      { answerText: "A", isCorrect: true },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
      { answerText: "G", isCorrect: false },
      { answerText: "E", isCorrect: false },
      { answerText: "F", isCorrect: false },
      { answerText: "C♯", isCorrect: false},
      { answerText: "F♯", isCorrect: false},
      { answerText: "G♯", isCorrect: false},
      { answerText: "B♭", isCorrect: false}
    ],
    answeraudio: A1audio,
    answerHint: hintA1,
  },
  {
    questionImage: B1,
    answerOptions: [
      { answerText: "A", isCorrect: false },
      { answerText: "B", isCorrect: true },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
      { answerText: "G", isCorrect: false },
      { answerText: "E", isCorrect: false },
      { answerText: "F", isCorrect: false },
      { answerText: "C♯", isCorrect: false},
      { answerText: "F♯", isCorrect: false},
      { answerText: "G♯", isCorrect: false},
      { answerText: "B♭", isCorrect: false}
    ],
    answeraudio: B1audio,
    answerHint: hintB1,
  },
  {
    questionImage: E2,
    answerOptions: [
      { answerText: "A", isCorrect: false },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
      { answerText: "G", isCorrect: false },
      { answerText: "E", isCorrect: true },
      { answerText: "F", isCorrect: false },
      { answerText: "C♯", isCorrect: false},
      { answerText: "F♯", isCorrect: false},
      { answerText: "G♯", isCorrect: false},
      { answerText: "B♭", isCorrect: false}
    ],
    answeraudio: E2audio,
    answerHint: hintE2,
  },
  {
    questionImage: F2,
    answerOptions: [
      { answerText: "A", isCorrect: false },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
      { answerText: "G", isCorrect: false },
      { answerText: "E", isCorrect: false },
      { answerText: "F", isCorrect: true },
      { answerText: "C♯", isCorrect: false},
      { answerText: "F♯", isCorrect: false},
      { answerText: "G♯", isCorrect: false},
      { answerText: "B♭", isCorrect: false}
    ],
    answeraudio: F2audio,
    answerHint: hintF2,
  },
  {
    questionImage: G2,
    answerOptions: [
      { answerText: "A", isCorrect: false },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
      { answerText: "G", isCorrect: true },
      { answerText: "E", isCorrect: false },
      { answerText: "F", isCorrect: false },
      { answerText: "C♯", isCorrect: false},
      { answerText: "F♯", isCorrect: false},
      { answerText: "G♯", isCorrect: false},
      { answerText: "B♭", isCorrect: false}
    ],
    answeraudio: G2audio,
    answerHint: hintG2,
  },
  {
    questionImage: Gsharp1,
    answerOptions: [
      { answerText: "A", isCorrect: false },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
      { answerText: "G", isCorrect: false },
      { answerText: "E", isCorrect: false },
      { answerText: "F", isCorrect: false },
      { answerText: "C♯", isCorrect: false},
      { answerText: "F♯", isCorrect: false},
      { answerText: "G♯", isCorrect: true},
      { answerText: "B♭", isCorrect: false}
    ],
    answeraudio: Gsharp1audio,
    answerHint: hintGsharp1,
  },
  {
    questionImage: Csharp2,
    answerOptions: [
      { answerText: "A", isCorrect: false },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
      { answerText: "G", isCorrect: false },
      { answerText: "E", isCorrect: false },
      { answerText: "F", isCorrect: false },
      { answerText: "C♯", isCorrect: true},
      { answerText: "F♯", isCorrect: false},
      { answerText: "G♯", isCorrect: false},
      { answerText: "B♭", isCorrect: false}
    ],
    answeraudio: Csharp2audio,
    answerHint: hintCsharp2,
  },
  {
    questionImage: Fsharp2,
    answerOptions: [
      { answerText: "A", isCorrect: false },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
      { answerText: "G", isCorrect: false },
      { answerText: "E", isCorrect: false },
      { answerText: "F", isCorrect: false },
      { answerText: "C♯", isCorrect: false},
      { answerText: "F♯", isCorrect: true},
      { answerText: "G♯", isCorrect: false},
      { answerText: "B♭", isCorrect: false}
    ],
    answeraudio: Fsharp2audio,
    answerHint: hintFsharp2,
  },
];

export default function App() {
  const [questions, setQuestions] = useState([...originalQuestions]);
  const [percentageScore, setPercentageScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [response, setResponse] = useState(" ");
  const [play] = useSound(questions[currentQuestion].answeraudio);
  const [isAnswered, setIsAnswered] = useState(false);
  const [askedQuestions, setAskedQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [showStaffQuiz, setShowStaffQuiz] = useState(true);
  const [showFretboardQuiz, setShowFretboardQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const startStaffQuiz = () => {
    setShowStaffQuiz(true);
    setShowFretboardQuiz(false);
    setSelectedAnswer(null)
  };
  const startFretboardQuiz = () => {
    setShowFretboardQuiz(true);
    setShowStaffQuiz(false);
    setSelectedAnswer(null)
  };
  document.documentElement.style.setProperty('--viewport-width', '100%');
  document.documentElement.style.setProperty('--viewport-height', '100%');
document.documentElement.style.setProperty('--viewport-initial-scale', '1');


useEffect(() => {
  const shuffledQuestions = _.cloneDeep(originalQuestions);

  shuffledQuestions.forEach((question) => {
    const allOptions = [...question.answerOptions];
    const correctAnswerIndex = allOptions.findIndex((option) => option.isCorrect);
    allOptions.splice(correctAnswerIndex, 1); // Remove correct answer
    shuffleArray(allOptions); // Shuffle incorrect options
    
    // Randomly select a position for the correct answer
    const randomPosition = Math.floor(Math.random() * 5);
    allOptions.splice(randomPosition, 0, question.answerOptions[correctAnswerIndex]);
    
    // Ensure there are only 6 options, even if correct answer was duplicated
    question.answerOptions = allOptions.slice(0, 5);
  });

  shuffleArray(shuffledQuestions);
  setQuestions(shuffledQuestions);
  setAskedQuestions([]);
}, []);

  function shuffleArray(array) {
    for (let i = 1; i < array.length; i++) {
      const j = Math.floor(Math.random() * (array.length - i)) + 1;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  // Define a state variable to track the button text
  const [viewScoreText, setViewScoreText] = useState('View Score');

  // Event handler function to change the button text
  const handleViewScoreHover = () => {
    setViewScoreText(`${score}/${questionCount} (${percentageScore.toFixed(0)}%)`);
  };
  
  // Event handler function to reset the button text when hover ends
  const handleViewScoreLeave = () => {
    setViewScoreText('View Score');
  };
  function getNextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setResponse(" ");
      setIsAnswered(false);
    } else {
      const shuffledQuestions = _.cloneDeep(originalQuestions);
      shuffleArray(shuffledQuestions);
      setQuestions(shuffledQuestions);
      setCurrentQuestion(0);
      setResponse(" ");
      setIsAnswered(false);
    }
  }


  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
    //   const randomMessage = responseMessages[Math.floor(Math.random() * responseMessages.length)];
    // setResponse(randomMessage);
    //   document.getElementById("response").style.color = "green";
    //   document.getElementById("response").style.color = "green";
    console.log("Playing audio:", questions[currentQuestion].answeraudio);
    console.log("play function:", play); // Check if play is defined
      console.log(questions[currentQuestion].answeraudio);
        play(questions[currentQuestion].answeraudio); // Use the regular play function
  
      setIsAnswered(true);
      setTimeout(() => {
        getNextQuestion();
        setSelectedAnswer(null)
      }, 3000);
      setScore(score + 1);
      setQuestionCount(questionCount + 1);
      const newPercentageScore = ((score + 1) / (questionCount + 1)) * 100;
      setPercentageScore(newPercentageScore);
    } else {
    //   const randomMessage = wrongResponseMessages[Math.floor(Math.random() * wrongResponseMessages.length)];
    // setResponse(randomMessage);
    //   document.getElementById("response").style.color = "red";
      setQuestionCount(questionCount + 1);
      const newPercentageScore = (score / (questionCount + 1)) * 100;
      setPercentageScore(newPercentageScore);
    }
  };



  const restartQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setResponse(" ");
    setIsAnswered(false);
    setScore(0);
    setQuestionCount(0);
    setPercentageScore(0);
    const shuffledQuestions = _.cloneDeep(originalQuestions);
    shuffleArray(shuffledQuestions);
    setQuestions(shuffledQuestions);
    setSelectedAnswer(null)
  };
 
  return (
    <div className="app">
      { showStaffQuiz ? (
        <StaffQuiz
          questions={questions}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          showScore={showScore}
          setShowScore={setShowScore}
          viewScoreText={viewScoreText}
          setViewScoreText={viewScoreText}
          handleViewScoreHover={handleViewScoreHover}
          handleViewScoreLeave={handleViewScoreLeave}
          response={response}
          setResponse={setResponse}
          play={play}
          isAnswered={isAnswered}
          setIsAnswered={setIsAnswered}
          score={score}
          setScore={setScore}
          questionCount={questionCount}
          setQuestionCount={setQuestionCount}
          percentageScore={percentageScore}
          setPercentageScore={setPercentageScore}
          getNextQuestion={getNextQuestion}
          handleAnswerOptionClick={handleAnswerOptionClick}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          restartQuiz={restartQuiz}
          startStaffQuiz={startStaffQuiz}
          startFretboardQuiz={startFretboardQuiz}
        />
      ) : showFretboardQuiz ? (
        <FretBoardQuiz
          questions={questions}
          currentQuestion={currentQuestion}
          handleViewScoreHover={handleViewScoreHover}
          handleViewScoreLeave={handleViewScoreLeave}
          viewScoreText={viewScoreText}
          setViewScoreText={viewScoreText}
          setCurrentQuestion={setCurrentQuestion}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          showScore={showScore}
          setShowScore={setShowScore}
          response={response}
          setResponse={setResponse}
          play={play}
          isAnswered={isAnswered}
          setIsAnswered={setIsAnswered}
          score={score}
          setScore={setScore}
          questionCount={questionCount}
          setQuestionCount={setQuestionCount}
          percentageScore={percentageScore}
          setPercentageScore={setPercentageScore}
          getNextQuestion={getNextQuestion}
          handleAnswerOptionClick={handleAnswerOptionClick}
          restartQuiz={restartQuiz}
          startStaffQuiz={startStaffQuiz}
          startFretboardQuiz={startFretboardQuiz}
        />
        ) : null}
    </div>
  );
}