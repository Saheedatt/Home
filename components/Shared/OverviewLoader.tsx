"use client";
import Layout from "../Dashboard/Layout";

const Loader = () => {
  return (
    <Layout>
      <div className="p-6 space-y-6 animate-pulse">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="p-4 bg-gray-300 rounded-xl flex flex-col justify-between space-y-4"
              >
                <div className="flex justify-between items-start">
                  <div className="h-12 w-12 bg-gray-400 rounded-full" />
                  <div className="h-6 w-12 bg-gray-400 rounded-full" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-28 bg-gray-400 rounded" />
                  <div className="h-4 w-20 bg-gray-400 rounded" />
                </div>
              </div>
            ))}


            <div className="p-4 bg-gray-300 rounded-xl flex items-center justify-center border-dashed border-2 border-gray-400">
              <div className="h-6 w-32 bg-gray-400 rounded" />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="p-6 bg-gray-300 rounded-xl flex flex-col items-center justify-center space-y-3 h-full"
              >
                <div className="h-24 w-24 bg-gray-400 rounded-full" />
                <div className="h-6 w-28 bg-gray-400 rounded" />
                <div className="h-4 w-20 bg-gray-400 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Loader;
