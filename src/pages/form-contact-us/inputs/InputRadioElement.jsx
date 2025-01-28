export const InputRadioElement = ({label, name, register, value, watch, errors}) => {
  const isChecked= watch(name);
  const error = errors?.[name];

  return (
    <label className={`flex gap-1 w-full rounded border border-neutral-grey-500 py-0.5 px-1.5 
    ${isChecked === value && "bg-primary-green-200 border-primary-green-600"} 
    ${error && "border-primary-red bg-red-100"} cursor-pointer`}>
        <input className='accent-primary-green-600'  type="radio" value={value}
        {...register (name, {required: true})}/>
        <span>{label}</span>
    </label>
  )
}
