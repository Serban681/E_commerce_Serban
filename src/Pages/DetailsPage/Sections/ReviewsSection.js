import { useEffect, useState } from 'react'

import ReviewCard from './ReviewCard';

import {ReactComponent as Star} from '../../../Images/Other/Star.svg'
import {ReactComponent as BlackStar} from '../../../Images/Other/BlackStar.svg'

export function ReviewsSection({currentItem})
{
    const [selReview, setReview] = useState(5)

    const reviewsArr = currentItem.reviews

    const fiveStarRev = reviewsArr.filter(rev => rev.starCount == 5)
    const fiveStarCardRev = fiveStarRev.map((rev, i) => <ReviewCard key={i} review={rev.review} />)

    const fourStarRev = reviewsArr.filter(rev => rev.starCount == 4)
    const fourStarCardRev = fourStarRev.map((rev, i) => <ReviewCard key={i} review={rev.review} />)

    const threeStarRev = reviewsArr.filter(rev => rev.starCount == 3)
    const threeStarCardRev = threeStarRev.map((rev, i) => <ReviewCard key={i} review={rev.review} />)

    const twoStarRev = reviewsArr.filter(rev => rev.starCount == 2)
    const twoStarCardRev = twoStarRev.map((rev, i) => <ReviewCard key={i} review={rev.review} />)

    const oneStarRev = reviewsArr.filter(rev => rev.starCount == 1)
    const oneStarCardRev = oneStarRev.map((rev, i) => <ReviewCard key={i} review={rev.review} />)

    const allRevArr = [oneStarCardRev, twoStarCardRev, threeStarCardRev, fourStarCardRev, fiveStarCardRev]
    const [reviewCol, setReviewCol] = useState(fiveStarCardRev)

    const selRevHandler = starLvl => {
        setReview(starLvl)
        setReviewCol(allRevArr[starLvl - 1])
    }

    return (
        <section>
            <div className='mx-auto w-11/12 max-w-6xl lg:mt-5'>
                <h1 className='font-body font-medium text-primaryText text-4.5xl mb-2 mt-5'>Reviews</h1>
                <div className='bg-primaryText  h-1'/>
            </div>  

            <div className='flex flex-wrap justify-evenly flex-row mt-5'>
                <ul className='m-5 mb-10'>
                    <li onClick={() => selRevHandler(5)} className='btn-hov cursor-pointer flex flex-row bg-white h-11 w-72 mb-3'>
                        <h6 className='cursor-pointer text-xl text-secondary font-body font-normal ml-2 mt-2'>({fiveStarCardRev.length})</h6>
                        <ReviewSelector starCount={5} selReview={selReview} />
                    </li>

                    <li onClick={() => selRevHandler(4)} className='btn-hov cursor-pointer mt-5 flex flex-row bg-white h-11 w-60 mb-3'>
                        <h6 className='text-xl text-secondary font-body font-normal ml-2 mt-2'>({fourStarCardRev.length})</h6>
                        <ReviewSelector starCount={4} selReview={selReview} />
                    </li>

                    <li onClick={() => selRevHandler(3)} className='btn-hov cursor-pointer mt-5 flex flex-row bg-white h-11 w-48  mb-3'>
                        <h6 className='cursor-pointer text-xl text-secondary font-body font-normal ml-2 mt-2'>({threeStarCardRev.length})</h6>
                        <ReviewSelector starCount={3} selReview={selReview} />
                    </li>

                    <li onClick={() => selRevHandler(2)} className='btn-hov cursor-pointer mt-5 flex flex-row bg-white h-11 w-36  mb-3'>
                        <h6 className='cursor-pointer text-xl text-secondary font-body font-normal ml-2 mt-2'>({twoStarCardRev.length})</h6>
                        <ReviewSelector starCount={2} selReview={selReview} />
                    </li>

                    <li onClick={() => selRevHandler(1)} className='btn-hov cursor-pointer mt-5 flex flex-row bg-white h-11 w-24  mb-3'>
                        <h6 className='cursor-pointer text-xl text-secondary font-body font-normal ml-2 mt-2'>({oneStarCardRev.length})</h6>
                        <ReviewSelector starCount={1} selReview={selReview} />
                    </li>
                </ul>
                
                <div>
                    <div className='mx-auto w-full max-w-6xl lg:mt-5 flex justify-between flex-row'>
                        <div className='bg-primaryText h-0.5 grow mt-6'/>
                        <h1 className='font-body font-normal text-primaryText text-clip text-4xl mb-2 mx-4'>{selReview} Star Reviews</h1>
                        <div className='bg-primaryText h-0.5 grow mt-6'/>
                    </div> 

                    {reviewCol.length > 0 ? 
                        <div className='review-panel grow overflow-y-scroll h-60 my-6'>
                            {reviewCol}
                        </div> 
                        :
                        <div className='review-panel grow w-72 lg:w-96 h-36 my-6'>
                            <h3 className='font-body text-secondary tracking-wide my-14 text-center font-normal text-2xl'>No one has reviewed this product yet!</h3>
                        </div> 
                    }    
                </div>
            </div>
        </section>
    ) 
}

function ReviewSelector(props)
{
    const [stars, addStars] = useState([])

    useEffect(() => {
        addStars([])

        const isSelected = props.selReview === props.starCount ? true : false

        for(let i=0; i < props.starCount; i++)
        {
            addStars(oldArr => [...oldArr, isSelected ? <Star className='w-7 ml-5 mt-neg.5' key={i} /> : <BlackStar className='w-7 ml-5 mt-neg.5' key={i} />])
        }
    }, [props.selReview])

    return (
        <>
            {stars}
        </>
    )
}