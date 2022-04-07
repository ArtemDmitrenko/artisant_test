import React, { ReactElement, useEffect, useState } from 'react';
import axios from 'axios';

import type { ProductsAPI, Product } from '../../types/Product';

import Catalog from '../../components/Catalog/Catalog';

import '../../style/style.scss';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

import styles from './productsPage.module.scss';
import Checkbox, { CheckboxData } from '../../components/Checkbox/Checkbox';

type ProductsPage = {
  title: string,
  subtitle: string,
};

function ProductsPage(props: ProductsPage): ReactElement {
  const {
    title = 'Explore',
    subtitle = 'Buy and sell digital fashion NFT art',
  } = props;

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  async function fetchProducts() {
    try {
      const response = await axios.get<ProductsAPI>('https://artisant.io/api/products');
      setProducts(response.data.data.products);
      setFilteredProducts(response.data.data.products);
      setIsLoaded(true);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const filterAvailable = (data: CheckboxData) => {
    console.log(data);

    const { isChecked } = data;
    const listOfProducts = [...products];
    if (isChecked) {
      const filteredArr = listOfProducts.filter((item) => item.quantity_available !== 0);
      setFilteredProducts(filteredArr);
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.subtitle}>
        {subtitle}
      </div>
      <div className={styles.filter}>
        <Checkbox title="В наличии" name="available" onChange={filterAvailable} />
      </div>
      <div className={styles.productPage}>
        {isLoaded ? (
          <Catalog products={filteredProducts} />
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
