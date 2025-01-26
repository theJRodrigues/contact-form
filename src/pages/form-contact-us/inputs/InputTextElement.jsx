export const InputTextElement = ({ label, id, register, errors}) => {
  const error = errors?.[id]?.type;
  return (
    <label htmlFor={id} className="flex flex-col gap-0.5 w-full">
      <h2>{label} *</h2>

      <input
        className={`input border border-neutral-grey-500 focus:border-primary-green-600 
        ${error && "border-primary-red focus:border-primary-red"}`}

        placeholder={`Enter your ${label}`}
        id={id}
        {...register(id, {
          required: true,
          pattern: /^[A-ZÀ-Ÿ\s]+$/i,
        })}
      />
      {error === "pattern" && <p className="text-primary-red text-[13px]">Please use only letters</p>}
      {error === "required" && <p className="text-primary-red text-[13px]">This field is required</p>}
    </label>
  );
};
