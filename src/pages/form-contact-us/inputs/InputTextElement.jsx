export const InputTextElement = ({label, id, setValue}) => {
  function handleChange(e) {
    setValue(e.target.value);
  }
  
  return (
    <label htmlFor={id}>
      <span>{label}</span>
      <input type="text" onChange={handleChange} required/>
    </label>
  )
}

