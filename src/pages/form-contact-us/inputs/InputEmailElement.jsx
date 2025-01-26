export const InputEmailElement = ({ label, id, register, errors }) => {
  const error = errors?.[id]?.type;
  return (
    <label htmlFor={id} className="flex flex-col gap-0.5">
      <span>{label} *</span>
      <input
        className={`input border border-neutral-grey-500 focus:border-primary-green-600 
        ${error && "border-red-500 focus:border-red-500"}`}
        type="text"
        id={id}
        placeholder="Enter your email"
        {...register(id, {
          required: true,
          pattern:/^[a-zà-ÿ0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zà-ÿ0-9](?:[a-zà-ÿ0-9-]{0,61}[a-zà-ÿ0-9])?(?:.[a-zà-ÿ0-9](?:[a-zà-ÿ0-9-]{0,61}[a-zà-ÿ0-9])?)*$/i
        })}
      />
      {error === "required" && (
        <p className="text-primary-red text-[13px]">This field is required</p>
      )}
      {error === "pattern" && (
        <p className="text-primary-red text-[13px]">
          Please enter a valid email address
        </p>
      )}
    </label>
  );
};
