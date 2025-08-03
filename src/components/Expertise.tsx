interface ExpertiseCard {
  id: number;
  title: string;
  description: string;
  iconName: string; // Pour l'icône à fournir plus tard
}

const Expertise = () => {
  const expertiseItems: ExpertiseCard[] = [
    {
      id: 1,
      title: "Applications Mobiles",
      description: "Développement d'applications iOS et Android natives et cross-platform avec React Native et Flutter pour une expérience utilisateur optimale.",
      iconName: "mobile"
    },
    {
      id: 2,
      title: "Sites Web sur mesure",
      description: "Création de sites web modernes, rapides et responsive avec les dernières technologies comme React, Next.js et des CMS headless.",
      iconName: "web"
    },
    {
      id: 3,
      title: "E-commerce",
      description: "Solutions e-commerce complètes avec Shopify, WooCommerce ou développement custom pour maximiser vos ventes en ligne.",
      iconName: "ecommerce"
    },
    {
      id: 4,
      title: "Applications Web",
      description: "Développement d'applications web complexes, SaaS et plateformes métier avec des architectures scalables et sécurisées.",
      iconName: "webapp"
    },
    {
      id: 5,
      title: "UI/UX Design",
      description: "Conception d'interfaces utilisateur intuitives et d'expériences engageantes basées sur la recherche utilisateur et les meilleures pratiques.",
      iconName: "design"
    },
    {
      id: 6,
      title: "Consulting Digital",
      description: "Accompagnement stratégique dans votre transformation digitale, audit technique et recommandations pour optimiser vos performances.",
      iconName: "consulting"
    }
  ];

  // Icônes SVG par défaut (à remplacer par vos icônes)
  const getIconSVG = (iconName: string) => {
    const icons: { [key: string]: JSX.Element } = {
      mobile: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
        </svg>
      ),
      web: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      ecommerce: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
      ),
      webapp: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      design: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z" />
        </svg>
      ),
      consulting: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    };
    return icons[iconName] || icons.web;
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Effets de fond décoratifs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Titre de la section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Notre <span className="text-blue-400">Expertise</span>
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Nous maîtrisons les technologies les plus avancées pour créer des solutions 
            digitales innovantes qui propulsent votre business vers le succès.
          </p>
        </div>

        {/* Grille des expertises */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white border-opacity-20"

            >
              {/* Icône */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {getIconSVG(item.iconName)}
                </div>
              </div>

              {/* Contenu */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-blue-100 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Lien en savoir plus */}
              <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                <span className="text-sm font-medium mr-2">En savoir plus</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center mt-16">
          <p className="text-blue-100 mb-8 text-lg">
            Une question sur nos services ? Parlons de votre projet !
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Discuter de mon projet
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Expertise;