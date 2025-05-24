import { useCityLocation } from '@/context/LocationProvider';
import MobileLayout from './mobile/MobileLayout';
import DesktopLayout from './desktop/DesktopLayout';

export default function Layout({ children }) {
  const [location, setLocation] = useCityLocation();

  return (
    <>
      <MobileLayout location={location} children={children} />
      <DesktopLayout location={location} children={children} />
    </>
  );
}
