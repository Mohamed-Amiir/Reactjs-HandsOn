import React from "react";
import image from "./images/_af49ea8e-1cfe-491f-b568-6888c48f7f93.jpeg";
import star from "./images/star.png";
export default function Card() {
  return (
    <div class="card">
      <img src={image} alt="star" class="product-image" />
      <div class="product-details">
        <div class="rating">
          <img src={star} alt="star" class="star-image" />
          <span class="star-count">4.5</span>
          <span class="product-status">Valid</span>
        </div>
       
      </div>
      <h3 class="product-name">Product Name</h3>
      <p class="product-description">Product description goes here...</p>
      <p class="product-price">$19.99</p>
    </div>
  );
}
