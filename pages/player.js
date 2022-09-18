import { useState, useEffect } from 'react'
import Router from 'next/router';
//import { nftContractAddress } from '../config.js'
//import { ethers } from 'ethers'
//import axios from 'axios'

const trade = () => {

	return (
		<div className='flex flex-col items-center pt-2 bg-[#ffffff] text-[#6a50aa] min-h-screen'>
			<div className='trasition hover:rotate-180 hover:scale-105 transition duration-500 ease-in-out'>
      </div>
      <h2 className='text-3xl font-bold mb-20 mt-12'>
				Trade My Sports 
			</h2>
      <button
				className='text-2xl font-bold py-3 px-12 bg-[#dcdcdc] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out'>
        <h2 className='text-2xl font-bold mb-10 mt-4'>
				Current Worth
			  </h2>
        <h2 className='text-2xl font-bold mb-10 mt-4'>
				0.005 ETH
			  </h2>
        <h2 className='text-2xl font-bold mb-10 mt-4'>
				Gain/Loss %
			  </h2>
        </button>

        <button
				className='text-2xl font-bold py-3 px-12 bg-[#f1c232] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out' type="button" onClick={() => Router.push('/createtoken')}>
        Create Tokens
        </button>


      


		</div>
	)

}
export default trade
