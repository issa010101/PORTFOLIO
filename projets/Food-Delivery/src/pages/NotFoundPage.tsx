// src/pages/NotFoundPage.tsx
import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="text-blue-500 hover:underline">Go back to Home</a>
    </div>
  );
};

export default NotFoundPage;
