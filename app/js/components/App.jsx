const MAIN_ITEM_TIME = 12;

const React             = require( 'react' ),
      moment            = require( 'moment' ),
      weatherItemFormat = require( '../converters/weatherItemFormat' ),
      ShortWeatherItems = require( './ShortWeatherItems' ),
      MainWeather       = require( './MainWeather' );

const App = React.createClass({
  propTypes: {
    weatherData: React.PropTypes.object
  },

  getInitialState(){
    return {
      daySelected: 0
    };
  },

  getTodaysList(){
    return this.props.weatherData.list.filter( item => {
      const selectedDate = moment().add( this.state.daySelected, 'days' );

      return moment( item.dt_txt ).isSame( selectedDate, 'day' );
    });
  },

  getMainItem( todaysList ){
    const mainItem = todaysList.find( item => moment( item.dt_txt ).hour() === MAIN_ITEM_TIME );

    if( mainItem ) return mainItem;

    return todaysList[ 0 ];
  },

  getPreviousDayLink(){
    return this.state.daySelected > 0 ? <a className="change-day" href="#" onClick={ this.toPreviousDay }>←</a> : null;
  },

  getNextDayLink(){
    return this.state.daySelected < 4 ? <a className="change-day" href="#" onClick={ this.toNextDay }>→</a> : null;
  },

  toNextDay( event ){
    event.preventDefault();

    this.setState({
      daySelected: this.state.daySelected + 1
    });
  },

  toPreviousDay( event ){
    event.preventDefault();

    this.setState({
      daySelected: this.state.daySelected - 1
    });
  },

  render(){
    const todaysList  = this.getTodaysList(),
          mainItem    = this.getMainItem( todaysList ),
          weatherItem = weatherItemFormat( mainItem ),
          formatted   = moment( weatherItem.date ).format( 'dddd, Do MMMM YYYY' );

    return (
      <div className="app">
        <div className="row">
          <div className="col-xs-3 text-center">
            { this.getPreviousDayLink() }
          </div>
          <MainWeather weatherItem={ weatherItem } />
          <div className="col-xs-3 text-center">
            { this.getNextDayLink() }
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-2">
            <h1>{ this.props.weatherData.city.name }: { formatted }</h1>
          </div>
        </div>
        <ShortWeatherItems list={ todaysList } />
      </div>
    );
  }
});

module.exports = App;
