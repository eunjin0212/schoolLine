import { Link } from 'react-router-dom'
import { Logo_1008, Logo_375 } from '../assets/Logo'
import { type Route, routes } from '../main'

const Footer = () => {
  const links = routes.children.filter((route) => route.title) as Route[]
  return (
    <footer className='bg-gray-05 h-[252px] md:h-[300px] border-t border-[#CECECE]'>
      <div className='w-[322px] md:w-[528px] lg:w-[936px] xl:w-[1440px] mx-auto flex flex-col gap-[34px] pt-[27px] md:pt-12 md:gap-[22px] lg:gap-[88px] xl:pt-12'>
        <div className='flex justify-between'>
          <Logo_375 className='block md:hidden' />
          <Logo_1008 className='hidden md:block' />
          <ul className='inline-flex flex-col gap-4 lg:grid lg:gap-x-[78px] lg:h-[87px] xl:h-[93px] grid-flow-col lg:grid-rows-3 lg:mr-[100px] xl:mr-[163px]'>
            {links.map(item =>
              <li key={item.title} className='text-xs leading-[14px] md:text-sm md:leading-4 font-medium text-gray-07'>
                <Link to={item.path}>{item.title}</Link>
              </li>
            )}
          </ul>
        </div>
        <p className='text-xs leading-[14px] font-medium text-right text-gray-08'>Copyright ©Knowlegeshare Co., Ltd.</p>
      </div>
    </footer>
  )
}
export default Footer