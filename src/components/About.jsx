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
    'SQL'
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
      <div className='flex container space-x-10 min-h-[500px] items-center text-white font-extrabold'>
        <div className='w-1/2 flex items-center justify-center'>
          <h2 className='text-6xl'>Skills</h2>
        </div>
        <div className='w-1/2 flex pt-12'>
          <div className='flex flex-col text-6xl pr-6'>
            {firstHalf.map((skill, index) => (
              <div key={index}>{skill}</div>
            ))}
          </div>
          <div className='w-1/3 flex flex-col text-6xl'>
            {secondHalf.map((skill, index) => (
              <div key={index}>{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
