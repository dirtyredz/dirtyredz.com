// src/server.js

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFound from "./pages/NotFound";
import styleSheet from 'styled-components/lib/models/StyleSheet';



// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);

//set the directory to finds the views
app.set('views', path.join(__dirname, '../'));
app.engine('html', require('ejs').renderFile);
//set the view engine type
app.set('view engine', 'html');
// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, '../static')));

// universal routing and rendering
app.get('*', (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = ReactDOMServer.renderToString(<RouterContext {...renderProps}/>);
      } else {
        // otherwise we can render a 404 page
        markup = ReactDOMServer.renderToString(<NotFound/>);
        res.status(404);
      }
      //Generates the styleSheet for the styled-components
      const styles = styleSheet.rules().map(rule => rule.cssText).join('\n');
      // render the index template with the embedded React markup
      return res.render('index', { markup, styles });
    }
  );
});
// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
