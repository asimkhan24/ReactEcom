import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { getAuth, signOut } from "firebase/auth";
import toast from "react-hot-toast";

const Navbar = ({ cart, userName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleChange = () => {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        toast.success("Logout Successful!!");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <>
      <div>
        <header className="fixed z-50 bg-white border-b border-gray-200 w-full">
          <div className="container mx-auto flex justify-between p-5 items-center">
            <div>
              <Link to="/">
                <h3 className="font-bold text-2xl">
                  AK<span className="text-[red]">Shop</span>
                </h3>
              </Link>
            </div>

            <div className="hidden md:block">
              <ul className="flex items-center text-lg justify-center font-semibold">
                <Link to="/">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer">
                    Home
                  </li>
                </Link>
                <Link to="/allproducts">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer">
                    All Products
                  </li>
                </Link>

                <Link to="/about">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer">
                    About
                  </li>
                </Link>

                <Link to="/contact">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>

            {isOpen ? (
              <div className="md:hidden">
                <ul className="flex items-center gap-10 text-2xl flex-col absolute text-white top-[73px] left-0 h-screen w-full  z-10 bg-red-500 justify-center font-semibold">
                  <Link to="/">
                    <li
                      onClick={ToggleChange}
                      className="mt-5 hover:text-gray-900 cursor-pointer"
                    >
                      Home
                    </li>
                  </Link>
                  <Link to="/allproducts">
                    <li
                       onClick={ToggleChange}
                      className="mr-5 hover:text-gray-900 cursor-pointer"
                    >
                      All Products
                    </li>
                  </Link>
                  <Link to="/about">
                    <li
                       onClick={ToggleChange}
                      className="mr-5 hover:text-gray-900 cursor-pointer"
                    >
                      About
                    </li>
                  </Link>
                  <Link to="/contact">
                    <li
                        onClick={ToggleChange}
                      className="mr-5 hover:text-gray-900 cursor-pointer"
                    >
                      Contact
                    </li>
                  </Link>
                </ul>
                <button
                  className="absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer"
                  onClick={ToggleChange}
                >
                  <RxCross2 size={30} />
                </button>
              </div>
            ) : (
              ""
            )}

            <div className="flex justify-center items-center gap-3">
              {userName ? (
                <>
                  <Link to="/login">
                    <button
                      onClick={handleLogout}
                      className="bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base font-semibold"
                    >
                      Logout
                    </button>
                  </Link>
                  <span className="font-semibold text-[18px] text-red-600">
                    {userName}
                  </span>
                </>
              ) : (
                <Link to="/login">
                  <button className="bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base font-semibold">
                    Login
                  </button>
                </Link>
              )}

              <Link to="/cart">
                <div className="relative">
                  <button className="border-none bg-transparent">
                    <FaShoppingCart size={30} />
                  </button>
                  {cart.length > 0 && (
                    <div className="absolute right-0 bottom-5 bg-red-500 rounded-full w-5 h-5 flex justify-center items-center text-white text-xs font-bold">
                      {cart.length}
                    </div>
                  )}
                </div>
              </Link>
              {isOpen ? (
                ""
              ) : (
                <button className="md:hidden" onClick={ToggleChange}>
                  <GiHamburgerMenu size={25} />
                </button>
              )}
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
