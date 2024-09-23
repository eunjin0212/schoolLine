import { Fragment } from 'react/jsx-runtime'
import { ProgressArrow_1008, ProgressArrow_375, ProgressArrow_640 } from '../assets/ProgressArrow'
import ContactCard from '../components/ContactCard'
import PageHeaderSection from '../components/PageHeaderSection'
import ProcessCard from '../components/ProcessCard'

const Content = () => {
  const processes = [
    {
      title: 'お問い合わせページから<br class="block md:hidden" />フォー<br class="hidden md:block lg:hidden" />ムを作成',
      description: 'お問い合わせページでフォームにご記入の上、ご提出いただければ担当者から速やかにご連絡いたします。',
    },
    {
      title: '担当者の連絡',
      description: 'フォームにご記入いただいたお電話、またはメールでSCHOOL Lineをご説明いたします。<br class="hidden xl:block" /> お問い合わせにご記入いただいた内容とご不明な点など、どれでもお知らせします。',
    },
    {
      title: 'サービス利用申請',
      description: '相談を通じてすぐにサービスの使用をご希望の場合は、担当者が受付いたします。<br class="hidden xl:block" />作成していただいたフォームに基づいて、新しい情報の入力が必要になる場合があります。',
    },
    {
      title: 'アカウント作成',
      description: '申し込み受付後、契約が締結されたらSCHOOL Lineがアカウントを準備いたします。',
    },
    {
      title: '初期設定完了後に使用',
      description: '案内に従って、学生、先生、両親、教職員の名簿を登録した後、初期設定が完了したら、配布<br class="hidden xl:block" />したアカウントを通じてサービスを利用できます。',
    },
  ]
  return (
    <main>
      <PageHeaderSection title='導入の流れ'>
        <>
          <h2 className={`
            mb-[18px] text-lg leading-5 pt-7
            md:mb-[14px] md:text-[28px] md:leading-9 md:pt-[76px]
            lg:mb-7 lg:leading-[34px] lg:pt-[68px]
            font-bold text-center text-purple-06
          `}>
            SCHOOL Line 導入される過程
          </h2>
          <p className={`
            text-xs leading-[19px] pb-7
            md:w-[468px] md:text-[18px] md:leading-8 md:pb-[75px]
            lg:w-full lg:pb-[69px] lg:leading-5
            text-center -tracking-[0.04em]
          `}>
            学校側でSCHOOL Lineを導入する過程を<br className='block md:hidden' />
            お知らせします
          </p>
        </>
      </PageHeaderSection>
      <section className='mt-12 md:mt-[99px]'>
        <div className={`
          w-[343px] p-6 bg-gray-01 rounded-3xl gap-2
          md:w-[584px] md:px-[42px] md:py-14 md:rounded-[44px]
          lg:w-[784px] lg:p-14 lg:gap-[18px]
          xl:w-[1360px] xl:p-[82px]
          mx-auto flex flex-col items-center
        `}>
          {processes.map((process, idx) =>
            <Fragment key={idx}>
              <ProcessCard idx={idx} {...process} />
              {
                idx < processes.length - 1 &&
                <>
                  <ProgressArrow_375 className='block md:hidden' />
                  <ProgressArrow_640 className='hidden md:block lg:hidden' />
                  <ProgressArrow_1008 className='hidden lg:block' />
                </>
              }
            </Fragment>
          )}
        </div>
      </section>
      <section className='pb-12 md:pb-[100px] lg:pb-[200px]'>
        <div className='w-[343px] md:w-[584px] lg:w-[784px] xl:w-[1360px] mx-auto'>
          <ContactCard
            title='お問い合わせからすぐに使ってみてください'
            description='スクールラインを通じて先生と学生'
            button='お問い合わせ'
            buttonPath='/content'
          />
        </div>
      </section>
    </main>
  )
}

export default Content