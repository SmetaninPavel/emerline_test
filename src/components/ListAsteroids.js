import React from 'react';
import { Link } from 'react-router-dom';

import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const ListAsteroids = ({ listAsteroids }) =>
  <div className='list_asteroids'>
    {listAsteroids.map((asteroid, index) =>
      <Link
        to={`/details/${asteroid.neo_reference_id}`}
        key={index}
      >
        <Card >
          <CardContent>
            <Typography>
              Asteroid
            </Typography>
            <Typography gutterBottom variant="headline" component="h2">
              {asteroid.name}
            </Typography>
            <Typography>
              {`Is potentially hazardous: ${asteroid.is_potentially_hazardous_asteroid ? 'yes' : 'no'}`}
            </Typography>
          </CardContent>
        </Card >
      </Link>
    )}
  </div>

export default ListAsteroids;
