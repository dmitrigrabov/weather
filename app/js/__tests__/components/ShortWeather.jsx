jest.dontMock( '../../components/ShortWeather' );

const React        = require( 'react' ),
      { shallow }  = require( 'enzyme' ),
      ShortWeather = require( '../../components/ShortWeather' );

describe( 'ShortWeather', () => {
  it( 'should render', () => {
    let shortWeather = shallow( <ShortWeather item={ {} }/>);
    expect( shortWeather.find( '.short-weather' ).length ).toBe( 1 );
  });
});
