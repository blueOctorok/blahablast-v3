import Selfie from '../assets/sam.png'

const Hero = () => {
  return (
    <section
      className="flex justify-between items-center pt-20 bg-gradient-to-b from-white to-custom-blue"
      id="hero"
    >
      <div className="max-w-screen-xl flex justify-between items-center w-full px-4 md:px-8 lg:px-16">
        <div className="ml-auto mr-0 md:mr-auto">
          <h1 className="text-5xl font-light text-custom-title">Sam Blaha</h1>
          <p className="text-3xl mt-4 font-extralight text-white font-mono">
            FullStack & Blockchain Developer
          </p>
        </div>
      </div>
      <div className="max-w-md">
        <img src={Selfie} alt="picture of me" />
      </div>
    </section>
  )
}

export default Hero
