import { useState } from 'react'

const About = () => {
  const skills = [
    { name: 'React.js & Next.js', level: 92 },
    { name: 'JavaScript/TypeScript', level: 88 },
    { name: 'PHP/Laravel', level: 85 },
    { name: 'Responsive UI/UX', level: 90 },
    { name: 'RESTful API Development', level: 86 },
    { name: 'Database Management', level: 82 },
    { name: 'Smart Contract Development', level: 88 },
    { name: 'dApp Architecture', level: 84 },
    { name: 'Web3 Integration', level: 85 },
    { name: 'Token Standards', level: 84 },
    { name: 'Linux Server Admin', level: 80 },
    { name: 'Ansible Automation', level: 78 }
  ]

  // Split array for the grid layout - show 6 skills per column
  const halfLength = Math.ceil(skills.length / 2)
  const firstHalf = skills.slice(0, halfLength)
  const secondHalf = skills.slice(halfLength)

  // State for the active tab
  const [activeTab, setActiveTab] = useState('skills')

  return (
    <section
      id="about"
      className="flex flex-col items-center bg-custom-dark-blue p-8 mt-2"
    >
      <div className="m-6">
        <h1 className="text-4xl mb-8 text-center text-custom-blue border-b-4 border-custom-yellow">
          About Me
        </h1>
      </div>

      {/* Bio section */}
      <div className="container mx-auto mb-12 text-white">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <p className="text-lg leading-relaxed mb-4">
              I'm a Full Stack Developer with 5+ years of experience in web,
              API, and blockchain development. I specialize in React/Next.js
              frontend, PHP backend systems, RESTful API architecture, and smart
              contract development on Solidity and Cardano platforms.
            </p>
            <p className="text-lg leading-relaxed">
              My focus is on delivering scalable applications with optimized
              performance and distributed systems. Currently, I'm working on
              ShardSwap, a decentralized P2P marketplace on Cardano blockchain,
              and exploring new possibilities in the Web3 space.
            </p>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-2xl mb-4 text-custom-yellow">Quick Facts</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">📍</span> Based in: Westlake, Ohio
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🎓</span> WeCanCodeIT Graduate
                </li>
                <li className="flex items-center">
                  <span className="mr-2">💼</span> Blockchain & Full Stack
                  Developer
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🌐</span> Languages: Italian & English
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🎖️</span> U.S. Navy Veteran
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="container mx-auto mb-8">
        <div className="flex justify-center border-b border-custom-blue">
          <button
            className={`px-6 py-2 font-bold ${
              activeTab === 'skills'
                ? 'text-custom-yellow border-b-2 border-custom-yellow'
                : 'text-white'
            }`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
          <button
            className={`px-6 py-2 font-bold ${
              activeTab === 'experience'
                ? 'text-custom-yellow border-b-2 border-custom-yellow'
                : 'text-white'
            }`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button
            className={`px-6 py-2 font-bold ${
              activeTab === 'education'
                ? 'text-custom-yellow border-b-2 border-custom-yellow'
                : 'text-white'
            }`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>
      </div>

      {/* Content based on active tab */}
      <div className="container mx-auto min-h-[400px]">
        {activeTab === 'skills' && (
          <div className="flex flex-col lg:flex-row gap-8 items-center text-white">
            <div className="lg:w-1/3 flex flex-col items-center">
              <h2 className="text-4xl lg:text-5xl mb-6 text-custom-yellow">
                Technical Skills
              </h2>
              <p className="text-center text-lg">
                I specialize in full-stack and blockchain development with
                expertise across multiple technologies.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-lg font-medium">{skill.name}</span>
                    <span className="text-sm text-custom-yellow">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-custom-yellow h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl mb-6 text-center text-custom-yellow">
              Work Experience
            </h2>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-custom-blue">
                <div className="absolute w-4 h-4 bg-custom-yellow rounded-full -left-[9px] top-1"></div>
                <h3 className="text-2xl font-bold text-custom-blue">
                  Blockchain Developer
                </h3>
                <p className="text-custom-yellow mb-2">
                  Feb 2025 - Present | Flux Point Studios
                </p>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <li>
                    Architected and implemented a decentralized P2P marketplace
                    on Cardano blockchain using Next.js, React, and MeshJS for
                    seamless wallet integration
                  </li>
                  <li>
                    Integrated Maestro's Managed Contracts API to handle secure
                    on-chain transactions
                  </li>
                  <li>
                    Designed and implemented an AI analytics dashboard with
                    market insights, price predictions, and risk analysis
                  </li>
                  <li>
                    Created a token-locking mechanism for premium features,
                    requiring 100,000 TALOS tokens
                  </li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-custom-blue">
                <div className="absolute w-4 h-4 bg-custom-yellow rounded-full -left-[9px] top-1"></div>
                <h3 className="text-2xl font-bold text-custom-blue">
                  PHP Full Stack Developer
                </h3>
                <p className="text-custom-yellow mb-2">
                  Dec 2023 - Present | MRI Software, Solon, OH
                </p>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <li>
                    Led enhancement of six core applications, heightening user
                    experience
                  </li>
                  <li>Specialized in Laravel and Vue JS development</li>
                  <li>
                    Maintained and supported API endpoints for data integration
                  </li>
                  <li>
                    Administered Linux Rackspace servers and orchestrated
                    migration to Azure using Ansible
                  </li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-custom-blue">
                <div className="absolute w-4 h-4 bg-custom-yellow rounded-full -left-[9px] top-1"></div>
                <h3 className="text-2xl font-bold text-custom-blue">
                  Lead Java & JavaScript Developer
                </h3>
                <p className="text-custom-yellow mb-2">
                  Apr 2023 - Dec 2023 | We Can Code IT, Cleveland, OH
                </p>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <li>
                    Pioneered custom Java & JavaScript applications for enhanced
                    learning
                  </li>
                  <li>
                    Led React instruction and application creation for student
                    proficiency
                  </li>
                  <li>
                    Mentored students in personalized sessions, elevating their
                    coding skills
                  </li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-custom-blue">
                <div className="absolute w-4 h-4 bg-custom-yellow rounded-full -left-[9px] top-1"></div>
                <h3 className="text-2xl font-bold text-custom-blue">
                  Junior Software Developer
                </h3>
                <p className="text-custom-yellow mb-2">
                  Jan 2021 - Mar 2023 | PNC Bank, Cleveland, OH
                </p>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <li>
                    Streamlined hiring and onboarding via strategic automation
                  </li>
                  <li>Enhanced testing processes through key automation</li>
                  <li>
                    Participated in Scrum meetings to drive software development
                    improvements
                  </li>
                  <li>
                    Led Playwright automation with JavaScript for increased
                    testing speed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl mb-6 text-center text-custom-yellow">
              Education
            </h2>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-custom-blue">
                <div className="absolute w-4 h-4 bg-custom-yellow rounded-full -left-[9px] top-1"></div>
                <h3 className="text-2xl font-bold text-custom-blue">
                  dApp University Mentorship
                </h3>
                <p className="text-custom-yellow mb-2">Feb 2025 - Present</p>
                <p className="mb-4">
                  A specialized mentorship program for developers transitioning
                  to Blockchain Development.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-custom-blue">
                <div className="absolute w-4 h-4 bg-custom-yellow rounded-full -left-[9px] top-1"></div>
                <h3 className="text-2xl font-bold text-custom-blue">
                  WeCanCodeIT
                </h3>
                <p className="text-custom-yellow mb-2">Aug 2020 - Dec 2020</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Full-stack C# Bootcamp Graduate with top student distinction
                  </li>
                  <li>
                    Proficiency in C#, .NET, JavaScript, and related web
                    technologies
                  </li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-custom-blue">
                <div className="absolute w-4 h-4 bg-custom-yellow rounded-full -left-[9px] top-1"></div>
                <h3 className="text-2xl font-bold text-custom-blue">
                  Cleveland State University
                </h3>
                <p className="text-custom-yellow mb-2">Mar 2011 - Jun 2013</p>
                <p className="mb-4">
                  Completed coursework in Networking Software & Computer Science
                  before accepting a full-time IT position at Sherwin-Williams.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-custom-blue">
                <div className="absolute w-4 h-4 bg-custom-yellow rounded-full -left-[9px] top-1"></div>
                <h3 className="text-2xl font-bold text-custom-blue">
                  Military Service
                </h3>
                <p className="text-custom-yellow mb-2">2007 - 2011</p>
                <p className="mb-4">
                  U.S. NAVY - AVIATION ORDNANCE | Lemoore, CA / USS Ronald
                  Reagan
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default About
