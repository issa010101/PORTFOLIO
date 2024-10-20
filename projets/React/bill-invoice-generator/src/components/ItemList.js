import React, { useState } from 'react';

const ItemList = ({ onItemsChange }) => {
  const [items, setItems] = useState([{ name: '', quantity: 1, price: 0 }]);

  // Add a new item
  const addItem = () => {
    setItems([...items, { name: '', quantity: 1, price: 0 }]);
  };

  // Update item data based on index
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
    onItemsChange(updatedItems);
  };

  return (
    <div>
      <h2>Item List</h2>
      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Item name"
            value={item.name}
            onChange={(e) => handleItemChange(index, 'name', e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            min="1"
            value={item.quantity}
            onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            min="0"
            value={item.price}
            onChange={(e) => handleItemChange(index, 'price', e.target.value)}
          />
        </div>
      ))}
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default ItemList;
