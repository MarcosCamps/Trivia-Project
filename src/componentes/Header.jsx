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
          <h2 data-testid="header-player-name">{`Name: ${name}`}</h2>
          <span data-testid="header-score">{`Score: ${score}`}</span>
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
  email: state.loginReducer.email,
  name: state.loginReducer.name,
  score: state.loginReducer.score,
});
export default connect(mapStateToProps)(Header);
