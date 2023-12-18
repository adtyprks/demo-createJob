import React, { useContext } from 'react'
import axios from 'axios';
import { FormContext } from '../context/formContext';

function Form2(props) {
   const { formData, setFormData, setStep } = useContext(FormContext);
   const submitData = () => {
      console.log("goToNext: ", formData)
      let obj = {
         "title": formData.title,
         "compName": formData.compName,
         "industry": formData.industry,
         "location": formData.location,
         "remoteType": formData.remoteType,
         "minExp": parseInt(formData.minExp),
         "maxExp": parseInt(formData.maxExp),
         "minSal": parseInt(formData.minSal),
         "maxSal": parseInt(formData.maxSal),
         "totalEmployee": formData.totalEmployee,
         "applyType": formData.applyType
      }
      axios.post(`https://6572683dd61ba6fcc014d65e.mockapi.io/createJob`, obj).then((response) => {
         console.log("response: ", response.data)
         props.getList();
         setStep(1);
         setFormData({})
         props.setShowModel(false)

         // setJobList(response.data.reverse())
      });
   }
   const updateData = ()=>{
      let obj = {
         "title": formData.title,
         "compName": formData.compName,
         "industry": formData.industry,
         "location": formData.location,
         "remoteType": formData.remoteType,
         "minExp": parseInt(formData.minExp),
         "maxExp": parseInt(formData.maxExp),
         "minSal": parseInt(formData.minSal),
         "maxSal": parseInt(formData.maxSal),
         "totalEmployee": formData.totalEmployee,
         "applyType": formData.applyType
      }
      axios.put(`https://6572683dd61ba6fcc014d65e.mockapi.io/createJob/${formData.id}`, obj).then((response) => {
         console.log("response: ", response.data)
         props.getList();
         setStep(1);
         setFormData({})
         props.setShowModel(false)

         // setJobList(response.data.reverse())
      });
   }
   return (
      <>
         <div className='flex flex-col gap-6'>

            <div className='flex flex-row w-full gap-6'>
               <div className='flex flex-col w-full gap-1'>
                  <label className='font-medium'>Experience</label>
                  <input type='number' value={formData["minExp"]} onChange={e => setFormData({ ...formData, "minExp": e.target.value })} name="Minimum" placeholder='Minimum' className='border-2 border-solid border-borderColor rounded hover:outline-none focus:outline-none h-10 p-2 placeholder:text-placeHolderColor' />
               </div>
               <div className='flex flex-col w-full gap-1'>
                  <label>&nbsp;</label>
                  <input type='number' value={formData["maxExp"]} onChange={e => setFormData({ ...formData, "maxExp": e.target.value })} name="Maximum" placeholder='Maximum' className='border-2 border-solid border-borderColor rounded hover:outline-none focus:outline-none h-10 p-2 placeholder:text-placeHolderColor' />
               </div>
            </div>

            <div className='flex flex-row w-full gap-6'>
               <div className='flex flex-col w-full gap-1'>
                  <label className='font-medium'>Salary</label>
                  <input type='number' value={formData["minSal"]} onChange={e => setFormData({ ...formData, "minSal": e.target.value })} name="Minimum" placeholder='Minimum' className='border-2 border-solid border-borderColor rounded hover:outline-none focus:outline-none h-10 p-2 placeholder:text-placeHolderColor' />
               </div>
               <div className='flex flex-col w-full gap-1'>
                  <label>&nbsp;</label>
                  <input type='number' value={formData["maxSal"]} onChange={e => setFormData({ ...formData, "maxSal": e.target.value })} name="Maximum" placeholder='Maximum' className='border-2 border-solid border-borderColor rounded hover:outline-none focus:outline-none h-10 p-2 placeholder:text-placeHolderColor' />
               </div>
            </div>
            <div className='flex flex-col gap-1'>
               <label className='font-medium'>Total Employee</label>
               <input type='text' value={formData["totalEmployee"]} onChange={e => setFormData({ ...formData, "totalEmployee": e.target.value })} name="Total Employee" placeholder='ex. 100' className='border-2 border-solid border-borderColor rounded hover:outline-none focus:outline-none h-10 p-2 placeholder:text-placeHolderColor' />
            </div>
            <div className='flex flex-col gap-1'>
               <label className='font-medium'>Apply type </label>
               <div className='flex flex-row gap-4 '>
                  <label className='flex flex-row gap-2 items-center'>
                     <input type="radio" value={formData["applyType"]} onChange={e => setFormData({ ...formData, "applyType": "quick-apply" })} className='border-2 border-solid border-borderColor rounded hover:outline-none focus:outline-none h-4 w-8 p-2' checked={formData.applyType == "quick-apply"} />
                     Quick apply
                  </label>
                  <label className='flex flex-row gap-2 items-center'>
                     <input type="radio" value={formData["applyType"]} onChange={e => setFormData({ ...formData, "applyType": "external-apply" })} className='border-2 border-solid border-borderColor rounded hover:outline-none focus:outline-none h-4 w-8 p-2' checked={formData.applyType == "external-apply"} />
                     External apply
                  </label>
               </div>
            </div>
            {!formData.id && <button className='px-4 py-2 bg-primary mt-24 rounded text-white self-end' onClick={submitData}>Save</button>}
            {formData.id && <button className='px-4 py-2 bg-primary mt-24 rounded text-white self-end' onClick={updateData}>Save</button>}

         </div>

      </>
   )
}

export default Form2