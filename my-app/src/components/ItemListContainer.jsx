import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-4">
      <div className="alert alert-primary" role="alert">
        {greeting}
      </div>
    </div>
  );
};

export default ItemListContainer;
