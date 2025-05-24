import styles from '@/styles/Card.module.css';
import Link from 'next/link';

function Card({ title, image, id, price, date }) {
  // calculating past time to present
  function timeSince() {
    const now = new Date();
    const timestamp = new Date(date).getTime();

    const diffInSeconds = Math.floor((now - timestamp) / 1000);

    const isOverOneYear = diffInSeconds > 31622400;
    const isOverOneMonth = diffInSeconds > 2629746;
    const isOverOneWeek = diffInSeconds > 604800;
    const isOverOneDay = diffInSeconds > 86400;
    const isOverOneHour = diffInSeconds > 3600;

    let result = 'دقایقی پیش';

    if (isOverOneYear) {
      result = 'بیش از یک سال پیش';
    } else if (isOverOneMonth) {
      result = 'بیش از یک ماه پیش';
    } else if (isOverOneWeek) {
      result = 'بیش از یک هفته پیش';
    } else if (isOverOneDay) {
      result = 'بیش از یک روز پیش';
    } else if (isOverOneHour) {
      result = 'بیش از یک ساعت پیش';
    }

    return result;
  }

  return (
    <Link href={`/products/${id}`} className={styles.container}>
      <div className={styles.image}>
        <img src={image} alt="" />
      </div>

      <div className={styles.info}>
        <h4>{title}</h4>
        <div>
          <p>{price} تومان</p>
          <p>{timeSince()}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
