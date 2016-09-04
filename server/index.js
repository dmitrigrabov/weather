const //weatherData    = require( '../app/js/weatherData' ),
      express        = require( 'express' ),
      React          = require( 'react' ),
      ReactDOMServer = require( 'react-dom/server' ),
      weatherService = require( './weatherService' ),
      App            = require( '../app/js/components/App' ),
      router         = express.Router();

module.exports = () => {
  router.use( ( req, res, next ) => {
    weatherService.fetch()
      .then( weatherData => {
        let content = ReactDOMServer.renderToString(
          <App weatherData={ weatherData } />
        );

        res.render( 'index', {
          content,
          weatherData: JSON.stringify( weatherData )
        });
      })
      .catch( error => {
        console.log( error );
        res.render( 'error' );
      })
  });

  return router;
};