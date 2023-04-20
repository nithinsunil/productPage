import React from 'react';
import './ProductPage.css';
import data from './productData.json';

function ProductPage() {
  return (
    <div>
      <div>
        <ul>
          {data.products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
        <div id='prod-img'>
          <label for='image-upload'>Add more images:</label>
          <input type='file' id='image-upload' multiple />
        </div>
        <br /> <br />
        <label>MRP:</label> <br />
        <label>Discount:</label>
        <br />
        <label>Shipping Charge:</label>
        <br />
        <label>
          <b>Total Amount</b>
        </label>
      </div>
    </div>
  );
}

export default ProductPage;
