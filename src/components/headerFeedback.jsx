import React from 'react';

class HeaderFeedback extends React.Component {
  render() {
    return (
      <header>
        <img src="" alt="" data-testid="header-profile-picture" />
        <p data-testid="header-player-name">header:nome pessoa</p>
        <p data-testid="header-score">placar</p>
      </header>
    );
  }
}

export default HeaderFeedback;
