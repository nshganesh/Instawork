import React from 'react';
import { Route, Switch } from 'react-router'
import HomeLoadable from "./containers/home/HomeLoadable";

class App extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeLoadable} />
      </Switch>
    )
  }
}

export default App;
