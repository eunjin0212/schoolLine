import PageHeaderSection from '../components/PageHeaderSection'

const Business = () => {
  return (
    <PageHeaderSection title='導入の流れ'>
      <>
        <h2 className={`
          mb-[18px] text-lg leading-5 pt-7
          md:mb-[14px] md:text-[28px] md:leading-9 md:pt-[76px]
          lg:mb-7 lg:leading-[34px] lg:pt-[68px]
          font-bold text-center
        `}>
          SCHOOL Line 導入される過程
        </h2>
        <p className={`
          text-xs leading-[19px] pb-7
          md:w-[468px] md:text-[18px] md:leading-8 md:pb-[75px]
          lg:w-full lg:pb-[69px]
          text-center -tracking-[0.04em]
        `}>
          学校側でSCHOOL Lineを導入する過程を<br className='block md:hidden' />
          お知らせします
        </p>
      </>
    </PageHeaderSection>
  )
}

export default Business