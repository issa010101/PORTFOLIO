// Location.tsx
import React, { useEffect, useState } from 'react';

const Location: React.FC = () => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {location ? (
        <p>Location: {location.latitude}, {location.longitude}</p>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
};

export default Location;
