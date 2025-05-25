import Layout from '@/components/layout/Lyaout';
import LocationPickerModal from '@/components/modules/LocationPickerModal';
import LocationProvider from '@/context/LocationProvider';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <LocationProvider>
      <Layout>
        <Component {...pageProps} />
        <LocationPickerModal />
      </Layout>
    </LocationProvider>
  );
}
