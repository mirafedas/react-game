import React from 'react';
import { questions } from '../../questions';

import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      questionNumber: 0
    }
  }

  hideResult = () => {
    this.setState({
      message: ''
    })
  }

  displayResult = (message) => {
    this.setState({
      message: message
    })
   setTimeout(this.hideResult, 2000);
  }

  renderNextQuestion = () => {
    this.setState({
      questionNumber: this.state.questionNumber + 1
    })

    if (!questions[this.state.questionNumber]) {
      this.renderFinalResult();
    }
  }

  renderFinalResult = () => {
    this.setState({
      message: `Great job! Your score is ${this.props.score}`
    })
  }

  checkAnswer = (e) => {
    const answer = e.target.innerText.substr(3);
    const correctAnswer = questions[0].correctAnswer;
    const messageCorrect = 'Correct!';
    const messageWrong = 'Wrong!';

    if (answer === correctAnswer) {
      this.props.changeScore();
      this.displayResult(messageCorrect);
    } else {
      this.displayResult(messageWrong);
    }
    setTimeout(this.renderNextQuestion, 2000);
  };

render() {
  const questionNumber = this.state.questionNumber;

  return (
    <div className="main-container">
      <div className="result">{this.state.message}</div>
      <p className="question">{questions[questionNumber] ? questions[questionNumber].question : null}</p>
      <div className="button-container">
          <div className="two-buttons-wrapper">
              <button
                className="answer-btn"
                onClick={this.checkAnswer}
                ><span>A:</span> {questions[questionNumber] ? questions[questionNumber].answers[0] : null}
              </button>
              <button
                className="answer-btn"
                onClick={this.checkAnswer}
                ><span>C:</span> {questions[questionNumber] ? questions[questionNumber].answers[2] : null}
              </button>
          </div>
          <div className="two-buttons-wrapper">
              <button
                className="answer-btn"
                onClick={this.checkAnswer}
                ><span>B:</span> {questions[questionNumber] ? questions[questionNumber].answers[1] : null}
              </button>
              <button
                className="answer-btn"
                onClick={this.checkAnswer}
                ><span>D:</span> {questions[questionNumber] ? questions[questionNumber].answers[3] : null}
              </button>
          </div>
      </div>
    </div>
  );
}
}

export default Main;