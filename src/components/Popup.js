import React from "react";
import img from "../assets/nft (1).png";
import "./Modal.css";
import qrImg from "../assets/qr.png";
import avatarImg from "../assets/avatar.png";
// import { FaTelegram } from "react-icons/fa";

function Model({ setIsModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className=" flex justify-between">
        <h2 className="mb-10px lh-1">Complete Checkout!</h2>
          <button
            onClick={() => {
              setIsModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="">
          <section className="">
            <div className="formWrapper">
             
              <div className="container">
                <div className="flex justify-between gap-4">
                  <div>
                    <img
                      src={img}
                      alt="s"
                     
                      className="h-[195px] w-[270px] r sm:rounded-lg"
                    />
                  </div>

                  <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                    <div className="  flex  justify-between ">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-100">
                      BTSEA PUNKS
                    </h1>

                    <p className="text-white opacity-[0.5]">#2075</p>
                    </div>
                    

                    <div className="mt-6 flex items-center">
                      <img src={avatarImg} className="h-12 w-12 rounded-full" />
                      <div className="flex-grow flex flex-col justify-center ml-5">
                        <p className="font-medium text-white">Owned By</p>
                        <p className="text-white font-base opacity-50">
                          Amirhossein Rahmani
                        </p>
                      </div>
                      <div className=" items-center">
                        <button
                          className={`whitespace-nowrap rounded-full cursor-pointer  flex py-2 px-6 bg-gradient-to-r  to-[#9504F3] from-[#4129A1] text-sm text-white font-bold hover:text-gray-100`}
                        >
                          0.80 BTC
                        </button>
                      </div>
                    </div>
                    <div>
                        <div><h2>My BTC Wallet <span>!</span></h2></div>
                        <div><h2>@hdh552356fjdjhd2154djndmjnd6325</h2> 
                        <p>Ver</p></div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                    <div className="">
                        <div className="flex justify-between">
                            <div>
                                <h1>Send funds to escrow</h1>
                                <p>This escrow will expire in 6 hours if the funds are not received.</p>
                            </div>
                            <div className=" items-center">
                        <button
                          className={`whitespace-nowrap rounded-full cursor-pointer  flex py-2 px-6 bg-gradient-to-r  to-[#9504F3] from-[#4129A1] text-sm text-white font-bold hover:text-gray-100`}
                        >
                          0.80 BTC
                        </button>
                      </div>
                        </div>

                        <div className="flex justify-between">
                            <div>
                                <h1>Time left</h1>
                                <h1>Status</h1>
                            </div>
                            <div>
                                <p>05:48:52</p>
                                <p>Waiting for funds</p>
                            </div>

                        </div>
                        <div className="flex justify-between">
                            <p>Address</p>
                            <div><h1>@hdh552356fjdjhd2154djndmjnd6325</h1>
                            <p>copy</p></div>
                        </div>

                    </div>
                    <div className="text-center">
                        <img src={qrImg} alt=""/>

                    </div>
                </div>
                <div className="text-center">
                    <button>Confirm Deposit</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Model;
