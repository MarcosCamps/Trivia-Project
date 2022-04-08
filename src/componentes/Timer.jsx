import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { timerAction } from '../redux/action';

class Timer extends React.Component {
  componentDidMount() {
    this.handleTime();
  }

  handleTime = () => {
    const ONE_SECOND = 1000;
    setInterval(() => {
      const { dispatch, time } = this.props;
      console.log(time);
      dispatch(timerAction(time));
    }, ONE_SECOND);
  };

  render() {
    const { time } = this.props;
    return (
      <div>
        <span>{`Timer: ${time}`}</span>
      </div>
    );
  }
}

Timer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
};

const mapStateToProps = ({ timer }) => timer;

export default connect(mapStateToProps)(Timer);
