import { ReactNode } from 'react';

interface PageHeaderSectionProps {
  title: string;
  children: ReactNode;
}

const PageHeaderSection = ({ title, children }: PageHeaderSectionProps) => (
  <section className='h-[232px] md:h-[500px] lg:h-[480px] xl:h-[439px] bg-purple-04 flex items-end justify-center'>
    <div className='w-[342px] md:w-[584px] lg:w-[896px] xl:w-[1440px]'>
      <h1 className={`
        text-2xl leading-7 
        md:text-[40px] md:leading-[48px]
        xl:tracking-widest
        font-extrabold tracking-widest text-white
      `}>
        {title}
      </h1>
      <div className={`
        mt-11
        md:mt-[75px]
        inline-flex flex-col items-center justify-start w-full bg-white 
      `}>
        {children}
      </div>
    </div>
  </section>
)

export default PageHeaderSection