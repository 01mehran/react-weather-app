import { useToggleDashboard } from "@/context/DashboardContext";
import { EmergencyContactBox } from "@components/EmergencyContactBox";
import { useImages } from "@/assets/images/useImages";
import { Footer } from "@components/Footer";
export const EmergencyContact = () => {
  const { toggleDashboard } = useToggleDashboard();

  return (
    <section className="bg-navy flex min-h-dvh flex-col">
      <header className="bg-navy-light-2 small:max-w-[800px] mx-auto flex w-full items-center justify-between px-4 py-2 md:bg-transparent xl:translate-x-30 2xl:max-w-[1100px]">
        <img
          src={useImages.menu}
          alt="arrowIcon"
          className="w-8 cursor-pointer xl:hidden"
          onClick={toggleDashboard}
        />
        <h1 className="text-lightBlue text-[5vw] sm:text-[26px] font-bold tracking-wider">
          Emergency Contacts
        </h1>
        <img src={useImages.search} alt="searchIcon" />
      </header>

      <div className="small:max-w-[800px] mx-auto w-full xl:translate-x-30 2xl:max-w-[1100px]">
        <div className="mt-6 mr-6 ml-auto px-4">
          <button className="small:text-lg text-blue py-2 text-[4vw] font-bold tracking-wider uppercase">
            CONTACTS
          </button>
        </div>

        <div className="grid-col-1 mt-6 grid h-[calc(100vh-30vh)] gap-2 overflow-scroll px-4 py-4 sm:grid-cols-2">
          <EmergencyContactBox name="HOSPITAL" />
          <EmergencyContactBox name="NDRRMC" />
          <EmergencyContactBox name="BFP" />
          <EmergencyContactBox name="BARANGAY" />
          <EmergencyContactBox name="POLICE" />
        </div>
      </div>
      <Footer />
    </section>
  );
};
