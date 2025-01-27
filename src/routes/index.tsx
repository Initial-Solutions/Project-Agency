import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '@/components/hero.tsx';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
    </>
  );
}
