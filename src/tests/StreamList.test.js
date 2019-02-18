import React from "react";
import { configure, shallow } from "enzyme";
import { expect } from "chai";
import { Link } from "react-router-dom";

import StreamList from "../components/streams/StreamList";

import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Stream List testing", function() {

  it("renders StreamShow Link", function () {
  const wrapper = shallow(<StreamList  />);
  const link = <Link to="/streams/show">StreamShow</Link>
  expect(wrapper.contains(link)).to.equal(true);
  });


});