import React from 'react';

const BorderFade: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[1px]">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-100/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-zinc-100/20 to-transparent opacity-50" />
    </div>
  );
};

export default BorderFade;
