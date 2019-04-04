import React from "react";
import { configure, mount } from "enzyme";
import { expect } from "chai";
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import StreamCreate from "../components/streams/StreamCreate";

import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

const mockStore = configureStore();
const store = mockStore();



describe("Stream Create testing", function() {

   const wrapper = 
      mount(
         <Provider store={store}>
            <StreamCreate />
         </Provider>
      );

  it("renders a form", function () {
   expect(wrapper.find(".form")).to.have.lengthOf(1);
  });

  it("renders two input fields divs", function () {
   expect(wrapper.find(".field")).to.have.lengthOf(2);
  });

  it("renders a submit button", function () {
   expect(wrapper.find('[type="submit"]')).to.have.lengthOf(1);
  });


});