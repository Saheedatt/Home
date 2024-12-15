"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

const Hero = () => {
  const renderHeading = () => (
    <h1
      id="hero-heading"
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FCA311]"
    >
      Transform Your Home with Smart Intelligence
    </h1>
  );

  const renderDescription = () => (
    <p
      className="text-base sm:text-lg md:text-xl lg:text-2xl text-platinum/90 max-w-xl"
      aria-describedby="hero-heading"
    >
      Seamlessly control, monitor, and optimize every aspect of your home with
      our cutting-edge smart dashboard. Experience the future of home automation
      at your fingertips.
    </p>
  );

  const renderCTA = () => (
    <div className="flex space-x-4">
      <Link
        href="/sign-up"
        className="bg-[#FCA311] text-black px-6 py-3 rounded-full 
        flex items-center space-x-2 hover:bg-[#FCA311]/90 
        transition-colors duration-300 font-semibold"
        aria-label="Sign up/log in to dashboard"
      >
        <span>Get Started</span>
        <ArrowRightIcon className="w-5 h-5" />
      </Link>
    </div>
  );

  const renderHeroImage = () => (
    <div className="hidden lg:block relative">
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#FCA311]/20 rounded-full blur-3xl"></div>
      <Image
        src="/home.jpg"
        alt="Smart Home Dashboard Interface"
        width={600}
        height={400}
        //priority
        className="relative z-10 rounded-xl shadow-2xl"
      />
    </div>
  );

  return (
    <section
      className="bg-[#14213D] text-white relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 z-10 relative">
          {renderHeading()}
          {renderDescription()}
          {renderCTA()}
        </div>
        {renderHeroImage()}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
