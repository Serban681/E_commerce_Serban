import { ReactComponent as Logo } from '../../Images/HeaderImages/Logo.svg'
import { useEffect } from 'react'
//import { useLocation } from 'react-router-dom'

function Footer()
{
    // const address = useLocation().pathname

    return (
        <section className={`bg-footer text-footerText pb-10 w-full absolute -bottom-2`} >
            <div className='pt-10'>
                <Logo className='w-48 ml-3.5 inline'/>

                <p className='inline float-right pt-14 mr-3 text-'>©Galaxy Clothing 2021</p>
            </div>
        </section>
    )
}

export default Footer