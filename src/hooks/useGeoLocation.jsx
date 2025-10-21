import { useState } from "react";

export const useGeoLocation = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState([27.192486, 56.293636]);

  const GetGeoLocation = () => {

    if (!navigator.geolocation) {
      setError("Your browser does't support geolocation");
    }

    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const newPos = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        
        setPosition([newPos.lat, newPos.lng]);
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      },
    );
  };

  return { GetGeoLocation, error, isLoading, position, setPosition };
};
