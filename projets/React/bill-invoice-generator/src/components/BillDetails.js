import React, { useState } from 'react';

const BillDetails = ({ onDetailsChange }) => {
  const [details, setDetails] = useState({
    customerName: '',
    billNumber: '',
    date: '',
  });

  // Handle change in bill details
  const handleChange = (field, value) => {
    const updatedDetails = { ...details, [field]: value };
    setDetails(updatedDetails);
    onDetailsChange(updatedDetails);
  };

  return (
    <div>
      <h2>Bill Details</h2>
      <input
        type="text"
        placeholder="Customer Name"
        value={details.customerName}
        onChange={(e) => handleChange('customerName', e.target.value)}
      />
      <input
        type="text"
        placeholder="Bill Number"
        value={details.billNumber}
        onChange={(e) => handleChange('billNumber', e.target.value)}
      />
      <input
        type="date"
        value={details.date}
        onChange={(e) => handleChange('date', e.target.value)}
      />
    </div>
  );
};

export default BillDetails;
