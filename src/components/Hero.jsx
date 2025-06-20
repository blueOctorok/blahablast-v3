import { useState } from 'react'
import Selfie from '../assets/sam.png'
import SiteDetailsModal from './SiteDetailsModal'

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <section
        className="flex justify-between items-center pt-20 bg-gradient-to-b from-white to-custom-blue"
        id="hero"
      >
        <div className="max-w-screen-xl flex justify-between items-center w-full px-4 md:px-8 lg:px-16">
          <div className="ml-auto mr-0 md:mr-auto">
            <h1 className="text-5xl font-light text-custom-title">Sam Blaha</h1>
            <p className="text-3xl mt-4 font-extralight text-white font-mono">
              Software Developer
            </p>
            <button
              onClick={openModal}
              className="mt-6 mb-4 px-4 py-2 text-sm font-medium text-custom-dark-blue bg-white bg-opacity-80 border border-custom-dark-blue rounded-lg hover:bg-opacity-100 hover:shadow-md transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
            >
              Site Details
            </button>
          </div>
        </div>
        <div className="max-w-md">
          <img src={Selfie} alt="picture of me" />
        </div>
      </section>

      {/* Site Details Modal */}
      <SiteDetailsModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default Hero
