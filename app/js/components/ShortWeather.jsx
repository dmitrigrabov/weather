const React             = require( 'react' ),
      cx                = require( 'classnames' ),
      moment            = require( 'moment' ),
      weatherItemFormat = require( '../converters/weatherItemFormat' );

const ShortWeather = props => {
  const weatherItem = weatherItemFormat( props.item ),
        iconClasses = cx( 'wi', weatherItem.iconClass, 'small-icon' ),
        date        = moment( weatherItem.date ).format( 'H:mm' );

  return (
    <div className="col-xs-12 col-md-1 center-content small-icon-container short-weather">
      <div className={ iconClasses } />
      <div>
        <span>{ weatherItem.temperature }<sup>o</sup></span>
      </div>
      { date }
    </div>
  );
};

ShortWeather.propTypes = {
  item: React.PropTypes.object
};

module.exports = ShortWeather;
