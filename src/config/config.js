let rootUrl;

if (process.env.NODE_ENV === 'production') {
  console.log('Production...');
  rootUrl = 'https://sightwords-app.herokuapp.com';
} else if (process.env.NODE_ENV === 'development') {
  console.log('Dev...')
  rootUrl = 'http://localhost:5000'
}

export default rootUrl;