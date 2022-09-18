import { useRef, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import useElementOnScreen from '../../customHooks'

function ClothCard(props) 
{
    const [containerRef, isVisible] = useElementOnScreen()

    const [cardsPerLine, setCardsPerLine] = useState(1)

    useEffect(() => {
        if(window.innerWidth >= 675 && window.innerWidth < 1110)
            setCardsPerLine(2)
        else if(window.innerWidth >= 1110)
            setCardsPerLine(3)
    }, [])

    useEffect(() => {
        if(isVisible)
            containerRef.current.style.animation = `cloth-card-anim-in 1s ${(props.index % cardsPerLine) * 0.3}s forwards ease-out`
    }, [isVisible])

    

    const cardCanvas = useRef()

    const decorations = [<Decoration1/>, <Decoration2/>, <Decoration3/>, <Decoration4/>, <Decoration5/>, <Decoration6 />]

    const cardMouseMove = (event) => {
        let rect = cardCanvas.current.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;

        const cardWidth = cardCanvas.current.offsetWidth
        const cardHeight = cardCanvas.current.offsetHeight

        const centerX = cardWidth / 2
        const centerY = cardHeight / 2

        const mouseX = x - centerX
        const mouseY = y - centerY

        const rotateX = -15 * mouseY / centerY
        const rotateY = 15 * mouseX / centerX

        cardCanvas.current.style.transition = 'none'
        cardCanvas.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const cardMouseLeave = () => {
        cardCanvas.current.style.transition = 'transform 0.5s'
        cardCanvas.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
    }

    return (
        <div ref={containerRef} className={`opacity-0 mx-5 mt-7 sm:mt-10 lg:mt-14 mb-7 lg:mx-10`}>
            <section ref={cardCanvas} onMouseMove={cardMouseMove} onMouseLeave={cardMouseLeave} className={'preserveZ bg-white relative font-body text-center justify-center text-primaryText flex flex-col justify-items-center w-72'}>
                <h1 className='move-header font-semibold pt-8 mb-2 text-3xl'>{props.name}</h1>

                <img className='move-img h-56 self-center' src={props.image} alt='cloth image'/>

                <p className='move-price text-base mt-1'>{props.price.toFixed(2)}$</p>
                <Link className='move-btn' to={`/details/${props.id}`}>
                    <button className='more-btn text-lg tracking-wide border-4Rem border-primaryText px-9 py-1 self-center mt-3 mb-8'>
                        More
                    </button>
                </Link>

                {decorations[props.id % decorations.length]}
            </section>
        </div>
        
    )
}   

function Decoration1()
{
    return (
        <>
            <div className='move-dec w-1 h-20 absolute top-3 left-3 bg-primaryText' />
            <div className='move-dec w-20 h-1 absolute top-3 left-3 bg-primaryText' />

            <div className='move-dec w-1 h-20 absolute bottom-3 right-3 bg-primaryText' />
            <div className='move-dec w-20 h-1 absolute bottom-3 right-3 bg-primaryText' />
        </>    
    )
}

function Decoration2()
{
    return (
        <>
            <div className='move-dec w-1 h-93/100 absolute left-3 bg-primaryText' />
            <div className='move-dec w-hBorder h-1 absolute top-3 left-3 bg-primaryText' />

            <div className='move-dec w-1 h-93/100 absolute right-3 bg-primaryText' />
            <div className='move-dec w-hBorder h-1 absolute bottom-3 right-3 bg-primaryText' />
        </>    
    )
}

function Decoration3()
{
    return (
        <>
            <div className='move-dec w-1 h-93/100 absolute left-3 bg-primaryText' />

            <div className='move-dec w-1 h-93/100 absolute right-3 bg-primaryText' />   
        </>    
    )
}

function Decoration4()
{
    return (
        <>
            <div className='move-dec w-hBorder h-1 absolute top-3 left-3 bg-primaryText' />

            <div className='move-dec w-hBorder h-1 absolute bottom-3 right-3 bg-primaryText' />
        </>    
    )
}

function Decoration5()
{
    return (
        <>
            <div className='move-dec w-1 h-20 absolute top-3 right-3 bg-primaryText' />
            <div className='move-dec w-20 h-1 absolute bottom-3 left-3 bg-primaryText' />

            <div className='move-dec w-1 h-20 absolute bottom-3 left-3 bg-primaryText' />
            <div className='move-dec w-20 h-1 absolute top-3 right-3 bg-primaryText' />
        </>    
    )
}

function Decoration6()
{
    return (
        <>
            <div className='move-dec w-1 h-20 absolute top-3 right-3 bg-primaryText' />
            <div className='move-dec w-20 h-1 absolute bottom-3 left-3 bg-primaryText' />

            <div className='move-dec w-1 h-20 absolute bottom-3 left-3 bg-primaryText' />
            <div className='move-dec w-20 h-1 absolute top-3 right-3 bg-primaryText' />

            <div className='move-dec w-1 h-20 absolute top-3 left-3 bg-primaryText' />
            <div className='move-dec w-20 h-1 absolute top-3 left-3 bg-primaryText' />

            <div className='move-dec w-1 h-20 absolute bottom-3 right-3 bg-primaryText' />
            <div className='move-dec w-20 h-1 absolute bottom-3 right-3 bg-primaryText' />
        </>  
    )
}

export default ClothCard