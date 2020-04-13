import React from "react";
import { connect } from 'react-redux';
import { signOut, signIn, onAuthChange } from "../actions";



class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "",
          scope: "profile email"
        }) // init returns a promise, load only accepts callback
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.props.dispatch(onAuthChange(this.auth));
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  
  onSignInClick = () => {
    this.props.dispatch(signIn(this.auth));
  };

  onSignOutClick = () => {
    this.props.dispatch(signOut(this.auth));
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}


const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(GoogleAuth);
