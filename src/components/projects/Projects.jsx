import { useState } from 'react'
import styles from './ProjectEffects.module.css'
import ProjectModal from './ProjectModal'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      title: 'ShardSwap',
      description:
        'A decentralized peer-to-peer marketplace on Cardano for trading digital assets with AI-powered insights.',
      link: 'https://shardswap.io',
      tags: ['Cardano', 'Blockchain', 'AI']
    },
    {
      title: 'EtherGuard',
      description:
        'A full-stack blockchain application demonstrating smart contract development, React/Next.js architecture, and Web3 integration with ERC20 token analytics.',
      tags: ['Solidity', 'React', 'Web3']
    },
    {
      title: 'Viper',
      description:
        'A modern, animated cryptocurrency memecoin website built with Next.js 14 and Framer Motion, featuring dynamic theming and interactive dashboard.',
      tags: ['Next.js', 'Animation', 'Crypto']
    }
  ]

  // Tag color mapping
  const tagColors = {
    Cardano: 'bg-blue-100 text-blue-800',
    Blockchain: 'bg-purple-100 text-purple-800',
    AI: 'bg-green-100 text-green-800',
    Solidity: 'bg-indigo-100 text-indigo-800',
    React: 'bg-cyan-100 text-cyan-800',
    Web3: 'bg-emerald-100 text-emerald-800',
    'Next.js': 'bg-slate-100 text-slate-800',
    Animation: 'bg-pink-100 text-pink-800',
    Crypto: 'bg-yellow-100 text-yellow-800'
  }

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="p-8 mt-2 bg-slate-50">
      <div className="flex justify-center m-6">
        <h2 className="text-4xl mb-8 text-center text-custom-dark-blue border-b-4 border-custom-yellow">
          My Current Projects
        </h2>
      </div>
      <div className="flex justify-center mb-8">
        <div
          className={`max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 ${
            projects.length === 3
              ? 'lg:grid-cols-3'
              : projects.length === 2
              ? 'lg:grid-cols-2'
              : '2xl:grid-cols-4'
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

              {/* Banner Section - Viper */}
              {index === 2 && (
                <div className={styles.viperBanner}>
                  <div className={styles.viperContent}>
                    {/* Snake pattern background */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 left-4 w-32 h-32 border-2 border-red-300 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-4 right-4 w-24 h-24 border border-red-400 rounded-full animate-pulse delay-1000"></div>
                    </div>

                    {/* Snake/Viper icon */}
                    <div className="flex flex-col items-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-16 h-16 text-red-300"
                        fill="currentColor"
                      >
                        <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1H5C3.89,1 3,1.89 3,3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V9M12,8C14.21,8 16,9.79 16,12C16,14.21 14.21,16 12,16C9.79,16 8,14.21 8,12C8,9.79 9.79,8 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" />
                      </svg>
                    </div>

                    {/* Title overlay */}
                    <div className="flex flex-col items-center justify-center text-center mt-4 z-10">
                      <h3 className="text-4xl font-bold mb-2 text-red-200">
                        {project.title}
                      </h3>
                      <p className="text-white text-sm max-w-xs opacity-80">
                        Modern cryptocurrency memecoin website
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Banner Section - EtherGuard */}
              {index === 1 && (
                <div className={styles.etherGuardBanner}>
                  <div className={styles.etherGuardContent}>
                    {/* Shield/Security icon for EtherGuard */}
                    <div className="flex flex-col items-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-16 h-16 text-purple-300"
                        fill="currentColor"
                      >
                        <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z" />
                      </svg>
                    </div>

                    {/* Title overlay */}
                    <div className="flex flex-col items-center justify-center text-center mt-4 z-10">
                      <h3 className="text-4xl font-bold mb-2 text-purple-200">
                        {project.title}
                      </h3>
                      <p className="text-white text-sm max-w-xs opacity-80">
                        Full-stack blockchain application with ERC20 analytics
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Card content section */}
              <div className={styles.cardContent}>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <a
                      href={project.link || '#'}
                      target={project.link ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className={styles.projectButton}
                    >
                      View Project
                    </a>
                    <button
                      onClick={() => openModal(project)}
                      className="px-4 py-2 text-sm font-medium text-center text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-all duration-300"
                    >
                      Details
                    </button>
                  </div>
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

      {/* Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  )
}

export default Projects
