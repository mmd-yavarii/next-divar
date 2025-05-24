import { categories } from '@/helper/helper';
import Card from '../modules/Card';

import styles from '@/styles/ProductListTemplate.module.css';

function ProductListTemplate({ products }) {
  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        {categories.map((i) => {
          const Icon = i.icon;
          return (
            <button key={i.id} className={styles.category}>
              <Icon size="1.5rem" opacity="0.5" />
              {i.name}
            </button>
          );
        })}
      </div>

      <div className={styles.cardContainer}>
        {products.map((i) => (
          <Card {...i} key={i.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductListTemplate;
