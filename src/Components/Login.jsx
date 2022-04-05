import React from 'react';

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

  handleChange = ({ target: { id, value } }) => {
    this.setState({ [id]: value }, () => {
      this.validateBtn();
    });
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
          // onClick={ }
        >
          Play
        </button>
      </section>
    );
  }
}

export default Login;
