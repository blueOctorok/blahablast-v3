const About = () => {
  return (
    <section
      id='about'
      className='flex flex-col items-center bg-custom-dark-blue p-8 mt-2'>
      <div className='flex justify-center m-6'>
        <h1 className='text-4xl mb-8 text-center text-custom-blue border-b-4 border-custom-yellow'>
          About Me
        </h1>
      </div>
      <div className='flex flex-col space-y-6 xl:space-y-0 xl:flex-row xl:space-x-6 w-full justify-center'>
        {/* Being a Developer */}
        <div className='flex flex-col max-w-xl w-full text-white mb-6 space-y-4'>
          <h2 className='text-4xl border-b border-custom-yellow'>
            Being a Developer
          </h2>
          <article className='text-2xl font-bold'>
            Throughout my career, I&apos;ve cultivated a diverse range of
            development skills. While I am qualified as a Full-Stack Developer,
            my true passion lies in Front-End and Mobile development.
          </article>
        </div>
        {/* Current Status */}
        <div className='flex flex-col max-w-xl w-full text-white mb-6 space-y-4'>
          <h2 className='text-4xl border-b border-custom-yellow'>
            Current Status
          </h2>
          <article className='text-2xl font-bold'>
            I currently serve as a Programming Instructor at WeCanCodeIT,
            specializing in React, JavaScript, and Java. This rewarding role
            allows me to mentor aspiring developers, guiding them towards a
            successful career in the tech industry. The act of teaching has
            further honed my development skills, compelling me to delve deeply
            into the intricacies of each programming language.
          </article>
        </div>
        {/* Tech Skills */}
        <div className='flex flex-col max-w-xl w-full text-white mb-6 space-y-4'>
          <h2 className='text-4xl border-b border-custom-yellow'>
            Tech Skills
          </h2>
          <article className='flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0'>
            {/* Primary Expertise */}
            <div className='flex flex-col space-y-3'>
              <h3 className='text-3xl font-extralight font-serif'>
                Primary Expertise
              </h3>
              <p className='text-2xl font-bold'>
                React, SwiftUI, JavaScript, CSS, HTML, Firebase
              </p>
            </div>
            {/* Familiar Technologies */}
            <div className='flex flex-col space-y-3'>
              <h3 className='text-3xl font-extralight font-serif'>
                Familiar Technologies
              </h3>
              <p className='text-2xl font-bold'>
                Java, React Native, UIKit, SpringBoot, SQL, C#
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
