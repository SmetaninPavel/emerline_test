import React from 'react';
import { Link } from 'react-router-dom';

import Card, { CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const Asteroid = ({ asteroid }) =>
  <Card className='asteroid'>
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
      <Typography>
        {`Absolute magnitude: ${asteroid.absolute_magnitude_h}`}
      </Typography>
      <Typography>
        {`Asteroid id: ${asteroid.neo_reference_id}`}
      </Typography>
    </CardContent>
    <CardActions>
      <Link to='/'>
        <Button size="small">Go to list</Button>
      </Link>
    </CardActions>
  </Card >

export default Asteroid;
