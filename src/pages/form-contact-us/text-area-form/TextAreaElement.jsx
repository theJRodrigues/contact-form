export const TextAreaElement = ({label, name, register, errors}) => {
  const error = errors?.[name]
  return (
    <label className='flex flex-col gap-0.5'>
        <span>{label}</span>
        
        <textarea className={`textArea
        border border-neutral-grey-500 focus:border-primary-green-600 
        ${error && "border-primary-red focus:border-primary-red"}`}
        name={name} 
        {...register(name,{required:true})}></textarea>

        {error && <p className="errorMessageForm">This field is required</p>}
    </label>
  )
}
