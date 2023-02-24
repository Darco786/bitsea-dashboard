import React from 'react'
import NftPro from '../assets/nft-pro.png'
import Avatar from '../assets/avatar.png'
import {IoHeartCircle} from 'react-icons/io5'
function NftProfile() {
  return (
    <section>
        <div className='container'>
            <div className='flex main-box'>
                <div className=''>
                    <img src={NftPro} alt=""/>
                </div>
                <div>
                    <div>   <h1>BTSEA PUNKS</h1>
                    <p>#2075</p></div>
                 
                    <p>Lorem ipsum dolor sit amet consectetur. Risus ut id velit hendrerit nunc tristique non malesuada malesuada. Eu lacus sed imperdiet elementum ipsum duis at ridiculus rhoncus. Lorem ipsum dolor sit amet consectetur. Risus ut id velit hendrerit nunc tristique non malesuada malesuada. Eu lacus sed imperdiet elementum ipsum duis at ridiculus rhoncus. </p>
                
                <div>
                    <div className='flex'>
                        <div> 
                             <img src={Avatar} alt=""/>
                        <div>
                            <p>Owned by</p>
                            <span>Amirhossein Rahmani</span>
                        </div>
                        </div>
                        <div>
                            <a href="/">0.80 BTC</a>
                            <span><IoHeartCircle/></span>
                        </div>
                      
                    </div>
                </div>
                </div>

            </div>

        </div>


    </section>
  )
}

export default NftProfile