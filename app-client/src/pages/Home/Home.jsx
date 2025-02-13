import React from 'react'
import { Banner } from './Banner'
import BookCards from '../shared/BookCards'
import FavoriteBook from './FavoriteBook'
import BestSeller from './BestSeller'
import OtherBooks from './OtherBooks'
import PromoBanner from './PromoBanner'
import Review from './Review'
// import signin from '/Users/keshavmittal/Desktop/book/app-client/src/pages/Login.jsx'

export const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSeller/>
      <FavoriteBook/>
      <PromoBanner/>
      <Review/>
      
    </div>
  )
}
