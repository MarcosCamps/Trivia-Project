import React from 'react';
import PropTypes from 'prop-types';
import '../Style/Login.css';

class Ranking extends React.Component {
  handleClick = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    return (
      <section>
        <h1 data-testid="ranking-title">Ranking!</h1>
        <button
          className="buttonInput"
          data-testid="btn-go-home"
          type="button"
          onClick={ this.handleClick }
        >
          Home

        </button>
      </section>
    );
  }
}

Ranking.propTypes = ({
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
});

export default Ranking;
