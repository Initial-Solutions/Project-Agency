// Base styles for media player and provider (~400B).
import '@vidstack/react/player/styles/base.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { React, Nodejs, TanStack, Prisma } from '@/icons';
import { useState } from 'react';

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

const CaseStudy = () => {
  const [openStacks, setOpenStacks] = useState<{ [key: number]: boolean }>({});

  const toggleStack = (projectId: number): void => {
    setOpenStacks((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

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
      mirror: true,
      textAlign: 'right',
      stack: [
        { name: 'React', icon: React },
        { name: 'TanStack', icon: TanStack },
      ],
      videoUrl: 'youtube/bpi2escGj2Q',
    },
  ];

  const ContentSection: React.FC<ContentSectionProps> = ({ project }) => (
    <div
      className={`flex flex-col space-y-6 ${
        project.textAlign === 'center'
          ? 'items-center text-center'
          : project.textAlign === 'right'
            ? 'items-end text-right'
            : 'items-start text-left'
      }`}
    >
      <small className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
        {project.theme}
      </small>

      <h2 className="text-4xl font-bold text-white">{project.title}</h2>

      <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
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
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
            Get Access - ${project.price} USD
          </button>
        )}
        <button className="border border-zinc-600 hover:border-zinc-400 text-zinc-100 px-6 py-3 rounded-lg font-medium transition-colors">
          Live Preview
        </button>
      </div>

      <div
        className={
          project.textAlign === 'center'
            ? 'flex flex-col items-center w-full'
            : ''
        }
      >
        <button
          onClick={() => toggleStack(project.id)}
          className={`text-sm font-medium text-zinc-400 hover:text-zinc-300 transition-colors flex items-center gap-2 ${
            project.textAlign === 'center'
              ? 'justify-center'
              : project.textAlign === 'right'
                ? 'ml-auto'
                : ''
          }`}
        >
          <span>Stack for nerds</span>
          <span
            className={`text-xs transition-transform duration-300 ${
              openStacks[project.id] ? 'rotate-180' : ''
            }`}
          >
            ↓
          </span>
        </button>

        <div
          className={`grid transition-all duration-300 ease-out ${
            openStacks[project.id]
              ? 'grid-rows-[1fr] opacity-100 mt-3'
              : 'grid-rows-[0fr] opacity-0'
          }`}
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
                  <tech.icon className="h-8 w-8 object-contain transition-all duration-200 grayscale hover:grayscale-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const VideoSection: React.FC<VideoSectionProps> = ({ project }) => (
    <div className="relative group">
      <MediaPlayer
        className="rounded-lg aspect-video w-full overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform"
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

  return (
    <div className="px-6 md:px-36 pt-32">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`grid md:grid-cols-2 gap-12 mb-20 ${
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
    </div>
  );
};

export default CaseStudy;
