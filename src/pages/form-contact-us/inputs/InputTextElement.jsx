export const InputTextElement = ({label, id, register, errors}) => {
 return (
    <label htmlFor={id} className="flex flex-col gap-0.5 w-full">
      <h2>{label} *</h2>
      <input
      className="inputText"
      id={id}
      {...register(id, {
        required: true,
        pattern: /^[A-Za-z]+$/i
      })}/>

      {errors?.[id]?.type === "pattern" && <p className="text-red-500">Teste2</p>}
    </label>
  )
}

