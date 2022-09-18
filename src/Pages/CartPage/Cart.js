import React, { useContext, useEffect, useState } from 'react';
import {ReactComponent as BagIcon} from '../../Images/Other/EmptyBagCart.svg'
import {ReactComponent as Check} from '../../Images/Other/RoundCheckFilled.svg'
import { Context } from '../../context'

import Card from './CartCard';

import { Link } from 'react-router-dom'

import data from '../../data'

export default function Cart (){
    const { cart } = useContext(Context)
    const [ordered, setOrdered] = useState(false)

    const calculateTotal = () => {
        let total = 0

        cart.forEach(el => {
            total += data.find(item => item.id === el.id).price * el.qty
        });
        
        return total
    }

    return(
        <div className='pt-10 pb-96 bg-background w-screen lg:w-[75rem]'>
            {cart.length > 0 ?
                ordered ? <OrderProcessed />
                    :
                    <FilledCart setOrdered={setOrdered} calculateTotal={calculateTotal} />
                :
                <EmptyCart />
            }
        </div>
    )
}

function EmptyCart() {
    return (
        <div className='mt-48 w-full'>
            <BagIcon className='w-14 mx-auto -mb-10 -mt-40' />

            <h1 className='font-body font-medium text-primaryText text-center text-4.5xl'>Bag is empty</h1>
            <p className='indent-2.5 font-body text-footer tracking-wide mt-1 text-center text-lg mr-5'>Go back to the shop to add items to the bag</p>

            <div className='flex justify-center mt-8'>
                <Link to={'/'}>
                    <button className='btn-hov bg-primaryText font-body tracking-wide px-3 py-2 text-lg text-white'>Back To The Store</button>
                </Link>
            </div>
        </div>
    )
}

function OrderProcessed() {
    return (
        <div className='mt-48 w-full'>
            <Check className='w-14 mx-auto mb-1 -mt-32' />

            <h1 className='font-body font-medium text-primaryText text-center text-4.5xl'>Thanks for Ordering!</h1>
            <p className='indent-2.5 font-body text-footer tracking-wide mt-1 text-center text-lg mr-5'>We've sent you an email providing the order details</p>

            <div className='flex justify-center mt-8'>
                <Link to={'/'}>
                    <button className='btn-hov bg-primaryText font-body tracking-wide px-3 py-2 text-lg text-white'>Back To The Store</button>
                </Link>
            </div>
        </div>
    )
}

function FilledCart({calculateTotal, setOrdered}) {

    const { cart } = useContext(Context)

    return (
        <section>
            {cart.map((el, i) => <Card key={i} id={el.id} />)}

            <div className='mx-auto w-11/12 max-w-6xl mt-10'>
                <div className='bg-primaryText  h-1'/>
                <div className='relative'>
                    <h3 className='font-body text-xl text-primaryText font-medium mt-3 absolute right-1'>Total: {calculateTotal().toFixed(2)}$</h3>
                        
                    <button onClick={() => setOrdered(true)} className='btn-hov bg-primaryText font-body tracking-wide px-3 py-2 text-lg text-white absolute top-10 right-0 mt-3'>
                        Proceed to checkout
                    </button>
                </div>
            </div>  
        </section>
    )
}

