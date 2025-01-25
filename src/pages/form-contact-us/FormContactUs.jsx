/* eslint-disable no-unused-vars */
import { useState } from "react";
import { InputEmailElement } from "./inputs/InputEmailElement";
import { InputTextElement } from "./inputs/InputTextElement";

export const FormContactUs = () => {
  const[firstName, setFName] = useState();
  const[secondName, setSName] = useState();
  const [email, setEmail] = useState();

  
  return (
    <form className="font-Karla flex flex-col">
      <h1 className="font-bold">Contact Us</h1>
      <div>
      <InputTextElement label="First Name" id="first-name" setValue={setFName} />
      <InputTextElement label="Last Name" id="last-name" setValue={setSName} />
      </div>
      <InputEmailElement label="Email" id="email" setValue={setEmail}/>
    </form>
    
  );
};
