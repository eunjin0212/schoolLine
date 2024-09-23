import Accordion from '../components/Accordion'
import ContactCard from '../components/ContactCard'

const Faq = () => {
  const faqs = [
    {
      question: '導入までの期間はどれぐらいかかりますか？',
      answer: '一か月から2か月を想定しています。<br />ヒアリングから最適プランのご提案まで、営業とエンジニアが導入までサポートします',
    },
    {
      question: '保護者や学生たちがアプリを使いこなせるか不安です?',
      answer: 'ご安心ください。弊社営業が導入時には説明会を行います。<br />直接及びオンラインでの説明をさせて頂き、安心して使っていただけるまで適切にサポートいたします。',
    },
    {
      question: 'Android・iosの端末でもつかえますか?',
      answer: 'Android、ios両方ご利用いただけます。<br />PC環境でも問題ございません',
    },
    {
      question: '卒業者や入学者の登録はどのように行いますか？',
      answer: '管理者ページを別途提供いたしますので、卒業者は削除し、入学者はあらたにアプリのダウンロードのガイドをしたのち、登録する必要があります。この作業につきましては弊社が代行することも可能です',
    },
  ]
  return (
    <main className='bg-gray-01 pt-[71px] md:pt-[148px] pb-12 md:pb-28 lg:pb-[200px]'>
      <div className='w-[343px] md:w-[584px] lg:w-[870px] xl:w-[1196px] mx-auto'>
        <h1 className={`
          text-xl leading-6 mb-[45px] 
          md:text-4xl md:leading-[42px] md:mb-[76px]
          font-bold
        `}>
          よくあるご質問
        </h1>
        <div className='flex flex-col gap-[7px] md:gap-[13px]'>
          {faqs.map((faq) =>
            <Accordion {...faq} key={faq.question} />
          )}
        </div>
        <ContactCard
          title='他に質問はありますか？'
          description='学校に導入したい方、使用方法を知りたい方、どんな質問でもお気軽にお問い合わせください'
          button='お問い合わせ'
          buttonPath='/business'
        />
      </div>
    </main>
  )
}

export default Faq