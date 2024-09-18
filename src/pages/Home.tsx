import { Link } from 'react-router-dom'
import applyPlan_375 from '../assets/images/apply_plan_375.svg'
import applyPlan_640 from '../assets/images/apply_plan_640.svg'
import applyPlan_1920 from '../assets/images/apply_plan_1920.svg'
import aboutSchoolLine_375 from '../assets/images/about_school_line_375.svg'
import aboutSchoolLine_640 from '../assets/images/about_school_line_640.svg'
import aboutSchoolLine_1008 from '../assets/images/about_school_line_1008.svg'
import aboutSchoolLine_1920 from '../assets/images/about_school_line_1920.svg'
import { RightArrow_16, RightArrow_26, RightArrow_28 } from '../assets/RightArrow'
import { Feature1_1_375, Feature1_1_640, Feature1_2_375, Feature1_2_640, Feature1_3_375, Feature1_3_640 } from '../assets/Feature1'
import { Feature2_1_375, Feature2_2_375, Feature2_2_640, Feature2_3_375, Feature2_3_640 } from '../assets/Feature2'
import { Feature3_1_375, Feature3_1_640, Feature3_2_375, Feature3_2_640, Feature3_3_375, Feature3_3_640 } from '../assets/Feature3'
import { Feature4_1_375, Feature4_1_640, Feature4_2_375, Feature4_2_640, Feature4_3_375, Feature4_3_640 } from '../assets/Feature4'
import { Vision_375, Vision_640 } from '../assets/Vision'
import FeatureCard from '../components/FeatureCard'

