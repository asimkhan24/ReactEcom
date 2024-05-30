import React from "react";

import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";

const ModalSection = () => {
  const [openModal, setOpenModal] = useState(true);
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    address: "",
    pincode: "",
    phone: "",
  });

  function onCloseModal() {
    setOpenModal(false);
    setOrderDetails("");
  }
  const handleChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
    // console.log(userSignUp);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    if (!orderDetails.name || !orderDetails.address || !orderDetails.pincode || !orderDetails.phone) {
      return toast.error("All fields are required");
    } else {
      // send data to the backend here
      toast.success('Order Successfull !!')
   onCloseModal()
    }
  };

  return (
    <>
      <Button
        className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-1 text-sm text-white uppercase w-full"
        onClick={() => setOpenModal(true)}
      >
        Checkout
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label value="Your Full Name" />
              </div>
              <TextInput
                id="email"
                name="name"
                value={orderDetails.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label value="Enter Full Address" />
              </div>
              <TextInput
                id="password"
                name="address"
                type="text"
                value={orderDetails.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Your Pincode" />
              </div>
              <TextInput
                id="text"
                name="pincode"
                value={orderDetails.pincode}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Your Mobile Number" />
              </div>
              <TextInput
                id="text"
                name="phone"
                value={orderDetails.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full">
              <Button onClick={handleOrder} className="w-full">Order Now</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalSection;
