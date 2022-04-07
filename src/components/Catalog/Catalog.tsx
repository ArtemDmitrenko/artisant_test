/* eslint-disable camelcase */
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
      {products.map((product) => {
        const {
          product_id,
          created_by: { display_name },
          name,
          quantity_available,
          quantity_nfts_created,
          initial_price,
        } = product;
        return (
          <div className={styles.card} key={product_id}>
            <ProductCard
              author={display_name}
              productName={name}
              available={quantity_available}
              totalAmount={quantity_nfts_created}
              price={initial_price}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Catalog;
