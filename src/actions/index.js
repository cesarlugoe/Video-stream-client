import * as types from './actionTypes';

export const signIn = () => {
   return {
      type: types.SIGN_IN
   };
};

export const signOut = () => {
   return {
      type: types.SIGN_OUT
   };
};