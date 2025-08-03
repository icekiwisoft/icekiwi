interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const Process = () => {
  const processSteps: ProcessStep[] = [
    {
      number: "01.",
      title: "Phase de découverte",
      description: "Nous analysons vos besoins, vos objectifs et votre marché pour définir ensemble la stratégie digitale la plus adaptée à votre projet."
    },
    {
      number: "02.",
      title: "Conception & Design",
      description: "Création de maquettes interactives et du design système. Nous concevons une expérience utilisateur intuitive et engageante."
    },
    {
      number: "03.",
      title: "Développement",
      description: "Développement avec les technologies les plus performantes. Code propre, sécurisé et optimisé pour les performances."
    },
    {
      number: "04.",
      title: "Test & Déploiement",
      description: "Tests rigoureux, optimisation et mise en ligne. Nous vous accompagnons jusqu'à la réussite de votre lancement."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre de la section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Une collaboration{' '}
            <span className="text-blue-600">simple et transparente</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Notre méthode éprouvée vous garantit un projet mené avec rigueur, 
            de la conception à la mise en ligne, en respectant vos délais et votre budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image - À gauche sur desktop, au-dessus sur mobile */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Placeholder pour l'image - remplacer par l'image fournie */}
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-xl font-semibold mb-2">Image Process</p>
                  <p className="text-sm opacity-75">À remplacer par votre visuel</p>
                </div>
              </div>
              
              {/* Éléments décoratifs */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-60 animate-pulse hidden lg:block"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-green-400 rounded-full opacity-50 hidden lg:block"></div>
              
              {/* Card flottante */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Projet livré</p>
                    <p className="text-xs text-gray-500">Dans les délais</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Étapes du processus - À droite sur desktop, en-dessous sur mobile */}
          <div className="order-1 lg:order-2 space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 group"
              >
                {/* Numéro de l'étape */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-200">
                    <span className="text-lg font-bold">{step.number}</span>
                  </div>
                </div>
                
                {/* Contenu de l'étape */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
            
            {/* CTA en bas des étapes */}
            <div className="pt-8">
              <a
                href="#contact"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Démarrer votre projet
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;