const Home = () => {
  const applySectionFont = 'leading-[30px] md:leading-[60px] xl:leading-[68px] font-bold -tracking-[0.01em]'
  const tags = [
    'コミュニケーション',
    '悩み相談',
    '安全',
    '校務・学業支援',
    'シェア',
    '届出',
  ]
  const features = [
    {
      title: '疎通',
      children: [
        {
          icons: [
            <Feature1_1_375 className='mb-[14px] block md:hidden' />,
            <Feature1_1_640 className='mb-[33px] hidden md:block' />
          ],
          description: '組織図で手軽に把握',
          className: 'md:px-[calc(44px-18px)] lg:px-[calc(54px-27px)]'
        },
        {
          icons: [
            <Feature1_2_375 className='mb-[5px] block md:hidden' />,
            <Feature1_2_640 className='mb-[22px] hidden md:block' />
          ],
          description: '教師、生徒、親の メッセージコミュニケーション',
          className: 'md:px-[calc(31px-18px)] lg:px-[calc(41px-27px)]'
        },
        {
          icons: [
            <Feature1_3_375 className='mb-[14px] block md:hidden' />,
            <Feature1_3_640 className='mb-[33px] hidden md:block' />
          ],
          description: 'チャットで教職員の業務対話',
          className: 'md:px-[calc(25px-18px)] lg:px-[calc(35px-27px)]'
        },
      ],
    },
    {
      title: '学事支援·学習支援',
      children: [
        {
          icons: [
            <Feature2_1_375 className='mb-[19px] block md:hidden' />,
            <Feature2_3_640 className='mb-[43px] hidden md:block' />,
          ],
          description: '先生の業務管理',
        },
        {
          icons: [
            <Feature2_2_375 className='mb-[10px] block md:hidden' />,
            <Feature2_2_640 className='mb-[32px] hidden md:block' />,
          ],
          description: '学生の学習·イベント管理',
          className: 'md:px-[calc(44px-18px)] lg:px-[calc(54px-27px)]'
        },
        {
          icons: [
            <Feature2_3_375 className='mb-[10px] block md:hidden' />,
            <Feature2_3_640 className='mb-[32px] hidden md:block' />,
          ],
          description: 'お知らせ掲示板で学事管理',
          className: 'md:px-[calc(41px-18px)] lg:px-[calc(51px-27px)]'
        },
      ],
    },
    {
      title: '報告·届出',
      children: [
        {
          icons: [
            <Feature3_1_375 className='block mb-6 md:hidden' />,
            <Feature3_1_640 className='mb-[32px] hidden md:block' />,
          ],
          description: '出欠席、位置申告',
        },
        {
          icons: [
            <Feature3_2_375 className='block mb-2 md:hidden' />,
            <Feature3_2_640 className='mb-[32px] hidden md:block' />,
          ],
          description: 'ワンクリックSOS緊急通報',
          className: 'md:px-[calc(44px-18px)] lg:px-[calc(54px-27px)]'
        },
        {
          icons: [
            <Feature3_3_375 className='block mb-2 md:hidden' />,
            <Feature3_3_640 className='mb-[32px] hidden md:block' />,
          ],
          description: '学生出席、体調報告の統計データで視覚化',
        },
      ],
    },
    {
      title: '安全·安心',
      children: [
        {
          icons: [
            <Feature4_1_375 className='mb-[11px] block md:hidden' />,
            <Feature4_1_640 className='mb-[32px] hidden md:block' />,
          ],
          description: '体の状態、心の状態を確認',
          className: 'md:px-[calc(40px-18px)] lg:px-[calc(50px-27px)]'
        },
        {
          icons: [
            <Feature4_2_375 className='mb-[11px] block md:hidden' />,
            <Feature4_2_640 className='mb-[32px] hidden md:block' />,
          ],
          description: '欠席/遅刻/早退 現在地通知',
          className: 'md:px-[calc(42px-18px)] lg:px-[calc(52px-27px)]'
        },
        {
          icons: [
            <Feature4_3_375 className='mb-[2px] block md:hidden' />,
            <Feature4_3_640 className='mb-[32px] hidden md:block' />,
          ],
          description: '災害·事件時に学生の現在地や状態を把握',
          className: 'lg:px-[calc(30px-27px)]'
        },
      ],
    },
  ]
  return (
    <main>
      <section className='bg-green-07 relative h-[497px] md:h-[936px] lg:h-[751px] w-full lg:px-9'>
        <div className='flex justify-center'>
          <div className='lg:w-[90rem] w-full pt-[60px] md:pt-[220px] lg:pt-[180px] pl-7 md:pl-10 lg:pl-0'>
            <div className='mb-8 md:mb-14 xl:mb-16 w-[291px] md:w-[550px] lg:w-[620px] xl:w-[695px]'>
              <p className={['text-2xl md:text-[50px] xl:text-[56px]', applySectionFont].join(' ')}>
                学校·保護者·生徒をつなぐ
              </p>
              <p className={['text-xl md:text-[39px] xl:text-[44px]', applySectionFont].join(' ')}>
                トータルコミュニケーションツールで
                効率的な学校運営の実現
              </p>
            </div>
            <Link to='/plan' className={
              `h-[52px] rounded-[26px] text-sm leading-4 px-[22px] gap-2 font-bold text-white bg-purple-02 inline-flex justify-center items-center 
            md:h-[88px] md:rounded-[44px] md:text-2xl md:leading-[30px] md:px-[38px] md:gap-[14px] 
            lg:h-[89px] 
            xl:h-[100px] xl:rounded-[50px] xl:text-[28px] xl:leading-[22px] xl:gap-4`
            }>
              いますぐ無料プラン申込
              <RightArrow_16 className='block md:hidden' />
              <RightArrow_26 className='hidden md:block xl:hidden' />
              <RightArrow_28 className='hidden xl:block' />
            </Link>
          </div>
        </div>
        <img src={applyPlan_375} alt='apply_plan_375' className='absolute right-[30px] -bottom-8 object-contain block md:hidden' />
        <img src={applyPlan_640} alt='apply_plan_640' className='absolute right-[30px] -bottom-[53.4px] object-contain hidden md:block xl:hidden' />
        <img src={applyPlan_1920} alt='apply_plan_1920' className='absolute right-[30px] -bottom-[91px] object-contain hidden xl:block' />
      </section>
      <section className='bg-green-03 h-[800px] md:h-[1398px] lg:h-[1846px] xl:h-[1296px] pt-[171px] md:pt-[282px] lg:pt-[340px]'>
        <div className={
          `w-[312px] h-[555px] relative mx-auto
          md:w-[552px] md:h-[946px]
          lg:w-[904px] lg:h-[1384px]
          xl:w-[1432px] xl:h-[834px]
          `}>
          <div className={
            `rounded-[26px_26px_86px_26px] h-[200px] w-[280px] p-11 pr-10 pb-[42px] absolute top-0 bg-white z-10
            md:round-[45px_45px_146px_45px] md:h-[346px] md:w-[480px] md:p-[78px] md:pr-[68px] md:pb-[75px]
            lg:round-[56px_56px_180px_56px] lg:h-[428px] lg:w-[589px] lg:pt-[100px] lg:pl-24 lg:pr-[83px] lg:pb-[91px]
            `}>
            <p className={`text-lg leading-[21px] mb-6 text-purple-02 font-extrabold 
              md:text-[29px] md:leading-[34px] md:mb-10
              lg:text-4xl lg:leading-[49px] lg:mb-11
              `}>SCHOOL Lineとは？</p>
            <p className='font-bold text-sm leading-[22px] md:text-[23px] md:leading-[39px] lg:text-[28px] lg:leading-[48px]'>
              学校と生徒・
              <strong className='font-extrabold'>保護者をリアルタイムにつなぐコミュニケーションにより</strong>
              校務効率化
            </p>
          </div>
          <div className={
            `top-5 left-5 rounded-[20px] w-[292px] h-[535px] pt-52 shadow-[0px_0.34px_6.72px_0px_#00000014] absolute border-2 border-white bg-[#FFFFFFCC]
            md:top-[34px] md:left-[34px] md:rounded-3xl md:w-[518px] md:h-[912px] md:pt-[360px] md:shadow-[0px_0.57px_11.45px_0px_#00000014]
            lg:rounded-[44px] lg:w-[870px] lg:h-[1350px] lg:pt-[458px] lg:shadow-[0px_1px_20px_0px_#00000014]
            xl:w-[1398px] xl:h-[800px] xl:flex xl:pt-16 xl:justify-between
            `
          }>
            <ul className='w-[222px] flex gap-2 flex-wrap mb-[31px] ml-[22px] md:w-[379px] md:mb-[42px] md:ml-11 md:gap-5 lg:mb-[46px] lg:ml-[82px] xl:h-[106px] xl:mt-[491px] xl:ml-20'>
              {tags.map(tag => <li
                key={tag}
                className='rounded-[17px] text-[9px] leading-[11px] p-2 bg-white text-green-01 font-medium md:rounded-[30px] md:p-3 md:text-base md:leading-[19px]'>
                # {tag}
              </li>)}
            </ul>
            <img
              src={aboutSchoolLine_375}
              alt='about_school_line_375'
              className='block mx-auto md:hidden'
            />
            <img
              src={aboutSchoolLine_640}
              alt='about_school_line_640'
              className='hidden mx-auto md:block lg:hidden'
            />
            <img
              src={aboutSchoolLine_1008}
              alt='about_school_line_1008'
              className='hidden mx-auto lg:block xl:hidden'
            />
            <img
              src={aboutSchoolLine_1920}
              alt='about_school_line_1920'
              className='hidden mb-16 mr-16 xl:block'
              width={788}
              height={672}
            />
          </div>
        </div>
      </section>
      <section className='bg-green-08 h-[1125px] md:h-[1954px] lg:h-[2147px] xl:h-[1414px] pt-[72px] md:pt-[121px] lg:pt-[218px] xl:pt-[218px]'>
        <div className='flex flex-col items-center justify-center w-full md:w-[552px] lg:w-[870px] xl:w-[1398px] gap-3 mb-10 md:items-start md:mx-auto md:mb-[82px] xl:mb-[138px]'>
          <h1 className='text-2xl leading-7 md:text-[40px] md:leading-[48px] lg:text-[40px] lg:leading-[48px] font-semibold'>
            SCHOOL Line
            <strong>の特徴</strong>
          </h1>
          <p className='text-xl font-normal leading-6 text-gray-08 md:text-2xl md:leading-7'>機能紹介</p>
        </div>
        <div className='w-[342px] md:w-[552px] lg:w-[640px] xl:w-[1360px] mx-auto flex flex-col gap-10 md:gap-20 lg:gap-[60px] xl:gap-x-20 xl:gap-y-[104px] xl:grid xl:grid-cols-2'>
          {features.map((feature, index) =>
            <div key={`container_${index}`} className='flex flex-col gap-3 md:gap-8 xl:gap-10'>
              <p className='h-8 md:h-[60px] px-4 md:px-6 lg:px-[22px] text-sm leading-4 md:text-[28px] md:leading-[33px] rounded-lg md:rounded-xl bg-green-05 font-semibold inline-flex items-center'>{feature.title}</p>
              <ul key={`${feature.title}_${index}`} className='grid gap-[6px] lg:gap-5 grid-cols-3 h-[148px] md:h-[240px] lg:h-[260px]'>
                {feature.children.map((child, childIdx) =>
                  <FeatureCard key={`${child.description}_${childIdx}`} {...child} />
                )}
              </ul>
            </div>
          )}
        </div>
      </section>
      <section className='pt-12 md:pt-[248px] bg-white h-[806px] md:h-[1551px] xl:h-[1260px]'>
        <div className='w-[343px] md:w-[528px] lg:w-[904px] xl:w-[1360px] bg-green-08 rounded-3xl md:rounded-[44px] border-[1.17px] md:border-2 p-[30px] pt-11 md:p-[23px] md:pt-12 lg:px-[92px] lg:pt-[100px] xl:px-[116px] xl:pb-[134px] border-white shadow-[0px_0.59px_11.74px_0px_#0000001F] md:shadow-[0px_1px_20px_0px_#0000001F] mx-auto'>
          <p className='text-xl font-bold leading-6 text-center md:text-left md:text-4xl md:leading-[43px] lg:text-[40px] lg:leading-[48px] lg:text-center xl:mx-[54px]'>SCHOOL Lineのビジョン</p>
          <div className={`
            py-[14px] px-[18px] mt-7 text-xs leading-5 rounded-[9px]
            md:py-6 md:px-[31px] md:text-xl md:leading-9 md:mt-16 md:rounded-2xl
            lg:px-12 lg:mt-20 lg:text-2xl
            xl:px-[58px] xl:leading-7 xl:mx-[54px]
            font-bold text-white bg-green-03 w-full xl:w-max 
          `}>
            学校DX化による効率化と、学生たちへのDＸ化適応を目指すトータルコミュニケーション
          </div>
          <div className='xl:inline-flex xl:mt-[65px] xl:gap-[84px]'>
            <div className='mx-auto my-6 w-fit md:my-[46px] lg:mt-[60px] lg:mb-14 xl:my-0'>
              <Vision_375 className='block md:hidden' />
              <Vision_640 className='hidden md:block' />
            </div>
            <ul className='flex flex-col gap-3 text-xs leading-[18px] font-medium md:text-xl md:gap-5 md:leading-8 lg:px-5 xl:px-0'>
              <li>
                教育現場はDX化が最も遅れている業界の一つと言われています。<br className='hidden lg:block' />
                学校運営の効率化といった指摘が声高に叫ばれている<br className='hidden lg:block' />
                にも拘わらずなかなか実現していません。
              </li>
              <li>
                こうした遅れは学生たちにも影響を与えます。海外における一部の国では、学校運営DX化だけでなく、積極的に学生たちがITツールに触れる機会が増え、効率的に学校生活や学習に役立てています。
              </li>
              <li>
                SCHOOL Lineは、教育現場の効率化という恒久的な問題のみならず、学生たちが自主的にITツールにふれ、より学校生活に活用してもらうためのトータルコ<br className='hidden lg:block' />
                ミュニケーションツールです。こうした問題に対する解決と学生たちの成長の一助となることを願っています。
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={`bg-green-08 h-[306px] md:h-[522px] lg:h-[600px] px-[65px] pt-[69px] pb-24 md:pt-[118px] lg:pt-[136px] flex flex-col items-center bg-no-repeat bg-[bottom_left] bg-[url(/src/assets/images/contact_us_bg_375.svg)] md:bg-[url(/src/assets/images/contact_us_bg_640.svg)] lg:bg-[url(/src/assets/images/contact_us_bg_1008.svg)] xl:bg-[url(/src/assets/images/contact_us_bg_1920.svg)]`}>
        <strong className='text-base leading-5 md:text-[28px] md:leading-[33px] lg:text-[40px] lg:leading-[48px]'>
          無料で体験版製品をご利用ください!
        </strong>
        <span className='text-xs leading-[14px] mt-[17px] mb-[39px] md:text-xl md:leading-6 md:mt-7 md:mb-16 lg:text-2xl lg:leading-7 lg:mt-6 lg:mb-[72px]'>
          O일간 무료로 제품을 이용하실 수 있습니다.
        </span>
        <a
          className='rounded-3xl md:rounded-[44px] lg:rounded-[50px] w-[212px] md:w-[364px] lg:w-[420px] h-[52px] md:h-[88px] lg:h-[100px] text-sm md:text-2xl lg:text-[28px] leading-4 md:leading-[30px] lg:leading-[33px] font-bold inline-flex items-center justify-center bg-purple-02 text-white'
          href="mailto:'contact@test.com'"
        >
          お問い合わせ
        </a>
      </section>
    </main>
  )
}

export default Home