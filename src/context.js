import React, { useState } from 'react'

const Context  = React.createContext([
    // {
    //     "name": '',
    //     "price": '',
    //     "image": '',
    //     "section": ''
    // }
])

function ContextProvider(props)
{
    const [selectedFilter, setFilter] = useState(0)

    const [wishlist, handleWishlist] = useState([])

    const [cart, handleCart] = useState([])

    const switchFilter = filter => {
        setFilter(filter)
    } 

    const addToWishlist = id => {
        if(wishlist.indexOf(id) === -1)
            handleWishlist(oldArr => [...oldArr, id])
    }

    const removeFromWishlist = id => {
        handleWishlist(oldArr => oldArr.filter(elId => elId !== id))
    }

    const addToCart = id => {
        if(cart.find(el => el.id === id) !== null)
            handleCart(oldArr => [...oldArr, {id: id, qty: 1}])
    }

    const removeFromCart = id => {
        handleCart(oldArr => oldArr.filter(el => el.id !== id))
    }

    const changeQty = (id, qty) => {
        handleCart(oldArr => oldArr.map(el => el.id === id ? {id: el.id, qty: Math.max(parseInt(qty), 1)} : {id: el.id, qty: el.qty}))
    }

    return (
        <Context.Provider value={{
            selectedFilter,
            switchFilter,
            wishlist,
            addToWishlist,
            removeFromWishlist,
            cart,
            addToCart,
            removeFromCart,
            changeQty
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}