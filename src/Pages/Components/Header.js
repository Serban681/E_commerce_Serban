import { useState, useContext } from 'react'
import {Context} from './../../context'
import {Link} from 'react-router-dom'

import './../../index.css'

import { ReactComponent as Logo } from '../../Images/HeaderImages/Logo.svg'
import { ReactComponent as Fav } from '../../Images/HeaderImages/Fav_Icon.svg'
// import { ReactComponent as LogIn } from '../../Images/HeaderImages/Log_In_Icon.svg'
import { ReactComponent as Bag } from '../../Images/HeaderImages/Cart_Icon.svg'
import { ReactComponent as FilledBag } from '../../Images/HeaderImages/Filled_Bag.svg'
import { ReactComponent as FilledWishlist } from '../../Images/HeaderImages/wishlist_filled.svg'

function Header()
{
    const {switchFilter, cart, wishlist} = useContext(Context)

    let filtersArr = [
        {
            id: 0,
            className: 'selected'
        },
        {
            id: 1,
            className: 'unselected'
        },
        {
            id: 2,
            className: 'unselected'
        },
        {
            id: 3,
            className: 'unselected'
        }
    ]

    const [filter, setFilter] = useState(filtersArr)

    const handleFilterClick = (id) => {
        const newFilter
            = filter.map(el => 
                el.id === id ? { ...el, className: 'selected'} : 
                { ...el, className: 'unselected'}
            )
        
        setFilter(newFilter)
        switchFilter(id)
    }

    return (
        <section className='relative bg-secondary text-secondaryText m-0 font-filter text-2.5xl text-center pb-10' >
            <div className='inline'>
                <Logo className='w-48 mt-neg.5 ml-3.5 sm:mx-auto'/>

                <ul className='list-none p-0 flex flex-row-reverse absolute right-2 top-0'>
                    <li>
                        <Link to={'/cart'}>
                            {
                                cart.length > 0 ?
                                    <FilledBag className='btn-hov mt-1.5 mr-3 float-right w-8 cursor-pointer' />
                                :
                                    <Bag className='btn-hov mt-1.5 mr-3 float-right w-8 cursor-pointer' />
                            }
                        </Link>
                    </li>
                    <li>
                        <Link to={'/wishlist'}>
                        {
                                wishlist.length > 0 ?
                                    <FilledWishlist className='btn-hov mt-1.5 mr-3 float-right w-8 cursor-pointer' />
                                :
                                <Fav className='btn-hov mt-1.5 mr-2 float-right w-8 cursor-pointer' />
                            }
                        </Link>
                    </li>
                    {/* <li>
                        <LogIn className='btn-hov mt-1.5 mr-1.5 float-right w-8 cursor-pointer' />
                    </li> */}
                </ul>
            </div>

            <ul className='flex justify-center'>
                <li className='mx-7 cursor-pointer relative transition-transform duration-250 ease-in hover:scale-110' onClick={() => handleFilterClick(0)}>
                    <Link to={'/'}>All</Link>
                    <span className={`underline ${filter[0].className}`} id='underline0'></span>
                </li>
                <li className='mx-7 cursor-pointer relative transition-transform duration-250 ease-in hover:scale-110' onClick={() => handleFilterClick(1)}>
                    <Link to={'/'}>Women</Link>
                    <span className={`underline ${filter[1].className}`} id='underline1'></span>
                </li>
                <li className='mx-7 cursor-pointer relative transition-transform duration-250 ease-in hover:scale-110' onClick={() => handleFilterClick(2)}>
                    <Link to={'/'}>Men</Link>
                    <span className={`underline ${filter[2].className}`} id='underline2'></span>
                </li>
                <li className='mx-7 cursor-pointer relative transition-transform duration-250 ease-in hover:scale-110' onClick={() => handleFilterClick(3)}>
                    <Link to={'/'}>Kids</Link>
                    <span className={`underline ${filter[3].className}`} id='underline3'></span>
                </li>
            </ul>
        </section>
    )
}


export default Header