import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { blog01, blog02,blog03,blog04, blog05 } from './imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id="blog">
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container-groupA'>
          <Article date="23rd Aug' 23 " title="GPT-3 and Open AI is the future. Let us explore how it is?" imgUrl={blog01}/>
        </div>
        <div className='gpt3__blog-container-groupB'>
        <Article date="23rd Aug' 23 " title="GPT-3 and Open AI is the future. Let us explore how it is?" imgUrl={blog02} />
        <Article date="23rd Aug' 23 " title="GPT-3 and Open AI is the future. Let us explore how it is?" imgUrl={blog03}/>
        <Article date="23rd Aug' 23 " title="GPT-3 and Open AI is the future. Let us explore how it is?" imgUrl={blog04}/>
        <Article date="23rd Aug' 23 " title="GPT-3 and Open AI is the future. Let us explore how it is?" imgUrl={blog05}/>
        </div>
      </div>
    </div>
  )
}

export default Blog