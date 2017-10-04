import React from 'react';
import Navigation from '../components/navigation';
import Header from '../components/header';
import Body from '../components/body';

class Page extends React.Component {
  render() {
    return (
      <div>
        <Header title={'The moon'}/>
        <Body body={'Hello moon.'}/>
      </div>
    )
  }
}

export default Page;
