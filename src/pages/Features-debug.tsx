import React from 'react';

const FeaturesDebug: React.FC = () => {
  console.log('Features page is loading...');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-20">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Features Page Debug</h1>
        <p>This is the Features page. If you can see this, the routing is working.</p>
        <div className="mt-8">
          <button 
            onClick={() => console.log('Button clicked!')}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Test Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesDebug;
