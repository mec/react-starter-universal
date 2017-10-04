import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/containers/App';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(  	
  	<BrowserRouter>
    	<App/>
  	</BrowserRouter>
  , div);
});