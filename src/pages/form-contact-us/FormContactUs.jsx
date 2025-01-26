/* eslint-disable no-unused-vars */
import { InputEmailElement } from "./inputs/InputEmailElement";
import { InputTextElement } from "./inputs/InputTextElement";
import { InputRadioElement } from "./inputs/InputRadioElement";
import { TextAreaElement } from "./text-area-form/TextAreaElement";
import { InputCheckBox } from "./inputs/InputCheckBox";
import { useForm} from "react-hook-form";

export const FormContactUs = () => {
  const {register, handleSubmit, formState: {errors}, resetField, watch}= useForm();
  function onSubmit(data){
    console.log(data)
  }
  
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1 className="font-bold text-3xl my-1 ">Contact Us</h1>

      <div className="flex gap-2">
        <InputTextElement label="First Name" name="firstName" register={register} errors={errors}/>
        <InputTextElement label="Last Name" name="lastName" register={register} errors={errors}/>
      </div>

      <InputEmailElement label="Email Address" name="email" register={register} errors={errors}/>
      
      <div>
        <h2 className="mb-0.5">Query Types</h2>
        <div className="flex gap-2">
          <InputRadioElement label="General Enquiry" name="queryType" value="generalEnquiry" register={register} watch={watch} errors={errors}/>
          <InputRadioElement label="Support Request" name="queryType" value="supportRequest" register={register} watch={watch} errors={errors}/>
        </div>
        {errors?.queryType?.type === "required" 
        && <p className="errorMessageForm">Please select a query type</p>}
      </div>

      {/* <div>
        <TextAreaElement label="Message *" id="message"  setValue={setMessage}/>
      </div>
      
      <div className="my-2">
        <InputCheckBox label="I consent to being contacted by the team" id="checkBox" setValue={setChecked} value={isChecked}/>
      </div> */}

      <button className="w-full bg-primary-green-600 p-1 rounded text-white" type="submit">Enviar</button>
    </form>
    
  );
};
