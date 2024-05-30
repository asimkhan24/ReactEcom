import React, { useEffect, useState } from "react";
import login from "../../assets/login.jpg";
import axios from "axios";
import { MdOutlineSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import AllProductsShim from "../AllProductsShim/AllProductsShim";

const AllProducts = ({ AddToCart }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [allcategory, setAllcategory] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    //All Products
    const AllProducts = async () => {
      const res = await axios("https://dummyjson.com/products");
      // console.log(res.data.products);
      setAllProducts(res.data.products);
      setOriginalProducts(res.data.products);
    };
    AllProducts();
  }, []);

  //Products Category
  useEffect(() => {
    const getAllProductsCategory = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/categories");
        setAllcategory(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProductsCategory();
  }, []);

  const filterProducts = (selectCategory) => {
    const data = selectCategory
      ? originalProducts.filter(
          (filterItem) => filterItem.category === selectCategory
        )
      : originalProducts;
    setAllProducts(data);
  };

  const handleSearchItem = () => {
    const searchProduct = originalProducts.filter((item) =>
      item.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setAllProducts(searchProduct);
  };

  const handlePrice = () => {
    let min = parseFloat(minPrice);
    let max = parseFloat(maxPrice);

    const filterPrice = originalProducts.filter(
      (item) => (!min || item.price >= min) && (!max || item.price <= max)
    );
    setAllProducts(filterPrice);
  };

  return (
    <>
      <div>
        {/* Poster Image */}
        <div className="relative">
          <img
            src={login}
            alt=""
            className="w-full object-cover object-center h-[200px] "
          />
          <div className="w-full h-[200px] bg-black absolute  top-0 left-0 opacity-[.4]"></div>
          <h2 className=" absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl ">
            All Products
          </h2>
        </div>

        <div className="bg-gray-100 py-4">
          {/* Products Category and search Bar */}
          <div className="flex flex-col md:flex-row items-center justify-center mt-8 md:mt-0">
            {/* Products category select drop menu */}
            <div className="relative mb-4 md:mb-0">
              <select
                className="bg-white border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500"
                onChange={(e) => filterProducts(e.target.value)}
              >
                <option className="text-gray-400">Filter By Category</option>
                {allcategory.slice(0, 6).map((item, index) => (
                  <option value={item} key={index} className="text-gray-800">
                    {item}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 14l3-3m0 0l3 3m-3-3v6"
                  />
                </svg>
              </div>
            </div>

            {/* Search bar */}
            <input
              placeholder="Search item"
              className="bg-white border-2 border-gray-300 rounded-md px-4 py-2 md:ml-4 focus:outline-none focus:border-indigo-500"
              onChange={(e) => setSearchItem(e.target.value)}
              value={searchItem}
            />
            <button
              className="flex items-center justify-center bg-indigo-500 text-white rounded-md px-4 py-2 md:ml-4 mt-4 md:mt-0 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={handleSearchItem}
            >
              <MdOutlineSearch className="w-6 h-6" />
            </button>
          </div>

          {/* Product filter by Price */}
          <div className="flex flex-col md:flex-row justify-center mt-4 md:mt-8">
            <input
              placeholder="Min price"
              className="bg-white border-2 border-gray-300 rounded-md px-2 py-2 w-full md:w-32 mr-0 md:mr-4 mb-4 md:mb-0 focus:outline-none focus:border-indigo-500"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              placeholder="Max price"
              className="bg-white border-2 border-gray-300 rounded-md px-2 py-2 w-full md:w-32 mr-0 md:mr-4 mb-4 md:mb-0 focus:outline-none focus:border-indigo-500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <button
              className="flex items-center justify-center bg-indigo-500 text-white rounded-md px-4 py-2 w-full md:w-auto hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={handlePrice}
            >
              Filter by Price
            </button>
          </div>
        </div>

        {/* All Product*/}
        {!allProducts.length ? (
          <AllProductsShim />
        ) : (
          <div className="flex gap-4 justify-center flex-wrap">
            {allProducts.map((AllItems) => (
              <div
                className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
                key={AllItems.id}
              >
                <Link
                  to={`/singleProduct/${AllItems.id}`}
                  className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                  href="#"
                >
                  <img
                    className="object-cover"
                    src={AllItems.thumbnail}
                    alt="product image"
                  />
                  <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    {AllItems.discountPercentage}% OFF
                  </span>
                </Link>
                <div className="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl tracking-tight text-slate-900">
                      {AllItems.title}
                    </h5>
                  </a>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold text-slate-900">
                        ${AllItems.price}
                      </span>
                      {/* <span className="text-sm text-slate-900 line-through">$699</span> */}
                    </p>
                    <div className="flex items-center">
                      <span className="rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                        {AllItems.rating}
                      </span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    onClick={() => AddToCart(AllItems)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to cart
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AllProducts;