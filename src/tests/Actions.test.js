
import configureStore from 'redux-mock-store'

import * as actions from "../actions/index";
import * as types from "../actions/actionTypes";

const mockStore = configureStore();
const store = mockStore();

describe('Redux Actions tests', () => {
   beforeEach(() => { // Runs before each test in the suite
     store.clearActions();
   });


   describe('signInSuccess', () => {
   
      it('dispatches correct action and payLoad', () => {
         const expectedAction = [
            {
            type: types.SIGN_IN, 
            payload: 'userId',
            },
         ];
         store.dispatch(actions.signInSuccess('userId'));
         expect(store.getActions()).toEqual(expectedAction);
      });
   });

   describe('signOutSuccess', () => {
   
      it('dispatches correct action and payLoad', () => {
         const expectedAction = [
            {
               type: types.SIGN_OUT
            },
         ];
         store.dispatch(actions.signOutSuccess());
         expect(store.getActions()).toEqual(expectedAction);
      })
   })

});

