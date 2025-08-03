interface PortfolioProject {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  projectUrl?: string;
}

const Portfolio = () => {
  const projects: PortfolioProject[] = [
    {
      id: 1,
      category: "APPLICATION MOBILE",
      title: "FitTracker Pro",
      description: "Application mobile de fitness complète avec suivi des entraînements, nutrition et objectifs personnalisés. Interface intuitive et gamification pour motiver les utilisateurs dans leur parcours de remise en forme.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
      projectUrl: "#"
    },
    {
      id: 2,
      category: "SITE WEB E-COMMERCE",
      title: "Boutique Artisanale",
      description: "Plateforme e-commerce moderne pour artisans locaux avec système de paiement intégré, gestion des stocks et interface d'administration complète. Design responsive et optimisé pour les conversions.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Stripe", "Prisma", "Tailwind CSS"],
      projectUrl: "#"
    },
    {
      id: 3,
      category: "APPLICATION WEB",
      title: "Dashboard Analytics",
      description: "Tableau de bord analytique temps réel pour entreprises avec visualisation de données avancée, rapports personnalisables et alertes automatiques. Interface moderne et performante.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      projectUrl: "#"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre de la section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nos dernières{' '}
            <span className="text-blue-600">réalisations</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez quelques-uns de nos projets récents qui illustrent notre savoir-faire 
            et notre capacité à transformer vos idées en solutions digitales performantes.
          </p>
        </div>

        {/* Liste des projets */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  !isEven ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                
                {/* Image du projet */}
                <div className={`${!isEven ? 'lg:col-start-2' : ''} order-1 lg:order-none`}>
                  <div className="relative group">
                    {/* Placeholder pour l'image - remplacer par les vraies images */}
                    <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl shadow-2xl overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center text-white">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="text-lg font-medium">{project.title}</p>
                          <p className="text-sm opacity-75">Image du projet</p>
                        </div>
                      </div>
                      {/* Quand vous aurez les vraies images, remplacez le div ci-dessus par :
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      */}
                    </div>
                    
                    {/* Overlay au hover */}
                    <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <a
                          href={project.projectUrl}
                          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 inline-flex items-center"
                        >
                          Voir le projet
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contenu texte du projet */}
                <div className={`${!isEven ? 'lg:col-start-1' : ''} order-2 lg:order-none`}>
                  <div className="space-y-6">
                    
                    {/* Catégorie */}
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                        {project.category}
                      </span>
                    </div>

                    {/* Titre */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                        Technologies utilisées
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bouton CTA */}
                    <div className="pt-4">
                      <a
                        href={project.projectUrl}
                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        Voir le projet complet
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section CTA finale */}
        <div className="text-center mt-20 bg-white rounded-2xl p-12 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Votre projet sera le prochain ?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Nous serions ravis de discuter de votre vision et de vous aider à la concrétiser. 
            Contactez-nous pour un échange sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Démarrer mon projet
            </a>
            <a
              href="#realisations"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-200"
            >
              Voir tous nos projets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;