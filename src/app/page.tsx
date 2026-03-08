import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <SelectedWorks />
    </div>
  );
}
