import { useReducer, useRef } from 'react';
import { MagicCard } from '@/components/ui/magic-card.tsx';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { BriefcaseIcon, HammerIcon, ShoppingCart } from 'lucide-react';
import { Particles } from '@/components/ui/particles.tsx';

export function Expertise() {
  const [expertises, dispatch] = useReducer(reducer, expertisesValues);

  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, {
    once: true,
    margin: '0px 0px -100px 0px',
  });

  return (
    <div className={'relative bg-black'}>
      <div className="top absolute left-0 right-0 h-[1px]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-100/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-zinc-100/20 to-transparent opacity-50" />
      </div>
      <div className={'flex flex-col items-center gap-32 py-32 font-bold'}>
        <h2 className={'text-2xl font-bold'} id={'our-expertise'}>
          OUR EXPERTISE
        </h2>
        <div className={'flex w-full items-center justify-center gap-24'}>
          {expertises.map((expertise, index) => {
            return (
              <div
                className={'aspect-video w-1/4'}
                onMouseEnter={() => dispatch({ type: ACTIONS.HOVER, index })}
                onMouseLeave={() => dispatch({ type: ACTIONS.LEAVE })}
              >
                <MagicCard className={'relative overflow-hidden'}>
                  <AnimatePresence>
                    {expertise.hovered && (
                      <motion.div
                        key={'hovered'}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className={
                          'absolute inset-0 z-50 flex h-full w-full items-center justify-center p-8 text-center italic'
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
                          'absolute inset-0 z-50 flex h-full w-full flex-col items-center justify-center gap-4'
                        }
                      >
                        {expertise.icon}
                        {expertise.title}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </MagicCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const ACTIONS = {
  HOVER: 'hover',
  LEAVE: 'leave',
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
    default:
      return state;
  }
}

const expertisesValues = [
  {
    title: 'E-COMMERCE',
    description: 'Creating seamless shopping experiences that drive sales.',
    icon: <ShoppingCart className={'h-8 w-8'} />,
    hovered: false,
  },
  {
    title: 'CORPORATE WEBSITE',
    description: "Professional designs that reflect your brand's identity.",
    icon: <BriefcaseIcon className={'h-8 w-8'} />,
    hovered: false,
  },
  {
    title: 'SaaS PLATFORM',
    description: 'Driving product value to capture your market.',
    icon: <HammerIcon className={'h-8 w-8'} />,
    hovered: false,
  },
];
