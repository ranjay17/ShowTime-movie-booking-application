import React from 'react'
import Header from './Header'
import { BG_IMG } from '../utils/constant'

const Browse = () => {
  return (
    <div>
      <Header />
      <img src={BG_IMG}
      alt='bg'
      />
    </div>
  )
}

export default Browse
