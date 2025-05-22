import { useState, useEffect } from 'react'

const SiteDetailsModal = ({ isOpen, onClose }) => {
  // Close modal on escape key and click outside
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const handleClickOutside = (e) => {
      if (e.target.classList.contains('modal-backdrop')) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('click', handleClickOutside)
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const features = [
    {
      title: 'Built from Scratch',
      description:
        'No frameworks or templates used - completely custom-built React application showcasing raw development skills and creativity.'
    },
    {
      title: 'Modern React Architecture',
      description:
        'Built with React 18+ using functional components, hooks (useState, useEffect), and clean component composition patterns.'
    },
    {
      title: 'Vite Development Environment',
      description:
        'Lightning-fast development server with hot module replacement, optimized build process, and modern ES module support.'
    },
    {
      title: 'Tailwind CSS Styling',
      description:
        'Utility-first CSS framework for rapid UI development with custom color schemes, responsive design, and consistent spacing.'
    },
    {
      title: 'Custom Interactive Components',
      description:
        'Hand-built modals, navigation system, tabbed interfaces, and animated project cards with CSS animations and transitions.'
    },
    {
      title: 'Responsive Design',
      description:
        'Mobile-first approach with breakpoint-specific layouts, flexible grid systems, and optimized viewing experience across all devices.'
    },
    {
      title: 'Performance Optimized',
      description:
        'Lazy loading, optimized images, minimal JavaScript bundles, and efficient CSS with no unused styles in production.'
    },
    {
      title: 'Professional UX/UI',
      description:
        'Smooth animations, intuitive navigation, consistent branding, and accessibility considerations throughout the user journey.'
    }
  ]

  const techStack = [
    'React 18',
    'Vite',
    'Tailwind CSS',
    'JavaScript ES6+',
    'CSS3 Animations',
    'Responsive Design',
    'Component Architecture',
    'Modern Build Tools'
  ]

  const highlights = [
    'Zero external UI libraries or templates',
    'Hand-coded animations and interactions',
    'Custom color palette and design system',
    'Optimized for performance and SEO',
    'Mobile-first responsive approach',
    'Clean, maintainable codebase'
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 modal-backdrop">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-custom-dark-blue to-custom-blue text-white rounded-t-lg">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold">About This Portfolio Site</h2>
              <p className="text-sm opacity-90 mt-1">
                Built with React, Vite & Tailwind CSS
              </p>
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

        {/* Scrollable Content */}
        <div
          className="overflow-y-auto max-h-[calc(90vh-120px)] bg-gradient-to-br from-slate-50 to-blue-50"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {/* Secondary Header with Icon */}
          <div className="px-6 py-4 bg-gradient-to-r from-custom-blue/10 to-custom-dark-blue/10 border-b border-custom-blue/20">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-custom-blue to-custom-dark-blue rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-custom-dark-blue">
                    Hand-Crafted Portfolio
                  </h3>
                  <p className="text-sm text-gray-600">
                    No templates • No frameworks • Just pure code
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Project Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-custom-dark-blue">
                Development Philosophy
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                This portfolio site was built entirely from scratch to
                demonstrate my ability to create modern, responsive web
                applications without relying on pre-built templates or heavy
                frameworks. Every component, animation, and interaction was
                hand-crafted to showcase both technical skills and design
                sensibility.
              </p>

              <div className="mt-4 p-4 bg-gradient-to-r from-custom-yellow/20 to-custom-blue/20 border-l-4 border-custom-yellow rounded-lg">
                <h4 className="font-semibold text-custom-dark-blue mb-2">
                  Key Highlights
                </h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-custom-yellow mr-2">●</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technical Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-custom-dark-blue">
                Technical Features
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="border border-custom-blue/30 bg-white rounded-lg p-4 hover:shadow-lg hover:border-custom-blue transition-all duration-300 hover:bg-gradient-to-br hover:from-white hover:to-custom-blue/5"
                  >
                    <h4 className="font-semibold text-custom-dark-blue mb-2 flex items-center">
                      <span className="w-2 h-2 bg-custom-yellow rounded-full mr-2"></span>
                      {feature.title}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-custom-dark-blue">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm font-medium text-white shadow-md hover:shadow-lg transition-shadow"
                    style={{
                      background: 'linear-gradient(to right, #00D3F2, #0295ab)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Development Stats */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-custom-dark-blue">
                Development Metrics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div
                  className="text-center p-4 border border-custom-yellow/30 rounded-lg hover:shadow-md transition-shadow"
                  style={{
                    background:
                      'linear-gradient(to bottom right, rgba(245, 240, 2, 0.2), rgba(0, 211, 242, 0.2))'
                  }}
                >
                  <div className="text-2xl font-bold text-custom-dark-blue">
                    0
                  </div>
                  <div className="text-sm text-gray-700">Templates Used</div>
                </div>
                <div
                  className="text-center p-4 border border-custom-blue/30 rounded-lg hover:shadow-md transition-shadow"
                  style={{
                    background:
                      'linear-gradient(to bottom right, rgba(0, 211, 242, 0.2), rgba(2, 149, 171, 0.2))'
                  }}
                >
                  <div className="text-2xl font-bold text-custom-dark-blue">
                    100%
                  </div>
                  <div className="text-sm text-gray-700">Custom Code</div>
                </div>
                <div
                  className="text-center p-4 border border-custom-yellow/30 rounded-lg hover:shadow-md transition-shadow"
                  style={{
                    background:
                      'linear-gradient(to bottom right, rgba(245, 240, 2, 0.2), rgba(0, 211, 242, 0.2))'
                  }}
                >
                  <div className="text-2xl font-bold text-custom-dark-blue">
                    13
                  </div>
                  <div className="text-sm text-gray-700">Components</div>
                </div>
                <div
                  className="text-center p-4 border border-custom-blue/30 rounded-lg hover:shadow-md transition-shadow"
                  style={{
                    background:
                      'linear-gradient(to bottom right, rgba(0, 211, 242, 0.2), rgba(2, 149, 171, 0.2))'
                  }}
                >
                  <div className="text-2xl font-bold text-custom-dark-blue">
                    Mobile
                  </div>
                  <div className="text-sm text-gray-700">First Design</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4 border-t border-custom-blue/30">
              <a
                href="https://github.com/blueOctorok/blahablast-v3"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-md font-medium text-white shadow-md hover:shadow-lg transition-all duration-300"
                style={{
                  background: 'linear-gradient(to right, #0295ab, #00D3F2)'
                }}
              >
                View Source Code
              </a>
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-md font-medium border border-custom-blue/50 text-custom-dark-blue hover:bg-custom-blue/10 hover:border-custom-blue transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteDetailsModal
