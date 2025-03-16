import { create } from "zustand";

type Device = {
  id: string;
  type: string;
  name: string;
  state: string;
};

type Store = {
  addedDevices: Device[];
  addDevice: (device: Omit<Device, "id" | "state">) => void;
};

export const useDeviceStore = create<Store>((set) => ({
  addedDevices: [],

  addDevice: (device) =>
    set((state) => ({
      addedDevices: [
        ...state.addedDevices,
        { ...device, id: crypto.randomUUID(), state: "off" },
      ],
    })),
}));
