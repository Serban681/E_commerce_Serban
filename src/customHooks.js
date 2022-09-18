import { useRef, useEffect, useState } from 'react'

const useElementOnScreen = () => {
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const options = {
        root: null,
        rootMargin: "100px",
        threshold: 1.0
    }

    const callbackFunction = (entries) => {
        const [ entry] = entries

        if (entry.isIntersecting)
            setIsVisible(true)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)

        if(containerRef.current)
            observer.observe(containerRef.current)

        return () => {
            if(containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [containerRef, options])

    return [containerRef, isVisible]
}

export default useElementOnScreen