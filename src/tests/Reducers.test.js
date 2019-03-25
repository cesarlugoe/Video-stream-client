import authReducer from '../reducers/authReducer';
import { INITIAL_STATE } from "../reducers/authReducer";
import { SIGN_IN, SIGN_OUT } from "../actions/actionTypes";

describe("authReducer", () => {

   it("INITIAL_STATE is correct", () => {
      const action = { type: "dummy_action" };
      expect(authReducer(undefined, action)).toEqual(INITIAL_STATE);
   });

   it("signInSuccess action returns the correct state", () => {
      const action = { type: SIGN_IN, payload: "userId" };
      const expectedState = { isSignedIn: true, userId: action.payload };
      expect(authReducer(undefined, action)).toEqual(expectedState);
   });

   it("signOutSuccess action returns the correct state", () => {
      const action = { type: SIGN_OUT };
      const expectedState = { isSignedIn: false, userId: null };
      expect(authReducer(undefined, action)).toEqual(expectedState);
   });
});