import ProductListTemplate from '@/components/templates/ProductListTemplate';
import { BeatLoader } from 'react-spinners';

export default function ProductsList({ products }) {
  return (
    <>
      <ProductListTemplate products={products} />

      <div className="loader">
        <BeatLoader size={10} color="#a62626" />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const city = params.productList?.[0] || 'تهران';
  const category = params.productList?.[1] || null;

  try {
    const url = category
      ? `https://next-diver-api.vercel.app/products?location=${city}&category=${category}`
      : `https://next-diver-api.vercel.app/products?location=${city}`;

    const response = await fetch(url);
    const json = await response.json();
    const sorted = json.sort((a, b) => new Date(b.date) - new Date(a.date));
    return {
      props: {
        products: sorted,
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: {
        products: [],
      },
    };
  }
}
