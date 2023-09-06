import React,{useContext} from 'react'
import Input from '../../../Utilities/Input'
import { ApplyContext } from '../context/ApplyContextProvider'
const Resume=()=>{
    const filds=useContext(ApplyContext)

    return(
        <>
           <div className=' px-20 flex flex-col '>
            <span className='text-left text-4xl py-4'>Resume</span>
            <div className='py-4 bg-gray-300 rounded-2xl px-8 '>
            <Input type={'file'} label={'Resume*'} className={' py-2  '} labelClassName={'text-left text-xl '} value={filds.resume} onChange={(e)=>{filds.setResume(e.target.value)}}></Input>
            {
                             <p className='text-left  text-red-600'>this is required*</p>
                          }   
            </div>
           </div>
        </>
    )
}

export default Resume