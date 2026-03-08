import type { Metadata } from 'next';
import AboutClient from '@/components/AboutClient';

export const metadata: Metadata = {
    title: 'About | Nikitha Rao',
    description: 'Learn more about Nikitha Rao, a Visual Storyteller and Creative Project Manager based in Mumbai.',
};

export default function AboutPage() {
    return <AboutClient />;
}
