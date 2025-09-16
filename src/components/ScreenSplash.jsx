// Images;
import { useImages } from "@images/useImages";

export const ScreenSplash = () => {
  return (
    <section className="h-dvh bg-navy flex justify-center items-center">
      <img src={useImages.logo} alt="cloudIcon" className="animate animate-pulse" />
    </section>
  );
};
