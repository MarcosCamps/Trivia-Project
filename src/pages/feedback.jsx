import React from 'react';
import PropTypes from 'prop-types';
import Header from '../componentes/Header';

class Feedback extends React.Component {
  handleLogin = (event) => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/');
  }

  handleRanking = (event) => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/ranking');
  }

  render() {
    return (
      <section>
        <Header />
        <section>
          {/* Requisito13 \/ */}
          <h2 data-testid="feedback-text">Could be better...</h2>
          <h2>Well Done!</h2>
          {/* Requisito14 \/ */}
          <h3 data-testid="feedback-total-score">O placar final (só número)</h3>
          <h3 data-testid="feedback-total-question">O número de perguntas</h3>
        </section>
        <button data-testid="btn-play-again" type="button" onClick={ this.handleLogin }>
          Play Again
        </button>
        <button data-testid="btn-ranking" type="button" onClick={ this.handleRanking }>
          Ranking
        </button>
      </section>
    );
  }
}

Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Feedback;
