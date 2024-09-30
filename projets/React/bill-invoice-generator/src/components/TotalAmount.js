import React from 'react';

const TotalAmount = ({ items }) => {
  // Calculate total amount
  const total = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div>
      <h2>Total Amount</h2>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default TotalAmount;
