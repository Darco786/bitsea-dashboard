import React from "react";
import img from "../assets/nft (1).png";
import "./Modal.css";
import heartIcon from "../assets/icons/heart.png";
import avatarImg from "../assets/avatar.png";
// import { FaTelegram } from "react-icons/fa";

function Model({ setIsModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setIsModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="">
          <section className="section-box">
            <div className="formWrapper">
              <header className="pop-head">
                <h2 className="text-center   mb-10px lh-1">
                  Complete Checkout!
                </h2>
              </header>
              <div className="container">
                <div className="flex justify-between gap-4">
                  <div>
                    <img
                      src={img}
                      alt="s"
                      height={"2"}
                      width={"2"}
                      className="h-full w-full r sm:rounded-lg"
                    />
                  </div>

                  <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-100">
              BTSEA PUNKS
            </h1>

            <div className="mt-6">
              <div className="space-y-6 text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur. Risus ut id velit
                hendrerit nunc tristique non malesuada malesuada. Eu lacus sed
                imperdiet elementum ipsum duis at ridiculus rhoncus. Lorem ipsum
                dolor sit amet consectetur. Risus ut id velit hendrerit nunc
                tristique non malesuada malesuada. Eu lacus sed imperdiet
                elementum ipsum duis at ridiculus rhoncus.
              </div>
            </div>

            <div className="mt-6 flex items-center">
              <img src={avatarImg} className="h-12 w-12 rounded-full" />
              <div className="flex-grow flex flex-col justify-center ml-5">
                <p className="font-medium text-white">Owned By</p>
                <p className="text-white font-base opacity-50">
                  Amirhossein Rahmani
                </p>
              </div>
              <div className="flex items-center">
                <button
                  className={`whitespace-nowrap rounded-full cursor-pointer  flex py-2 px-6 bg-gradient-to-r  to-[#9504F3] from-[#4129A1] text-sm text-white font-bold hover:text-gray-100`}
                >
                  0.80 BTC
                </button>
                <div className="ml-2 h-9 w-9 p-2 flex justify-center items-center rounded-full bg-[#ffffff0d] cursor-pointer">
                  <img src={heartIcon} />
                </div>
              </div>
            </div>
            </div>
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
