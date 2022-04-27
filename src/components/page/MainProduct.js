import React,{useState} from 'react';
import ProductItem from './ProductItem';

function MainProduct({productData}) {
  
  return (
      <div className="product-container">
        {productData.map((product) => {
          return (
            <ProductItem key={product.Data.id} product={product.Data} />
          )
        })}
    </div>
  )
}

export default MainProduct;