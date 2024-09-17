import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../mocks';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProductsByCategory(categoryId)
      .then(setProducts)
      .catch(console.error);
  }, [categoryId]);

  return (
    <div>
      <h2>Tokyo Japanese Food</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <a href={`/item/${product.id}`}>{product.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;