export const Input = ({
  icon,
  type = "text",
  id,
  label,
  value,
  onChange,
  name,
  disabled,
}) => {
  return (
    <section className="border-lightBlue flex items-center border-b-2">
      {icon && (
        <img
          src={icon}
          alt={id}
          className="small:w-8.75 small:h-8.75 h-6.25 w-6.25"
        />
      )}

      <div className="relative z-0 w-full">
        <input
          type={type}
          id={id}
          className="text-md text-lightBlue peer block w-full appearance-none border-0 bg-transparent px-3 py-2.5 focus:ring-0 focus:outline-none"
          placeholder=""
          value={value}
          onChange={onChange}
          name={name}
          disabled={disabled}
          required
        />
        <label
          htmlFor={id}
          className="small:text-base text-lightBlue peer-focus:text-blue absolute top-3 left-2 -z-10 origin-left -translate-y-6 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-autofill:-translate-y-6 peer-autofill:scale-75 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
        >
          {label}
        </label>
      </div>
    </section>
  );
};
