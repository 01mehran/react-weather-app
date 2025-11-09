import { useImages } from "@/assets/images/useImages";
import { Footer } from "@/components/Footer";

export const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="small:gap-8 flex items-center gap-4 md:gap-16">
        <h1 className="text-lightBlue text-[26vw] font-semibold lg:text-[20rem]">
          4
        </h1>
        <img src={useImages.cloudy_5} alt="" className="h-auto w-[18vw]" />
        <h1 className="text-lightBlue text-[26vw] font-semibold lg:text-[20rem]">
          4
        </h1>
      </div>
      <p className="text-lightBlue text-[4vw] font-medium tracking-wide sm:text-2xl">
        Oops! I can't find that forecas
      </p>
      <Footer />
    </div>
  );
};
