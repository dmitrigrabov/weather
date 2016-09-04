# weather
Sample weather app

Build project: `gulp build`
Test: `npm test`
Linter: `gulp eslint`
Run project : `node index.js` and go to `http://localhost:3000/`

You can see project running at [https://dmitri-weather.herokuapp.com/]

If further time was available I would have liked to add
- More details testing. Current implementation checks only that components do no break on render. Good additional tests would include individual methods of components.
- Deployment to CDN. Most production build would serve static assets out of a CDN rather than application server.
- Sass / CSS build step. All CSS is served from own files. I would have liked to have concatenated and minified them. Also, I would have preferred to have written CSS using BEM and Sass.
- More detailed weather information. The current implementation only shows weather summary using temperature and icons. It would be great to show additional details to user when they click a summary icon for a specific time slot.
- Toggle between Farenheit and Celsius.

