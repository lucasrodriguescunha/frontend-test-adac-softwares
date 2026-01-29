import { HeaderButton } from './HeaderButton';
import FigmaLandIcon from '../../assets/figma-land.svg';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className='w-full bg-dark'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
        <img src={FigmaLandIcon} alt='Figma Land Icon' />
        <nav>
          <ul className='flex gap-10 text-base text-white font-medium'>
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