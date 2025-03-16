"use client";

import Navigation from "./RoomNav";
import { Room, rooms } from "./mockData";
import RoomDevices from "./mockDevices";
import { useState } from "react";
import Layout from "../Layout";

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room>(rooms[0]);

  const handleRoomChange = (roomId: string) => {
    const room = rooms.find((r) => r.id === roomId);
    if (room) {
      setSelectedRoom(room);
    }
  };

  return (
    <Layout>
    <div className="flex flex-col p-4 space-y-6 bg-gray-100 dark:bg-[#1A1F36] h-full">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
      <Navigation
        rooms={rooms}
        selectedRoom={selectedRoom.id}
        onRoomChange={handleRoomChange}
      />

  <div>
      <RoomDevices devices={selectedRoom.devices} />
    </div>
    </div>

    <div className="space-y-6">
          {/* Example Widget: Wi-Fi & TV Controls */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold text-black dark:text-white mb-4">
              Room Controls
            </h3>
            <div className="flex flex-col gap-4">
              {/* Example Controls */}
              <button className="px-4 py-2 bg-[#FCA311] text-white rounded-lg">
                Toggle Wi-Fi
              </button>
              <button className="px-4 py-2 bg-[#FCA311] text-white rounded-lg">
                Toggle TV
              </button>
            </div>
          </div>

          {/* Example Widget: Color Control */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold text-black dark:text-white mb-4">
             Home area
            </h3>
            <div className="h-20 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-lg">Camera</div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Rooms;
