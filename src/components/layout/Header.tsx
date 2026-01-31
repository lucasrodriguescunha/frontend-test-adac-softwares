import { Link } from 'react-router-dom';
import { HeaderButton } from './LoginButton';
import FigmaLandIcon from '../../assets/icons/figma-land.svg';

export function Header() {
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
        <nav aria-label='Navegação principal'>
          <ul className='flex gap-8 text-base text-white font-medium'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/product'>Product</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
        <HeaderButton />
      </div>
    </header>
  );
}