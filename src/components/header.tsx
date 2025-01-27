import { RainbowButton } from './ui/rainbow-button';

export function Header() {
  return (
    <nav className="relative z-50 flex w-full items-center justify-between bg-black/30 px-6 py-4 backdrop-blur-md">
      <div className="absolute bottom-0 left-0 right-0 h-[1px]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-100/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-zinc-100/20 to-transparent opacity-50" />
      </div>
      <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-xl font-bold text-transparent">
        Initial Solutions
      </span>
      {/*<button className="inline-flex h-10 w-48 animate-shimmer items-center justify-center rounded-xl border border-blue-900/30 bg-[linear-gradient(110deg,#000103,45%,#3b82f6,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black hover:border-blue-700/50">
        Let's talk !
      </button> */}
      <div className="flex gap-8 text-sm text-gray-400">
        <a href="#" className="transition-colors hover:text-white">
          Our vision
        </a>
        <a href="#our-expertise" className="transition-colors hover:text-white">
          Our expertise
        </a>
        <a href="#" className="transition-colors hover:text-white">
          Case study
        </a>
      </div>

      <RainbowButton className="h-8 bg-[linear-gradient(#ffffff,#ffffff),linear-gradient(#ffffff_50%,rgba(255,255,255,0.6)_80%,rgba(255,255,255,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] px-6 text-sm text-black">
        Let's talk!
      </RainbowButton>
    </nav>
  );
}
