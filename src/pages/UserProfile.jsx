// Libraries;
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

// Context;
import { useShareApp } from "@/context/ShareAppContext";

// images;
import { useImages } from "@images/useImages";

export const UserProfile = () => {
  const navigate = useNavigate();
  const [userProfileImage, setUserProfileImage] = useState(null);
  const imageEl = useRef(null);
  const { handleShare } = useShareApp();

  const [profile, setProfile] = useState({
    profileUserName: "",
    profileBio: "",
  });

  // Update profile & save it to localStorage;
  useEffect(() => {
    const savedUserProfileImage = localStorage.getItem("userProfileImage");
    // Update username & bio;
    const savedProfileUserName = localStorage.getItem("profileUserName");
    const savedProfileBio = localStorage.getItem("profileBio");

    if (savedUserProfileImage) setUserProfileImage(savedUserProfileImage);
    if (savedProfileUserName || savedProfileBio) {
      setProfile({
        profileUserName: savedProfileUserName || "",
        profileBio: savedProfileBio || "",
      });
    }
  }, []);

  const handleChangeUserProfile = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const based64 = reader.result;
        setUserProfileImage(based64);
        localStorage.setItem("userProfileImage", based64);

        window.dispatchEvent(new Event("userProfileImageChanged"));
      };
      reader.readAsDataURL(file);
    }
  };

  const selectImage = () => {
    imageEl.current.click();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => {
      const updated = { ...prev, [name]: value };

      localStorage.setItem("profileUserName", updated.profileUserName);
      localStorage.setItem("profileBio", updated.profileBio);

      return updated;
    });
  };

  const handleLogOut = () => {
    const { username } = JSON.parse(localStorage.getItem("user"));
    const confirmed = window.confirm(
      `Are you sure you want to LOGOUT ${username}!?`,
    );

    if (!confirmed) return;

    localStorage.clear();
    navigate("/");
  };

  return (
    <section className="mx-auto flex h-dvh w-full flex-col xl:max-w-[800px] xl:translate-x-30 2xl:max-w-[1100px]">
      <header className="relative h-fit">
        <div
          className="bg-fit h-[150px] w-full bg-contain"
          style={{ backgroundImage: `url(${useImages.dashboardBg})` }}
        ></div>
        <img
          src={useImages.arrow}
          alt="arrowIcon"
          className="absolute top-5 left-8 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <img
          src={useImages.share}
          alt="shareIcon"
          className="absolute top-5 right-5 cursor-pointer"
          onClick={handleShare}
        />

        {userProfileImage ? (
          <img
            src={userProfileImage}
            alt="userIcon"
            className="bg-navy-dark absolute bottom-7 left-1/2 aspect-1/1 max-w-[85px] -translate-x-1/2 -translate-y-2 rounded-full object-cover p-2 drop-shadow-sm drop-shadow-black/25"
          />
        ) : (
          <img
            src={useImages.user2}
            alt="userIcon"
            className="bg-navy-dark absolute bottom-7 left-1/2 max-w-[65px] -translate-x-1/2 -translate-y-2 rounded-full p-2 drop-shadow-sm drop-shadow-black/25"
          />
        )}
        <input
          type="file"
          ref={imageEl}
          accept="image/*"
          className="hidden"
          onChange={handleChangeUserProfile}
        />

        <h2 className="text-blue mt-8 text-center text-2xl font-bold tracking-wider">
          {profile.profileUserName || "----"}
        </h2>
      </header>
      <main className="mt-4 flex h-full flex-col gap-3">
        {/* upper */}
        <article className="bg-navy-dark drop-shadowmd flex cursor-pointer items-center gap-4 px-6 py-2 drop-shadow-black/25">
          <img src={useImages.addPhoto} alt="addPhotoIcon" className="" />
          <p className="text-xl font-normal text-white" onClick={selectImage}>
            Set Profile Photo
          </p>
        </article>
        {/* top */}
        <div className="drop-shadowmd flex flex-col gap-[1px] drop-shadow-black/25">
          <article className="bg-navy-dark flex flex-col gap-0 px-6 py-1">
            <input
              type="text"
              className="text-lightBlue border-0 text-lg font-bold tracking-wide outline-0"
              name="profileUserName"
              value={profile.profileUserName}
              onChange={handleChange}
              placeholder="Set a username"
            />
            <span className="text-sm font-normal tracking-wide text-white/30">
              Username
            </span>
          </article>
          <article className="bg-navy-dark flex flex-col gap-0 px-6 py-1">
            <input
              name="profileBio"
              value={profile.profileBio}
              onChange={handleChange}
              className="text-lightBlue border-0 text-lg font-bold tracking-wide outline-0"
              placeholder="Bio"
            />
            <span className="text-sm font-normal tracking-wide text-white/30">
              Add a few words about yourself
            </span>
          </article>
        </div>
        {/* middle */}
        <div className="bg-navy-dark drop-shadowmd space-y-6 py-4 drop-shadow-black/25">
          <div className="flex cursor-pointer justify-between px-6">
            <article className="flex w-full items-center gap-4">
              <img src={useImages.info} alt="infoIcon" />
              <NavLink
                to="/aboutUs"
                className="flex w-full justify-between text-xl font-normal tracking-wide text-white"
              >
                About Us
                <img src={useImages.rightArrow} alt="rightArrowIcon" />
              </NavLink>
            </article>
          </div>
          <div className="flex cursor-pointer justify-between px-6">
            <article className="flex w-full items-center gap-3">
              <img src={useImages.email} alt="infoIcon" />
              <NavLink
                to="/contactUs"
                className="flex w-full justify-between text-xl font-normal tracking-wide text-white"
              >
                Contact Us
              </NavLink>
              <img src={useImages.rightArrow} alt="rightArrowIcon" />
            </article>
          </div>
        </div>
        <footer className="bg-navy-dark drop-shadowmd flex flex-1 flex-col justify-evenly drop-shadow-black/25">
          <div className="flex cursor-pointer items-center justify-between px-6">
            <article
              className="flex w-full items-center gap-4"
              onClick={handleShare}
            >
              <img src={useImages.share2} alt="infoIcon" />
              <p className="text-xl font-normal tracking-wide text-white">
                Share The App
              </p>
              <img
                src={useImages.rightArrow}
                alt="rightArrowIcon"
                className="ml-auto"
              />
            </article>
          </div>
          <div className="flex cursor-pointer items-center justify-between px-6">
            <article className="flex items-center gap-3">
              <img src={useImages.help} alt="infoIcon" />
              <p className="text-xl font-normal tracking-wide text-white">
                Help And Support
              </p>
            </article>
            <img src={useImages.rightArrow} alt="rightArrowIcon" />
          </div>
          <div className="flex cursor-pointer items-center justify-between px-6">
            <article
              className="flex w-full items-center gap-5"
              onClick={handleLogOut}
            >
              <img src={useImages.logout} alt="infoIcon" />
              <p className="text-xl font-normal tracking-wide text-white">
                Log Out
              </p>
              <img
                src={useImages.rightArrow}
                alt="rightArrowIcon"
                className="ml-auto"
              />
            </article>
          </div>
        </footer>
      </main>
    </section>
  );
};
