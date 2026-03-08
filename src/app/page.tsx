import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import ClientStrip from "@/components/ClientStrip";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ClientStrip />
      <SelectedWorks />
    </div>
  );
}
