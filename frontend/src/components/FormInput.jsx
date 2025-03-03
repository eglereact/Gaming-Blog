function FormInput({
  onChange,
  value,
  type,
  name,
  placeholder = null,
  autoComplete = null,
  errors = {},
  label,
  disabled = false,
  subLabel = null,
}) {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-white uppercase text-xs font-bold">
          {label} <span className="text-main-red text-lg">*</span>
        </label>
      )}
      <div className="flex items-center">
        <input
          type={type}
          name={name}
          onChange={onChange}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={`
            outline-none p-2 my-1 w-1/2 bg-transparent border text-white border-white rounded-none
            ${errors[name] && "shadow-red-400 shadow-sm"}
            `}
        />{" "}
        <span className="text-white text-sm capitalize ml-2">{subLabel}</span>
      </div>
      <div className="text-red-400 text-sm h-4">
        <span className={errors[name] ? "inline-block" : ""}>
          {errors[name] ?? ""}
        </span>
      </div>
    </div>
  );
}
export default FormInput;
