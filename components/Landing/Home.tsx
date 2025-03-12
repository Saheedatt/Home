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
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <Features />
        <DeviceIntegration />
        <CallToAction />
      </main>
      <Footer />
    </ErrorBoundary>
  );
};

export default LandingPage;
