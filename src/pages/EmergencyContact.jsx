import { useToggleDashboard } from "@/context/DashboardContext";
import { EmergencyContactBox } from "@components/EmergencyContactBox";
import { useImages } from "../assets/images/useImages";
import { Footer } from "@components/Footer";
export const EmergencyContact = () => {
  const { toggleDashboard } = useToggleDashboard();

  return (
    <section className="bg-navy flex min-h-dvh flex-col">
      <header className="bg-navy-light-2 flex items-center justify-between px-6 py-6">
        <img
          src={useImages.menu}
          alt="arrowIcon"
          className="max-h-[28px] max-w-[28px] cursor-pointer"
          onClick={toggleDashboard}
        />
        <h1 className="text-lightBlue small:text-[6vw] text-[5vw] font-bold tracking-wider">
          Emergency Contacts
        </h1>
        <img src={useImages.search} alt="searchIcon" />
      </header>

      <div className="border-blue mx-auto mt-6 mr-6 flex w-[140px] items-center rounded-full border">
        <button className="bg-blue text-navy w-1/2 cursor-pointer rounded-full px-1 py-1 text-center text-[11px] font-normal">
          CONTACTS
        </button>
        <button className="text-lightBlue w-1/2 cursor-pointer rounded-full px-1 py-1 text-center text-[11px] font-normal">
          TIPS
        </button>
      </div>

      <div className="grid-col-1 mt-6 grid h-[calc(100vh-30vh)] gap-2 overflow-scroll px-4 py-4">
        <EmergencyContactBox name="HOSPITAL" />
        <EmergencyContactBox name="NDRRMC" />
        <EmergencyContactBox name="BFP" />
        <EmergencyContactBox name="BARANGAY" />
        <EmergencyContactBox name="POLICE" />
      </div>
      <Footer />
    </section>
  );
};
