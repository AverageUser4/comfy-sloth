import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';
import css from './ProductData.module.css';
import Rating from '../Rating/Rating.js';
import Counter from '../Counter/Counter.js';
import useProductData from '../../hooks/useProductData';
import { stringifyPrice } from '../../utils/utils';

function ProductData() {
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const product = useProductData(id);

  if(!product)
    return <p>loading...</p>;

  const { name, stock, price, shipping, reviews, stars, colors, images, description, company } = product;

  return (
    <article className={css['product']}>
  
      <Gallery
        photos={images.map(image => ({ src: image.thumbnails.large.url, alt: image.filename }))}
      />

      <div className={css['text-container']}>

        <h1 className="heading heading--no-margin heading--capitalized">{name}</h1>

        <span className={css['sibling']}>
          <Rating amount={stars} outOf={5}/>
          ({reviews} customer reviews)
        </span>

        <span className={css['price']}>{stringifyPrice(price)}</span>

        <p className="paragraph paragraph--small paragraph--no-margin paragraph--color-1 paragraph--big-line-height">{description}</p>

        <div className={css['data']}>
          <span>Availability:</span>
          <span>{stock > 0 ? 'in stock' : 'sold out'}</span>
        </div>

        <div className={css['data']}>
          <span>SKU:</span>
          <span>{id}</span>
        </div>

        <div className={css['data']}>
          <span>Brand:</span>
          <span>{company}</span>
        </div>

        <div className={`line ${css['margin-bottom']}`}></div>

        <div className={`${css['data']} ${css['margin-bottom']}`}>
          <span>Colors:</span>
          <span>TODO: here should be color inputs</span>
        </div>

        <Counter count={count} setCount={setCount} max={stock}/>
        
        <Link to="/cart" className="button button--uppercase">Add to cart</Link>
        
      </div>

    </article>
  );
}

ProductData.propTypes = {

};

export default ProductData;