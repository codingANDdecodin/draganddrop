import React, { useContext } from 'react'
import Input from '../../Utilities/Input'
import Textarea from '../../Utilities/Textarea'
import Button from '../../Utilities/Button'
import MessageToHire from './ApplyComponents/MessageToHire'
import Resume from './ApplyComponents/Resume'
import Education from './ApplyComponents/Education'
import Experience from './ApplyComponents/Experience'
import PresonalInformation from './ApplyComponents/PersonalInformation'
import ApplyContextProvider from './context/ApplyContextProvider'
import SubmitForm from './ApplyComponents/SubmitForm'


function Apply() {


  return (
    <>
        <ApplyContextProvider>

    <form>

       <PresonalInformation></PresonalInformation>
       <Experience></Experience>
       <Education></Education>
       <Resume></Resume>
       <MessageToHire></MessageToHire>
       <SubmitForm></SubmitForm>
       </form>
       </ApplyContextProvider>

    </>
  )
}

export default Apply


