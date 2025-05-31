import Layout from '@/components/layout/Lyaout';
import LocationPickerModal from '@/components/modules/LocationPickerModal';
import BookmarkProvider from '@/context/BookmarkProvider';
import LocationProvider from '@/context/LocationProvider';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <LocationProvider>
      <BookmarkProvider>
        <Layout>
          <Component {...pageProps} />
          <LocationPickerModal />
        </Layout>
      </BookmarkProvider>
    </LocationProvider>
  );
}
