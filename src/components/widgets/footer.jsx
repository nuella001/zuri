import React from 'react'
import ingressive from '../assets/images/ingressive.svg'
import Vector from '../assets/images/Vector.svg'
import hng from '../assets/images/hng.svg'
import github from '../assets/images/github.svg'
import slack from '../assets/images/slack.svg'

const Footer = () => {
  return (
    <div>
      <div className='flex space-x-4 w-5/6 mx-auto align-center justify-center mt-10'>
        <img src={github} alt="" />
        <img src={slack} alt="" />
      </div>
      <hr className='w-full text-black mt-56' />
      <div className='flex justify-between w-5/6 mx-auto mt-20 md:mt-56
    align-center justify-items-center mb-12'>
        <div>
            <img src={Vector} alt="" />
        </div>
        <div>
            <img src={hng} alt="" />
        </div>
        <div>
            <img src={ingressive} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Footer