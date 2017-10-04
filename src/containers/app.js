import React from 'react';
import Navigation from '../components/navigation';
import Errorpage from '../components/error';
import { Switch, Route } from 'react-router-dom';
import Routes from '../routes/routes';

class App extends React.Component {
  render() {
    const routeComponents = Routes.map(({path, component}, index) => <Route exact path={path} component={component} key={index} />);
    return (
      <div>
        <Navigation/>
        <Switch>
          {routeComponents}
          <Route component={Errorpage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
