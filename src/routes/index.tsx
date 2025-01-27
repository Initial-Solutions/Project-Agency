import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '@/components/hero.tsx';
import CaseStudy from '@/components/case-study';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      <CaseStudy />
    </>
  );
}
