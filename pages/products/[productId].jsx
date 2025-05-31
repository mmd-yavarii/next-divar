import ProductDetailTemplate from '@/components/templates/ProductDetailTemplate';
import { useRouter } from 'next/router';
import React from 'react';
import { BeatLoader } from 'react-spinners';

export default function ProductDetails(props) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div className={`loader`}>
        <BeatLoader size={10} color="#a62626" />
      </div>
    );
  }
  return <ProductDetailTemplate info={props.info} />;
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: '1' } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { productId } = params;

  try {
    const response = await fetch(`https://next-diver-api.vercel.app/products/${productId}`);
    const json = await response.json();
    return {
      props: { info: json },
      revalidate: 600,
    };
  } catch (error) {
    console.error(error);
  }
  return {
    props: { info: {} },
  };
}
