import React from "react";

type DeviceCardProps = {
  name: string;
  state: string;
  icon: React.ReactNode;
  onToggle?: () => void;
};

const DeviceCard: React.FC<DeviceCardProps> = ({ name, state, icon, onToggle }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col justify-between space-y-4 h-40">
      <div className="flex justify-between items-start">
        <div className="p-3 bg-[#1A1F36] rounded-full">{icon}</div>
        <button
          onClick={onToggle}
          className={`w-10 h-6 bg-[#1A1F36] flex items-center rounded-full p-1 transition-colors ${
            state === "on" ? "bg-blue-500" : "bg-gray-300"
          }`}
        >
          <span
            className={`block w-4 h-4 bg-white rounded-full transform transition-transform ${
              state === "on" ? "translate-x-4" : ""
            }`}
          />
        </button>
      </div>

      <div className="flex-grow"></div>


      <div>
        <h3 className="text-lg font-medium text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">Active for 3 hours</p>
      </div>
    </div>
  );
};

export default DeviceCard;

