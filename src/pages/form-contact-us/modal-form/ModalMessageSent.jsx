import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export const ModalMessageSent = ({isModalOpen, setModal}) => {
  
  if(isModalOpen){
       setTimeout(() =>{
         setModal(false)
       }, 5000)}

  return (
        <div className={`text-primary-green-200 bg-neutral-grey-900 p-2 rounded-2xl absolute -top-20 duration-1000 ${isModalOpen && "top-5"}`}>

            <h1 className='flex gap-1 items-center mb-1 font-bold text-xl'>
                <span><FontAwesomeIcon icon={faCircleCheck} /></span>
                <span>Message Sent!</span>
            </h1>
            <button 
            className='cursor-pointer absolute top-[10px] right-[20px]' 
            onClick={() => {setModal(false)}}>
                <FontAwesomeIcon icon={faXmark}/>
            </button>

            <p>Thanks for completing the form. We'll be in touch soon!</p>
        </div>
  )
}
