import { useContext } from 'react'

import { ReactComponent as Check } from '../../../Images/Other/CheckIcon.svg'
import { ReactComponent as CheckWhite } from '../../../Images/Other/CheckIconWhite.svg'

import { Context } from '../../../context';

export function ProductSection(props) 
{
    const { addToWishlist, wishlist, removeFromWishlist, cart, addToCart, removeFromCart } = useContext(Context)

    let inWishlist = wishlist.indexOf(props.currentItem.id) !== -1
    let inCart = cart.find(el => el.id === props.currentItem.id) !== undefined

    const displayWishlistBtnText = () => {
        return (
            <>
                In Wishlist <Check className='inline h-9 -ml-3 -mr-8 -my-4' />
            </>
        )
    }

    const displayCartBtnText = () => {
        return (
            <>
                In Bag <CheckWhite className='inline h-9 -ml-3 -mr-8 -my-4' />
            </>
        )
    }  

    return (
        <>
            <div className='flex flex-row text-center mx-auto justify-evenly flex-wrap mb-14 pt-14'>
                <div className='mx-10'>
                    <img className='bg-white px-4 py-8  sm:max-w-lg mx-auto' src={props.currentItem.image} />
                </div>

                <div className='my-auto'>
                    <h1 className='text-primaryText font-body text-4xl font-medium mb-6 mt-10'>
                        {props.currentItem.name}
                    </h1>

                    <h3 className='text-2xl text-secondary font-body font-normal mt-5 mb-2'>
                        {props.currentItem.price.toFixed(2)}$
                    </h3>

                    <button onClick={() => inWishlist ? removeFromWishlist(props.currentItem.id) : addToWishlist(props.currentItem.id)} className='btn-hov block mx-auto bg-white w-60 py-4 text-primaryText text-2xl font-body font-medium my-7'>
                        {inWishlist ? displayWishlistBtnText() : 'Add To Wishlist'}
                    </button>

                    <button onClick={() => inCart ? removeFromCart(props.currentItem.id) : addToCart(props.currentItem.id)} className='btn-hov mx-auto block bg-primaryText w-60 py-4 text-white text-2xl font-body font-medium mb-7'>
                        {inCart ? displayCartBtnText() : 'Add To Bag'}
                    </button>

                    {/* <button className='btn-hov block mx-auto bg-primaryText w-60 py-4 text-white text-2xl font-body font-medium my-7'>
                        
                    </button> */}
                </div>
            </div>
        </>
    )
}