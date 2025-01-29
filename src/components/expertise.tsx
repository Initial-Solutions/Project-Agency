import { useReducer, useRef } from 'react';
import { MagicCard } from '@/components/ui/magic-card.tsx';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
  BriefcaseIcon,
  ChevronRight,
  HammerIcon,
  ShoppingCart,
} from 'lucide-react';
import { Particles } from '@/components/ui/particles.tsx';
import { useIsMobileDevice } from '@/hooks/useIsMobileDevice.ts';
import BorderFade from './border-fade';

export function Expertise() {
  const [expertises, dispatch] = useReducer(reducer, expertisesValues);

  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, {
    once: true,
    margin: '0px 0px -100px 0px',
  });

  const isMobile = useIsMobileDevice();

  const handleMobileClick = (index: number) => {
    if (isMobile) {
      dispatch({ type: ACTIONS.CLICK, index });

      setTimeout(() => {
        dispatch({ type: ACTIONS.LEAVE });
      }, 5000);
    }
  };

  return (
    <section className={'relative bg-zinc-950 px-8'}>
      <div
        className={
          'flex flex-col items-center gap-24 py-24 font-bold md:gap-32 md:py-32'
        }
      >
        <h2 className={'text-2xl font-bold'} id={'our-expertise'}>
          OUR EXPERTISE
        </h2>
        <div
          className={
            'flex w-full flex-col gap-8 px-6 md:flex-row md:items-center md:justify-around md:px-0'
          }
        >
          {expertises.map((expertise, index) => {
            return (
              <div
                key={index}
                className={'aspect-video grow md:aspect-square lg:aspect-video'}
                onMouseEnter={() => dispatch({ type: ACTIONS.HOVER, index })}
                onMouseLeave={() => dispatch({ type: ACTIONS.LEAVE })}
                onClick={() => handleMobileClick(index)}
              >
                <MagicCard
                  className={'relative cursor-default overflow-hidden'}
                >
                  <AnimatePresence>
                    {expertise.hovered && (
                      <motion.div
                        key={'hovered'}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className={
                          'absolute inset-0 z-50 flex h-full w-full items-center justify-center p-8 text-center text-sm italic md:text-base'
                        }
                      >
                        {expertise.description}
                        <Particles
                          className="absolute inset-0 z-0 opacity-50"
                          quantity={100}
                          ease={80}
                          color={'#ffffff'}
                          refresh
                        />
                      </motion.div>
                    )}
                    {!expertise.hovered && (
                      <motion.div
                        key={'nonHovered'}
                        ref={inViewRef}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className={
                          'absolute inset-0 z-50 flex h-full w-full flex-col items-center justify-center gap-4 text-sm md:text-base'
                        }
                      >
                        {expertise.icon}
                        <span className={'flex items-center gap-1'}>
                          {expertise.title}
                          <ChevronRight className={'h-4 w-4'} />
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </MagicCard>
              </div>
            );
          })}
        </div>
      </div>
      <BorderFade />
    </section>
  );
}

const ACTIONS = {
  HOVER: 'hover',
  LEAVE: 'leave',
  CLICK: 'click',
};

function reducer(
  state: typeof expertisesValues,
  action: { type: string; index?: number }
) {
  switch (action.type) {
    case ACTIONS.HOVER:
      return state.map((expertise, index) => {
        if (index === action.index) {
          return { ...expertise, hovered: true };
        } else {
          return { ...expertise, hovered: false };
        }
      });

    case ACTIONS.LEAVE:
      return state.map((expertise) => {
        return { ...expertise, hovered: false };
      });

    case ACTIONS.CLICK:
      return state.map((expertise, index) => {
        if (index === action.index) {
          return { ...expertise, hovered: !expertise.hovered };
        } else {
          return { ...expertise, hovered: false };
        }
      });

    default:
      return state;
  }
}

const expertisesValues = [
  {
    title: 'E-COMMERCE',
    description: 'Creating seamless shopping experiences that drive sales.',
    icon: <ShoppingCart className={'h-6 w-6 md:h-8 md:w-8'} />,
    hovered: false,
  },
  {
    title: 'CORPORATE WEBSITE',
    description: "Professional designs that reflect your brand's identity.",
    icon: <BriefcaseIcon className={'h-6 w-6 md:h-8 md:w-8'} />,
    hovered: false,
  },
  {
    title: 'MVP DEVELOPMENT',
    description: 'Driving product value to capture your market.',
    icon: <HammerIcon className={'h-6 w-6 md:h-8 md:w-8'} />,
    hovered: false,
  },
];
