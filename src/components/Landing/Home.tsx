"use client";

import ErrorBoundary from "@/components/ErrorBoundary";
import Navbar from "@/components/Landing/Navbar";
import Hero from "@/components/Landing/Hero";
import Features from "@/components/Landing/Features";
import DeviceIntegration from "@/components/Landing/Integrations";
import CallToAction from "@/components/Landing/cta";
import Footer from "@/components/Landing/Footer";

const LandingPage = () => {
  return (
    <ErrorBoundary>
      <Navbar />
      <Hero />
      <Features />
      <DeviceIntegration />
      <CallToAction />
      <Footer />
    </ErrorBoundary>
  );
};

export default LandingPage;
