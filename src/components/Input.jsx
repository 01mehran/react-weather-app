export const Input = ({ icon, type = "text", id, label }) => {
  return (
    <section className="flex items-center border-b-2  border-lightBlue">
      {icon && <img src={icon} alt={id} className="w-[25px] h-[25px] small:w-[35px] small:h-[35px]" />}

      <form className="relative z-0 w-full">
        <input
          type={type}
          id={id}
          className="block py-2.5  px-3 w-full text-md  bg-transparent border-0  text-lightBlue  appearance-none focus:outline-none focus:ring-0  peer"
          placeholder=""
        />
        <label
          htmlFor={id}
          className="absolute text-sm small:text-base text-lightBlue left-2 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          {label}
        </label>
      </form>
    </section>
  );
};
