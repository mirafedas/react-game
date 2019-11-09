import React from 'react';
import { questions } from '../../questions';

import './Main.css';

const Main = () => {
  const checkAnswer = () => {
    // 1. check if the answer is correct;
    // 2. display result;
    // 3. change score in the state;
    // 4. render new question;
    // 5. when all questions have been used, show the final score.
  };

  return (
    <div className="main-container">
      <div className="result">Result</div>
      <p className="question">{questions[0].question}</p>
      <div className="button-container">
          <div className="two-buttons-wrapper">
              <button
                className="answer-btn"
                onClick={checkAnswer}
                ><span>A:</span> {questions[0].answers[0]}
              </button>
              <button
                className="answer-btn"
                onClick={checkAnswer}
                ><span>C:</span> {questions[0].answers[2]}
              </button>
          </div>
          <div className="two-buttons-wrapper">
              <button
                className="answer-btn"
                onClick={checkAnswer}
                ><span>B:</span> {questions[0].answers[1]}
              </button>
              <button
                className="answer-btn"
                onClick={checkAnswer}
                ><span>D:</span> {questions[0].answers[3]}
              </button>
          </div>
      </div>
    </div>
  );
}

export default Main;