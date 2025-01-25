export const InputEmailElement = ({label, id, setValue}) => {
    function handleChange(e) {
        setValue(e.target.value);
      }
      
  return (
    <label htmlFor={id}>
      <span>{label} *</span>
      <input
        className="peer"
        type="email"
        id={id}
        name={id}
        required
        onChange={handleChange}
        placeholder="Enter your email"
      />

      <p className="peer-not-placeholder-shown:peer-invalid:peer-not-focus:block  text-black border hidden">
        Invalid email
      </p>
    </label>
  )
}
