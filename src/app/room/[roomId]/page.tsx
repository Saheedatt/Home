// interface RoomPageProps {
//     params: { roomId: string }; // Access the dynamic part of the URL
// }

// export default function RoomPage({ params }: RoomPageProps) {
//     const { roomId } = params; // Extract "roomId" from the route

//     return (
//         <div>
//             <h1>Welcome to the {roomId.replace("-", " ")}!</h1>
//             <p>Here you can view all details about the {roomId.replace("-", " ")}.</p>
//         </div>
//     );
// }



//after you do tte room data thing, then thus
// import { roomsData } from "@/data/roomsData";

// interface RoomPageProps {
//     params: { roomId: string };
// }

// export default function RoomPage({ params }: RoomPageProps) {
//     const { roomId } = params;
//     const room = roomsData[roomId];

//     if (!room) {
//         return <h1>Room not found</h1>; // Handle invalid room IDs
//     }

//     return (
//         <div>
//             <h1>{room.name}</h1>
//             <p>{room.description}</p>
//             <h2>Devices in this room:</h2>
//             <ul>
//                 {room.devices.map((device, index) => (
//                     <li key={index}>{device}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// this code snippet is temporary