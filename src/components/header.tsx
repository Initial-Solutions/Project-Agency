import { RainbowButton } from './ui/rainbow-button';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button.tsx';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTarget = (target: string, document: Document) => {
    const targetElement = document.querySelector(`#${target}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToTop = (document: Document) => {
    const targetElement = document.querySelector('html');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 z-[999] flex w-full items-center justify-between bg-black/30 px-6 py-4 backdrop-blur-md md:px-36">
      <div className="absolute bottom-0 left-0 right-0 h-[1px]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-100/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-zinc-100/20 to-transparent opacity-50" />
      </div>

      <span
        onClick={() => scrollToTop(document)}
        className="cursor-pointer bg-gradient-to-r from-white to-gray-300 bg-clip-text text-xl font-bold text-transparent"
      >
        InitialSolutions
      </span>
      <div className="flex gap-4 lg:hidden">
        <RainbowButton
          onClick={() => scrollToTarget('contact', document)}
          className="h-8 w-full bg-[linear-gradient(#ffffff,#ffffff),linear-gradient(#ffffff_50%,rgba(255,255,255,0.6)_80%,rgba(255,255,255,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] text-sm text-black"
        >
          Let's talk!
        </RainbowButton>
        {/* Menu burger pour mobile */}
        <button
          className="text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation desktop */}
      <div className="hidden gap-2 text-sm text-gray-400 lg:flex">
        {/*<Button
          variant={'ghost'}
          onClick={() => scrollToTarget('our-vision', document)}
          className="transition-colors hover:text-white"
        >
          Our vision
        </Button>*/}
        <Button
          variant={'ghost'}
          onClick={() => scrollToTarget('our-expertise', document)}
          className="transition-colors hover:text-white"
        >
          Our expertise
        </Button>
        <Button
          variant={'ghost'}
          onClick={() => scrollToTarget('case-study', document)}
          className="transition-colors hover:text-white"
        >
          Case study
        </Button>
      </div>

      {/* Navigation mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ scale: 0, borderRadius: '100%', opacity: 0 }}
            animate={{ scale: 1, borderRadius: '0%', opacity: 1 }}
            exit={{ scale: 0, borderRadius: '100%', opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute right-0 top-full z-[999999] w-full origin-top-right rounded-bl-2xl px-4 lg:hidden"
          >
            <div className="relative flex flex-col items-start gap-6 rounded-b-md bg-black/80 p-6 text-sm text-gray-400 backdrop-blur-md">
              <div className="absolute bottom-0 left-0 right-0 h-[1px]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-100/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-zinc-100/20 to-transparent opacity-50" />
              </div>
              {/*<motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                href="#"
                className="transition-colors hover:text-white"
              >
                Our vision
              </motion.a>*/}
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                onClick={() => scrollToTarget('our-expertise', document)}
                className="cursor-pointer transition-colors hover:text-white"
              >
                Our expertise
              </motion.a>
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => scrollToTarget('case-study', document)}
                className="cursor-pointer transition-colors hover:text-white"
              >
                Case study
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <RainbowButton
        onClick={() => scrollToTarget('contact', document)}
        className="hidden h-8 bg-[linear-gradient(#ffffff,#ffffff),linear-gradient(#ffffff_50%,rgba(255,255,255,0.6)_80%,rgba(255,255,255,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] px-6 text-sm text-black lg:inline-flex"
      >
        Let's talk!
      </RainbowButton>
    </nav>
  );
}
