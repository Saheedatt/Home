"use client";

const RoomWidgets = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Camera Widget */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h3 className="text-sm font-medium text-black dark:text-white">
          Camera
        </h3>
        <div className="mt-2 h-32 bg-gray-300 dark:bg-gray-700"></div>
      </div>

      {/* Electricity Widget */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h3 className="text-sm font-medium text-black dark:text-white">
          Electricity Consumed
        </h3>
        <div className="mt-2 h-32 bg-gray-300 dark:bg-gray-700"></div>
      </div>

      {/* Color Control Widget */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h3 className="text-sm font-medium text-black dark:text-white">
          Color Control
        </h3>
        <div className="mt-2 h-32 bg-gray-300 dark:bg-gray-700"></div>
      </div>
    </div>
  );
};

export default RoomWidgets;
