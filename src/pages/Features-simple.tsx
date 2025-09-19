import React from 'react';

const FeaturesSimple: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Features Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-4">Feature 1</h3>
            <p className="text-gray-300">This is a simple feature description.</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-4">Feature 2</h3>
            <p className="text-gray-300">This is another feature description.</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-4">Feature 3</h3>
            <p className="text-gray-300">This is a third feature description.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSimple;
