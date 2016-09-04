const React             = require( 'react' ),
      cx                = require( 'classnames' );

const MainWeather = props => {
  const iconClasses = cx( 'wi', props.weatherItem.iconClass, 'main-icon' );

  return (
    <div className="col-xs-6 text-center main-weather">
      <div className={ iconClasses } />
      <span className="main-temperature"> / { props.weatherItem.temperature }<sup>o</sup></span>
    </div>
  );
};

MainWeather.propTypes = {
  weatherItem: React.PropTypes.object
};

module.exports = MainWeather;
