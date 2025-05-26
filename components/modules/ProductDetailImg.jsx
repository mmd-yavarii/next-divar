import { useEffect, useState } from 'react';
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md';

import styles from '@/styles/ProductDetailTemplate.module.css';

import { LuImages } from 'react-icons/lu';

function ProductDetailImg({ image }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [imgSelected, setImgSelected] = useState(image[imgIndex]);
  useEffect(() => {
    setImgSelected(image[imgIndex]);
  }, [imgIndex]);

  return (
    <div className={styles.imageContainer}>
      <div className={styles.mainImage}>
        <div onClick={() => imgIndex > 0 && setImgIndex((prev) => prev - 1)}>
          <MdArrowForwardIos size="1.5rem" />
        </div>

        <img src={imgSelected} alt="" />

        <p className={styles.imageCounter}>
          {image.length} <LuImages />
        </p>

        <div onClick={() => imgIndex < image.length - 1 && setImgIndex((prev) => prev + 1)}>
          <MdArrowBackIosNew size="1.5rem" />
        </div>
      </div>

      <div className={styles.otherImagesContainer}>
        {image.slice().map((i, index) => (
          <div key={i} className={`${imgSelected == i && styles.selected} ${styles.moreIamges}`} onClick={() => setImgIndex(index)}>
            <img src={i} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetailImg;
