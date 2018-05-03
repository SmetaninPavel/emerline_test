import React from 'react';
import Switch from 'material-ui/Switch';

const Filter = ({
  filtersList,
  handleFilterChange,
}) =>
  <div className='filter'>
    <label>
      Potential hazardous
      <Switch
        name='isPotentiallyHazardous'
        type="checkbox"
        checked={filtersList.isPotentiallyHazardous}
        onChange={(e) => handleFilterChange(e)}
      />
    </label>
  </div>

export default Filter;
