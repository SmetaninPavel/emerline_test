import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';

const NotFound = () =>
  <div className='not_found'>
    <p>
      Ops, page not found!
    </p>
    <Link to='/'>
      <Button size="small">Go to list</Button>
    </Link>
  </div>

export default NotFound;
