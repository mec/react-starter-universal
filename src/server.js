import React from 'react';
import App from './containers/App';
import NoMatch from './components/Error';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router'; // i think you need the braces cos your only importing one bit of rr.
import Express from 'express';
import Template from './templates/template';
import Routes from './routes/routes';


const app = Express();

app.use(Express.static('dist'));

app.get('*', (req, res) => {

  // Match routes, some is used to return true if the routes array has a matching route to the reuest.
  const match = Routes.some(route => matchPath(req.url, { path: route.path, exact: true } ));

  // If match is false we must be 404.
  if (!match) {
    const errorPage = ReactDOMServer.renderToString( 
      <NoMatch/>
    );
    res.status(404).send(Template({
      body: errorPage,
      title: '404 Error'
    }));
    return;
  }
  
  const html = ReactDOMServer.renderToString( 
      <StaticRouter location={req.url} context={{}}>
        <App/>
      </StaticRouter>
  );

  res.send(Template({
    body: html,
    title: 'hello server side rendering'
  }));
});

app.listen(3000, function () {
  console.log('React Starter listening on port 3000!')
})

