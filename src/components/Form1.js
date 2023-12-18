import React, { useContext, useState } from 'react'
import { FormContext } from '../context/formContext';
import { toast } from 'react-toastify';
function Form1() {
   const { step, formData, setFormData, setStep } = useContext(FormContext);
   console.log("FormContext: ", step, formData)
   const goToNext = () => {
      console.log("formdata", formData, formData.title)
      if (formData.title == "" || formData.title == undefined || formData.compName == "" || formData.compName == undefined || formData.industry == "" ||formData.industry == undefined) {
         console.log("error")
         toast.error("Please enter mandatory fields")
         return false
      }
      setStep(2);
   }
   return (
      <div className='flex flex-col gap-6'>
         <div className='flex flex-col gap-1'>
            <label className='font-medium'>Job title<span className='text-red-500'>*</span></label>
            <input type='text' name="Job Title" value={formData["title"]} onChange={e => setFormData({ ...formData, "title": e.target.value })} placeholder='ex. UX UI Designer' className='border-2 border-solid border-borderColor rounded hover:outline-none focus:outline-none h-10 p-2 placeholder:text-placeHolderColor' />
         </div>
         <div className='flex flex-col gap-1'>
            <label className='font-medium'>Company name<span className='text-red-500'>*</span></label>
            <input type='text' name="ex Google" value={formData["compName"]} onChange={e => setFormData({ ...formData, "compName": e.target.value })} placeholder='ex. UX UI Designer' className='border-2 border-solid border-borderColor rounded hover:outline-none focus:outline-none h-10 p-2 placeholder:text-placeHolderColor' />
         </div>
         <div className='flex flex-col gap-1'>
            <label className='font-medium'>Industry<span className='text-red-500'>*</span></label>
            <input type='text' name="ex. Information Technology" value={formData["industry"]} onChange={e => setFormData({ ...formData, "industry": e.target.value })} placeholder='ex. UX UI Designer' className='border-2 border-solid border-borderColor rounded hover:outline-none focus:outline-none h-10 p-2 placeholder:text-placeHolderColor' />
         </div>
         <div className='flex flex-row w-full gap-6'>
            <div className='flex flex-col w-full gap-1'>
               <label className='font-medium'>Location</label>
               <input type='text' name="ex. Chennai" value={formData["location"]} onChange={e => setFormData({ ...formData, "location": e.target.value })} placeholder='ex. UX UI Designer' className='border-2 border-solid border-borderColor rounded hover:outline-none focus:outline-none h-10 p-2 placeholder:text-placeHolderColor' />
            </div>
            <div className='flex flex-col w-full gap-1'>
               <label className='font-medium'>Remote Type</label>
               <input type='text' name="ex. In-office" value={formData["remoteType"]} onChange={e => setFormData({ ...formData, "remoteType": e.target.value })} placeholder='ex. UX UI Designer' className='border-2 border-solid border-borderColor rounded hover:outline-none focus:outline-none h-10 p-2 placeholder:text-placeHolderColor' />
            </div>
         </div>
         <button className='px-4 py-2 bg-primary mt-24 rounded text-white self-end' onClick={goToNext}>Next</button>

      </div>
   )
}

export default Form1