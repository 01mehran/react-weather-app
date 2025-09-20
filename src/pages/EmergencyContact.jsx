import { useToggleDashboard } from "@/context/DashboardContext";
import { EmergencyContactBox } from "@components/EmergencyContactBox";
import { useImages } from "../assets/images/useImages";
import { Footer } from "@components/Footer";
export const EmergencyContact = () => {
  const { toggleDashboard } = useToggleDashboard();

  return (
    // bg-navy-light flex items-center justify-between px-4 py-2
    <section className="bg-navy flex min-h-dvh flex-col">
      <header className="bg-navy-light-2 flex items-center justify-between px-4 py-2">
        <img
          src={useImages.menu}
          alt="arrowIcon"
          className="w-8 cursor-pointer"
          onClick={toggleDashboard}
        />
        <h1 className="text-lightBlue small:text-[6vw] text-[5vw] font-bold tracking-wider">
          Emergency Contacts
        </h1>
        <img src={useImages.search} alt="searchIcon" />
      </header>

      <div className="mx-auto mt-6 mr-6">
        <button className="small:text-lg text-blue py-2 text-[4vw] font-bold tracking-wider uppercase">
          CONTACTS
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
