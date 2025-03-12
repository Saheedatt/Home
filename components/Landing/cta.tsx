"use client";

import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

const CallToAction = () => {
  const renderHeading = () => (
    <div className="text-center mb-6">
      <h2
        id="cta-heading"
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-black/70"
      >
        Ready to Upgrade Your Home?
      </h2>
    </div>
  );

  const renderDescription = () => (
    <p
      className="text-sm sm:text-base md:text-lg lg:text-xl text-platinum/80 max-w-2xl mx-auto mb-8"
      id="cta-description"
    >
      Join hundreds of smart homeowners who have taken control of their living
      spaces. Secure your home today!
    </p>
  );

  const renderButtons = () => (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <Link
        href="/dashboard"
        className="bg-[#FCA311] text-black px-6 py-4 rounded-full flex items-center space-x-2 hover:bg-[#FCA311]/90 focus:outline-none focus:ring-2 focus:ring-[#FCA311] transition-colors duration-300 font-semibold text-sm md:text-base lg:text-lg"
        aria-label="Get started now"
      >
        <span>Start Now</span>
        <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6" />
      </Link>
      <Link
        href="/pricing"
        className="border border-gray-300 text-gray-800 px-6 py-4 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FCA311] transition-colors duration-300 font-semibold text-sm md:text-base lg:text-lg"
        aria-label="View pricing"
      >
        View Pricing
      </Link>
    </div>
  );
   
  return (
    <section
      className="bg-white py-12 sm:py-16 lg:py-24"
      aria-labelledby="cta-heading"
      aria-describedby="cta-description"
    >
      <div className="container mx-auto px-4 text-center">
        {renderHeading()}
        {renderDescription()}
        {renderButtons()}
      </div>
    </section>
  );
};

export default CallToAction;
