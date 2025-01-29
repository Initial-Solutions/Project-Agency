import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '@/components/hero.tsx';
import CaseStudy from '@/components/case-study';
import { Expertise } from '@/components/expertise.tsx';
import { Contact } from '@/components/contact.tsx';
import { Footer } from '@/components/footer.tsx';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <CaseStudy />
      <Expertise />
      <Contact />
      <Footer />
    </>
  );
}
