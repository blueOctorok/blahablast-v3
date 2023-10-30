import { useEffect, useRef } from 'react'
import CV1 from '../assets/CV1.mp4'
import castlevaniaIO from '../assets/castlevaniaIO.mp4'

const Projects = () => {
  const projects = [
    {
      title: 'Transylvanian Tome',
      description:
        ' Have you always wanted a beautiful app showcasing all of the classic Castlevania games? Well, your prayers have been answered! Download Transylvanian Tome today on the App Store.',
      path: CV1
    },
    {
      title: 'Castlevania.io',
      description:
        'A website dedicated to the Castlevania series. Similar to Transylvanian Tome, but a web version! Plans on making it a companion site to the iOS app.',
      path: castlevaniaIO
    }
  ]

  const videoRefs = useRef([])

  useEffect(() => {
    videoRefs.current.forEach((videoRef) => {
      const videoElement = videoRef

      const handleVideoEnd = () => {
        videoElement.currentTime = 0
        videoElement.play()
      }

      videoElement.addEventListener('ended', handleVideoEnd)

      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd)
      }
    })
  }, [])

  return (
    <section id='projects' className='p-8 mt-2'>
      <div className='flex justify-center m-6'>
        <h2 className='text-4xl mb-8 text-center text-custom-dark-blue border-b-4 border-custom-yellow'>
          My Current Projects
        </h2>
      </div>
      <div className='flex justify-center mb-8'>
        <div
          className={`max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 ${
            projects.length === 2 ? 'lg:grid-cols-2' : '2xl:grid-cols-4'
          } gap-8`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className='bg-gradient-to-b from-custom-dark-blue to-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700'>
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className='rounded-t-lg w-full'
                src={project.path}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className='p-5'>
                <h3 className='mb-2 text-2xl font-bold tracking-tight text-custom-title'>
                  {project.title}
                </h3>
                <p className='mb-3 font-normal text-gray-500'>
                  {project.description}
                </p>
                <button className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-custom-dark-blue hover:bg-custom-blue'>
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
