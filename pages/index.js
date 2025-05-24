import { useCityLocation } from '@/context/LocationProvider';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const [location, setLocation] = useCityLocation();
  const router = useRouter();

  useEffect(() => {
    if (location) {
      router.replace(`/${location}`);
    }
  }, [location, router]);

  return <></>;
}
