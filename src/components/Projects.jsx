import CV1 from '../assets/CV1.mp4'
import lament from '../assets/lament.png'

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
      path: lament
    }
  ]

  return (
    <>
      {/* <div className='w-1/2 mx-auto border-b' /> */}
      <section id='projects' className='p-8'>
        <h2 className='text-4xl mb-8 text-center text-custom-dark-blue'>
          things I am working on
        </h2>
        <div className='flex justify-center'>
          <div
            className={`max-w-screen-xl grid ${
              projects.length === 1
                ? 'place-content-center'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            } gap-8`}>
            {projects.map((project, index) => (
              <div
                key={index}
                className='max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <video
                  className='rounded-t-lg w-full'
                  src={project.path}
                  loop
                  muted
                />
                <div className='p-5'>
                  <h3 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    {project.title}
                  </h3>
                  <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                    {project.description}
                  </p>
                  <button className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-custom-blue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-custom-dark-blue dark:hover:bg-custom-blue dark:focus:ring-custom-dark-blue'>
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
