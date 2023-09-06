import React,{useContext} from 'react'
import Textarea from '../../../Utilities/Textarea'
import { ApplyContext } from '../context/ApplyContextProvider'
const MessageToHire=()=>{
    const filds=useContext(ApplyContext)

    return(
        <>
          <div className=' px-20 flex flex-col'>
            
                   <span className='text-left text-4xl py-4'>Message to Hiring Manager</span> 

            <div className='py-4 bg-gray-300 rounded-2xl px-8 '>
                    <div>
                    <Textarea rows={5} type={'text'} label={'Let the company know about your interest working there'} className={' py-2 '} labelClassName={'text-left text-xl'} value={filds.messageToHire} onChange={(e)=>{filds.setMessageToHire(e.target.value)}}></Textarea>
                    </div>

                </div>
          </div>
        </>
    )
}

export default MessageToHire