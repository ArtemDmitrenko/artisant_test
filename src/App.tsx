import React, { ReactElement } from 'react';

import ProductsPage from './pages/ProductsPage/ProductsPage';

import './style/style.scss';

function App(): ReactElement {
  return (
    <div className="App">
      <ProductsPage title="Explore" subtitle="Buy and sell digital fashion NFT art" />
    </div>
  );
}

export default App;
