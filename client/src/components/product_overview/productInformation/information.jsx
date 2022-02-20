import React from 'react';
import Feature from './featureInformation.jsx';

const Information = (props) => {
  return (
    <div id='product-information'>
      <a href="#ratings-and-reviews">Read All Reviews</a><br />
      <div id='star-rating'>{props.starRating}</div>
      <div id='product-category'>{props.product.category}</div>
      <div id='product-name'>{props.product.name}</div>
      <div id='slogan-description-features'>
        <div id='product-slogan'>{props.product.slogan}</div>
        <div id='product-description'>{props.product.description}</div>
        <Feature features={props.product.features}/>
      </div>
      <div id='original-price'>{props.selectedStyle.original_price}</div>
      <div id='sale-price'>{props.selectedStyle.sale_price}</div>
    </div>
  );
};

export default Information;
