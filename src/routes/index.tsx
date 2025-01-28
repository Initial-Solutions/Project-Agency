import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '@/components/hero.tsx';
import { Expertise } from '@/components/expertise.tsx';
import { Contact } from '@/components/contact.tsx';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Expertise />
      <Contact />
    </>
  );
}
