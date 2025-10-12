// Libraries;
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

// Context;
import { useToggleDashboard } from "@/context/DashboardContext";

// Image;
import { useImages } from "@images/useImages";

export const Dashboard = () => {
  const { isDashboardOpen, toggleDashboard, setIsDashboardOpen } =
    useToggleDashboard();
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const location = useLocation();
  const [image, setImage] = useState(
    localStorage.getItem("userProfileImage") || "",
  );

  // Show username & id on dashboard
  useEffect(() => {
    const userInfo = location.state?.user;

    if (userInfo) {
      setUserName(userInfo.username);
      setUserId(userInfo.documentId.slice(-7));
      localStorage.setItem("user", JSON.stringify(userInfo));
    } else {
      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) {
        setUserName(userData.username);
        setUserId(userData.documentId.slice(-7));
      }
    }
  }, [location.state]);

  useEffect(() => {
    const updatedImage = () => {
      const newImage = localStorage.getItem("userProfileImage");
      setImage(newImage);
    };

    window.addEventListener("userProfileImageChanged", updatedImage);

    return () => {
      window.removeEventListener("userProfileImageChanged", updatedImage);
    };
  }, []);

  return (
    <>
      {/* layer */}
      {isDashboardOpen && (
        <div
          onClick={toggleDashboard}
          className="fixed inset-0 z-40 bg-black/70 transition duration-200"
        ></div>
      )}
      <section
        className={`bg-navy fixed top-0 left-0 z-50 flex h-full w-full max-w-[324px] flex-col transition duration-300 ${isDashboardOpen ? "-translate-x-0" : "-translate-x-full"}`}
      >
        {/* upper */}
        <div
          className={`relative h-[280px] w-full bg-cover bg-bottom`}
          style={{ backgroundImage: `url(${useImages.dashboardBg})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-8 left-4 h-[60px] w-[60px]">
            {image ? (
              <img
                src={image}
                className="h-full w-full rounded-full object-cover"
                alt="userIcon"
              />
            ) : (
              <img src={useImages.dashboardUser} alt="user icon" />
            )}
          </div>
          <p className="text-lightBlue absolute top-25 left-6 text-xl font-bold tracking-wider">
            {userName}
          </p>
          <span className="text-lightBlue font-normmal absolute top-32 left-6 text-sm tracking-wider uppercase">
            {userId}
          </span>
        </div>
        {/* middle */}
        <div className="space-y-3 px-4 py-3">
          <p className="text-xl font-normal text-white">Weather</p>
          <article className="flex justify-evenly">
            <span className="bg-blue/50 text-lightBlue flex h-[60px] w-[70px] items-center justify-center text-xl font-bold">
              C °
            </span>
            <span className="text-lightBlue flex h-[60px] w-[70px] items-center justify-center text-xl font-bold">
              F °
            </span>
          </article>
        </div>
        {/* middle lower */}
        <div className="flex h-full flex-col justify-evenly px-6">
          <article className="text-lightblue flex items-center gap-2">
            <img src={useImages.dashboardCloudy} alt="weatherIcon" />
            <h4 className="text-lightBlue text-xl font-bold tracking-wider">
              Add to home screen
            </h4>
          </article>
          <NavLink
            to="/userProfile"
            onClick={toggleDashboard}
            className="text-lightblue flex items-center gap-2"
          >
            <img src={useImages.dashboardEdite} alt="editeIcon" />
            <h4 className="text-lightBlue text-xl font-bold tracking-wider">
              Edite profile
            </h4>
          </NavLink>
          <hr className="appearence-none border-px border-lightBlue" />
          <NavLink
            to="/setting"
            onClick={toggleDashboard}
            className="text-lightblue flex items-center gap-2"
          >
            <img src={useImages.dashboardsetting} alt="settingIcon" />
            <h4 className="text-lightBlue text-lg font-bold tracking-wider">
              Settings
            </h4>
          </NavLink>
          <NavLink
            to="/contactUs"
            onClick={toggleDashboard}
            className="text-lightblue flex items-center gap-2"
          >
            <img src={useImages.dashboardfeedback} alt="feddbackIcon" />
            <h4 className="text-lightBlue text-lg font-bold tracking-wider">
              Send feedback
            </h4>
          </NavLink>
          <article className="text-lightblue flex items-center gap-2">
            <img src={useImages.dashboardquestion} alt="questionIcon" />
            <h4 className="text-lightBlue text-lg font-bold tracking-wider">
              Help
            </h4>
          </article>
        </div>
      </section>
    </>
  );
};
