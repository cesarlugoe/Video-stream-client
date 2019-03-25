import React from "react";
import { configure, shallow, mount } from "enzyme";
import App from "../components/App";
import { MemoryRouter } from "react-router";
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import StreamList from "../components/streams/StreamList";
import StreamCreate from "../components/streams/StreamCreate";
import StreamEdit from "../components/streams/StreamEdit";
import StreamDelete from "../components/streams/StreamDelete";
import StreamShow from "../components/streams/StreamShow";
import PageNotFound from "../components/NotFoundPage";

import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

const mockStore = configureStore();
const store = mockStore();

describe("App test", function() {
  it("renders without crashing", function () {
    shallow(<App  />);
  });

});

const wrapper = path =>
  mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={[path]}>
          <App />
      </MemoryRouter>
    </Provider>
  );

describe("Routes test", function() {
   it("renders StreamList component on initial path /", () => {
    const component = wrapper("/");
    expect(component.find(StreamList)).toHaveLength(1);
   });

   it("renders StreamCreate component on path /streams/new ", () => {
    const component = wrapper("/streams/new");
    expect(component.find(StreamCreate)).toHaveLength(1);
  });

  it("renders StreamEdit component on path /streams/edit ", () => {
    const component = wrapper("/streams/edit");
    expect(component.find(StreamEdit)).toHaveLength(1);
  });

  it("renders StreamDelete component on path /streams/delete ", () => {
    const component = wrapper("/streams/delete");
    expect(component.find(StreamDelete)).toHaveLength(1);
  });

  it("renders StreamShow component on path /streams/show ", () => {
    const component = wrapper("/streams/show");
    expect(component.find(StreamShow)).toHaveLength(1);
  });

  it("renders PageNotFound component on path /random ", () => {
    const component = wrapper("/random");
    expect(component.find(PageNotFound)).toHaveLength(1);
  });

 });