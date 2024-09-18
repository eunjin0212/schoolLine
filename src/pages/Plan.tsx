import { FreePlan_375, FreePlan_640 } from '../assets/FreePlan'
import { BasicPlan_375, BasicPlan_640 } from '../assets/BasicPlan'
import { ProPlan_375, ProPlan_640 } from '../assets/ProPlan'
import PageHeaderSection from '../components/PageHeaderSection'
import PlanCard from '../components/PlanCard'
import ContactCard from '../components/ContactCard'
import { useState } from 'react'

const Plan = () => {
  const plans = [
    {
      name: 'FREE' as const,
      titleClass: '!bg-green-02',
      description: '体験版として使用',
      scopeClass: '!bg-green-08',
      icons: [
        <FreePlan_375 className='block md:hidden' />,
        <FreePlan_640 className='hidden md:block' />,
      ],
      scopes: [
        '메시지 보기: 최근 40일 이내',
        '사용자 수: 최대 100명/조직',
        '스토리지: 10GB/조직',
        '연락처 수: 조직 외부 20명/1 사용자',
        '채팅/작업 관리/파일 관리',
        '화상 통화/음성 통화: 1대 1',
        '사용자 관리',
      ],
    },
    {
      name: 'BASIC' as const,
      titleIcon: true,
      description: '本格的に多くの機能を使用可能',
      icons: [
        <BasicPlan_375 className='block md:hidden' />,
        <BasicPlan_640 className='hidden md:block' />,
      ],
      scopes: [
        '메시지 보기: 최근 40일 이내',
        '사용자 수: 최대 100명/조직',
        '스토리지: 10GB/조직',
        '연락처 수: 조직 외부 20명/1 사용자',
        '채팅/작업 관리/파일 관리',
        '화상 통화/음성 통화: 1대 1',
        '사용자 관리',
      ],
    },
    {
      name: 'PRO' as const,
      description: '業務に役立つすべての機能を使用',
      icons: [
        <ProPlan_375 className='block md:hidden' />,
        <ProPlan_640 className='hidden md:block' />,
      ],
      scopes: [
        '메시지 보기: 최근 40일 이내',
        '사용자 수: 최대 100명/조직',
        '스토리지: 10GB/조직',
        '연락처 수: 조직 외부 20명/1 사용자',
        '채팅/작업 관리/파일 관리',
        '화상 통화/음성 통화: 1대 1',
        '사용자 관리',
      ],
    }
  ]

  const initClick = {
    FREE: false,
    BASIC: false,
    PRO: false,
  }

  const [isClick, setIsClick] = useState({ ...initClick })

  const handleClick = (val: boolean, name: keyof typeof isClick) => {
    setIsClick(() => ({ ...initClick, [name]: val }))
  }

  return (<main>
    <PageHeaderSection title='利用プラン'>
      <>
        <h2 className={`
            mb-[18px] text-base leading-5 pt-[37px]
            md:mb-7 md:text-[28px] md:leading-[34px] md:pt-[68px]
            font-bold text-center
          `}>
          SCHOOL Line利用プラン
        </h2>
        <p className={`
            w-[260px] text-xs leading-[18px] pb-5
            md:w-[442px] md:text-[18px] md:leading-[30px] md:pb-[32px]
            lg:pb-[30px]
            xl:w-full xl:pb-[68px]
            text-center -tracking-[0.04em] text-gray-08 font-medium
          `}>
          スクールラインの利用プランです。 プランによって 利用できる機能が異なる場合があります。
        </p>
      </>
    </PageHeaderSection>
    <section className='pt-[60px]'>
      <div
        className={`
          w-[343px] px-16 py-12 rounded-3xl gap-[35px]
          bg-gray-01 flex flex-col mx-auto
        `}
      >
        {plans.map(plan => (
          <PlanCard
            {...plan}
            key={plan.name}
            value={isClick[plan.name]}
            onClick={(val) => handleClick(val, plan.name)}
          />
        ))}
      </div>
    </section>
    <section className='pb-12 md:pb-[100px] lg:pb-[200px]'>
      <div className='w-[343px] md:w-[584px] lg:w-[784px] xl:w-[1360px] mx-auto'>
        <ContactCard
          title='お問い合わせからすぐに使ってみてください'
          description='スクールラインを通じて先生と学生、両親とのコミュニケーションを円滑にすることができます'
          button='お問い合わせ'
        />
      </div>
    </section>
  </main>)
}

export default Plan