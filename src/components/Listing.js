import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import Form1 from './Form1';
import Form2 from './Form2';
import { FormContext } from '../context/formContext';

function Listing() {
   const { step, setFormData, setStep } = useContext(FormContext);
   const [jobList, setJobList] = useState([]);
   const [showModel, setShowModel] = useState(false)
   const getList = () => {
      axios.get(`https://6572683dd61ba6fcc014d65e.mockapi.io/createJob`)
         .then((response) => {
            setJobList(response.data.reverse())
         })
         .catch((error) => {
            console.log("error", error)
         })
   }
   useEffect(() => {
      getList();
   }, [])
   const createJob = () => {
      // console.log("createJob: ")
      setShowModel(true)
   }

   const editClick = (data) => {
      console.log("edit: ", data)
      setFormData(data);
      setShowModel(true);
      setStep(1)

   }
   const deleteClick = (id) => {
      console.log("delete: ", id)

      axios.delete(`https://6572683dd61ba6fcc014d65e.mockapi.io/createJob/${id}`)
         .then((response) => {
            console.log("response: ", response)
            getList();
         })
         .catch((error) => {
            console.log("error", error)
         })

   }
   return (
      <div>
         <button onClick={createJob} className='w-36 h-12 bg-primary mt-8 ml-14 p-2 rounded text-white'>Create Job</button>
         <div className='flex flex-row flex-wrap p-10 pt-0'>
            {/* gap-4 */}
            {jobList.length > 0 && jobList.map((data) => (
               <div className=' relative w-[830px] flex flex-row shrink-0 bg-white px-5 py-4 m-4 rounded-lg border-2 border-borderColor' key={data.id}>
                  <div className='absolute right-0 flex flex-row gap-2 w-20 h-12 '>
                     <svg className='cursor-pointer' onClick={e => editClick(data)} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#1597E4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z" fill="#0F0F0F"></path> </g></svg>

                     <svg onClick={e => deleteClick(data.id)} className='cursor-pointer' fill="#1597E4" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000" xmlSpace="preserve" stroke="#1597E4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098 c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117 h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828 C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879 C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096 c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266 c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979 V115.744z"></path> <path d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07 c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"></path> <path d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07 c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"></path> <path d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07 c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"></path> </g> </g> </g></svg>

                  </div>
                  <div className='w-12 h-12 bg-black p-[5px] flex justify-center items-center rounded-lg'>
                     <img src="./image/netflixLogo.png" alt="Logo" className='w-5 h-9 bg-black' />
                  </div>
                  <div className='pl-2'>
                     <p className='text-2xl font-normal'>{data.title}</p>
                     <p className='font-normal'>{data.compName}&nbsp;-&nbsp;{data.industry}</p>
                     <p className='font-normal text-placeHolderColor'>{data.location} ({data.remoteType})</p>
                     <p className='font-normal leading-7 mt-6'>Part-Time(9.00 am-5.00pm IST)</p>
                     <p className='font-normal leading-7'>Experience({data.minExp}&nbsp;-&nbsp;{data.maxExp}) Years</p>
                     <p className='font-normal leading-7'>INR (₹) ({data.minSal} - {data.maxSal})</p>
                     <p className='font-normal leading-7'>{data.totalEmployee} Employees</p>
                     {data.applyType == "quick-apply" && <button className='w-[118px] px-4 py-2 bg-primary rounded text-white mt-6 text-lg'>Apply now</button>}
                     {data.applyType == "external-apply" && <button className=' px-4 py-2 rounded text-primary mt-6 text-lg border-2 border-primary'>External Apply</button>}
                  </div>
               </div>
            ))}
         </div>
         <div className={` fade fixed top-0 left-0 ${showModel ? "" : "hidden"} w-full h-full outline-none overflow-x-hidden overflow-y-auto bg-[#26262670]`}
            id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg  flex flex-col w-[577px]  bg-white bg-clip-padding rounded-md outline-none text-current ">
               <div
                  className="flex flex-shrink-0 items-center justify-between px-4 pt-8">
                  <div className='flex flex-shrink-0 items-center justify-between w-full'>
                     <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Create a job</h5>
                     <p>Step {step}</p>
                  </div>
               </div>
               <div className="flex flex-col p-4">
                  {step == 1 && <Form1 />}
                  {step == 2 && <Form2 setShowModel={setShowModel} getList={getList} />}
               </div>
            </div>
         </div>
      </div>

   )
}

export default Listing
