import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const PopularProducts = ({ AddToCart }) => {
  const [popularProduct, setPopularProduct] = useState([]);

  useEffect(() => {
    //All Products
    const polpularProductFetch = async () => {
      try {
        const res = await axios("https://dummyjson.com/carts/1");
        console.log(res.data.products);
        setPopularProduct(res.data.products);
      } catch (err) {
        toast.error(err.message);
      }
    };
    polpularProductFetch();
  }, []);

  return (
    <div>
      <div className="mt-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold underline">Popular Products</h2>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {popularProduct
              .filter((item, index) => index !== 1)
              .map((popularItem) => (
                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full"
                  key={popularItem.id}
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={popularItem.thumbnail}
                    />
                  </a>
                  <div className="mt-4">
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {popularItem.title}
                    </h2>
                    <p className="mt-1 text-[20px] font-semibold">
                      Price: ${popularItem.price}
                    </p>
                  </div>
                  <button
                    className=" text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-3 focus:outline-none hover:bg-indigo-600 rounded mt-4"
                    onClick={() => AddToCart(popularItem)}
                  >
                    Add to cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularProducts;
