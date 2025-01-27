export const Brands = () => {
  const logos = [
    { src: '/logos/safran.svg', alt: 'Safran' },
    { src: '/logos/stormshield.png', alt: 'Stormshield' },
    { src: '/logos/mercedes.svg', alt: 'Mercedes-Benz' },
    { src: '/logos/pearson.svg', alt: 'Pearson' },
  ];

  return (
    <div className="w-full py-8 md:py-12 relative overflow-hidden">
      {/* Ombres latérales */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />

      {/* Conteneur desktop */}
      <div className="hidden md:grid grid-cols-4 gap-8 lg:gap-12 max-w-[1400px] mx-auto px-8 lg:px-24">
        {logos.map((logo, index) => (
          <div key={`desktop-${index}`} className="flex justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto grayscale opacity-50 transition-all duration-200 hover:grayscale-0 hover:opacity-100"
            />
          </div>
        ))}
      </div>

      {/* Conteneur mobile avec défilement automatique */}
      <div className="md:hidden relative w-full overflow-x-hidden">
        <div className="animate-marquee flex w-[200%]">
          {[...logos, ...logos].map((logo, index) => (
            <div key={`mobile-${index}`} className="flex-shrink-0 px-8 w-1/4">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto grayscale opacity-50 transition-all duration-200 hover:grayscale-0 hover:opacity-100 mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
