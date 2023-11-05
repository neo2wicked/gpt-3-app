import React from 'react'

import { Footer, Blog, Possibility, Features, WhatGPT4, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

const App = () => {
  return (
    <div classname="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />

    </div>
    <Brand />
    <WhatGPT4 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
    </div>
  )
}

export default App
