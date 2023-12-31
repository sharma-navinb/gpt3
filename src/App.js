import React from 'react'
import { Footer, Blog, Header, Features, WhatGPT3, Possibility } from './containers';
import { Navbar, Feature, CTA, Brand, Article } from './components';
import './App.css'
import './index.css'
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App