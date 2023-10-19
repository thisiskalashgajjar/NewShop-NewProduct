import React, { useState } from 'react'; // Import useState

import './App.css';
import NewShopForm from './components/new-shop.component';
import NewProductForm from './components/new-product.component';

function App() {
  const [showShopForm, setShowShopForm] = useState(false);
  const [showProductForm, setShowProductForm] = useState(false);

  const showShop = () => {
    setShowShopForm(true);
    setShowProductForm(false);
  };

  const showProduct = () => {
    setShowShopForm(false);
    setShowProductForm(true);
  };

  return (
    <div className="App">
      <div className="container">
        <button onClick={showShop}>New Shop Form</button>
        <button onClick={showProduct}>New Product Form</button>
        {showShopForm && <NewShopForm />}
        {showProductForm && <NewProductForm />}
      </div>
    </div>
  );
}

export default App;
