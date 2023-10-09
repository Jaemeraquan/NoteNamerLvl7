import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import _, { fromPairs } from "lodash";
// import MainMenu from "./components/mainMenu.jsx"; // Import the MainMenu component
import StaffQuiz from "./components/staffQuiz.jsx"; // Import the Quiz component
import FretBoardQuiz from "./components/fretboardQuiz.jsx";
import "./App.css";
import BE from "./assets/images/staffB-E.jpg";
import BF from "./assets/images/staffB-F.jpg";
import BG from "./assets/images/staffB-G.jpg";
import CE from "./assets/images/staffC-E.jpg";
import CF from "./assets/images/staffC-F.jpg";
import CG from "./assets/images/staffC-G.jpg";
import DE from "./assets/images/staffD-E.jpg";
import DF from "./assets/images/staffD-F.jpg";
import DG from "./assets/images/staffD-G.jpg";
import BEaudio from "./assets/audio/pitch recognition audio-B-E.wav";
import BFaudio from "./assets/audio/pitch recognition audio-B-F.wav";
import BGaudio from "./assets/audio/pitch recognition audio-B-G.wav";
import CEaudio from "./assets/audio/pitch recognition audio-C-E.wav";
import CFaudio from "./assets/audio/pitch recognition audio-C-F.wav";
import CGaudio from "./assets/audio/pitch recognition audio-C-G.wav";
import DEaudio from "./assets/audio/pitch recognition audio-D-E.wav";
import DFaudio from "./assets/audio/pitch recognition audio-D-F.wav";
import DGaudio from "./assets/audio/pitch recognition audio-D-G.wav";
import hintBE from "./assets/images/fretboardB-E.jpg";
import hintBF from "./assets/images/fretboardB-F.jpg";
import hintBG from "./assets/images/fretboardB-G.jpg";
import hintCE from "./assets/images/fretboardC-E.jpg";
import hintCF from "./assets/images/fretboardC-F.jpg";
import hintCG from "./assets/images/fretboardC-G.jpg";
import hintDE from "./assets/images/fretboardD-E.jpg";
import hintDF from "./assets/images/fretboardD-F.jpg";
import hintDG from "./assets/images/fretboardD-G.jpg";
import "./components/mainMenu.css"
const originalQuestions = [
  {
    questionImage: BE,
    answerOptions: [
      { answerText: "E\nB", isCorrect: true },
      { answerText: "F\nB", isCorrect: false },
      { answerText: "G\nB", isCorrect: false },
      { answerText: "E\nC", isCorrect: false },
      { answerText: "F\nC", isCorrect: false },
      { answerText: "G\nC", isCorrect: false },
      { answerText: "E\nD", isCorrect: false },
      { answerText: "F\nD", isCorrect: false },
      { answerText: "G\nD", isCorrect: false },
    ],
    answeraudio: BEaudio,
    answerHint: hintBE,
  },
    {
      questionImage: BF,
    answerOptions: [
      { answerText: "E\nB", isCorrect: false },
      { answerText: "F\nB", isCorrect: true },
      { answerText: "G\nB", isCorrect: false },
      { answerText: "E\nC", isCorrect: false },
      { answerText: "F\nC", isCorrect: false },
      { answerText: "G\nC", isCorrect: false },
      { answerText: "E\nD", isCorrect: false },
      { answerText: "F\nD", isCorrect: false },
      { answerText: "G\nD", isCorrect: false },
    ],
    answeraudio: BFaudio,
    answerHint: hintBF,
  },
  {
    questionImage: BG,
  answerOptions: [
    { answerText: "E\nB", isCorrect: false },
    { answerText: "F\nB", isCorrect: false },
    { answerText: "G\nB", isCorrect: true },
    { answerText: "E\nC", isCorrect: false },
    { answerText: "F\nC", isCorrect: false },
    { answerText: "G\nC", isCorrect: false },
    { answerText: "E\nD", isCorrect: false },
    { answerText: "F\nD", isCorrect: false },
    { answerText: "G\nD", isCorrect: false },
  ],
  answeraudio: BGaudio,
  answerHint: hintBG,
},
{
  questionImage: CE,
answerOptions: [
  { answerText: "E\nB", isCorrect: false },
  { answerText: "F\nB", isCorrect: false },
  { answerText: "G\nB", isCorrect: false },
  { answerText: "E\nC", isCorrect: true },
  { answerText: "F\nC", isCorrect: false },
  { answerText: "G\nC", isCorrect: false },
  { answerText: "E\nD", isCorrect: false },
  { answerText: "F\nD", isCorrect: false },
  { answerText: "G\nD", isCorrect: false },
],
answeraudio: CEaudio,
answerHint: hintCE,
},
{
  questionImage: CF,
answerOptions: [
  { answerText: "E\nB", isCorrect: false },
  { answerText: "F\nB", isCorrect: false },
  { answerText: "G\nB", isCorrect: false },
  { answerText: "E\nC", isCorrect: false },
  { answerText: "F\nC", isCorrect: true },
  { answerText: "G\nC", isCorrect: false },
  { answerText: "E\nD", isCorrect: false },
  { answerText: "F\nD", isCorrect: false },
  { answerText: "G\nD", isCorrect: false },
],
answeraudio: CFaudio,
answerHint: hintCF,
},
{
  questionImage: CG,
answerOptions: [
  { answerText: "E\nB", isCorrect: false },
  { answerText: "F\nB", isCorrect: false },
  { answerText: "G\nB", isCorrect: false },
  { answerText: "E\nC", isCorrect: false },
  { answerText: "F\nC", isCorrect: false },
  { answerText: "G\nC", isCorrect: true },
  { answerText: "E\nD", isCorrect: false },
  { answerText: "F\nD", isCorrect: false },
  { answerText: "G\nD", isCorrect: false },
],
answeraudio: CGaudio,
answerHint: hintCG,
},
{
  questionImage: DE,
answerOptions: [
  { answerText: "E\nB", isCorrect: false },
  { answerText: "F\nB", isCorrect: false },
  { answerText: "G\nB", isCorrect: false },
  { answerText: "E\nC", isCorrect: false },
  { answerText: "F\nC", isCorrect: false },
  { answerText: "G\nC", isCorrect: false },
  { answerText: "E\nD", isCorrect: true },
  { answerText: "F\nD", isCorrect: false },
  { answerText: "G\nD", isCorrect: false },
],
answeraudio: DEaudio,
answerHint: hintDE,
},
{
  questionImage: DF,
answerOptions: [
  { answerText: "E\nB", isCorrect: false },
  { answerText: "F\nB", isCorrect: false },
  { answerText: "G\nB", isCorrect: false },
  { answerText: "E\nC", isCorrect: false },
  { answerText: "F\nC", isCorrect: false },
  { answerText: "G\nC", isCorrect: false },
  { answerText: "E\nD", isCorrect: false },
  { answerText: "F\nD", isCorrect: true },
  { answerText: "G\nD", isCorrect: false },
],
answeraudio: DFaudio,
answerHint: hintDF,
},
{
  questionImage: DG,
answerOptions: [
  { answerText: "E\nB", isCorrect: false },
  { answerText: "F\nB", isCorrect: false },
  { answerText: "G\nB", isCorrect: false },
  { answerText: "E\nC", isCorrect: false },
  { answerText: "F\nC", isCorrect: false },
  { answerText: "G\nC", isCorrect: false },
  { answerText: "E\nD", isCorrect: false },
  { answerText: "F\nD", isCorrect: false },
  { answerText: "G\nD", isCorrect: true },
],
answeraudio: DGaudio,
answerHint: hintDG,
},
]

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
    const randomPosition = Math.floor(Math.random() * 6);
    allOptions.splice(randomPosition, 0, question.answerOptions[correctAnswerIndex]);
    
    // Ensure there are only 6 options, even if correct answer was duplicated
    question.answerOptions = allOptions.slice(0, 6);
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
        play();
      setIsAnswered(true);
      setTimeout(() => {
        getNextQuestion();
        setSelectedAnswer(null)
      }, 5000);
      setScore(score + 1);
      setQuestionCount(questionCount + 1);
      const newPercentageScore = ((score + 1) / (questionCount + 1)) * 100;
      setPercentageScore(newPercentageScore);
    } else {
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
