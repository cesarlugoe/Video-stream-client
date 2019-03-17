import React from "react";
import { connect } from 'react-redux';
import { signIn, signOut } from "../actions";


class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "820595258642-974qqcmas5dtpo6or2o2vi61ocqdp1fq.apps.googleusercontent.com",
          scope: "profile email"
        }) // init returns a promise, load only accepts callback
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    console.log(isSignedIn);
    isSignedIn? this.props.signIn(): this.props.signOut();
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
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

export default connect(
    mapStateToProps, 
    { signIn, signOut }
    )(GoogleAuth);
