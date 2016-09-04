const KELVIN = 273.15;

module.exports = item => {
  let dayPrefix = '';
  if( item.sys && item.sys.pod ){
    if( item.sys.pod === 'd' ) dayPrefix = 'day-';
    if( item.sys.pod === 'n' ) dayPrefix = 'night-';
  }

  const weatherCode = item.weather[ 0 ].id,
        iconClass   = `wi-owm-${ dayPrefix }${ weatherCode }`,
        date        = new Date( item.dt_txt ),
        temperature = Math.round( item.main.temp - KELVIN );

  return {
    iconClass,
    date,
    temperature
  };
};
