'use strict';

require( 'babel-polyfill' );
require( 'babel-register' );

const express      = require( 'express' ),
      compression  = require( 'compression' ),
      path         = require( 'path' ),
      hbs          = require( 'hbs' ),
      home         = require( './server' ),
      app          = express();

app.use( compression() );

app.set( 'views', path.join( __dirname + '/app'));
app.set( 'view engine', 'hbs');

app.use( '/public', express.static( __dirname + '/public' ) );

app.use( '/', home() );

const server = app.listen( process.env.PORT || 3000, () => {
  const port = server.address().port;
  console.info( 'Listening on port: ' + port);
});
