import React from "react";
import Hero from "../../components/Hero/Hero";
import Service from "../../components/service/Service";
import Gallery from "../../components/Gallery/Gallery";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = ({ AddToCart }) => {
  return (
    <>
      <Hero />
      <Service />
      <PopularProducts AddToCart={AddToCart} />
      <Gallery />
      <Testimonials />
    </>
  );
};

export default Home;
