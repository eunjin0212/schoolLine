import { Link, useLocation } from "react-router-dom";
import { routes } from '../main';
import { Logo_1008, Logo_1920, Logo_375, Logo_640 } from '../assets/Logo';
import { Oreo_24, Oreo_28 } from '../assets/Oreo';

const NavBar = () => {
  const linkPadding = 'lg:py-[1.625rem] py-[0.625rem]'
  const { pathname } = useLocation();
  const filteredRoutes = routes.filter(route => route.title)

  return (
    <nav className='flex justify-center h-12 px-6 lg:h-24 md:h-14 lg:px-9 md:px-7'>
      <ul className='flex lg:w-[90rem] w-full lg:relative gap-5 xl:gap-10'>
        <li className={linkPadding}>
          <Link to={'/'}>
            <Logo_1920 className='hidden xl:block' />
            <Logo_1008 className='hidden lg:block xl:hidden' />
            <Logo_640 className='hidden md:block lg:hidden' />
            <Logo_375 className='block md:hidden' />
          </Link>
        </li>
        <li className='flex-1'></li>
        {filteredRoutes.map((route) => (
          <li key={route.path} className={[
            linkPadding,
            'lg:inline-flex lg:items-center lg:justify-center hidden min-w-[6.25rem] text-nowrap',
            pathname === route.path && 'transition-all relative before:w-full before:h-1 before:bg-green-02 before:absolute before:bottom-0'
          ].join(' ')}>
            <Link to={route.path}>{route.title}</Link>
          </li>
        ))}
        <li className='hidden max-lg:list-item'>
          <button className='absolute top-0 right-0 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14'>
            <Oreo_28 className='hidden md:block' />
            <Oreo_24 className='block md:hidden' />
          </button>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar