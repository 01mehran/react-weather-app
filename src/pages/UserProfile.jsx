import { useImages } from "@images/useImages";

export const UserProfile = () => {
  return (
    <section className="bg-navy flex h-dvh w-full flex-col">
      <header className="relative h-fit">
        <div
          className="bg-fit h-[150px] w-full bg-contain"
          style={{ backgroundImage: `url(${useImages.dashboardBg})` }}
        ></div>
        <img
          src={useImages.arrow}
          alt="arrowIcon"
          className="absolute top-5 left-8 cursor-pointer"
        />
        <img
          src={useImages.share}
          alt="shareIcon"
          className="absolute top-5 right-5 cursor-pointer"
        />
        <img
          src={useImages.user2}
          alt="userIcon"
          className="bg-navy-dark absolute bottom-7 left-1/2 max-w-[65px] -translate-x-1/2 -translate-y-2 rounded-full p-2 drop-shadow-sm drop-shadow-black/25"
        />
        <h2 className="text-blue mt-8 text-center text-2xl font-bold tracking-wider">
          Patrick Bacalso
        </h2>
      </header>
      <main className="mt-4 flex h-full flex-col gap-3">
        {/* upper */}
        <article className="bg-navy-dark drop-shadowmd flex cursor-pointer items-center gap-4 px-6 py-2 drop-shadow-black/25">
          <img src={useImages.addPhoto} alt="addPhotoIcon" className="" />
          <p className="text-xl font-normal text-white">Set Profile Photo</p>
        </article>
        {/* top */}
        <div className="drop-shadowmd flex flex-col gap-[1px] drop-shadow-black/25">
          <article className="bg-navy-dark flex flex-col gap-0 px-6 py-1">
            <p className="text-lightBlue text-lg font-bold tracking-wide">
              @patrick.bacalso
            </p>
            <span className="text-sm font-normal tracking-wide text-white/30">
              {" "}
              Username
            </span>
          </article>
          <article className="bg-navy-dark flex flex-col gap-0 px-6 py-1">
            <p className="text-lightBlue text-lg font-bold tracking-wide">
              Bio
            </p>
            <span className="text-sm font-normal tracking-wide text-white/30">
              Add a few words about yourself
            </span>
          </article>
        </div>
        {/* middle */}
        <div className="bg-navy-dark drop-shadowmd space-y-6 py-4 drop-shadow-black/25">
          <div className="flex cursor-pointer justify-between px-6">
            <article className="flex items-center gap-4">
              <img src={useImages.info} alt="infoIcon" />
              <p className="text-xl font-normal tracking-wide text-white">
                About Us
              </p>
            </article>
            <img src={useImages.rightArrow} alt="rightArrowIcon" />
          </div>
          <div className="flex cursor-pointer justify-between px-6">
            <article className="flex items-center gap-3">
              <img src={useImages.email} alt="infoIcon" />
              <p className="text-xl font-normal tracking-wide text-white">
                Contact Us
              </p>
            </article>
            <img src={useImages.rightArrow} alt="rightArrowIcon" />
          </div>
        </div>
        <footer className="bg-navy-dark drop-shadowmd flex flex-1 flex-col justify-evenly drop-shadow-black/25">
          <div className="flex cursor-pointer items-center justify-between px-6">
            <article className="flex items-center gap-4">
              <img src={useImages.share2} alt="infoIcon" />
              <p className="text-xl font-normal tracking-wide text-white">
                Share The App
              </p>
            </article>
            <img src={useImages.rightArrow} alt="rightArrowIcon" />
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
            <article className="flex items-center gap-5">
              <img src={useImages.logout} alt="infoIcon" />
              <p className="text-xl font-normal tracking-wide text-white">
                Log Out
              </p>
            </article>
            <img src={useImages.rightArrow} alt="rightArrowIcon" />
          </div>
        </footer>
      </main>
    </section>
  );
};
