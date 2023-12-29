import React from "react";
import Card from "./Card";
import Pimage from "./images/_af49ea8e-1cfe-491f-b568-6888c48f7f93.jpeg";
import Rstar from "./images/star.png";

export default function DynamicContent() {
  const cardData = [
    {
      image: Pimage,
      star: Rstar,
      name: "Product 1",
      description: "Description 1",
      price: "$19.99",
    },
    {
      image: Pimage,
      star: Rstar,
      name: "Product 2",
      description: "Description 2",
      price: "$29.99",
    },
    {
      image: Pimage,
      star: Rstar,
      name: "Product 3",
      description: "Description 2",
      price: "$29.99",
    },
    {
      image: Pimage,
      star: Rstar,
      name: "Product 4",
      description: "Description 2",
      price: "$29.99",
    },
    {
      image: Pimage,
      star: Rstar,
      name: "Product 5",
      description: "Description 2",
      price: "$29.99",
    },
  ];

  return (
    <section className="dynamic-content">
      {cardData.map((card) => (
        <Card
          image={card.image}
          star={card.star}
          name={card.name}
          description={card.description}
          price={card.price}
        />
      ))}
    </section>
  );
}
