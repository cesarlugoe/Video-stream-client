import React from "react";
import { configure, shallow } from "enzyme";

import GoogleAuth from "../components/GoogleAuth";

import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });




describe("Header test", () => {
   it("renders GoogleAuth component", () => {
      shallow(<GoogleAuth />);
   }); 
})

