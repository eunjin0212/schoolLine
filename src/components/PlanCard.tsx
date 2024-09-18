import { type ReactNode, Fragment, useEffect, useState } from 'react';
import { ListCheck_375, ListCheck_640 } from '../assets/ListCheck';

interface PlanCardProps {
  name: string;
  titleIcon?: boolean;
  titleClass?: string;
  icons: ReactNode[];
  scopes: string[];
  description: string;
  scopeClass?: string;
  onClick: (arg: boolean) => void
  value: boolean;
}

const PlanCard = ({ value, name, titleIcon, titleClass, icons, description, scopes, scopeClass, onClick }: PlanCardProps) => {
  const [isClick, setIsClick] = useState(false)

  useEffect(() => {

    setIsClick(value)
  }, [value])

  return (
    <div
      onClick={() => onClick(!isClick)}
      className={[`
        rounded-[14px] shadow-[0px_1px_11px_0px_#00000014] p-4 pt-[37px]
        md:rounded-3xl md:shadow-[0px_1px_20px_0px_#00000014] md:p-7 md:pt-[63px]
        relative w-full bg-white`,
        isClick && 'before:rounded-[14px] md:before:rounded-3xl before:absolute before:w-full before:h-full before:top-0 before:left-0 before:border-[3px] before:border-purple-03',
        titleIcon && 'mt-5 md:mt-9 xl:mt-0',
      ].join(' ')}
    >
      {titleIcon && <strong className={`
        w-12 h-12 text-xs leading-[14px] -top-5 right-3 bg-[url(/src/assets/images/recommendation_375.svg)]
        md:w-20 md:h-20 md:text-xl md:leading-[23px] md:-top-9 md:right-6 md:bg-[url(/src/assets/images/recommendation_640.svg)]
      text-white bg-no-repeat inline-flex items-center justify-center absolute z-10
      `}>
        推薦
      </strong>}
      <strong className={[
        `text-xs leading-[14px] h-[37px] rounded-t-[13px]
        md:text-xl md:leading-[23px] md:h-[63px] md:rounded-t-3xl
        flex justify-center items-center tracking-[0.04em] text-white bg-gray-09 absolute w-full left-0 top-0`,
        titleClass
      ].join(' ')}>
        {name}
      </strong>
      <div className='h-[76px] md:h-[126px] mx-auto mt-6 mb-5 md:mt-[50px] md:mb-[46px] w-fit'>
        {icons.map((icon, idx) => <Fragment key={idx}>{icon}</Fragment>)}
      </div>
      <p className={`
        text-xs leading-[12px] mb-[15px]
        md:text-base md:leading-5 md:mb-8
        font-medium text-center`}>{description}</p>
      <ul className={[`
        rounded-lg py-3 px-4 bg-purple-04/[0.26]
        md:rounded-xl md:py-5 md:px-[26px]`, scopeClass
      ].join(' ')}>
        {scopes.map(scope =>
          <li key={scope} className={`
            text-[8px] leading-5 gap-3
            md:text-sm md:leading-9 md:gap-[22px]
            inline-flex items-center
          `}>
            <ListCheck_375 className='block md:hidden' />
            <ListCheck_640 className='hidden md:block' />
            {scope}
          </li>
        )}
      </ul>
    </div>
  )
}

export default PlanCard
