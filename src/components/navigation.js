import React from 'react';
import { NavLink, Router } from 'react-router-dom';
import Routes from '../routes/routes';

const Navigation = () => (
	<nav>
    <ul>
      {Routes.map((route, index) =>
        <li key={index}>
          <NavLink exact to={route.path} activeClassName='active'>{route.title}</NavLink>
        </li>
      )}
    </ul>
	</nav>
);

export default Navigation;
