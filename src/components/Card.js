import React from "react";
import heartIcon from "../assets/icons/heart.png";

const Card = ({img}) => {
  return (
   
      <section className="font-outfit bg-[#161933] p-3 rounded-xl shadow-2xl w-auto">
        <a href="#" className="group block relative rounded-md overflow-hidden">
          <img src={img} alt="equilibrium" className="w-full" />
        </a>

        <div className="flex justify-between items-center">
          <h1>
            <a
              href="#"
              className="block text-white mt-3 font-semibold text-lg hover:text-cyan"
            >
              Equilibrium
            </a>
          </h1>
          <div className="mt-2 items-center text-white opacity-50 text-sm text-soft-blue whitespace-nowrap">
            Current Bid
          </div>
        </div>
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="block text-white  font-semibold text-base hover:text-cyan"
          >
            #432211
          </a>
          <div className="text-[#382C9A] font-bold  text-base  whitespace-nowrap">
            0.80 BTC
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <div className="space-x-2">
            <a
              href="/Wallet"
              className="whitespace-nowrap rounded-full cursor-pointer border-2 border-solid border-[#9B02FB] py-2 px-4 text-sm text-white hover:text-gray-100"
            >
              Make Offer
            </a>
            <a
              href="/Wallet"
              className="whitespace-nowrap cursor-pointer rounded-full bg-[#22233B] border-2 border-solid border-transparent py-2 px-4 text-sm text-white hover:text-gray-100"
            >
              Buy Now
            </a>
          </div>
          <div className="h-9 w-9 p-2 flex justify-center items-center rounded-full bg-[#ffffff0d] cursor-pointer">
            <img src={heartIcon} />
          </div>
        </div>
      </section>
    
  );
};

export default Card;
