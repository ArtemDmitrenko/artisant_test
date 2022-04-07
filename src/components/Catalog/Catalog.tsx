import React, { ReactElement } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import type { Product } from '../../types/Product';

import styles from './catalog.module.scss';

type CatalogProps = {
  products: Array<Product>
};

function Catalog(props: CatalogProps): ReactElement {
  const {
    products,
  } = props;

  return (
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
  );
}

export default Catalog;
