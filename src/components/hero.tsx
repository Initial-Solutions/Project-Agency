import { Spotlight } from '@/components/ui/spotlight-new.tsx';
import { GridPattern } from '@/components/ui/grid-pattern.tsx';
import { cn } from '@/lib/utils.ts';
import { TypeAnimation } from 'react-type-animation';
import { RainbowButton } from '@/components/ui/rainbow-button.tsx';
import { Brands } from '@/components/ui/brands';

export function Hero() {
  return (
    <div className="min-h-screen flex flex-col bg-black relative overflow-hidden">
      <Spotlight />
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          '[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] opacity-20'
        )}
      />
      <div className="flex-1 min-h-96 md:min-h-[800px] flex items-center justify-center relative z-50 py-8">
        <div className="text-center px-4 space-y-4 md:space-y-6 w-full">
          <div className="flex flex-col space-y-4 md:space-y-6">
            <div className="w-full px-4 md:px-0 text-left md:text-center md:max-w-full">
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text inline">
                  Your <em className="font-sans not-italic md:italic">own</em>{' '}
                </span>
                <TypeAnimation
                  sequence={['idea need', 2000, 'website', 4000]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text inline"
                />
              </h1>
            </div>
            <div className="w-full md:max-w-[1000px] md:mx-auto">
              <p className="text-base md:text-lg lg:text-xl text-gray-400 font-light px-4 md:px-8 lg:px-36 text-left md:text-center">
                We bring your{' '}
                <span className="font-semibold text-gray-400">vision</span> to
                life through{' '}
                <span className="font-semibold text-gray-400">
                  stunning digital experiences
                </span>
                , crafted with precision and purpose.
              </p>
            </div>
            <div className="flex justify-center pt-4 md:pt-0">
              <RainbowButton className="h-12 w-48 text-sm md:text-md bg-[linear-gradient(#ffffff,#ffffff),linear-gradient(#ffffff_50%,rgba(255,255,255,0.6)_80%,rgba(255,255,255,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] text-black">
                Let's talk!
              </RainbowButton>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-50 bg-zinc-950">
        <div className="absolute top-0 left-0 right-0 h-[1px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-100/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-zinc-100/20 to-transparent opacity-50" />
        </div>
        <Brands />
        <div className="absolute bottom-0 left-0 right-0 h-[1px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-100/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-zinc-100/20 to-transparent opacity-50" />
        </div>
      </div>
    </div>
  );
}
