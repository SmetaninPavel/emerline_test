import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { CircularProgress } from 'material-ui/Progress';

import * as API from '../API';

import Asteroid from '../components/Asteroid';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      asteroid: {},
      isNotFound: false,
    }
  }

  componentDidMount() {
    API.getAsteroid(this.props.match.params.asteroidId)
      .then(asteroid => this.setState({ asteroid, isNotFound: false }))
      .catch(err => this.setState({ isNotFound: true }))
  }

  render() {
    const { asteroid, isNotFound } = this.state;

    if (isNotFound) {
      return <Redirect to='/notfound'/>;
    }

    if (!asteroid.name) {
      return <CircularProgress className='progress' color="secondary" />
    }

    return (
      <div>
        <Asteroid asteroid={asteroid}/>
      </div>
    );
  }
}

export default Details;
