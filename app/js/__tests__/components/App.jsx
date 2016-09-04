jest.dontMock( '../../components/App' );

const React       = require( 'react' ),
      { shallow } = require( 'enzyme' ),
      App         = require( '../../components/App' );

const weatherData = {
  city: {
    name: 'Somewhere'
  },
  list: []
};

describe( 'App', () => {
  it( 'should render', () => {
    let app = shallow( <App weatherData={ weatherData }/>);
    expect( app.find( '.app' ).length ).toBe( 1 );
  });

  it( 'has 0 daySelected', () => {
    const app = shallow( <App weatherData={ weatherData } /> );

    expect( app.state( 'daySelected' ) ).toBe( 0 );
  });

});
