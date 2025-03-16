"use client";

import { Device } from "./mockData";

const RoomDevices = ({ devices }: { devices: Device[] }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {devices.map((device) => (
        <div
          key={device.id}
          className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
        >
          <h3 className="text-sm font-medium text-black dark:text-white">
            {device.name}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {device.type}
          </p>
          {device.controls && device.controls.brightness !== undefined && (
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Brightness: {device.controls.brightness}%
            </p>
          )}
          {device.controls && device.controls.temperature !== undefined && (
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Temperature: {device.controls.temperature}°C
            </p>
          )}
          <button
            className={`mt-2 px-4 py-2 text-sm font-medium rounded ${
              device.status
                ? "bg-green-500 text-white"
                : "bg-gray-400 text-black"
            }`}
          >
            {device.status ? "On" : "Off"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RoomDevices;
