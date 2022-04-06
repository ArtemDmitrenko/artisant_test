import React, { ReactElement } from 'react';
import Checkbox from '../../components/Checkbox/Checkbox';
import ProductCard, { ProductCardProps } from '../../components/ProductCard/ProductCard';

import type { Product } from '../../types/Product';

import styles from './catalog.module.scss';

type CatalogProps = {
  title: string,
  subTitle: string,
  products: Array<Product>
};

function Catalog(props: CatalogProps): ReactElement {
  const {
    title = 'Explore',
    subTitle = 'Buy and sell digital fashion NFT art',
    products,
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.subTitle}>
        {subTitle}
      </div>
      <div className={styles.filter}>
        <Checkbox title="В наличии" name="availible" onChange={(data) => console.log(data)} />
      </div>
      <div className={styles.cardsContainer}>
        {products.map((product) => (
          <div className={styles.card} key={product.product_id}>
            <ProductCard
              author={product.created_by.display_name}
              productName={product.name}
              available={product.quantity_available}
              totalAmount={product.quantity_nfts_created}
              price={product.initial_price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
