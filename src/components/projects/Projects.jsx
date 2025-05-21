import styles from './banner.module.css'

const Projects = () => {
  const projects = [
    {
      title: 'ShardSwap',
      description:
        'A decentralized peer-to-peer marketplace on Cardano for trading digital assets with AI-powered insights.',
      link: 'https://www.shard-swap.xyz/',
      tags: ['Cardano', 'Blockchain', 'AI']
    },
    {
      title: 'Castlevania.io',
      description:
        'A website dedicated to the Castlevania series. Similar to Transylvanian Tome, but a web version! Plans on making it a companion site to the iOS app.',
      tags: ['Web', 'Gaming']
    }
  ]

  // Tag color mapping
  const tagColors = {
    Cardano: 'bg-blue-100 text-blue-800',
    Blockchain: 'bg-purple-100 text-purple-800',
    AI: 'bg-green-100 text-green-800',
    Web: 'bg-amber-100 text-amber-800',
    Gaming: 'bg-red-100 text-red-800'
  }

  return (
    <section id="projects" className="p-8 mt-2">
      <div className="flex justify-center m-6">
        <h2 className="text-4xl mb-8 text-center text-custom-dark-blue border-b-4 border-custom-yellow">
          My Current Projects
        </h2>
      </div>
      <div className="flex justify-center mb-8 shadow-lg">
        <div
          className={`max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 ${
            projects.length === 2 ? 'lg:grid-cols-2' : '2xl:grid-cols-4'
          } gap-8`}
        >
          {projects.map((project, index) => (
            <div key={index} className={styles.cardContainer}>
              {/* Banner Section - ShardSwap */}
              {index === 0 && (
                <div className={styles.bannerContainer}>
                  <div className={styles.bannerContent}>
                    {/* Logo */}
                    <div className={styles.logoContainer}>
                      <div className={styles.logo}>
                        <svg
                          viewBox="0 0 24 24"
                          className="w-10 h-10 text-[#00ffff]"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                          <path d="M9.5 8.5l5 7M14.5 8.5l-5 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Title overlay */}
                    <div className="flex flex-col items-center justify-center text-center mt-4 z-10">
                      <h3 className="text-4xl font-bold mb-2 text-[#00ffff]">
                        {project.title}
                      </h3>
                      <p className="text-white text-sm max-w-xs opacity-80">
                        A decentralized peer-to-peer marketplace on Cardano
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Banner Section - Castlevania */}
              {index === 1 && (
                <div className={styles.castlevaniaBanner}>
                  {/* Border effects */}
                  <div className={styles.castlevaniaTopBorder}></div>
                  <div className={styles.castlevaniaBottomBorder}></div>

                  {/* Castle icon */}
                  <div className={styles.castleIconContainer}>
                    <svg
                      viewBox="0 0 24 24"
                      className="w-16 h-16 text-[#FF3333]"
                      fill="currentColor"
                    >
                      <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
                    </svg>
                  </div>

                  {/* Title overlay */}
                  <div className="flex flex-col items-center justify-center text-center mt-4">
                    <h3 className="text-4xl font-bold mb-2 text-[#FF3333]">
                      {project.title}
                    </h3>
                    <p className="text-white text-sm max-w-xs opacity-80">
                      A comprehensive guide to the Castlevania series
                    </p>
                  </div>
                </div>
              )}

              {/* Card content section */}
              <div className={styles.cardContent}>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link || '#'}
                    target={project.link ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className={styles.projectButton}
                  >
                    View Project
                  </a>
                  <div className={styles.tagContainer}>
                    {project.tags &&
                      project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`${styles.tag} ${
                            tagColors[tag] || 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
