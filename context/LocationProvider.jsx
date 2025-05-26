import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

const LocationContext = createContext();

export default function LocationProvider({ children }) {
  const router = useRouter();
  const [location, setLocation] = useState('تهران');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // get city from storage or url
  useEffect(() => {
    if (!router.isReady) return;

    const queryCity = router.query.productList?.[0];
    const stored = localStorage.getItem('location');
    if (queryCity) {
      setLocation(queryCity);
    } else if (stored) {
      setLocation(stored);
    }
  }, [router.isReady]);

  // save in storage
  useEffect(() => {
    localStorage.setItem('location', location);
  }, [location]);

  return <LocationContext.Provider value={[location, setLocation, isModalOpen, setIsModalOpen]}>{children}</LocationContext.Provider>;
}

export function useCityLocation() {
  const context = useContext(LocationContext);
  if (!context) throw new Error('useCityLocation must be used inside a LocationProvider');
  return context;
}
