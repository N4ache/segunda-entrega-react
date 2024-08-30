import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
  const itemCount = 5;

  return (
    <div className="cart-widget d-flex align-items-center position-relative">
      <FaShoppingCart size={24} className="text-white" />
      {itemCount > 0 && (
        <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartWidget;

