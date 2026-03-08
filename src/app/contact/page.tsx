import type { Metadata } from 'next';
import ContactClient from '@/components/ContactClient';

export const metadata: Metadata = {
    title: 'Get in Touch | Nikitha Rao',
    description: 'Contact Nikitha Rao for brand management, creative direction, and cinematography opportunities.',
};

export default function ContactPage() {
    return <ContactClient />;
}
