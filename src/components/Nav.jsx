import { useState } from 'react'
import Hamburger from './Hamburger'
import Resume from '../assets/Resume.pdf'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='fixed top-0 left-0 w-full p-4 bg-white shadow-md z-10'>
      <div className='container mx-auto'>
        <nav className='flex justify-between items-center'>
          <h1 className='text-3xl font-extralight'>
            <a href='#hero' className='text-custom-dark-blue'>
              blahablast
            </a>
          </h1>
          {/* Desktop Menu */}
          <ul className='hidden sm:flex space-x-4'>
            <li>
              <a
                href='#projects'
                className='text-custom-dark-blue hover:text-custom-blue font-semibold hover:border-b-2 hover:border-custom-yellow font-mono'>
                Projects
              </a>
            </li>
            <li>
              <a
                href='#about'
                className='text-custom-dark-blue hover:text-custom-blue font-semibold hover:border-b-2 hover:border-custom-yellow font-mono'>
                About Me
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='text-custom-dark-blue hover:text-custom-blue font-semibold hover:border-b-2 hover:border-custom-yellow font-mono'>
                Contact Me
              </a>
            </li>
            <li>
              <a
                href={Resume}
                target='_blank'
                rel='noopener noreferrer'
                className='text-custom-dark-blue hover:text-custom-blue font-semibold hover:border-b-2 hover:border-custom-yellow font-mono'>
                Resume
              </a>
            </li>
          </ul>
          {/*Mobile Menu Btn*/}
          <button className='sm:hidden' onClick={toggleMenu}>
            <Hamburger size={26} color='black' />
          </button>
          {/* Mobile Menu */}
          {isOpen && (
            <ul className='flex flex-col space-y-4 absolute top-full left-0 pl-4 w-full bg-white sm:hidden'>
              <li>
                <a
                  href='#projects'
                  className='text-custom-dark-blue hover:text-custom-blue font-semibold hover:border-b-2 hover:border-custom-yellow font-mono'>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='text-custom-dark-blue hover:text-custom-blue font-semibold hover:border-b-2 hover:border-custom-yellow font-mono'>
                  About Me
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-custom-dark-blue hover:text-custom-blue font-semibold hover:border-b-2 hover:border-custom-yellow font-mono'>
                  Contact Me
                </a>
              </li>
              <li>
                <a
                  href={Resume}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-custom-dark-blue hover:text-custom-blue font-semibold hover:border-b-2 hover:border-custom-yellow font-mono'>
                  Resume
                </a>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Nav
