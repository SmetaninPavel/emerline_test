import React, { Component, Fragment } from 'react';
import { CircularProgress } from 'material-ui/Progress';

import * as API from '../API';

import {
  Pagination,
  Filter,
  ListAsteroids,
} from '../components';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listAsteroids: [],
      filtersList: {
        isPotentiallyHazardous: false,
      },
      itemsOnPage: 4,
      currentPage: 1,
    }

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.onPageChanged = this.onPageChanged.bind(this);
  }

  componentDidMount() {
    API.getAsteroidsList()
      .then(listAsteroids => this.setState({
        listAsteroids,
        pageCount: Math.ceil(listAsteroids.length / this.state.itemsOnPage),
      }))
      .catch(err => console.log(err))
  }

  handleFilterChange(event) {
    const target = event.target;
    const value = target.checked;
    const name = target.name;

    this.setState({
      filtersList: {
        [name]: value
      },
      currentPage: 1,
    });
  }

  onPageChanged(page) {
    this.setState({ currentPage: page });
  }

  render() {
    const {
      listAsteroids,
      filtersList,
      itemsOnPage,
      currentPage,
    } = this.state;

    const filteredListAsteroids = listAsteroids.filter(asteroid =>
      !filtersList.isPotentiallyHazardous || asteroid.is_potentially_hazardous_asteroid);

    const currentListAsteroids = filteredListAsteroids
      .slice(itemsOnPage * (currentPage - 1), itemsOnPage * currentPage);

    return (
      <Fragment>
        <Filter
          filtersList={filtersList}
          handleFilterChange={this.handleFilterChange}
        />
        {!listAsteroids.length ?
          <CircularProgress className='progress' color="secondary" />
        :
          <ListAsteroids
            listAsteroids={currentListAsteroids}
          />
        }
        <Pagination
          currentPage={currentPage}
          pageCount={Math.ceil(filteredListAsteroids.length / itemsOnPage)}
          onPageChanged={this.onPageChanged}
        />
      </Fragment>
    );
  }
}

export default List;
