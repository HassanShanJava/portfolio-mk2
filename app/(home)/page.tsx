import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="dark:bg-black  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">

      <div className="max-w-7xl mx-auto p-5">
        <Navbar />
        <Hero/>
      </div>
      </div>
    </div>
  );
}
