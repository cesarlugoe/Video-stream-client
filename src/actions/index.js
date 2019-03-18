import * as types from './actionTypes';

export const signIn = (auth) => async dispatch => {
   await auth.signIn();
   dispatch(onAuthChange(auth.isSignedIn.get()));
}

export const signOut = (auth) => async dispatch => {
   await auth.signOut();
   dispatch(onAuthChange(auth.isSignedIn.get()));
}

export const onAuthChange = (isSignedIn) => dispatch => {
   isSignedIn? dispatch(signInSuccess()) : dispatch(signOutSuccess());
}

export const signInSuccess = () => {
   return {
      type: types.SIGN_IN
   };
};

export const signOutSuccess = () => {
   return {
      type: types.SIGN_OUT
   };
};