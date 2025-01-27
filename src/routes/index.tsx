import { createFileRoute } from '@tanstack/react-router';
import { TypeAnimation } from 'react-type-animation';
import { Spotlight } from '@/components/ui/spotlight-new';
import { GridPattern } from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { LogoCloud } from '@/components/ui/logo-cloud';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="h-screen flex flex-col bg-black relative overflow-hidden">
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

      <div className="flex-1 flex items-center justify-center relative z-50">
        <div className="text-center px-4 space-y-6">
          <div className="flex flex-col space-y-6">
            <div className="w-[600px] md:w-[1200px] flex items-center justify-center">
              <span className="text-8xl md:text-9xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                  Your <em className="font-sans text-ellipsis italic">own</em>{' '}
                </span>
                <TypeAnimation
                  sequence={['idea need', 2000, 'website', 4000]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text"
                />
              </span>
            </div>
            <div className="w-[600px] md:w-[1000px] mx-auto">
              <p className="text-lg px-36 md:text-xl text-gray-400 font-light">
                We bring your{' '}
                <span className="font-semibold text-gray-400">vision</span> to
                life through{' '}
                <span className="font-semibold text-gray-400">
                  stunning digital experiences
                </span>
                , crafted with precision and purpose.
              </p>
            </div>
            <div className="flex justify-center">
              {/* <button className="inline-flex h-12 w-48 animate-shimmer items-center justify-center rounded-xl border border-blue-900/30 bg-[linear-gradient(110deg,#000103,45%,#3b82f6,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black hover:border-blue-700/50">
              Let's talk !
            </button> */}
              <RainbowButton className="h-12 w-48  text-md bg-[linear-gradient(#ffffff,#ffffff),linear-gradient(#ffffff_50%,rgba(255,255,255,0.6)_80%,rgba(255,255,255,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] text-black">
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
        <LogoCloud />
      </div>
    </div>
  );
}
