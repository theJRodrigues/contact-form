/* eslint-disable no-unused-vars */
import { useState } from "react";
import { InputEmailElement } from "./inputs/InputEmailElement";
import { InputTextElement } from "./inputs/InputTextElement";
import { InputRadioElement } from "./inputs/InputRadioElement";
import { TextAreaElement } from "./text-area-form/TextAreaElement";
import { InputCheckBox } from "./inputs/InputCheckBox";

export const FormContactUs = () => {
  const[firstName, setFName] = useState();
  const[secondName, setSName] = useState();
  const[email, setEmail] = useState();
  const[optionRadioBtn, setOption] = useState();
  const[message, setMessage] =useState();
  const[isChecked, setChecked] = useState(false);

    
  return (
    <form className="font-Karla flex flex-col w-full sm:w-fit p-3 gap-1.5 rounded-2xl bg-white text-neutral-grey-900">
      <h1 className="font-bold text-3xl my-1 ">Contact Us</h1>

      <section className="flex gap-2">
        <InputTextElement label="First Name" id="first-name" setValue={setFName} />
        <InputTextElement label="Last Name" id="last-name" setValue={setSName} />
      </section>

      <InputEmailElement label="Email Address" id="email" setValue={setEmail}/>

      <section>
        <h2 className="mb-0.5">Query Types</h2>
        <div className="flex gap-2">
          <InputRadioElement label="General Enquiry" id="general-enquiry" setValue={setOption} value={optionRadioBtn}/>
          <InputRadioElement label="Support Request" id="support-request" setValue={setOption} value={optionRadioBtn}/>
        </div>
      </section>

      <section>
        <TextAreaElement label="Message *" id="message"  setValue={setMessage}/>
      </section>
      
      <section className="my-2">
        <InputCheckBox label="I consent to being contacted by the team" id="checkBox" setValue={setChecked} value={isChecked}/>
      </section>

      <button className="w-full bg-primary-green-600 p-1 rounded text-white" type="submit">Enviar</button>
    </form>
    
  );
};
