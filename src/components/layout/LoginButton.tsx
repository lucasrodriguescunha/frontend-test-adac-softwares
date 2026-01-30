import { Link } from 'react-router-dom';

export function HeaderButton() {
  return (
    <Link
      to='/login'
      className='text-base text-white font-medium border px-10 py-3 mr-[100px]'
    >
      Login
    </Link>
  );
}