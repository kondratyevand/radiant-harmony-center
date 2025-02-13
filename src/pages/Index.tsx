
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Products />
      <HowItWorks />
      <Benefits />
    </main>
  );
};

export default Index;
