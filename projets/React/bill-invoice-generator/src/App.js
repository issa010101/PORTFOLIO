import React, { useState } from 'react';
import BillDetails from './components/BillDetails';
import ItemList from './components/ItemList';
import TotalAmount from './components/TotalAmount';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [billDetails, setBillDetails] = useState({});

  return (
    <div className="container">
      <h1>Bill/Invoice Generator</h1>

      {/* Bill Details Section */}
      <div className="card">
        <BillDetails onDetailsChange={setBillDetails} />
      </div>

      {/* Item List Section */}
      <div className="card">
        <ItemList items={items} onItemsChange={setItems} />
      </div>

      {/* Total Amount Section */}
      <div className="card">
        <TotalAmount items={items} />
      </div>

      {/* Generate Invoice Button */}
      <button onClick={() => alert('Invoice Generated!')}>
        Generate Invoice
      </button>

      {/* Signature Section */}
      <footer className="signature">
        Created by issa.
      </footer>
    </div>
  );
}

export default App;
