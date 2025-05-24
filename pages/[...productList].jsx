import ProductListTemplate from '@/components/templates/ProductListTemplate';
import { BeatLoader } from 'react-spinners';

export default function ProductsList({ products }) {
  return (
    <>
      <ProductListTemplate products={products} />

      <div className="loader">
        <BeatLoader size={10} margin={3} color="#a62626" />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const city = params.productList[0];
  const category = params.productList[1];

  try {
    const response = await fetch('https://next-diver-api.vercel.app/products');
    const json = await response.json();
    const sorted = json.sort((a, b) => {
      const A = new Date(a.date);
      const B = new Date(b.date);
      return B - A;
    });

    return {
      props: {
        products: sorted,
      },
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return {
      props: {
        products: [],
      },
    };
  }
}
