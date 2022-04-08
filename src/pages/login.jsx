import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUser, loginAction } from '../redux/action';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      playerName: '',
      email: '',
      btnPlay: true,
    };
  }

  validateBtn = () => {
    const { playerName, email } = this.state;
    if (playerName !== '' && email !== '') {
      this.setState({ btnPlay: false });
    } else {
      this.setState({ btnPlay: true });
    }
  }

  // handleClick = (target) => {
  //   target.preventDefault();
  //   const { email, playerName } = this.state;
  //   const { history, dispatchToken, dispatchUser } = this.props;
  //   const ONE_THOUSAND = 1000;
  //   dispatchUser(playerName, email);
  //   dispatchToken();
  //   setTimeout(() => {
  //     history.push('/game');
  //   }, ONE_THOUSAND);
  // }

  handleClick = async (target) => {
    target.preventDefault();
    const { email, playerName } = this.state;
    const { history, dispatchToken, dispatchUser } = this.props;
    await dispatchUser(playerName, email);
    await dispatchToken();
    history.push('/game');
  }

  handleChange = ({ target: { id, value } }) => {
    this.setState({ [id]: value }, () => {
      this.validateBtn();
    });
  }

  handleSettings = (event) => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/settings');
  }

  render() {
    const { playerName, email, btnPlay } = this.state;
    return (
      <section>
        <label htmlFor="playerName">
          Player name:
          <input
            type="text"
            data-testid="input-player-name"
            id="playerName"
            value={ playerName }
            placeholder="Your Name"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            data-testid="input-gravatar-email"
            id="email"
            placeholder="Your e-mail"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>

        <button
          type="submit"
          data-testid="btn-play"
          id="btnPlay"
          disabled={ btnPlay }
          onClick={ this.handleClick }
        >
          Play
        </button>

        <button
          type="button"
          data-testid="btn-settings"
          onClick={ this.handleSettings }
        >
          Settings
        </button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchToken: () => dispatch(fetchUser()),
  dispatchUser: (name, email) => dispatch(loginAction(name, email)),
});

Login.propTypes = {
  dispatchUser: PropTypes.func.isRequired,
  dispatchToken: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
