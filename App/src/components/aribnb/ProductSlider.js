import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Card from "./Card";
import Pimage from "./images/_af49ea8e-1cfe-491f-b568-6888c48f7f93.jpeg";
import Rstar from "./images/star.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = () => {
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
    {
      image: Pimage,
      star: Rstar,
      name: "Product 6",
      description: "Description 2",
      price: "$29.99",
    },
    {
      image: Pimage,
      star: Rstar,
      name: "Product 7",
      description: "Description 2",
      price: "$29.99",
    },
    // Add more card data as needed
  ];

  const [slidesToShow, setSlidesToShow] = useState(1);

  const updateSlidesToShow = () => {
    // Calculate the number of slides to show based on the width of the card and the page
    const cardWidth = document.querySelector(".card")?.clientWidth || 300; // Set the default card width
    const pageWidth = window.innerWidth;

    const newSlidesToShow = Math.floor(pageWidth / cardWidth);
    setSlidesToShow(newSlidesToShow);
  };

  useEffect(() => {
    // Update the number of slides to show on mount and window resize
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      // Remove the event listener on component unmount
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
  };

  return (
    <Slider {...settings}>
      {cardData.map((card) => (
        <div key={card.name}>
          <Card
            image={card.image}
            star={card.star}
            name={card.name}
            description={card.description}
            price={card.price}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ProductSlider;
