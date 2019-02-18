import React from "react";
import { configure, shallow } from "enzyme";
import App from '../components/App';


import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("App test", function() {

  it("renders without crashing", function () {
    shallow(<App  />);
  });

});