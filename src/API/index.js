const URL     = 'https://api.nasa.gov/neo/rest/v1';
const API_KEY = 'pLjyv1C06wDiaGAUGOOPqVAKA6dHdXQL1EGdDYdr';

export const getAsteroidsList = async () => {
  try {
    const response = await fetch(
      `${URL}/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${API_KEY}`
    );
    const body = await response.json();

    if (body.code === 400) {
      throw Error(body.error_message);
    } else if (!body.element_count || !body.near_earth_objects) {
      throw Error('No elements');
    }

    return body.near_earth_objects['2015-09-08'];
  } catch (err) {
    throw Error(err.message);
  }
}

export const getAsteroid = async (asteroidId) => {
  try {
    const response = await fetch(
      `${URL}/neo/${asteroidId}?api_key=${API_KEY}`
    );
    const body = await response.json();

    if (body.code === 400) {
      throw Error(body.error_message);
    }

    return body;
  } catch (err) {
    throw Error(err.message);
  }
}
