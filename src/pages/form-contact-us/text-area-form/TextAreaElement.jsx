export const TextAreaElement = ({label, id, setValue}) => {
    function handleChange(e){
        setValue(e.target.value)  
    }

  return (
    <label className='flex flex-col gap-0.5' htmlFor={id}>
        <span>{label}</span>
        <textarea className="resize-none h-10 rounded px-1.5 py-1 border-[1.5px] border-neutral-grey-500 focus:border-primary-green-600 focus:outline-none " name={id} id={id} onChange={handleChange}></textarea>
    </label>
  )
}
