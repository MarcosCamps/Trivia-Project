import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

class Header extends React.Component {
  render() {
    const { email, name, score } = this.props;
    console.log(email, name);
    const convertEmail = md5(email).toString();
    return (
      <header>
        <div>
          <img
            data-testid="header-profile-picture"
            src={ `https://www.gravatar.com/avatar/${convertEmail}` }
            alt="Gravatar"
          />
          <h2 data-testid="header-player-name">{name}</h2>
          <span>Score: </span>
          <span data-testid="header-score">{score}</span>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.player.email,
  name: state.player.name,
  score: state.player.score,
});
export default connect(mapStateToProps)(Header);
