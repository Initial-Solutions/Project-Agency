// Base styles for media player and provider (~400B).
import '@vidstack/react/player/styles/base.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import {
  React,
  Nodejs,
  TanStack,
  Prisma,
  Tailwindcss,
  Vidstack,
} from '@/icons';
import { useState } from 'react';
import BorderFade from './border-fade';
import { useMediaQuery } from '@/hooks/useMediaQuery';

type TechStack = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

type Project = {
  id: number;
  theme: string;
  title: string;
  description: string;
  price: number;
  showPrice: boolean;
  mirror: boolean;
  textAlign: 'left' | 'center' | 'right';
  stack: TechStack[];
  videoUrl: string;
};

interface ContentSectionProps {
  project: Project;
}

interface VideoSectionProps {
  project: Project;
}

const ContentSection: React.FC<ContentSectionProps> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`flex flex-col space-y-6 ${
        project.textAlign === 'center'
          ? 'items-center text-center'
          : project.textAlign === 'right'
            ? 'items-end text-right'
            : 'items-start text-left'
      }`}
    >
      <small className="text-xs font-semibold uppercase tracking-wide text-blue-400">
        {project.theme}
      </small>

      <h2 className="text-4xl font-bold text-white">{project.title}</h2>

      <p className="max-w-2xl text-lg leading-relaxed text-gray-400">
        {project.description}
      </p>

      <div
        className={`flex space-x-4 ${
          project.textAlign === 'center'
            ? 'justify-center'
            : project.textAlign === 'right'
              ? 'justify-end'
              : 'justify-start'
        }`}
      >
        {project.showPrice && (
          <button className="flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700">
            Get Access - ${project.price} USD
          </button>
        )}
        <button className="rounded-lg border border-zinc-600 px-6 py-3 font-medium text-zinc-100 transition-colors hover:border-zinc-400">
          Live Preview
        </button>
      </div>

      <div
        className={
          project.textAlign === 'center'
            ? 'flex w-full flex-col items-center'
            : ''
        }
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-300 ${
            project.textAlign === 'center'
              ? 'justify-center'
              : project.textAlign === 'right'
                ? 'ml-auto'
                : ''
          }`}
        >
          <span>Stack for nerds</span>
          <span
            className={`text-xs transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          >
            ↓
          </span>
        </button>

        <div
          className={`h-12 pt-2 ${
            isOpen ? 'visible opacity-100' : 'invisible opacity-0'
          } transition-all duration-300`}
        >
          <div className="overflow-hidden">
            <div
              className={`flex space-x-4 ${
                project.textAlign === 'center'
                  ? 'justify-center'
                  : project.textAlign === 'right'
                    ? 'justify-end'
                    : 'justify-start'
              }`}
            >
              {project.stack.map((tech, i) => (
                <div key={i} className="text-zinc-400 hover:text-white">
                  <tech.icon className="h-8 w-8 object-contain grayscale transition-all duration-200 hover:grayscale-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoSection: React.FC<VideoSectionProps> = ({ project }) => (
  <div className="group relative">
    <MediaPlayer
      className="aspect-video w-full transform overflow-hidden rounded-lg shadow-2xl transition-transform group-hover:scale-[1.02]"
      title={project.title}
      src={project.videoUrl}
      controls={false}
      autoPlay
      muted
      crossOrigin
      playsInline
      loop
    >
      <MediaProvider />
    </MediaPlayer>
  </div>
);

const CaseStudy = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const projects: Project[] = [
    {
      id: 1,
      theme: 'Video platform',
      title: 'KAMEGROUND',
      description:
        'A dedicated video platform for gamers to share their best gaming moments, funny clips, epic plays, and memorable times with friends. Perfect for those who regularly capture their gaming highlights but need a specialized platform to share them with their community.',
      price: 49,
      showPrice: false,
      mirror: false,
      textAlign: 'left',
      stack: [
        { name: 'React', icon: React },
        { name: 'Node.js', icon: Nodejs },
        { name: 'TanStack', icon: TanStack },
        { name: 'Prisma', icon: Prisma },
      ],
      videoUrl: 'youtube/pyc22Zk1GT4',
    },
    {
      id: 2,
      theme: 'UI Library',
      title: 'KAMEPLAYER',
      description:
        'A highly optimized React video player library with extensive customization options. Built for developers who need a powerful, feature-rich video player with pre-built themes and components. Perfect for creating custom video experiences with minimal effort.',
      price: 29,
      showPrice: false,
      mirror: isDesktop ? true : false,
      textAlign: isDesktop ? 'right' : 'left',
      stack: [
        { name: 'React', icon: React },
        { name: 'Tailwindcss', icon: Tailwindcss },
        { name: 'Vidstack', icon: Vidstack },
      ],
      videoUrl: 'youtube/bpi2escGj2Q',
    },
  ];

  return (
    <div className="relative h-full w-full bg-black px-6 pb-10 pt-32 md:px-12 xl:px-36">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`mb-20 grid gap-12 md:grid-cols-2 ${
            project.mirror
              ? 'md:[grid-template-columns:1.2fr_0.8fr]'
              : 'md:[grid-template-columns:0.8fr_1.2fr]'
          }`}
        >
          {project.mirror ? (
            <>
              <VideoSection project={project} />
              <ContentSection project={project} />
            </>
          ) : (
            <>
              <ContentSection project={project} />
              <VideoSection project={project} />
            </>
          )}
        </div>
      ))}
      <BorderFade />
    </div>
  );
};

export default CaseStudy;
