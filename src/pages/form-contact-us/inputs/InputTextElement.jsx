export const InputTextElement = ({label, id, setValue}) => {
  function handleChange(e) {
    setValue(e.target.value);
  }
  
  return (
    <label htmlFor={id} className="flex flex-col gap-0.5 w-full">
      <span>{label} *</span>
      <input className="py-0.5 px-1.5 w-full rounded border border-neutral-grey-500 focus:outline-none focus:border-primary-green-600" type="text" onChange={handleChange}  id={id} required placeholder={"Enter your " + label}/>
    </label>
  )
}

