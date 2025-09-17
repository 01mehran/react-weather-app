import { useImages } from "../assets/images/useImages";

export const EmergencyContactBox = ({name}) => {
  return (
    <article className="bg-navy-dark flex items-center justify-between rounded-2xl px-6 py-5 shadow-xl">
      <div className="-gap-2 flex flex-col">
        <p className="text-lightBlue text-xl font-bold tracking-wider">
          {name}
        </p>
        <span className="text-lightBlue/75 text-[16px] font-normal tracking-wider">
          +032 1234 5678
        </span>
      </div>
      <div className="flex items-center gap-4">
        <img
          src={useImages.letter}
          alt="letterIcon"
          className="cursor-pointer"
        />
        <img
          src={useImages.telephone}
          alt="telephoneIcon"
          className="cursor-pointer"
        />
      </div>
    </article>
  );
};
