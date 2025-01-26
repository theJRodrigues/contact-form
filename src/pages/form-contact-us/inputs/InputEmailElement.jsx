export const InputEmailElement = ({ label, name, register, errors }) => {
  const error = errors?.[name]?.type;
  return (
    <label className="flex flex-col gap-0.5">
      <span>{label} *</span>
      <input
        className={`input border border-neutral-grey-500 focus:border-primary-green-600 
        ${error && "border-red-500 focus:border-red-500"}`}
        type="text"
        placeholder="Enter your email"
        {...register(name, {
          required: true,
          pattern:/^[a-zà-ÿ0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zà-ÿ0-9](?:[a-zà-ÿ0-9-]{0,61}[a-zà-ÿ0-9])?(?:.[a-zà-ÿ0-9](?:[a-zà-ÿ0-9-]{0,61}[a-zà-ÿ0-9])?)*$/i
        })}
      />
      {error === "required" && (
        <p className="errorMessageForm">This field is required</p>
      )}
      {error === "pattern" && (
        <p className="errorMessageForm">
          Please enter a valid email address
        </p>
      )}
    </label>
  );
};
