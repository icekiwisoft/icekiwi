interface Partner {
  id: number;
  name: string;
  logo: string; // URL de l'image du logo
}

const PartnersBanner = () => {
  // Données des partenaires - à remplacer par vos vrais logos
  const partners: Partner[] = [
    { id: 1, name: "Partner 1", logo: "/api/placeholder/120/60" },
    { id: 2, name: "Partner 2", logo: "/api/placeholder/120/60" },
    { id: 3, name: "Partner 3", logo: "/api/placeholder/120/60" },
    { id: 4, name: "Partner 4", logo: "/api/placeholder/120/60" },
    { id: 5, name: "Partner 5", logo: "/api/placeholder/120/60" },
    { id: 6, name: "Partner 6", logo: "/api/placeholder/120/60" },
    { id: 7, name: "Partner 7", logo: "/api/placeholder/120/60" },
    { id: 8, name: "Partner 8", logo: "/api/placeholder/120/60" }
  ];

  // Dupliquer les logos pour créer un effet de boucle infinie
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre de la section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des startups aux grandes entreprises, nos clients nous choisissent pour leur transformation digitale
          </p>
        </div>

        {/* Container du carrousel */}
        <div className="relative overflow-hidden">
          {/* Gradient de fade sur les côtés */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Carrousel animé */}
          <div className="flex animate-marquee hover:pause-animation">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center w-36"
              >
                <div className="w-32 h-16 flex items-center justify-center">
                  {/* Placeholder pour le logo - remplacer par les vraies images */}
                  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    <span className="text-gray-500 text-xs font-medium text-center px-2">
                      {partner.name} Logo
                    </span>
                  </div>
                  {/* Quand vous aurez les vraies images, remplacez le div ci-dessus par :
                  <img
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  />
                  */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicateur optionnel */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            Et bien d'autres qui nous font confiance...
          </p>
        </div>
      </div>
      

    </section>
  );
};

export default PartnersBanner;