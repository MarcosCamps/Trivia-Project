import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../componentes/Header';
import { fetchApi, disabledAndReset, getScore } from '../redux/action';
import '../Style/buttonColor.css';
import Timer from '../componentes/Timer';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      validateColor: false,
      nextButton: false,
    };
  }

  componentDidMount() {
    const { token, fetchQuestions } = this.props;
    fetchQuestions(token);
  }

  handleClick = () => {
    this.setState({
      validateColor: true,
      nextButton: true,
    });
  };

  pointsCalc = () => {
    const { data, dispatchScore } = this.props;
    const { index } = this.state;
    const dificulty = data[index].difficulty;
    const timer = document.querySelector('.timer').innerHTML;
    const THREE = 3;
    const TEN = 10;
    this.setState({
      validateColor: true,
      nextButton: true,
    });
    switch (dificulty) {
    case 'easy':
      dispatchScore(TEN + (timer * 1));
      break;
    case 'medium':
      dispatchScore(TEN + (timer * 2));
      break;
    case 'hard':
      dispatchScore(TEN + (timer * THREE));
      break;
    default:
      dispatchScore(0);
      break;
    }
  }

  handleColor = (color, test2) => {
    if (color === test2) {
      return 'greenBorder';
    }
    return 'redBorder';
  };

  buttonAnswer = (answer) => {
    const { validateColor } = this.state;
    const { isDisebledBtnQuestion } = this.props;
    const arrIncorrect = answer.incorrect_answers;
    const arrAnswers = [...arrIncorrect, answer.correct_answer];
    const correct = answer.correct_answer;
    const NUMBER = 0.5;
    const aleatory = arrAnswers.sort(() => Math.random() - NUMBER);
    return aleatory.map((resposta, index) => (
      <button
        key={ resposta }
        className={ validateColor ? this.handleColor(correct, resposta) : '' }
        onClick={ resposta === correct ? this.pointsCalc : this.handleClick }
        type="button"
        data-testid={
          resposta === correct ? 'correct-answer' : `wrong-answer-${index}`
        }
        disabled={ isDisebledBtnQuestion }
      >
        {resposta}
      </button>
    ));
  };

  onClick = () => {
    const { history, reset } = this.props;
    const { index } = this.state;
    const FOUR = 4;
    if (index === FOUR) return history.push('/feedback');
    this.setState((prev) => ({
      index: prev.index + 1,
      validateColor: false,
      nextButton: false,
    }));
    reset();
  };

  render() {
    const { index, nextButton } = this.state;
    const { data, isDisebledBtnQuestion } = this.props;
    const category = data;
    return !category ? null : (
      <div>
        <Header />
        <Timer />
        <div>
          <h3 data-testid="question-category">{category[index]?.category}</h3>
          <p data-testid="question-text">{category[index]?.question}</p>
          {category.length > 0 && (
            <div data-testid="answer-options">
              {this.buttonAnswer(category[index])}
            </div>
          )}
          {nextButton || isDisebledBtnQuestion
            ? (
              <button
                data-testid="btn-next"
                type="button"
                onClick={ this.onClick }
              >
                Next
              </button>
            )
            : null}
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  token: PropTypes.string.isRequired,
  fetchQuestions: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(Object).isRequired,
  isDisebledBtnQuestion: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  dispatchScore: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: (token) => dispatch(fetchApi(token)),
  reset: () => dispatch(disabledAndReset()),
  dispatchScore: (number) => dispatch(getScore(number)),
});

const mapStateToProps = (state) => ({
  token: state.token,
  data: state.player.data,
  isDisebledBtnQuestion: state.timer.isDisebledBtnQuestion,
  isDisebledBtnNext: state.timer.isDisebledBtnNext,
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
