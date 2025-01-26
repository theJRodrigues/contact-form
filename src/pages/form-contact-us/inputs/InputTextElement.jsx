export const InputTextElement = ({ label, name, register, errors}) => {
  const error = errors?.[name]?.type;
  return (
    <label className="flex flex-col gap-0.5 w-full">
      <h2>{label} *</h2>
      <input
        className={`input border border-neutral-grey-500 focus:border-primary-green-600 
        ${error && "border-primary-red focus:border-primary-red"}`}
        placeholder={`Enter your ${label}`}
        {...register(name, {
          required: true,
          pattern: /^[A-ZÀ-Ÿ\s]+$/i,
        })}
      />
      {error === "pattern" && <p className="errorMessageForm">Please use only letters</p>}
      {error === "required" && <p className="errorMessageForm">This field is required</p>}
    </label>
  );
};
