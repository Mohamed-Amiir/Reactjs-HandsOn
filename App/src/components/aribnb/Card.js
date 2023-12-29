import React from "react";

export default function Card({ image, star, name, description, price }) {
  return (
    <div className="card">
      <div className="product-image-container">
        <img src={image} alt="productImage" className="product-image" />
      </div>
      <div className="product-details">
        <div className="rating">
          <img src={star} alt="star" className="star-image" />
          <span className="star-count">4.5</span>
          <span className="product-status">Valid</span>
        </div>
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">{price}</p>
      </div>
    </div>
  );
}
