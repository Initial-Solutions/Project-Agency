import { Spotlight } from '@/components/ui/spotlight-new.tsx';
import { GridPattern } from '@/components/ui/grid-pattern.tsx';
import { cn } from '@/lib/utils.ts';
import { TypeAnimation } from 'react-type-animation';
import { RainbowButton } from '@/components/ui/rainbow-button.tsx';
import { Brands } from '@/components/ui/brands';

export function Hero() {
  const scrollToTarget = (target: string, document: Document) => {
    const targetElement = document.querySelector(`#${target}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="relative flex h-dvh flex-col overflow-hidden bg-black pb-8">
      <Spotlight />
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          'opacity-20 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]'
        )}
      />
      <div className="relative z-50 flex min-h-96 flex-1 items-center justify-center py-8 md:min-h-[800px]">
        <div className="w-full space-y-4 px-4 text-center md:space-y-6">
          <div className="flex flex-col space-y-4 md:space-y-6">
            <div className="w-full px-4 text-left md:max-w-full md:px-0 md:text-center">
              <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">
                <span className="inline bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Your <em className="font-sans not-italic md:italic">own</em>{' '}
                </span>
                <TypeAnimation
                  sequence={['idea', 2000, 'website', 4000]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="inline bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                />
              </h1>
            </div>
            <div className="w-full md:mx-auto md:max-w-[1000px]">
              <p className="px-4 text-left text-base font-light text-gray-400 md:px-8 md:text-center md:text-lg lg:px-36 lg:text-xl">
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
              <RainbowButton
                onClick={() => scrollToTarget('contact', document)}
                className="md:text-md h-12 w-48 bg-[linear-gradient(#ffffff,#ffffff),linear-gradient(#ffffff_50%,rgba(255,255,255,0.6)_80%,rgba(255,255,255,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] text-sm text-black"
              >
                Let's talk!
              </RainbowButton>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-50 bg-zinc-950">
        <div className="absolute left-0 right-0 top-0 h-[1px]">
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
