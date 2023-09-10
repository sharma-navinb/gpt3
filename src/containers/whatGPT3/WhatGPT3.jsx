import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'
const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
      <div className='gpt3_whatgpt3-feature'>
        <Feature title="What is GPT3" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aut dolorum dignissimos quasi dolore. Quo accusamus hic sed, odio facilis explicabo amet doloribus culpa itaque omnis qui ducimus! Praesentium velit labore omnis cumque aliquam alias blanditiis harum dicta, perferendis earum, hic, et recusandae beatae repellendus totam inventore! Accusamus, sunt! Assumenda labore dolorem ab porro numquam nam similique quae hic aliquid, earum ullam fugiat facere animi? Consequuntur, quas! Nemo, nihil debitis enim alias dolorem, atque molestias natus, architecto pariatur beatae eaque ipsam sed iste dolores eos? Nam, autem quaerat adipisci saepe laboriosam, hic minus ipsa error et porro ab a doloribus!"/>
      </div>

      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          The Possibilities are on beyond your imaginations
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero aut ipsa eveniet autem doloribus. Hic omnis, commodi ipsam a porro laborum expedita et esse voluptates debitis quos fugit quae name" />
        <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero aut ipsa eveniet autem doloribus. Hic omnis, commodi ipsam a porro laborum expedita et esse voluptates debitis quos fugit quae name."/>
        <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero aut ipsa eveniet autem doloribus. Hic omnis, commodi ipsam a porro laborum expedita et esse voluptates debitis quos fugit quae name."/>
      </div>
    </div>
  )
}

export default WhatGPT3