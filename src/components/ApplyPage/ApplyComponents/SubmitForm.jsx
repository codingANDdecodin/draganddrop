import React, { useContext } from 'react'
import Button from '../../../Utilities/Button'
import { ApplyContext } from '../context/ApplyContextProvider'
const SubmitForm=()=>{
    const filds=useContext(ApplyContext)
    const submitHandler=()=>{
        let formData={
            firstName:filds.firstName,
            lastName:filds.lastName,
            email:filds.email,
            confirmEmail:filds.confirmEmail,
            address:filds.address,
            phoneNumber:filds.phoneNumber,

            title:filds.title,
            company:filds.company,
            officeLocation:filds.officeLocation,
            expDescription:filds.expDescription,
            expFrom:filds.expFrom,
            expTo:filds.expTo,

            Institution:filds.institution,
            major:filds.major,
            degree:filds.degree,
            schoolLocation:filds.schoolLocation,
            eduDescription:filds.eduDescription,
            eduFrom:filds.eduFrom,
            eduTo:filds.eduTo,

            resume:filds.resume,

            messageToHire:filds.messageToHire,


        }
        console.log(formData)
    }
    return(
        <>
          <div className='flex float-right mr-20 pt-8'>
           <Button type={'button'} onClick={submitHandler} className={'px-14 py-2  bg-yellow-400 rounded-3xl text-2xl font-bold hover:text-white hover:bg-yellow-500'}>Submit</Button>
          </div>
        </>
    )
  }

export default SubmitForm