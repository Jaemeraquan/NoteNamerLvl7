import React, { useState } from "react";
import './fretboardQuiz.css';
export default function fretboardQuiz({
  questions,
  returnToMainMenu,
  currentQuestion,
  setCurrentQuestion,
  handleViewScoreClick,
  showScore,
  setShowScore,
  response,
  selectedAnswer,
  setSelectedAnswer,
  setResponse,
  play,
  isAnswered,
  setIsAnswered,
  setIsAccidentalAnswered,
  isAccidentalAnswered,
  setScore, // Pass the setScore function as a prop
  setQuestionCount, // Pass the setQuestionCount function as a prop
  percentageScore,
  setPercentageScore,
  getNextQuestion,
  handleAnswerOptionClick,
  handleNoteAnswerOptionClick,
  restartQuiz,
  score, // Pass the score as a prop
  questionCount, // Pass the questionCount as a prop
  startFretboardQuiz,
  startStaffQuiz,
  viewScoreText,
  setViewScoreText,
  handleViewScoreHover,
  handleViewScoreLeave,
  clickedButton
}) {
  const question = questions[currentQuestion];
  function getScore() {
    setShowScore(true);
  }
  return (
    <div
    className="parent-container"
    >
        <div
          style={{
            width: "105%",
            maxWidth: "1920px",
            minWidth: "480px",
            overflow: "hidden",
          }}
        >
          <div className="fretboardquiz">
          <button onClick={startStaffQuiz}>Staff</button>
            <div>
              <img
                className="fretboard"
                src={questions[currentQuestion].answerHint}
              />
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
              className={`answer key ${selectedAnswer === answerOption.answerText ? (answerOption.isCorrect ? 'correct-button' : 'incorrect-button') : ''}`}
              key={index}
              id="answer-button"
                onClick={() => {
                  handleNoteAnswerOptionClick(answerOption.isCorrect);
                  setSelectedAnswer(answerOption.answerText); // Set the selected answer
                }}

                style={{
                  cursor: isAnswered ? "not-allowed" : "pointer", // Disable cursor if answered
                }}
                disabled={isAnswered} // Disable the button if answered
              >
                {answerOption.answerText}
              </button>
            ))}
            
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerAccidental
            .filter(accidental => accidental.answerAccidentalSymbol === "♯" || accidental.answerAccidentalSymbol === "♭")
            .map((answerAccidental, accidentalIndex) => (
              <button
              className={`answer key ${selectedAnswer === answerAccidental.answerAccidentalSymbol ? (answerAccidental.iscorrect ? 'correct-button' : 'incorrect-button') : ''}`}
              key={accidentalIndex}
              id="answer-button"
                onClick={() => {
                  handleAnswerOptionClick(answerAccidental.iscorrect);
                  setSelectedAnswer(answerAccidental.answerAccidentalSymbol); // Set the selected answer
                }}

                style={{
                  cursor: !isAnswered ? "not-allowed" : "pointer", // Disable cursor if answered
                }}
                disabled={!isAnswered} // Disable the button if answered
              >
                {answerAccidental.answerAccidentalSymbol}
              </button>
            ))}
          </div>
          <div className="answer-section">
            <div>

            <button class="viewscore" onMouseEnter={handleViewScoreHover}
            onMouseLeave={handleViewScoreLeave}>{viewScoreText}</button>
              {/* <div className="response-container">
                <h2 id="response"> {response} </h2>
              </div> */}
            </div>
          </div>
        </div>
    </div>
  );
}
