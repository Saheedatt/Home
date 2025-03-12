"use client";

import { useState } from "react";
import { useDeviceStore } from "../../Store/store";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddDeviceModal = ({ isOpen, onClose }: ModalProps) => {
  const addDevice = useDeviceStore((state) => state.addDevice);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [errors, setErrors] = useState<{ name?: string; type?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; type?: string } = {};
    if (!name.trim()) newErrors.name = "Device name is required.";
    if (!type.trim()) newErrors.type = "Device type is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      addDevice({ name, type });
      setName("");
      setType("");
      onClose();
    } catch (error) {
      console.error("Failed to add device:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2"
      role="dialog"
      aria-labelledby="modal-title"
      aria-hidden={!isOpen}
    >
      <div className="bg-white text-black p-6 rounded-lg w-96 space-y-4 border border-gray-300 shadow-md">
        <h2 id="modal-title" className="text-lg font-bold">
          Add New Device
        </h2>
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label
              htmlFor="device-name"
              className="block text-sm font-medium mb-2"
            >
              Device Name
            </label>
            <input
              id="device-name"
              type="text"
              placeholder="Enter device name"
              className={`w-full border rounded p-2 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="device-type"
              className="block text-sm font-medium mt-4 mb-2"
            >
              Device Type
            </label>
            <select
              id="device-type"
              className={`w-full border rounded p-2 mb-4 ${
                errors.type ? "border-red-500" : "border-gray-300"
              }`}
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Select Device Type</option>
              <option value="wifi">WiFi</option>
              <option value="lock">Lock</option>
              <option value="thermostat">Thermostat</option>
              <option value="humidifier">Humidifier</option>
              <option value="lamp">Lamp</option>
              <option value="other">Other</option>
            </select>
            {errors.type && (
              <p className="text-red-500 text-sm mt-1">{errors.type}</p>
            )}
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-center rounded hover:bg-gray-400 "
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-4 py-2 rounded text-white  ${
                isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {isSubmitting ? "Adding..." : "Add Device"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDeviceModal;
