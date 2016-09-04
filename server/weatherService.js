const fetch    = require( 'node-fetch' ),
      API_KEY  = '4fb7cc166443d7a3d5fcc0701e95aed5',
      LOCATION = 'London,uk';

module.exports = {
  fetch() {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${ LOCATION }&mode=json&appid=${ API_KEY }`;
    
    return fetch( url, {
      method : 'GET',
      headers: {
        'Accept'      : 'application/json'
      }
    })
    .then( response => {
      switch( response.status ){
        case 200: return response.json().then( body => {
          return body
        });
        default: return Promise.reject();
      }
    });
  }
};