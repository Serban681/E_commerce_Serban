import {ReactComponent as UserIcon} from '../../../Images/Other/NoPictureUserIcon.svg'

export default function ReviewCard(props) {
    return (
        <div className='bg-white w-72 lg:w-96 mx-auto flex mb-7 mr-5' >
            <div className='pt-1'>
                <UserIcon className=' bg-footerText rounded-full p-3 w-10 h-10 mx-5 my-3'/>
            </div>
            <p className='indent-2.5 font-body text-footer tracking-wide my-4 text-lg mr-5'>{props.review}</p>
        </div>
    )
}