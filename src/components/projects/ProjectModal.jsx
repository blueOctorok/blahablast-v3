import { useState, useEffect } from 'react'

const ProjectModal = ({ isOpen, onClose, project }) => {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  // Project-specific content
  const getProjectContent = () => {
    switch (project.title) {
      case 'ShardSwap':
        return {
          features: [
            {
              title: 'Decentralized P2P Trading',
              description:
                'Direct peer-to-peer trading without intermediaries, built on Cardano blockchain for security and transparency.'
            },
            {
              title: 'AI-Powered Market Insights',
              description:
                'Advanced analytics dashboard with price predictions, market trends, and risk assessment powered by machine learning.'
            },
            {
              title: 'Secure Wallet Integration',
              description:
                'Seamless integration with popular Cardano wallets using MeshJS for secure transaction handling.'
            },
            {
              title: 'Smart Contract Automation',
              description:
                "Automated escrow and settlement through Maestro's Managed Contracts API ensuring trustless transactions."
            },
            {
              title: 'Token-Gated Premium Features',
              description:
                'Exclusive access to advanced features by holding 100,000+ TALOS tokens in your wallet.'
            },
            {
              title: 'Real-time Market Data',
              description:
                'Live price feeds, volume tracking, and market depth analysis for informed trading decisions.'
            }
          ],
          techStack: [
            'Next.js',
            'React',
            'MeshJS',
            'Cardano',
            'Maestro API',
            'TypeScript',
            'Tailwind CSS'
          ],
          status: 'Live in Production'
        }

      case 'Viper':
        return {
          features: [
            {
              title: 'Dynamic Theme System',
              description:
                'Custom light/dark mode toggle with CSS variables, smooth theme transitions across all components, and consistent color schemes for optimal user experience.'
            },
            {
              title: 'Advanced Animations',
              description:
                'Framer Motion-powered entrance animations, interactive hover effects and micro-interactions, plus smooth page transitions and modal animations.'
            },
            {
              title: 'Cryptocurrency Dashboard',
              description:
                'Real-time statistics display (holders, market cap, volume), tokenomics breakdown with allocation percentages, and burn tracking with dedicated wallet integration.'
            },
            {
              title: 'Interactive Media Gallery',
              description:
                'Meme collection with lightbox functionality, grid-based responsive image gallery, and JSON-driven content management system.'
            },
            {
              title: 'Mobile-First Design',
              description:
                'Fully responsive across all device sizes with touch-optimized interactions and collapsible mobile navigation for optimal mobile experience.'
            },
            {
              title: 'Performance Optimization',
              description:
                'Next.js Image component with proper lazy loading, CSS variable system for dynamic theming without JavaScript re-renders, and SEO optimization.'
            }
          ],
          techStack: [
            'Next.js 14',
            'Framer Motion',
            'Tailwind CSS',
            'React Context API',
            'Lucide React',
            'Google Fonts'
          ],
          status: 'Live Production'
        }

      case 'EtherGuard':
        return {
          features: [
            {
              title: 'Smart Contract Architecture',
              description:
                'Custom ERC20 token (JavaBean) with advanced features including transfer cooldowns, transaction limits, and integrated gas analytics tracking.'
            },
            {
              title: 'Gas Analytics Engine',
              description:
                'Dedicated analyzer contract that records and calculates min/max/average gas consumption across all operations for optimization insights.'
            },
            {
              title: 'Modern React Dashboard',
              description:
                'Clean, responsive frontend built with Next.js 13+, featuring Redux Toolkit state management and Tailwind CSS styling.'
            },
            {
              title: 'Seamless Web3 Integration',
              description:
                'MetaMask wallet connection with real-time blockchain data fetching using Ethers.js v6 for optimal user experience.'
            },
            {
              title: 'Interactive Analytics Dashboard',
              description:
                'Live token balance display, transfer functionality, and dynamic gas usage charts with Recharts visualization.'
            },
            {
              title: 'Security & Testing',
              description:
                'Comprehensive smart contract security patterns with pause/unpause functionality, access control, and full test coverage using Chai/Mocha.'
            }
          ],
          techStack: [
            'Solidity',
            'Hardhat',
            'Next.js 13+',
            'React',
            'Redux Toolkit',
            'Tailwind CSS',
            'Ethers.js v6',
            'Recharts',
            'OpenZeppelin'
          ],
          status: 'Production Ready'
        }

      default:
        return {
          features: [],
          techStack: [],
          status: 'Unknown'
        }
    }
  }

  const content = getProjectContent()

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div
          className={`p-6 ${
            project.title === 'ShardSwap'
              ? 'bg-gradient-to-r from-[#051631] to-[#0295ab]'
              : project.title === 'Viper'
              ? 'bg-gradient-to-r from-[#7f1d1d] to-[#000000]'
              : 'bg-gradient-to-r from-[#581c87] to-[#7c3aed]'
          } text-white rounded-t-lg`}
        >
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold">{project.title}</h2>
              <p className="text-sm opacity-90 mt-1">{content.status}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Close modal"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Project Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Project Overview
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {project.description}
            </p>

            {/* Additional context for EtherGuard */}
            {project.title === 'EtherGuard' && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Project Demonstrates
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    • Smart contract security patterns (pause/unpause, access
                    control, input validation)
                  </li>
                  <li>
                    • Modern React patterns with hooks and Redux state
                    management
                  </li>
                  <li>
                    • Clean separation of concerns between blockchain logic and
                    UI components
                  </li>
                  <li>
                    • Professional development practices with proper testing and
                    deployment scripts
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Key Features
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {content.features.map((feature, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {content.techStack.map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.title === 'ShardSwap'
                      ? 'bg-blue-100 text-blue-800'
                      : project.title === 'Viper'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2 rounded-md font-medium text-white transition-colors ${
                  project.title === 'ShardSwap'
                    ? 'bg-[#0295ab] hover:bg-[#00D3F2]'
                    : project.title === 'Viper'
                    ? 'bg-[#dc2626] hover:bg-[#ef4444]'
                    : 'bg-[#7c3aed] hover:bg-[#8b5cf6]'
                }`}
              >
                Visit Live Site
              </a>
            )}
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-md font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
