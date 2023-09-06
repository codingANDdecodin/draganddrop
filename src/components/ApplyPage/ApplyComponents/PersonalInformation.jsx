import React, { useContext } from 'react'
import Input from '../../../Utilities/Input'
import { ApplyContext } from '../context/ApplyContextProvider'
const PresonalInformation=()=>{
    const filds=useContext(ApplyContext)
    return(
        <> 
            <div className='flex flex-col px-20 '>
                <div className='flex flex-col text-left '>
                    <span className='text-4xl'>Presonal Information</span>
                    <span className='text-lg py-4'>Fields marked with * are required.</span>
                </div>
                
                <div className='bg-gray-300 flex flex-wrap rounded-2xl'>
                     <div className='flex flex-col w-1/2'>
                        <div className='py-4'>

                        <Input type={'text'} label={'First name*'} className={'mx-8 py-2  '} divClassName={''} labelClassName={'text-left ml-8 text-xl'} value={filds.firstName} onChange={(e)=>{filds.setFirstName(e.target.value)}}></Input>
                        {
                           <p className='text-left ml-8 text-red-600'>this is required*</p>
                    }
                        </div>
                        <div className='py-4'>

                        <Input type={'text'} label={'Email*'} className={'mx-8 py-2 '} labelClassName={'text-left ml-8 text-xl'} value={filds.email} onChange={(e)=>{filds.setEmail(e.target.value)}}></Input>
                        {
                           <p className='text-left ml-8 text-red-600'>this is required*</p>
                    }
                        </div>
                        <div className='py-4'>

                        <Input type={'text'} label={'Address'} className={'mx-8 py-2 '} labelClassName={'text-left ml-8 text-xl'} value={filds.address}  onChange={(e)=>{filds.setAddress(e.target.value)}}></Input>
                        {
                           <p className='text-left ml-8 text-red-600'>this is required*</p>
                    }
                        </div>
                     </div>
                     <div className='w-1/2'>
                        <div className='py-4'>

                       <Input type={'text'} label={'Last name'} className={'mx-8 py-2 '} labelClassName={'text-left ml-8 text-xl'} value={filds.lastName}  onChange={(e)=>{filds.setLastName(e.target.value)}}></Input>
                       {
                           <p className='text-left ml-8 text-red-600'>this is required*</p>
                    }
                        </div>
                        <div className='py-4'>

                        <Input type={'text'} label={'Conform email'} className={'mx-8 py-2 '} labelClassName={'text-left ml-8 text-xl'} value={filds.confirmEmail}  onChange={(e)=>{filds.setConfirmEmail(e.target.value)}}></Input>
                        {
                           <p className='text-left ml-8 text-red-600'>this is required*</p>
                    }
                        </div>
                        <div className='py-4'>

                        <Input type={'text'} label={'Phone number'} className={'mx-8 py-2 '} labelClassName={'text-left ml-8 text-xl'} value={filds.phoneNumber}  onChange={(e)=>{filds.setPhoneNumber(e.target.value)}}></Input>
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

export default PresonalInformation