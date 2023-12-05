import React from "react";
import stars from ""
export default function Card(info){
return(
    <section className="card">
        <h3 className="product-status">{info.status}</h3>
        <img src={info.img} alt="productImage" className="product-image"></img>
        <img src={stars} alt="" className="starts-image"></img>
        <p className="product-description">{info.description}</p>
        <p className="product-price">{info.price}</p>
    </section>
)
}