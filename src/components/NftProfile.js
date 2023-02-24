import React from "react";
import NftPro from "../assets/nft-pro.png";
import Avatar from "../assets/avatar.png";
import { IoHeartCircle } from "react-icons/io5";
function NftProfile() {
  return (
    <section className="mt-20">
      <div className="container">
        <div className="flex main-box justify-between gap-16">
          <div className="">
            <div className="">
            <img src={NftPro} alt="" className="nft-pro"/>
            </div>
            
          </div>
          <div>
            <div className="flex justify-between pb-4">
              {" "}
              <h1 className="text-white">BTSEA PUNKS</h1>
              <p className="text-white opacity-[0.5]">#2075</p>
            </div>

            <p className="text-white opacity-[0.5] pb-4">
              Lorem ipsum dolor sit amet consectetur. Risus ut id velit
              hendrerit nunc tristique non malesuada malesuada. Eu lacus sed
              imperdiet elementum ipsum duis at ridiculus rhoncus. Lorem ipsum
              dolor sit amet consectetur. Risus ut id velit hendrerit nunc
              tristique non malesuada malesuada. Eu lacus sed imperdiet
              elementum ipsum duis at ridiculus rhoncus.{" "}
            </p>

            <div>
              <div className="flex justify-between">
                <div className=" flex justify-around gap-6">
                  <img src={Avatar} alt="" />
                  <div className="">
                    <p>Owned by</p>
                    <span>Amirhossein Rahmani</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <a href="/">0.80 BTC</a>
                  <span>
                    <IoHeartCircle />
                  </span>
                </div>
              </div>
            </div>

            <div className="flex">
                <a href="/">Buy Now</a>
                <a href="/">Make Offer</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NftProfile;
