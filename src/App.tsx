import React, { ReactElement, useEffect, useState } from 'react';
import axios from 'axios';

import type { ProductsAPI, Product } from './types/Product';

import Catalog from './pages/catalog/Catalog';

import './style/style.scss';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

function App(): ReactElement {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  async function fetchProducts() {
    try {
      const response = await axios.get<ProductsAPI>('https://artisant.io/api/products');
      setProducts(response.data.data.products);
      setIsLoaded(true);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      {isLoaded ? (
        <Catalog title="Explore" subTitle="Buy and sell digital fashion NFT art" products={products} />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export default App;
