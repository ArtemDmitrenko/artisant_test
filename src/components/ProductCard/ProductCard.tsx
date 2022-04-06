import React, { ReactElement } from 'react';

import styles from './productCard.module.scss';

type ProductCardProps = {
  author: string,
  productName: string,
  available: number,
  totalAmount: number,
  price: number,
};

function ProductCard(props: ProductCardProps): ReactElement {
  const {
    author = 'Alexander Kurmanin',
    productName = 'Digital Addiction Number Seven',
    available = 1,
    totalAmount = 50,
    price = 0.07,
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <div className={styles.authorBlock}>
          <p className={styles.subtitleOnImage}>created by</p>
          <p className={styles.author}>{author}</p>
        </div>
        <div className={styles.nameBlock}>
          <p className={styles.productName}>{productName}</p>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.availableBlock}>
          <p className={styles.subtitleAvailable}>available</p>
          <p className={styles.available}>
            {available}
            {' '}
            of
            {' '}
            {totalAmount}
          </p>
        </div>
        <div className={styles.priceBlock}>
          <p className={styles.subtitlePrice}>price</p>
          <p className={styles.price}>
            {price}
            {' '}
            ETH
          </p>
        </div>
      </div>
    </div>
  );
}

export type { ProductCardProps };
export default ProductCard;
