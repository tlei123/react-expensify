import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { dismissMessage } from '../actions/messageActions';

export class DismissableAlert extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.handleDismiss = this.handleDismiss.bind(this);
    this.timeoutDismiss = this.timeoutDismiss.bind(this);
  }

  componentDidUpdate () {
    if (this.props.autoDismiss) {
      this.timeoutDismiss();
    }
  }

  handleDismiss () {
    this.props.dismissMessage();
  }

  timeoutDismiss (seconds = 3.5) {
    const vm = this;

    setTimeout(() => {
      // User might have already clicked close-button in the interim
      if (vm.props.show) {
        vm.props.dismissMessage();
      }
    }, seconds * 1000);
  }

  render () {
    if (this.props.show) {
      return (
        <Alert
        bsStyle={this.props.bsStyle}
        onDismiss={this.handleDismiss}
        className="dismissablealert component"
        >
          <h4>{this.props.content}</h4>
        </Alert>
      );
    }
    
    return null
  }
}

const mapStateToProps = (state) => ({
  show: state.message.show,
  bsStyle: state.message.bsStyle,
  content: state.message.content,
  autoDismiss: state.message.autoDismiss,
});

const mapDispatchToProps = (dispatch) => ({
  dismissMessage: () => { dispatch(dismissMessage()) },
});

export default connect(mapStateToProps, mapDispatchToProps)(DismissableAlert);
