import Selfie from '../assets/sam3.png'

const Hero = () => {
  return (
    <section
      className='flex justify-between items-center pt-20 bg-gradient-to-b from-white to-custom-blue'
      id='hero'>
      <div className='flex flex-grow justify-center'>
        <div className='p-8 mr-auto ml-24'>
          <h1 className='text-5xl font-light'>Sam Blaha</h1>
          <p className='text-3xl mt-4 font-thin'>
            Front-End & Mobile Developer
          </p>
        </div>
      </div>
      <div className='max-w-md'>
        <img src={Selfie} alt='picture of me' />
      </div>
    </section>
  )
}

export default Hero
