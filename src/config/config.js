let rootUrl;

if (process.env.NODE_ENV === 'production') {
  rootUrl = 'https://sightwords-app.herokuapp.com';
} else if (process.env.NODE_ENV === 'development') {
  rootUrl = 'http://localhost:5000'
}

export default rootUrl;