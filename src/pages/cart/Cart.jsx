import { Link, useNavigate } from "react-router-dom";
import ModalSection from "../../components/Modal/ModalSection";
import CartEmpty from "../../components/CartEmpty/CartEmpty";


const Cart = ({
  cart,
  handleDec,
  handleInc,
  handleRemove,
  getTotalPrice,
  getTotalPlusTen,
  applyPromoCode,
  promocode,
  setPromocode,
  invalid,
}) => {
  const navigate = useNavigate();

  return (
    
    <>
    {
      !cart.length?<CartEmpty/>:  <div className="w-full mx-auto">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row shadow-md">
          <div className="w-full lg:w-3/4 bg-white px-5 lg:px-10 py-5 lg:py-10">
            <div className="flex justify-between border-b pb-4 lg:pb-6">
              <h1 className="font-semibold text-lg lg:text-xl">Shopping Cart</h1>
              <h2 className="font-semibold text-lg lg:text-xl">
                {cart.length} Items
              </h2>
            </div>
            <div className="flex mt-4 lg:mt-6 mb-2 lg:mb-4">
              <h3 className="font-semibold text-gray-600 text-xs lg:text-sm uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs lg:text-sm uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs lg:text-sm uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs lg:text-sm uppercase w-1/5 text-center">
                Total
              </h3>
            </div>
    
            {/* cart section */}
    
            {cart.map((item) => (
              <div
                className="flex flex-col lg:flex-row items-center hover:bg-gray-100 -mx-2 lg:-mx-4 px-3 lg:px-5 py-3 lg:py-4"
                key={item.id}
              >
                <div className="flex w-full lg:w-2/5">
                  <div className="w-1/3 lg:w-1/4">
                    <img className="h-16 lg:h-20" src={item.thumbnail} alt="" />
                  </div>
                  <div className="flex flex-col justify-between ml-4 lg:ml-6 flex-grow">
                    <span className="font-bold text-sm lg:text-base">{item.title}</span>
                    <span className="text-gray-500 text-xs lg:text-sm">{item.brand}</span>
                    <a
                      href="#"
                      className="font-semibold hover:text-red-500 text-gray-500 text-xs lg:text-sm"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </a>
                  </div>
                </div>
                <div className="flex justify-center w-full lg:w-1/5 mt-2 lg:mt-0">
                  <button
                    className="border px-2 py-1 font-bold hover:text-red-500 text-xs lg:text-sm"
                    onClick={() => handleDec(item.id)}
                  >
                    -
                  </button>
                  <button className="px-2">{item.quantity}</button>
                  <button
                    className="border px-2 py-1 hover:text-red-500 font-bold text-xs lg:text-sm"
                    onClick={() => handleInc(item.id)}
                  >
                    +
                  </button>
                </div>
                <span className="text-center w-full lg:w-1/5 mt-2 lg:mt-0 font-semibold text-xs lg:text-sm">
                  ${item.price}
                </span>
                <span className="text-center w-full lg:w-1/5 mt-2 lg:mt-0 font-semibold text-xs lg:text-sm">
                  ${item.price * item.quantity}
                </span>
              </div>
            ))}
    
            {/* cart section end */}
    
            <p
              className="flex font-semibold text-indigo-600 text-sm mt-5 lg:mt-8 cursor-pointer items-center"
              onClick={() => navigate("/allproducts")}
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4 h-4 lg:w-5 lg:h-5"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </p>
          </div>
    
          <div id="summary" className="w-full lg:w-1/4 px-5 lg:px-8 py-5 lg:py-10">
            <h1 className="font-semibold text-lg lg:text-xl border-b pb-4 lg:pb-6">
              Order Summary
            </h1>
            <div className="flex justify-between mt-5 lg:mt-8 mb-2 lg:mb-4">
              <span className="font-semibold text-sm lg:text-base uppercase">
                {cart.length} Items
              </span>
              <span className="font-semibold text-sm lg:text-base">
                ${getTotalPrice()}
              </span>
            </div>
            <div>
              <label className="font-medium inline-block mb-2 lg:mb-3 text-xs lg:text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-xs lg:text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="py-5 lg:py-8">
              <label className="font-semibold inline-block mb-2 lg:mb-3 text-xs lg:text-sm uppercase">
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-xs lg:text-sm w-full"
                value={promocode}
                onChange={(e) => setPromocode(e.target.value)}
              />
              {promocode && promocode !== "DISCOUNT10" ? (
                <span className="text-[red] font-semibold">{invalid}</span>
              ) : (
                <span>Use DISCOUNT10</span>
              )}
              <hr className="mt-2 lg:mt-3" />
              {promocode === "DISCOUNT10" && (
                <span className="text-green-500">Successfully Applied</span>
              )}
            </div>
            <button
              className="bg-red-500 hover:bg-red-600 px-4 lg:px-5 py-2 text-xs lg:text-sm text-white uppercase"
              onClick={applyPromoCode}
            >
              Apply
            </button>
            <div className="border-t mt-5 lg:mt-8">
              <div className="flex font-semibold justify-between py-4 lg:py-6 text-xs lg:text-sm uppercase">
                <span>Total cost</span>
                <span>${getTotalPlusTen()}</span>
              </div>
              <ModalSection/>
              {/* <button>
                Checkout
              </button>> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    }
  

    </>
    
   

      
    
  );
};

export default Cart;
