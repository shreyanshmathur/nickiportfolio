import { Metadata } from 'next';
import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import ClientStrip from "@/components/ClientStrip";

export const metadata: Metadata = {
  title: 'Nikitha Rao | Creative Project Manager & DOP',
  description: 'Portfolio of Nikitha Rao, a Visual Storyteller, Creative Project Manager, and DOP based in Mumbai. Specialized in luxury brands and cinematic productions.',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ClientStrip />
      <SelectedWorks />
    </div>
  );
}
