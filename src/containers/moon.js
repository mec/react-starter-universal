import React from 'react';
import Navigation from '../components/navigation';
import Home from '../components/home';
import Body from '../components/body';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isToggle: 0,
    };
  }

  render() {
    return (
      <div>
        <Home/>
        <Body body={'Hello moon.'}/>
      </div>
    )
  }
  
}

export default App;
