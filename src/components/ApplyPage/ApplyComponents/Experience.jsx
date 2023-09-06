import React, { useContext } from 'react'
import Input from '../../../Utilities/Input'
import Textarea from '../../../Utilities/Textarea' 
import { ApplyContext } from '../context/ApplyContextProvider'
const Experience=()=>{
    const filds=useContext(ApplyContext)
    return(
        <>
           <div className=' px-20' >
           <div className='flex flex-col text-left py-4'>
                    <span className='text-4xl'>Experience</span>
                </div>
                <div className='flex flex-col rounded-2xl bg-gray-300'>
                    <div className='flex'>
                        <div className='w-1/2 py-4'>
                                <Input  type={'text'} label={'Title*'} className={'mx-8 py-2 '} labelClassName={'text-left ml-8 text-xl'} value={filds.title} onChange={(e)=>{filds.setTitle(e.target.value)}}></Input>
                                {
                                <p className='text-left ml-8 text-red-600'>this is required*</p>
                             }                          
                             </div>
                        <div className='w-1/2 py-4'> 
                            <Input type={'text'} label={'Company'} className={'mx-8 py-2 '} labelClassName={'text-left ml-8 text-xl'} value={filds.company} onChange={(e)=>{filds.setCompany(e.target.value)}}></Input>
                                
                             </div>
                    </div>
                    <div className='py-4'>
                           <Input type={'text'} label={'Office location'} className={'mx-8 py-2 '} labelClassName={'text-left ml-8 text-xl'} value={filds.officeLocation} onChange={(e)=>{filds.setOfficeLocation(e.target.value)}}></Input>
                               
                    </div>
                    <div className='py-4'>
                    <Textarea rows={3} type={'text'} label={'Description'} className={'mx-8 py-2 '} labelClassName={'text-left ml-8 text-xl'} value={filds.expDescription} onChange={(e)=>{filds.setExpDescription(e.target.value)}}></Textarea>
                              
                    </div>
                    <div className='flex py-4'>
                        <div className='w-1/2'>
                        <Input type={'date'} label={'From*'} className={'mx-8 py-2 '} labelClassName={'text-left ml-8 text-xl'} value={filds.expFrom} onChange={(e)=>{filds.setExpFrom(e.target.value)}}></Input>
                                {
                                <p className='text-left ml-8 text-red-600'>this is required*</p>
                             } 
                        </div>
                        <div className='w-1/2'>
                        <Input type={'date'} label={'To*'} className={'mx-8 py-2 '} placeholder={'pick the date'} labelClassName={'text-left ml-8 text-xl'} value={filds.expTo} onChange={(e)=>{filds.setExpTo(e.target.value)}}></Input>
                                {
                                <p className='text-left ml-8 text-red-600'>this is required*</p>
                             } 
                        </div>
                    </div>
                
                </div>    
           </div>
        </>
    )
}

export default Experience