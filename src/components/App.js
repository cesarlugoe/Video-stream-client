import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import NotFoundPage from "./NotFoundPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact render={()=> <StreamCreate />} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
