jest.dontMock( '../../components/MainWeather' );

const React       = require( 'react' ),
      { shallow } = require( 'enzyme' ),
      MainWeather = require( '../../components/MainWeather' );

describe( 'MainWeather', () => {
  it( 'should render', () => {
    let mainWeather = shallow( <MainWeather weatherItem={ {} }/>);
    expect( mainWeather.find( '.main-weather' ).length ).toBe( 1 );
  });
});
