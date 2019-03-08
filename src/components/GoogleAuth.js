import React from "react";

class GoogleAuth extends React.Component {

   state = {
      isSignedIn: null,
   }

   componentDidMount() {
      window.gapi.load('client:auth2', () => {
         window.gapi.client.init({
            clientId: 
               "820595258642-974qqcmas5dtpo6or2o2vi61ocqdp1fq.apps.googleusercontent.com",
               scope: "email",
         }); // init returns a promise, load only accepts callback
         // .then((res) => {
         //    this.auth = window.gapi.auth2.getAuthInstance();
         //    this.setState({ isSignedIn: this.auth.isSignedIn.get() 
         //    }, () => console.log(this.state.isSignedIn));
         // })
         // .catch(err => {
         //    console.log(err);
         //  });
      });
   }

   renderAuthButton() {
      if (this.state.isSignedIn === null) {
         return <div>I dont know if we are signed in</div>;
      } else if (this.state.isSignedIn) {
         return <div>I am signed in!</div>;
      } else {
         return <div>I am not signed in!</div>;
      }  
   }

   render() {
      return (
      <div>
         GoogleAuth
         {this.renderAuthButton()}
      </div>
      
      );
   };
};

export default GoogleAuth;