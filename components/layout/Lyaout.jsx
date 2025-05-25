import { useCityLocation } from '@/context/LocationProvider';
import MobileLayout from './mobile/MobileLayout';
import DesktopLayout from './desktop/DesktopLayout';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();
  const [location, setLocation, , setSsModalOpen] = useCityLocation();

  function changeProvince() {
    console.log(true);
    setSsModalOpen(true);
  }

  return (
    <>
      <MobileLayout location={location} children={children} changeProvince={changeProvince} />
      <DesktopLayout location={location} children={children} changeProvince={changeProvince} />
    </>
  );
}
