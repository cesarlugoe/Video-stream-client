import * as types from './actionTypes';

export const signIn = (auth) => async dispatch => {
   await auth.signIn();
   dispatch(onAuthChange(auth));
}

export const signOut = (auth) => async dispatch => {
   await auth.signOut();
   dispatch(onAuthChange(auth));
}

export const onAuthChange = (auth) => dispatch => {
   const isSignedIn = auth.isSignedIn.get();
   const userId = auth.currentUser.get().getId();
   isSignedIn? dispatch(signInSuccess(userId)) : dispatch(signOutSuccess());
}

export const signInSuccess = (userId) => {
   return {
      type: types.SIGN_IN, 
      payload: userId,
   };
};

export const signOutSuccess = () => {
   return {
      type: types.SIGN_OUT
   };
};