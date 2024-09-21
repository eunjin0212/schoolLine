import { Link, useLocation } from "react-router-dom";
import { type Route, routes } from '../main';
import { Logo_1008, Logo_1920, Logo_375, Logo_640 } from '../assets/Logo';
import { Oreo_375, Oreo_640 } from '../assets/Oreo';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';


const NavBar = () => {
  const linkPadding = 'lg:py-[1.625rem] py-[0.625rem]'
  const filteredRoutes = routes.children.filter(route => route.title) as Route[]
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <nav className='flex justify-center h-12 px-6 lg:h-24 md:h-[60px] lg:px-9 md:px-7 shadow-[0px_4px_8px_0px_#0000000A] sticky -top-px bg-white z-20'>
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
            'hidden text-nowrap text-base leading-5 font-medium lg:inline-flex lg:items-center lg:justify-center min-w-[6.25rem]',
            pathname === route.path && 'transition-all relative before:w-full before:h-1 before:bg-green-07 before:absolute before:bottom-0'
          ].join(' ')}>
            <Link to={route.path}>{route.title}</Link>
          </li>
        ))}
        <li className='hidden max-lg:list-item'>
          <button onClick={() => setOpen((prev) => !prev)} className='absolute top-0 right-0 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gray-01'>
            <Oreo_640 className='hidden md:block' />
            <Oreo_375 className='block md:hidden' />
          </button>
        </li>
      </ul>
      {
        open &&
        createPortal(
          <ul className='absolute w-full bg-white/[.98] md:top-14 top-12 pt-[3px] md:pt-1 shadow-[0px_4px_12px_0px_#0000000A]'>
            {filteredRoutes.map((route) =>
              <li key={route.path} className='md:text-lg md:leading-5 leading-[18px] text-sm md:py-4 py-3 md:px-6 px-5 border-b-[0.4px] border-b-neutral-300 last-of-type:border-b-0'>
                <Link to={route.path} className='inline-flex items-center h-8'>{route.title}</Link>
              </li>
            )}
          </ul>, document.body
        )
      }
    </nav>
  )
}
export default NavBar