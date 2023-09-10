import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibilityImage" srcset="" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The Possibility is beyond Your Emagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam soluta atque totam amet reprehenderit fugit adipisci minus recusandae ratione sapiente vero at, provident hic in vitae nisi alias quia libero, iure, explicabo ab! Ipsam fugiat debitis praesentium architecto quaerat consequuntur.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility