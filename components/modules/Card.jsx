import { timeSince } from '@/helper/helper';
import styles from '@/styles/Card.module.css';
import Link from 'next/link';

function Card({ title, image, id, price, date }) {
  return (
    <Link href={`/products/${id}`} className={styles.container}>
      <div className={styles.image}>
        <img src={image} alt="" />
      </div>

      <div className={styles.info}>
        <h4>{title}</h4>
        <div>
          <p>{price} تومان</p>
          <p>{timeSince(date)}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
