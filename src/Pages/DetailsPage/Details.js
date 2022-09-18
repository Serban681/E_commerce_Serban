import React from 'react';
import {useParams} from 'react-router-dom'
import data from '../../data'

import { ProductSection } from './Sections/ProductSection'
import { ReviewsSection } from './Sections/ReviewsSection'
import { RecommendedSection } from './Sections/RecommendedSection'

export default function Details () {
    const { id } = useParams()

    const currentItemArr = data.filter(item => item.id == id)
    const currentItem = currentItemArr[0]

    return(
        <main className=' bg-background w-screen lg:w-[75rem]'>
            <ProductSection currentItem={currentItem} /> 

            <ReviewsSection currentItem={currentItem} />

            <RecommendedSection currentItem={currentItem} />
        </main>
    )
}



// function ExtendendImage(props)
// {
//     return (
//         <div className={`bg-white absolute top-0 h-full ${props.zoom}`}>
//             <BlackX className='absolute right-5 top-5 w-6 cursor-pointer' onClick={props.closeZoom} />
//             <img className='bg-white mx-auto px-auto py-auto w-full mt-56 lg:mt-14' src={props.currentItem.image} />
//         </div>  
//     )
// }

// const [zoom, setZoom] = useState('hidden')

    // useEffect(() => {
    //     setZoom('hidden')
    // }, [])

    // const closeZoom = () =>
    // {
    //     setZoom('hidden')
    // }

    // const openZoom = () => 
    // {
    //     setZoom('inline-block')
    // }

    {/* <ExtendendImage zoom={zoom} closeZoom={closeZoom} currentItem={props.currentItem} /> */}