import { useState } from "react";
import { InputEmailElement } from "./inputs/InputEmailElement";
import { InputTextElement } from "./inputs/InputTextElement";

export const FormContactUs = () => {
  const[firstName, setFName] = useState();
  const[secondName, setSName] = useState();
  const [email, setEmail] = useState();

  
  return (
    <form className="flex flex-col">
      <h1>Contact Us</h1>
      <div>
      <InputTextElement label="First Name" id="first-name" setValue={setFName} />
      <InputTextElement label="Second Name" id="second-name" setValue={setSName} />
      </div>
      
      <InputEmailElement label="Email" id="email" setValue={setEmail}/>
    </form>
    
  );
};
