import Home from '../components/home';
import World from '../components/world';
import Moon from '../containers/moon';
import Page from '../containers/page';

const Routes = [
  { path: '/',
    component: Home,
    title: 'Home'
  },
  { path: '/world',
    component: World,
    title: 'World'
  },
  {
  	path: '/moon',
  	component: Page,
  	title: 'Moon'
  },
  {
    path: '/mars',
    component: Page,
    title: 'Mars'
  }
];

export default Routes;
