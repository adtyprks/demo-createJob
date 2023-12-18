import React, { createContext, useState } from 'react'
import App from '../App';
const FormContext = createContext();

const FormContextProvider = (props) => {
   // console.log("props: ",props)
   const [formData, setFormData] = useState({});
   const [step, setStep] = useState(1);
   return (
      <FormContext.Provider value={{formData, setFormData,step, setStep}} >
         {/* {console.log("SDf")} */}
         {props.children}
         {/* <App /> */}
      </FormContext.Provider>
   )
}

export {FormContext, FormContextProvider }