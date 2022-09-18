import { useState, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as RemoveIcn } from '../../Images/Other/RedX.svg'

import data from '../../data'
import { Context } from '../../context'

import '../../index.css'

export default function Card({id}) {
    const { cart, changeQty, removeFromCart } = useContext(Context)

    const [fadeAwayStyles, setFadeAwayStyles] = useState('init')

    const handleRemoveFromCart = () => {
        setFadeAwayStyles('fade-out')
        const timeout = setTimeout(() => {
            removeFromCart(id)
            setFadeAwayStyles('init')

            clearTimeout(timeout)
        }, 250);
    }

    return (
        <div className={`${fadeAwayStyles} bg-white w-10/12 h-24 mx-auto flex justify-between mb-8`}>
            <Link to={`/details/${id}`}>
                <div className='pointer'>
                    <img className='h-16 inline-block ml-4 -mt-2' src={data.find(el => el.id === id).image} />
                    <h1 className='w-10 whitespace-nowrap inline-block font-body text-xl mt-[2.1rem] text-primaryText ml-3'>{data.find(el => el.id === id).name}</h1>
                </div>
            </Link>

            <div className='-mt-0.5 ml-8 md:ml-0'>
                <h1 className='inline-block font-body text-xl mt-[2.1rem] text-primaryText mr-2'>QTY.</h1>
                <input onChange={(e) => changeQty(id, e.target.value)} value={cart.find(el => el.id === id).qty} className='w-12 mt-[1.9rem] bg-primaryText focus:outline-none text-primary font-body text-xl px-1 py-1 text-center' type='number'/>
                <h1 className='hidden md:inline-block font-body text-xl text-primaryText mx-2'>*</h1>
                <h1 className='hidden md:inline-block font-body text-xl text-primaryText mr-2'>{data.find(el => el.id === id).price.toFixed(2)}$</h1>
                <h1 className='hidden md:inline-block font-body text-xl text-primaryText mr-2'>=</h1>
                <h1 className='hidden md:inline-block font-body text-xl text-primaryText mr-2'>{(data.find(el => el.id === id).price * cart.find(el => el.id === id).qty).toFixed(2)}$</h1>
            </div>

            <RemoveIcn onClick={() => handleRemoveFromCart()}  className='cursor-pointer float-right h-10 mt-[1.9rem]' />
        </div>
    )
}