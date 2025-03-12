"use client";

import Image from "next/image";

interface Integration {
  name: string;
  logo: string;
}

const integrations: Integration[] = [
  { name: "Nest", logo: "/nest.png" },
  { name: "Philips Hue", logo: "/philipshue.png" },
  { name: "Amazon Alexa", logo: "/alexa.png" },
  { name: "Ring", logo: "/ringlogo.png" },
  { name: "Sonos", logo: "/sonoslogo.png" },
];

const DeviceIntegration = () => {
  const renderHeading = () => (
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FCA311] mb-6">
      Seamless Device Integration
    </h2>
  );

  const renderDescription = () => (
    <p
      className="text-base sm:text-lg md:text-xl text-platinum/80 max-w-2xl mx-auto mb-12"
      aria-describedby="integration-heading"
    >
      Our platform supports a wide range of smart home devices, ensuring
      compatibility and smooth operation.
    </p>
  );

  const renderDevices = () => (
    <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 mt-8">
      {integrations.map((device, index) => (
        <div
          key={index}
          className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
        >
          <Image
            src={device.logo}
            alt={`${device.name} Logo`}
            width={120}
            height={60}
            className="max-h-12 w-auto"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section
      className="bg-[#14213D] text-white py-16 lg:py-24"
      aria-labelledby="integration-text"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="space-y-4">
          {renderHeading()}
          {renderDescription()}
        </div>
        {renderDevices()}
      </div>
    </section>
  );
};

export default DeviceIntegration;
