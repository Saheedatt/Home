"use client"
import Navigation from "@/components/Landing/Navbar";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function Home() {
  return (
    <ErrorBoundary>
      <div>
        <Navigation />
        <main id="main-content" className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">This is Foyer</h1>
          <p className="text-lg">It is a safe space</p>
        </main>
      </div>
    </ErrorBoundary>
  );
}
