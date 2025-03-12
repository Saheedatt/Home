// "use client";

// const Navigation = ()=>{



//     const rooms = ["Living Room","Bedroom", "Kitchen", "Toilet"]
//     return (
//         <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
//             {rooms.map((room, index)=>(
//                 <button
//                 key={index}
//                 className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white text-black hover:bg-gray-300 dark:hover:bg-gray-600"
//               >
//                 {room}
//               </button>
//             ))}
//              <button className="px-4 py-2 text-sm font-medium rounded-lg bg-[#FCA311] text-black hover:bg-[#FCA311]/90">
//         + Add Room
//       </button>
//             </div>
//     )
// }

// export default Navigation;


"use client";

import React from "react";

import { Room } from "./mockData";


interface NavigationProps {
  rooms: Room[];
  selectedRoom: string;
  onRoomChange: (roomId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  rooms,
  selectedRoom,
  onRoomChange,
}) => {
  return (
    <div className="flex space-x-4 overflow-x-auto">
      {rooms.map((room) => (
        <button
          key={room.id}
          className={`px-4 py-2 rounded-lg ${
            room.id === selectedRoom
              ? "bg-[#FCA311] text-white"
              : "bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
          }`}
          onClick={() => onRoomChange(room.id)}
        >
          {room.name}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
