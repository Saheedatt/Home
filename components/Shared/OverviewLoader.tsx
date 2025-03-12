"use client"
import Layout from '../Dashboard/Layout';

const Loader = () => {
  return (
    <Layout>
      <div className="p-6 space-y-6 animate-pulse">
        <div className="flex space-x-4 overflow-x-auto">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-10 w-24 bg-gray-300 rounded-lg flex-shrink-0" />
          ))}
          <div className="h-10 w-24 bg-gray-300 rounded-lg ml-auto flex-shrink-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 bg-gray-300 rounded-lg p-6">
            <div className="flex justify-between mb-4">
              <div className="space-y-2">
                <div className="h-6 w-32 bg-gray-400 rounded" /> 
                <div className="h-4 w-24 bg-gray-400 rounded" />
              </div>
              <div className="h-6 w-16 bg-gray-400 rounded" /> 
            </div>
            
            <div className="flex space-x-6">
              <div className="flex items-center space-x-4">
                <div className="h-32 w-16 bg-gray-400 rounded-full" /> 
                <div className="h-32 w-40 bg-gray-400 rounded-lg" />
              </div>
              <div className="flex space-x-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-12 w-16 bg-gray-400 rounded-lg" /> 
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-300 rounded-lg p-6">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-8 bg-gray-400 rounded flex items-center justify-between">
                  <div className="h-4 w-16 bg-gray-500 rounded ml-2" />
                  <div className="h-6 w-12 bg-gray-500 rounded-full mr-2" />
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="h-4 w-24 bg-gray-400 rounded" />
                <div className="h-6 w-12 bg-gray-400 rounded-full" />
              </div>
              <div className="flex space-x-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-8 w-20 bg-gray-400 rounded-lg" />
                ))}
              </div>
              <div className="h-48 w-full bg-gray-400 rounded-full" /> 
            </div>
          </div>

    
          <div className="bg-gray-300 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="h-6 w-24 bg-gray-400 rounded" />
              <div className="h-8 w-32 bg-gray-400 rounded" />
            </div>
            <div className="aspect-video bg-gray-400 rounded-lg" />
          </div>


          <div className="bg-gray-300 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="h-6 w-40 bg-gray-400 rounded" />
              <div className="h-8 w-24 bg-gray-400 rounded" />
            </div>
            <div className="h-48 flex items-end space-x-2">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="flex-1">
                  <div className="bg-gray-400 rounded-t-lg h-32" style={{ height: `${Math.random() * 100}%` }} />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="h-4 w-8 bg-gray-400 rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Loader;