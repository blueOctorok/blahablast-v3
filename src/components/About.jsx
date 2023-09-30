const About = () => {
  return (
    <>
      {/* <div className='w-1/2 mx-auto border-b-2 border-custom-dark-blue' /> */}
      <section id='about' className='bg-custom-dark-blue p-8 mt-2'>
        <div className='flex justify-center m-6'>
          <h1 className='text-4xl mb-8 text-center text-custom-blue border-b-4 border-custom-yellow'>
            Being a Developer
          </h1>
        </div>
        <article>
          Throughout my career, I&apos;ve cultivated a diverse range of
          development skills. While I am qualified as a Full-Stack Developer, my
          true passion lies in Front-End and Mobile development.
        </article>
        <div className='flex justify-center m-6'>
          <h1 className='text-4xl mb-8 text-center text-custom-blue border-b-4 border-custom-yellow'>
            Current Status
          </h1>
        </div>
        <article>
          I currently serve as a Programming Instructor at WeCanCodeIT,
          specializing in React, JavaScript, and Java. This rewarding role
          allows me to mentor aspiring developers, guiding them towards a
          successful career in the tech industry. The act of teaching has
          further honed my development skills, compelling me to delve deeply
          into the intricacies of each programming language.
        </article>
        <div className='flex justify-center m-6'>
          <h1 className='text-4xl mb-8 text-center text-custom-blue border-b-4 border-custom-yellow'>
            Tech Skills
          </h1>
        </div>
        <article>
          <div>
            Daily Skills: React, JavaScript, CSS, HTML, SwiftUI, UIKit, React
            Native, Firebase.
          </div>
          <div>Secondary Skills: Java, C#, SpringBoot, SQL.</div>
        </article>
      </section>
    </>
  )
}

export default About
