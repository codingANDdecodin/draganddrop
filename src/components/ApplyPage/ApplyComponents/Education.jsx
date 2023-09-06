import React, { useContext } from 'react'
import Input from '../../../Utilities/Input'
import Textarea from '../../../Utilities/Textarea'
import { ApplyContext } from '../context/ApplyContextProvider'
const Education=()=>{
    const filds=useContext(ApplyContext)
    return (
      <>
      <div className=' px-20' >
      <div className='flex flex-col text-left py-4'>
               <span className='text-4xl'>Education</span>
           </div>
           <div className='flex flex-col rounded-2xl bg-gray-300'>
           <div className='py-4'>
                      <Input type={'text'} label={'Institution'} className={'mx-8 py-2 '} labelClassName={'text-left ml-8 text-xl'} value={filds.institution} onChange={(e)=>{filds.setInstitution(e.target.value)}} ></Input>
                          
               </div>
               <div className='flex'>
                   <div className='w-1/2 py-4'>
                           <Input  type={'text'} label={'Major*'} className={'mx-8 py-2 '} labelClassName={'text-left ml-8 text-xl'} value={filds.major} onChange={(e)=>{filds.setMajor(e.target.value)}}></Input>
                           {
                           <p className='text-left ml-8 text-red-600'>this is required*</p>
                        }                          
                        </div>
                   <div className='w-1/2 py-4'> 
                       <Input type={'text'} label={'Degree'} className={'mx-8 py-2 '} labelClassName={'text-left ml-8 text-xl'} value={filds.degree} onChange={(e)=>{filds.setDegree(e.target.value)}}></Input>
                           
                        </div>
               </div>
               <div className='py-4'>
                      <Input type={'text'} label={'School location'} className={'mx-8 py-2 '} labelClassName={'text-left ml-8 text-xl'} value={filds.location} onChange={(e)=>{filds.setSchoolLocation(e.target.value)}}></Input>
                          
               </div>
              
               <div className='py-4'>
               <Textarea rows={3} type={'text'} label={'Description'} className={'mx-8 py-2 '} labelClassName={'text-left ml-8 text-xl'} value={filds.eduDescription} onChange={(e)=>{filds.setEduDescription(e.target.value)}}></Textarea>
                         
               </div>
               <div className='flex py-4'>
                   <div className='w-1/2'>
                   <Input type={'date'} label={'From*'} className={'mx-8 py-2 '} labelClassName={'text-left ml-8 text-xl'} value={filds.eduFrom} onChange={(e)=>{filds.setEduFrom(e.target.value)}}></Input>
                          
                   </div>
                   <div className='w-1/2'>
                   <Input type={'date'} label={'To*'} className={'mx-8 py-2 '} placeholder={'pick the date'} labelClassName={'text-left ml-8 text-xl'} value={filds.eduTo} onChange={(e)=>{filds.setEduTo(e.target.value)}}></Input>
                           
                   </div>
               </div>
           
           </div>    
      </div>
   </>
    )
}

export default Education