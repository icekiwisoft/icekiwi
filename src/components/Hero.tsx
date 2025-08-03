const Hero = () => {
  return (
    <section className="pt-16 bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Contenu texte - À gauche sur desktop, au-dessus sur mobile */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Nous créons des{' '}
              <span className="text-blue-600">expériences numériques</span>{' '}
              mémorables
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Icekiwi transforme vos idées en solutions digitales innovantes. 
              De la conception à la réalisation, nous créons des applications 
              web et mobiles qui marquent les esprits et génèrent des résultats.
            </p>
            
            {/* Boutons CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#expertises"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Découvrir nos services
              </a>
              <a
                href="#realisations"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 transform hover:scale-105"
              >
                Voir nos réalisations
              </a>
            </div>
            
            {/* Statistiques optionnelles */}
            <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600 mt-1">Projets réalisés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600 mt-1">Années d'expérience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600 mt-1">Clients satisfaits</div>
              </div>
            </div>
          </div>
          
          {/* Image/Visuel - À droite sur desktop, au-dessus sur mobile */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Placeholder pour l'image principale - remplacer par l'image fournie */}
              <div className="w-full max-w-lg h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Image Hero</p>
                  <p className="text-sm opacity-75">À remplacer par votre visuel</p>
                </div>
              </div>
              
              {/* Éléments décoratifs */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-green-400 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;