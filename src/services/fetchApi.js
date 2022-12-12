/* const fetch = require("node-fetch"); */

const url = 'https://api.chucknorris.io/jokes/random/';

const taskApi = async () => {
  const response = await fetch(url);
  const result = await response.json();
  return result/* .results */;
}

export default taskApi;