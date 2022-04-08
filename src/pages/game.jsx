import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../componentes/Header';
import { fetchApi } from '../redux/action';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      index: 0,
    };
  }

  componentDidMount() {
    const { token, fetchQuestions } = this.props;
    fetchQuestions(token);
    const { data } = this.props;
    this.setState({
      category: data,
    });
  }

  buttonAnswer = (answer) => {
    const arrIncorrect = answer.incorrect_answers;
    const arrAnswers = [...arrIncorrect, answer.correct_answer];
    const NUMBER = 0.5;
    const aleatory = arrAnswers.sort(() => Math.random() - NUMBER);
    console.log(aleatory);
    return aleatory.map((resposta, index) => (
      <button
        key={ resposta }
        type="button"
        data-testid={
          resposta === answer.correct_answer
            ? 'correct-answer'
            : `wrong-answer-${index}`
        }
      >
        {resposta}
      </button>
    ));
  };

  onClick = () => {
    const { index, category } = this.state;
    this.setState(() => ({
      index: index === category.length - 1 ? 0 : index + 1,
    }));
  };

  render() {
    const { index } = this.state;
    const { data } = this.props;
    const category = data;
    return (
      !category ? null
        : (
          <div>
            <h1>Tela de Jogo</h1>
            <Header />
            <div>
              <h3 data-testid="question-category">{category[index]?.category}</h3>
              <p data-testid="question-text">{category[index]?.question}</p>
              {category.length > 0
                && (
                  <div data-testid="answer-options">
                    {this.buttonAnswer(category[index])}
                  </div>
                )}
              <button type="button" onClick={ this.onClick }>
                Clica
              </button>
            </div>
          </div>)
    );
  }
}

Game.propTypes = {
  token: PropTypes.string.isRequired,
  fetchQuestions: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(Object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: (token) => dispatch(fetchApi(token)),
});

const mapStateToProps = (state) => ({
  token: state.token,
  data: state.loginReducer.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
