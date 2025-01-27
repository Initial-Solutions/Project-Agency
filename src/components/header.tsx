import { RainbowButton } from './ui/rainbow-button';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full px-6 md:px-36 py-4 flex justify-between items-center backdrop-blur-md bg-black/30 z-[999]">
      <div className="absolute bottom-0 left-0 right-0 h-[1px]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-100/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-zinc-100/20 to-transparent opacity-50" />
      </div>

      <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
        InitialSolutions
      </span>
      <div className="lg:hidden flex gap-4">
        <RainbowButton className="h-8 w-full text-sm bg-[linear-gradient(#ffffff,#ffffff),linear-gradient(#ffffff_50%,rgba(255,255,255,0.6)_80%,rgba(255,255,255,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] text-black">
          Let's talk!
        </RainbowButton>
        {/* Menu burger pour mobile */}
        <button
          className=" text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
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
      <div className="hidden lg:flex gap-8 text-sm text-gray-400">
        <a href="#" className="hover:text-white transition-colors">
          Our vision
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Our expertise
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Case study
        </a>
      </div>

      {/* Navigation mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ scale: 0, borderRadius: '100%', opacity: 0 }}
            animate={{ scale: 1, borderRadius: '0%', opacity: 1 }}
            exit={{ scale: 0, borderRadius: '100%', opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-full right-0 w-full px-4 lg:hidden origin-top-right z-[999999] rounded-bl-2xl"
          >
            <div className="flex flex-col bg-black/80 backdrop-blur-md rounded-b-md items-start p-6 gap-6 text-sm text-gray-400 relative">
              <div className="absolute bottom-0 left-0 right-0 h-[1px]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-100/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-zinc-100/20 to-transparent opacity-50" />
              </div>
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                href="#"
                className="hover:text-white transition-colors"
              >
                Our vision
              </motion.a>
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                href="#"
                className="hover:text-white transition-colors"
              >
                Our expertise
              </motion.a>
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                href="#"
                className="hover:text-white transition-colors"
              >
                Case study
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <RainbowButton className="hidden lg:inline-flex h-8 px-6 text-sm bg-[linear-gradient(#ffffff,#ffffff),linear-gradient(#ffffff_50%,rgba(255,255,255,0.6)_80%,rgba(255,255,255,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] text-black">
        Let's talk!
      </RainbowButton>
    </nav>
  );
}
