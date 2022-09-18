import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { useLocation } from 'react-router-dom'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Main from './Pages/MainPage/Main'
import Details from './Pages/DetailsPage/Details'
import Cart from './Pages/CartPage/Cart'
import Header from './Pages/Components/Header'
import { ContextProvider } from './context'
import Footer from './Pages/Components/Footer'
import Wishlist from './Pages/WishlistPage/Wishlist'

ReactDOM.render(
  <ContextProvider>
    <Background>
      <div className='max-w-7xl min-h-screen relative'>
        <BrowserRouter>
          <Header />  
            <ScrollManager />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/details/:id" element={<Details />} />       
            </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </Background>
  </ContextProvider>
  ,
  document.getElementById('root')
);

function Background(props)
{
  const background = useRef()

  window.addEventListener("scroll", () => {
    let offset = window.scrollY
    background.current.style.backgroundPositionY = -offset * 0.008 + 'rem';
  })

  return (
    <div ref={background} className="pb-2 bg-[url('/public/photos/BG2.jpg')] bg-fixed bg-[length:110%] flex justify-center">
      {props.children}
    </div>
  )
}

function ScrollManager()
{
  const pathname = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
  }, [pathname])

  return (
    <></>
  )
}