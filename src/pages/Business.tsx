import { useState, type FormEvent } from 'react'
import PageHeaderSection from '../components/PageHeaderSection'
import Field, { type FieldProps } from '../components/Field'

const Content = () => {
  const [formValue, setFormValue] = useState({
    companyName: '',
    lastName: '',
    firstName: '',
    canaLastName: '',
    canaFirstName: '',
    email: '',
    phoneNumber: '',
    inquiryDetail: '',
  })

  const fields = [
    {
      label: '会社名・所属先名',
      name: 'companyName' as const,
      type: 'text' as FieldProps['type'],
      required: true
    },
    [
      {
        label: '姓',
        name: 'lastName' as const,
        type: 'text' as FieldProps['type'],
        required: true
      },
      {
        label: '名',
        name: 'firstName' as const,
        type: 'text' as FieldProps['type'],
        required: true
      },
    ],
    [
      {
        label: '姓（カナ）',
        name: 'canaLastName' as const,
        type: 'text' as FieldProps['type'],
        required: true
      },
      {
        label: '名（カナ）',
        name: 'canaFirstName' as const,
        type: 'text' as FieldProps['type'],
        required: true
      }
      ,
    ],
    {
      label: 'メールアドレス',
      name: 'email' as const,
      type: 'email' as FieldProps['type'],
      required: true
    },
    {
      label: '電話番号',
      name: 'phoneNumber' as const,
      type: 'tel' as FieldProps['type'],
      required: true
    },
    {
      label: 'お問い合わせ内容',
      name: 'inquiryDetail' as const,
      type: 'textarea' as FieldProps['type'],
      required: false
    },
  ];
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleInputChange = (value: string, name: keyof typeof formValue) => {
    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  return (<main>
    <PageHeaderSection title='お問い合わせ'>
      <>
        <h2 className={`
            mb-[18px] text-base leading-5 pt-[37px]
            md:mb-7 md:text-[28px] md:leading-[34px] md:pt-[68px]
            font-bold text-center
          `}>
          SCHOOL Line 利用 / 質問お問い合わせ
        </h2>
        <p className={`
            w-[260px] text-xs leading-[18px] pb-5
            md:w-[442px] md:text-[18px] md:leading-[30px] md:pb-[32px]
            lg:pb-[30px]
            xl:w-full xl:pb-[68px]
            text-center -tracking-[0.04em] text-gray-08 font-medium
          `}>
          スクールラインを通じて先生と学生、両親とのコミュニケーションを円滑にすることができます
        </p>
      </>
    </PageHeaderSection>
    <section>
      <form
        onSubmit={handleSubmit}
        className={`
          w-[343px] pt-11 pb-12
          md:w-[584px] md:pt-[98px] md:pb-[176px]
          lg:w-[784px] lg:pt-[100px] lg:pb-[200px]
          xl:w-[1200px] xl:pt-[127px]
          flex flex-col mx-auto`
        }>
        <div className='gap-[14px] md:gap-10 flex flex-col'>
          {fields.map((field, idx) =>
            Array.isArray(field)
              ? (
                <div className='gap-[15px] md:gap-4 grid grid-cols-2' key={`field_${idx}`}>
                  {field.map((item) =>
                    <Field
                      {...item}
                      key={item.name}
                      value={formValue[item.name]}
                      onChange={(val) => handleInputChange(val, item.name)}
                    />
                  )}
                </div>
              )
              : (
                <Field
                  {...field}
                  key={field.name}
                  value={formValue[field.name]}
                  onChange={(val) => handleInputChange(val, field.name)}
                />
              ))}
        </div>
        <div className='mx-auto mb-8 mt-11 md:mt-20 md:mb-12'>
          <strong className='text-xs md:text-sm leading-[14px] md:leading-4 mb-[9px] md:mb-4'>お問い合わせ前にご確認ください</strong>
          <p className='text-xs md:text-sm leading-[18px] md:leading-5 lg:leading-6'>お問い合わせの内容によっては、お返事にお時間をいただく場合がございます。あらかじめご了承くださいますようお願いいたします。ご入力メールアドレスに誤りがある場合や受信設定されていない場合は、返信できかねます。お手数ですが、送信前に今一度ご確認をお願いします。</p>
        </div>
        <div className='py-[18px] px-5 md:p-8 rounded-[7px] md:rounded-xl mb-9 md:mb-16 mx-auto xl:mx-0 bg-purple-05'>
          <strong className='text-xs md:text-sm leading-[14px] md:leading-4 mb-[9px] md:mb-4'>個人情報の取り扱いについて</strong>
          <div className='text-xs md:text-sm leading-[18px] md:leading-5 lg:leading-6'>
            当社は、個人情報保護に関する法律及びその他の関連法令等を遵守し、管理責任者の下で厳重なセキュリティ対策を実施し、適正に個人情報を管理しています。<br />
            当社は、お客様から取得した個人情報を次の目的で利用します。
            <ul>
              <li>
                - 当社サービスの提供やお客様へのお問い合わせ対応などのサポートを提供
              </li>
              <li>
                - 当社または株式会社Knowlegeshare、株式会社UC Wareの商品/サービス/キャンペーンについてのご案内
              </li>
              <li>
                - 各種調査、統計·マーケティング資料の作成および研究、企画および開発
              </li>
              <li>
                - その他当社プライバシーポリシーで示す目的
              </li>
            </ul>
          </div>
        </div>
        <button className='h-9 md:h-[52px] w-[210px] md:w-[360px] rounded-[30px] md:rounded-[52px] text-xs md:text-xl leading-[14px] md:leading-6 mx-auto font-bold text-white bg-purple-01'>個人情報の取扱いに同意して提出</button>
      </form>
    </section>
  </main>)
}

export default Content