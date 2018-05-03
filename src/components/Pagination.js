import React from 'react';
import Button from 'material-ui/Button';

const Pagination = ({
  currentPage,
  pageCount,
  onPageChanged,
}) =>
  <div className='pagination'>
    {[...Array(pageCount).keys()].map(page =>
      <Button
        key={page}
        onClick={() => onPageChanged(page + 1)}
        color={currentPage === page + 1 ? 'secondary' : 'default'}
      >
        {page + 1}
      </Button>
    )}
  </div>


export default Pagination;
