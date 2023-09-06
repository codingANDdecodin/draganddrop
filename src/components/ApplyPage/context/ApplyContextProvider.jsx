import React, { createContext, useState } from 'react'


export const ApplyContext=createContext()

function ApplyContextProvider(props) {
    const [firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[email,setEmail]=useState('')
    const[confirmEmail,setConfirmEmail]=useState('')
    const[address,setAddress]=useState('')
    const[phoneNumber,setPhoneNumber]=useState('')
    const[title,setTitle]=useState('')
    const[company,setCompany]=useState('')
    const[officeLocation,setOfficeLocation]=useState('')
    const[expDescription,setExpDescription]=useState('')
    const[expFrom,setExpFrom]=useState('')
    const[expTo,setExpTo]=useState('')
    const[institution,setInstitution]=useState('')
    const[major,setMajor]=useState('')
    const[degree,setDegree]=useState('')
    const[schoolLocation,setSchoolLocation]=useState('')
    const[eduDescription,setEduDescription]=useState('')
    const[eduFrom,setEduFrom]=useState('')
    const[eduTo,setEduTo]=useState('')
    const[resume,setResume]=useState()
    const[messageToHire,setMessageToHire]=useState('')

    const filds={
        firstName,setFirstName,
        lastName,setLastName,
        email,setEmail,
        confirmEmail,setConfirmEmail,
        address,setAddress,
        phoneNumber,setPhoneNumber,
        title,setTitle,
        company,setCompany,
        officeLocation,setOfficeLocation,
        expDescription,setExpDescription,
        expFrom,setExpFrom,
        expTo,setExpTo,
        institution,setInstitution,
        major,setMajor,
        degree,setDegree,
        schoolLocation,setSchoolLocation,
        eduDescription,setEduDescription,
        eduFrom,setEduFrom,
        eduTo,setEduTo,
        resume,setResume,
        messageToHire,setMessageToHire,
      
    }
  return (
      <ApplyContext.Provider value={filds}>{props.children}</ApplyContext.Provider>
    )
}

export default ApplyContextProvider