"use client";

import { useState, useEffect } from "react";
import Loader from "../Shared/OverviewLoader";
import Layout from "./Layout";
import { getCentralControl } from "../../api/data";
import DeviceCard from "../UI/DeviceCard";
import {
  Wifi,
  Lock,
  Thermometer,
  Droplets,
  LampDesk,
  Monitor,
} from "lucide-react";
import AddDeviceModal from "../UI/AddDeviceModal";
import { useDeviceStore } from "../../Store/store";

type Device = {
  id: string;
  type: string;
  name: string;
  state: string;
  brightness?: number;
  humidityLevel?: number;
};

type CentralControl = {
  devices: Device[];
};

const Dashboard = () => {
  const [centralControl, setCentralControl] = useState<CentralControl | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [temperature, setTemperature] = useState(25);
  const [humidity, setHumidity] = useState(50);
  const [advice, setAdvice] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const addedDevices = useDeviceStore((state) => state.addedDevices);

  const generateTemperature = (currentTemp: number) => {
    const update = Math.random() > 0.5 ? 1 : -1;
    return Math.min(
      40,
      Math.max(10, currentTemp + update * (Math.random() * 2))
    );
  };

  const generateHumidity = (currentHumidity: number) => {
    const update = Math.random() > 0.5 ? 1 : -1;
    return Math.min(
      80,
      Math.max(20, currentHumidity + update * (Math.random() * 5))
    );
  };

  const getAdvice = (temp: number) => {
    if (temp < 15) return "It's very cold. Wear warm clothes!";
    if (temp > 30) return "It's hot outside. Stay hydrated!";
    return "It's a cool day today.";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCentralControl();
        setCentralControl(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature((prevTemp) => {
        const newTemp = generateTemperature(prevTemp);
        setAdvice(getAdvice(newTemp));
        return newTemp;
      });

      setHumidity((prevHumidity) => generateHumidity(prevHumidity));
    }, 5000); // Remember to change this to update every 2 minutes or so

    return () => clearInterval(interval);
  }, []);

  if (loading) return <Loader />;

  const devices = [...(centralControl?.devices || []), ...addedDevices];

  const renderIcon = (type: string) => {
    switch (type) {
      case "wifi":
        return <Wifi />;
      case "lock":
        return <Lock />;
      case "thermostat":
        return <Thermometer />;
      case "humidifier":
        return <Droplets />;
      case "light":
        return <LampDesk />;
      default:
        return <Monitor />;
    }
  };

  const ValueCard = ({
    title,
    value,
    unit,
    message,
  }: {
    title: string;
    value: number;
    unit: string;
    message: string;
  }) => (
    <div className="bg-white shadow-md rounded-xl p-4 flex-1 flex flex-col space-y-2">
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>

      <div className="flex justify-center items-center my-4">
        <div className="w-32 h-32 bg-[#1A1F36] rounded-full flex items-center justify-center">
          <span className="text-white text-2xl font-bold">
            {value.toFixed(1)}
            {unit}
          </span>
        </div>
      </div>

      <p className="text-sm text-gray-500 text-center">{message}</p>
      <div className="text-gray-500 text-xs text-center">
        Active for 5 hours
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4">
          {devices.map((device) => (
            <DeviceCard
              key={device.id}
              name={device.name}
              state={device.state}
              icon={renderIcon(device.type)}
            />
          ))}

          <div
            className="flex items-center justify-center border-dashed border-2 border-gray-300 rounded-xl p-4 cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            <button className="text-gray-500 hover:text-gray-800 transition-colors">
              + Add Device
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <ValueCard
            title="Temperature"
            value={temperature}
            unit="°C"
            message={advice}
          />
          <ValueCard
            title="Humidity"
            value={humidity}
            unit="%"
            message={
              humidity < 30
                ? "Dry air. Consider using a humidifier."
                : humidity > 60
                ? "Humid air. Keep cool and stay comfortable."
                : "Comfortable air."
            }
          />
        </div>
      </div>

      <AddDeviceModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </Layout>
  );
};

export default Dashboard;
