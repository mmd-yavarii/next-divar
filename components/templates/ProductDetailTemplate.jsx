import styles from '@/styles/ProductDetailTemplate.module.css';

import ProductDetailImg from '../modules/ProductDetailImg';
import { timeSince } from '@/helper/helper';

import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { LuShare2 } from 'react-icons/lu';

import { useRouter } from 'next/router';

function ProductDetailTemplate({ image, title, date, price, description }) {
  const router = useRouter();

  // share page handler
  function sharePage(title, text, url) {
    if (navigator.share) {
      navigator
        .share({
          title: title,
          text: text,
          url: url,
        })
        .then(() => console.log('صفحه با موفقیت به اشتراک گذاشته شد'))
        .catch((error) => console.error('خطا در اشتراک‌گذاری:', error));
    } else {
      alert('مرورگر شما از اشتراک‌گذاری پشتیبانی نمی‌کند.');
    }
  }

  // bookmark product handler
  function bookmarkHandler() {}

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div>
          <h1 className={styles.title}>{title}</h1>
          <p>{timeSince(date)}</p>
        </div>

        <div className={styles.controllers}>
          <button>اطلاعات تماس</button>
          <div>
            <button>{false ? <FaBookmark /> : <FaRegBookmark />}</button>
            <button onClick={sharePage}>
              <LuShare2 />
            </button>
          </div>
        </div>

        <div className={styles.price}>
          <p>قیمت</p>
          <p>{price} تومان</p>
        </div>

        <div>
          <p>توضیحات</p>
          <p>{description}</p>
        </div>
      </div>

      <ProductDetailImg image={image} />
    </div>
  );
}

export default ProductDetailTemplate;
