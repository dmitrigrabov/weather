const React        = require( 'react' ),
      ShortWeather = require( './ShortWeather' );

const ShortWeatherItems = props => {
  const shortWeatherItems = props.list.map( item => {
    return <ShortWeather key={ item.dt } item={ item } />;
  });

  return (
    <div className="row short-weather-items">
      <div className="col-xs-2" />
      <div className="col-xs-8">
        <div className="row">
          { shortWeatherItems }
        </div>
      </div>
      <div className="col-xs-2" />
    </div>
  );
};

ShortWeatherItems.propTypes = {
  list: React.PropTypes.array
};

module.exports = ShortWeatherItems;
