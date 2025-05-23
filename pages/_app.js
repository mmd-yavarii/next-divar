import Layout from '@/components/layout/Lyaout';
import LocationProvider from '@/context/LocationProvider';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <LocationProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LocationProvider>
  );
}
