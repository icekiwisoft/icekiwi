const CallToAction = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-600 via-purple-700 to-blue-800 relative overflow-hidden">
      {/* Effets de fond décoratifs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/50 to-purple-600/50"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full opacity-5 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white rounded-full opacity-5"></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-white rounded-full opacity-10"></div>
        
        {/* Formes géométriques */}
        <div className="absolute top-20 right-20 w-40 h-40 border-2 border-white opacity-10 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 border-2 border-white opacity-5 rotate-12"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Badge ou étiquette */}
        <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
          <span className="text-white text-sm font-medium">💡 Prêt à démarrer ?</span>
        </div>

        {/* Titre principal */}
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Vous avez un projet{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
            en tête ?
          </span>
        </h2>

        {/* Sous-titre */}
        <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Discutons-en ensemble. Nous sommes prêts à transformer votre idée 
          en une solution numérique performante qui dépasse vos attentes.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#contact"
            className="group bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25 min-w-[200px]"
          >
            <span className="flex items-center justify-center">
              Prendre contact
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>

          <a
            href="tel:+33123456789"
            className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 min-w-[200px]"
          >
            <span className="flex items-center justify-center">
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Appeler maintenant
            </span>
          </a>
        </div>

        {/* Informations de contact rapide */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-white font-medium">contact@icekiwi.fr</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p className="text-white font-medium">+33 1 23 45 67 89</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-white font-medium">Réponse sous 24h</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;