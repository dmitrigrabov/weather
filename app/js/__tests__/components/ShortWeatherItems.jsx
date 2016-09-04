jest.dontMock( '../../components/ShortWeatherItems' );

const React             = require( 'react' ),
      { shallow }       = require( 'enzyme' ),
      ShortWeatherItems = require( '../../components/ShortWeatherItems' );

describe( 'ShortWeatherItems', () => {
  it( 'should render', () => {
    let shortWeatherItems = shallow( <ShortWeatherItems list={ [ {}, {} ] }/>);
    expect( shortWeatherItems.find( '.short-weather-items' ).length ).toBe( 1 );
  });
});
