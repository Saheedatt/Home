export interface Device {
    id: string;
    name: string;
    type: string; // Type of the device (e.g., Light, AC, Thermostat)
    status: boolean; // Indicates whether the device is on or off
    controls?: {
      temperature?: number; // For devices like AC or Thermostat
      mode?: string; // Mode of the device (e.g., Cool, Heat, Auto)
      brightness?: number; // For lights or other adjustable devices
      color?: string; // For lights (e.g., Warm, Cool, Neon)
    };
  }
  
  export interface Room {
    id: string;
    name: string; // Name of the room (e.g., Living Room, Bedroom)
    devices: Device[]; // List of devices in the room
  }
  
  export const rooms: Room[] = [
    {
      id: "1",
      name: "Living Room",
      devices: [
        {
          id: "device-1",
          name: "Smart Light",
          type: "Light",
          status: true,
          controls: {
            brightness: 75,
            color: "warm",
          },
        },
        {
          id: "device-2",
          name: "Air Cooler",
          type: "AC",
          status: false,
          controls: {
            temperature: 22,
            mode: "Cool",
          },
        },
        {
          id: "device-3",
          name: "Smart TV",
          type: "TV",
          status: true,
        },
      ],
    },
    {
      id: "2",
      name: "Bedroom",
      devices: [
        {
          id: "device-4",
          name: "Thermostat",
          type: "Thermostat",
          status: true,
          controls: {
            temperature: 20,
          },
        },
        {
          id: "device-5",
          name: "Bedside Lamp",
          type: "Light",
          status: false,
          controls: {
            brightness: 50,
            color: "cool",
          },
        },
      ],
    },
    {
      id: "3",
      name: "Kitchen",
      devices: [
        {
          id: "device-6",
          name: "Smart Fridge",
          type: "Fridge",
          status: true,
        },
        {
          id: "device-7",
          name: "Coffee Maker",
          type: "Appliance",
          status: false,
        },
      ],
    },
  ];
  