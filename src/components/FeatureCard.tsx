import { Fragment, ReactNode } from 'react';

interface FeatureCardProps {
  description: string;
  icons: ReactNode[];
  className?: string;
}

const FeatureCard = ({ description, icons, className }: FeatureCardProps) => (
  <li className={
    `px-[9px] pb-[9px] pt-5
    md:px-[18px] md:pb-[31px] md:pt-[38px] 
    lg:px-[27px] lg:pt-10
    inline-flex flex-col items-center justify-start shadow-[0px_1px_16px_0px_#00000014] rounded-xl bg-white`
  }>
    {icons.map((icon, idx) => <Fragment key={idx}>{icon}</Fragment>)}
    <span className={[
      `text-xs leading-[18px] 
      md:text-[15px] md:leading-[22px]
      font-medium text-gray-10 text-center`,
      className,
    ].join(' ')}>
      {description}
    </span>
  </li>
)

export default FeatureCard