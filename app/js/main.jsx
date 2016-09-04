const React  = require( 'react' ),
      render = require( 'react-dom' ).render,
      App    = require( './components/App' );

render(
  <App weatherData={ window.weatherData } />,
  document.getElementById( 'react-app' )
);
