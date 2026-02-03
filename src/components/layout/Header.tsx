import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderButton } from './LoginButton';
import FigmaLandIcon from '../../assets/icons/figma-land.svg';
import MenuHamburguerIcon from '../../assets/icons/menu.svg';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='w-full bg-dark'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-8 py-6'>
        <Link
          to='/'
          aria-label='Ir para a página inicial'
        >
          <img
            src={FigmaLandIcon}
            alt='Figma Land'
          />
        </Link>

        <nav aria-label='Navegação principal' className='hidden lg:block'>
          <ul className='flex gap-8 text-base text-white font-medium'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/product'>Product</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>

        <div className='hidden lg:block'>
          <HeaderButton />
        </div>

        <button
          onClick={toggleMenu}
          className='lg:hidden'
          aria-label='Menu'
          aria-expanded={isMenuOpen}
        >
          <img
            src={MenuHamburguerIcon}
            alt='Menu'
            className='w-6 h-6'
          />
        </button>
      </div>

      {isMenuOpen && (
        <nav
          className='lg:hidden bg-dark border-t border-gray-700'
          aria-label='Navegação mobile'
        >
          <ul className='flex flex-col px-8 py-4'>
            <li className='border-b border-gray-700'>
              <Link
                to='/'
                className='block py-3 text-white font-medium'
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className='border-b border-gray-700'>
              <Link
                to='/product'
                className='block py-3 text-white font-medium'
                onClick={closeMenu}
              >
                Product
              </Link>
            </li>
            <li className='border-b border-gray-700'>
              <Link
                to='/about'
                className='block py-3 text-white font-medium'
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className='border-b border-gray-700'>
              <Link
                to='/contact'
                className='block py-3 text-white font-medium'
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            <li className='pt-8'>
              <HeaderButton />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}