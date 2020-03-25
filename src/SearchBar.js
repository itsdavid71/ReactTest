import React from 'react';

export default ({ term, data, update }) => {
  const dataSearch = e => {};
  return (
    <div className="searchbar form-group">
      <input
        value={term}
        type="text"
        className="form-control"
        placeholder="Search people by name..."
        onChange={dataSearch}
      />
    </div>
  );
};