import React from 'react';
import PropTypes from 'prop-types';
import css from './TotalPrice.module.css';

function TotalPrice({ subtotal, shipping }) {
  const orderTotal = (subtotal + shipping).toFixed(2);

  return (
    <article className={css['container']}>

      <div className={css['data']}>
        <span>Subtotal:</span>
        <span>${subtotal}</span>
      </div>

      <div className={`${css['data']} ${css['normal-weight']}`}>
        <span>Shipping Fee:</span>
        <span>${shipping}</span>
      </div>

      <div className="line"></div>

      <div className={`${css['data']} ${css['total']}`}>
        <span>Order Total:</span>
        <span>${orderTotal}</span>
      </div>

    </article>
  );
}

TotalPrice.propTypes = {
  subtotal: PropTypes.number,
  shipping: PropTypes.number
};

export default TotalPrice;