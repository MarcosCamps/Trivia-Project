import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
    const { assertions, score } = this.props;
    return (
      <section>
        <Header />
        <section>
          {
            assertions <= 2
              ? <h2 data-testid="feedback-text">Could be better...</h2>
              : <h2 data-testid="feedback-text">Well Done!</h2>
          }

          <h3 data-testid="feedback-total-score">{score}</h3>
          <h3 data-testid="feedback-total-question">{assertions}</h3>
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

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Feedback);
