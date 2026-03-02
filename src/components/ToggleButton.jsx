export const ToggleButton = () => {
  return (
    <div className="mt-12 text-center">
      <label className="inline-flex cursor-pointer items-center">
        <input type="checkbox" value="" className="peer sr-only" />
        <div className="after:ease dark:peer-checked:bg-lightBlue peer-checked:after:bg-navy relative h-6 w-11 rounded-full bg-gray-700 peer-focus:outline-none after:absolute after:top-0.5 after:right-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:duration-300 after:content-[''] peer-checked:after:-translate-x-full"></div>
        <span className="small:text-xl ms-3 text-[7vw] font-normal dark:text-gray-300">
          Turn on Location
        </span>
      </label>
    </div>
  );
};
