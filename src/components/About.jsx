const About = () => {
  const skills = [
    'React',
    'SwiftUI',
    'JavaScript',
    'CSS',
    'HTML',
    'Java',
    'Tailwind',
    'Firebase',
    'React Native',
    'UIKit',
    'Springboot',
    'PHP',
    'SQL',
    'C#'
  ]

  //Split array in half
  const halfLength = Math.ceil(skills.length / 2)
  const firstHalf = skills.slice(0, halfLength)
  const secondHalf = skills.slice(halfLength)

  return (
    <section
      id='about'
      className='flex flex-col items-center bg-custom-dark-blue p-8 mt-2'>
      <div className='m-6'>
        <h1 className='text-4xl mb-8 text-center text-custom-blue border-b-4 border-custom-yellow'>
          About Me
        </h1>
      </div>
      <div className='flex flex-col lg:flex-row container space-y-10 lg:space-x-10 lg:space-y-0 min-h-[500px] items-center text-white font-extrabold'>
        <div className='flex items-center justify-center mb-6 lg:w-1/2'>
          <h2 className='text-4xl lg:text-6xl'>Skills</h2>
        </div>
        <div className='flex pt-0 lg:pt-12 lg:w-1/2'>
          <div className='flex flex-col text-3xl lg:text-6xl lg:mr-4 pr-4 w-full lg:w-1/2'>
            {firstHalf.map((skill, index) => (
              <div key={index} className='whitespace-nowrap'>
                {skill}
              </div>
            ))}
          </div>
          <div className='flex flex-col text-3xl lg:text-6xl lg:ml-4 w-full lg:w-1/2'>
            {secondHalf.map((skill, index) => (
              <div key={index} className='whitespace-nowrap'>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
