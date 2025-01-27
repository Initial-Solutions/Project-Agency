import { RainbowButton } from './ui/rainbow-button';

export function Header() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/30 relative z-50">
      <div className="absolute bottom-0 left-0 right-0 h-[1px]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-100/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-zinc-100/20 to-transparent opacity-50" />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
        Initial Solutions
      </span>
      {/*<button className="inline-flex h-10 w-48 animate-shimmer items-center justify-center rounded-xl border border-blue-900/30 bg-[linear-gradient(110deg,#000103,45%,#3b82f6,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black hover:border-blue-700/50">
        Let's talk !
      </button> */}
      <div className="flex gap-8 text-sm text-gray-400">
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

      <RainbowButton className="h-8 px-6 text-sm bg-[linear-gradient(#ffffff,#ffffff),linear-gradient(#ffffff_50%,rgba(255,255,255,0.6)_80%,rgba(255,255,255,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] text-black">
        Let's talk!
      </RainbowButton>
    </nav>
  );
}
