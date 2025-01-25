import React from 'react'

export const InputRadioElement = ({label, id, setValue, value}) => {
    function handleChange(e){
        setValue(e.target.id)
    }
  return (
    <label htmlFor={id} className={`flex gap-1 w-full rounded border border-neutral-grey-500 py-0.5 px-1.5 ${value === id ? "bg-primary-green-200 border-primary-green-600" : "" }`}>
        <input className='accent-primary-green-600'  type="radio" id={id} onChange={handleChange} checked={value === id} />
        <span>{label}</span>
    </label>
  )
}
