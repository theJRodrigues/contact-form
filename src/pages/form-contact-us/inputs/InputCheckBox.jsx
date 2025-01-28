export const InputCheckBox = ({label, name, register, errors}) => {
  const error = errors?.[name]
  return (
    <label className="cursor-pointer">
        <input className="mr-1 accent-primary-green-600" type="checkbox" 
        {...register(name,{required:true})}/>
        <span>{label}</span>
        {error && <p className="errorMessageForm">To submit this form, please consent to being contacted</p>}
    </label>
  )
}
