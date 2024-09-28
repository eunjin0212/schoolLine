import PageHeaderSection from '../components/PageHeaderSection'
import PlanCard from '../components/PlanCard'
import ContactCard from '../components/ContactCard'

const Plan = () => {
  const plans = [
    {
      name: 'Free' as const,
      titleClass: '!bg-green-07',
      description: 'UCWORKSをテスト使用しようとする顧客企業として60日使用制限',
      scopeClass: '!bg-green-01',
      price: 0,
      scopes: [
        {
          title: 'ユーザー数 / ストレージ容量 / アップロード容量',
          list: [
            '100人のユーザー数',
            '5GB 基本提供',
            '0MBファイルアップロード制限',
          ]
        },
        {
          title: '提供機能',
          list: [
            '組織図.',
            'オンライン状態',
            'メモ',
            '対話',
            'ファイル転送',
            '最大10人/ 60分制限テレビ会議',
            'Zoom会議',
            '1つのワークスペース掲示板を作成',
            'スケジュール管理',
            'すべき仕事',
            '1つのプロジェクト作成',
            '資源予約',
            '会話、メモ、ファイル翻訳',
          ]
        }
      ],
    },
    {
      name: 'Standard' as const,
      description: 'ワークスペースの円滑なコミュニケーションと協業のためのサービスをご希望のお客様',
      price: 600,
      scopes: [
        {
          title: 'ユーザー数 / ストレージ容量 / アップロード容量',
          list: [
            'ユーザー数 無制限',
            '100GB 基本容量提供',
            '1TB 100,000ウォン/月追加容量',
            '500MBファイルアップロード制限',
          ]
        },
      ],
    },
    {
      name: 'Enterprise' as const,
      description: '大容量でファイルを管理し、他システムとの連動を希望する顧客',
      price: 1000,
      scopes: [
        {
          title: 'ユーザー数/ ストレージ容量/ アップロード容量',
          list: [
            'ユーザー数 無制限',
            '1TB 基本 容量 提供',
            '1TB 100,000ウォン/月追加容量',
            'ファイルアップロード容量無制限',
          ]
        },
      ],
    }
  ]

  return (<main>
    <PageHeaderSection title='利用プラン'>
      <>
        <h2 className={`
            mb-[18px] text-base leading-5 pt-[37px]
            md:mb-7 md:text-[28px] md:leading-[34px] md:pt-[68px]
            font-bold text-center
          `}>
          SCHOOL Line 利用プラン
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
    <section className='pt-[60px] md:pt-[100px]'>
      <div
        className={`
          w-[343px] p-11 rounded-3xl gap-[35px]
          md:w-[584px] md:px-28 md:py-20 md:rounded-[44px] md:gap-[60px]
          lg:w-[784px] lg:px-[211px] lg:py-20
          xl:w-[1360px] xl:flex-row xl:gap-8 xl:py-[88px] xl:px-[108px]
          bg-gray-01 flex flex-col mx-auto
        `}
      >
        {plans.map(plan => (
          <PlanCard
            {...plan}
            key={plan.name}
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
          buttonPath='/business'
        />
      </div>
    </section>
  </main>)
}

export default Plan