import React from 'react';

const TestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-20">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Test Page</h1>
        <p>This is a test page to check if routing is working.</p>
      </div>
    </div>
  );
};

export default TestPage;
