import { createContext, useContext } from "react";

export const ShareAppContext = createContext();

export const ShareAppProvider = ({ children }) => {
  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareTitle = "Weather-App";
    const shareText = "You can see weather forecast online!";

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.error(err.message);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        alert("Coppied URL!");
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  return (
    <ShareAppContext.Provider value={{ handleShare }}>
      {children}
    </ShareAppContext.Provider>
  );
};

export const useShareApp = () => useContext(ShareAppContext);
