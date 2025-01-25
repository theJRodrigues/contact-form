export const InputEmailElement = ({label, id, setValue}) => {
    function handleChange(e) {
        setValue(e.target.value);
      }
      
  return (
    <label htmlFor={id} className="flex flex-col gap-0.5">
      <span>{label} *</span>
      <input
        className="peer py-0.5 px-1.5 border rounded border-neutral-grey-500 focus:outline-none focus:border-primary-green-600 not-placeholder-shown:invalid:not-focus:border-red-500 has-required:bg-amber-300 "
        type="email"
        id={id}
        name={id}
        onChange={handleChange}
        placeholder="Enter your email"
      />

      <p className="hidden text-red-500 text-[10px] peer-not-placeholder-shown:peer-invalid:peer-not-focus:block">
      Please enter a valid email address
      </p>
    </label>
  )
}
