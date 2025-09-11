export const ToggleButton = () => {
  return (
    <div className="text-center mt-12">
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div
          className="relative w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full
           after:content-[''] after:absolute after:top-[2px] after:right-[2px] 
           after:bg-white after:rounded-full after:h-5 after:w-5 
           after:transition-all after:duration-300 after:ease
           peer-checked:after:-translate-x-full dark:peer-checked:bg-lightBlue peer-checked:after:bg-navy"
        ></div>
        <span className="ms-3  text-[7vw] small:text-xl font-normal dark:text-gray-300">
          Turn on Location
        </span>
      </label>
    </div>
  );
};
