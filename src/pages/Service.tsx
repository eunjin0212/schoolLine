import { Fragment } from 'react'
import { ReportingTitle_375, ReportingTitle_640, ReportingTitle_1008 } from '../assets/ReportingTitle'
import { CommunicationTitle_375, CommunicationTitle_640 } from '../assets/CommunicationTitle'
import { StudyPlanningSupport_375, StudyPlanningSupport_640 } from '../assets/StudyPlanningSupport'
import { Reporting_375, Reporting_640 } from '../assets/Reporting'
import { Communication_375, Communication_640 } from '../assets/Communication'
import { SecurityTitle_375, SecurityTitle_640 } from '../assets/SecurityTitle'
import { Security_375, Security_640 } from '../assets/Security'

const Service = () => {
  const services = [
    {
      title: '報告・申告',
      titleIcons: [
        <ReportingTitle_375 className='block md:hidden' />,
        <ReportingTitle_640 className='hidden md:block lg:hidden' />,
        <ReportingTitle_1008 className='hidden lg:block' />,
      ],
      label: '端末を通じた出欠・体調報告',
      description: '家庭からの連絡はスクールラインを通じてシステムに自動登録。<br /> 出欠のみならず、体調報告機能により生徒の体調管理と学校でどのような病気が流行<br class="hidden xl:block" />っているのか統計的に把握が可能で、事前予防対策が取れます（コロナ・食中毒など）',
      icons: [
        <Reporting_375 className='block md:hidden' />,
        <Reporting_640 className='hidden md:block' />,
      ],
    },
    {
      title: 'コミュニケーション',
      titleIcons: [
        <CommunicationTitle_375 className='block md:hidden' />,
        <CommunicationTitle_640 className='hidden md:block' />,
      ],
      subTitle: '（チャット・メッセージ）',
      label: 'チャットによる相談と情報共有',
      description: '学校全体・学年・クラス・部活などあらゆる単位における <br /> グループを作成が可能で、それぞれに必要な情報を一度に共有することができます。<br class="hidden xl:block" />また、学習相談・生活相談といったチャットルームを作ることで直接相談できない悩みをチャットで相談することも可能です。',
      icons: [
        <Communication_375 className='block md:hidden' />,
        <Communication_640 className='hidden md:block' />,
      ],
    },
    {
      title: '安心・安全',
      titleIcons: [
        <SecurityTitle_375 className='block md:hidden' />,
        <SecurityTitle_640 className='hidden md:block' />,
      ],
      label: '端末で学生の正確な位置を把握',
      description: '登下校時間を端末に登録することで、保護者や先生が生徒が <br /> 登下校したかを確認することができます。<br /> また、現在地通知ボタンにより、生徒の位置情報を知ることができます。<br class="hidden xl:block" />事件事故に対する防犯に活用することができます。',
      icons: [
        <Security_375 className='block md:hidden' />,
        <Security_640 className='hidden md:block' />,
      ],
    },
    {
      title: '学事・学習計画支援',
      titleIcons: [
        <StudyPlanningSupport_375 className='block md:hidden' />,
        <StudyPlanningSupport_640 className='hidden md:block' />
      ],
      label: 'ToDo管理による学習計画',
      description: "プロジェクトやToDo管理による学事イベントに対して計画性と生 徒個人のタスクを管理することができます。文化祭、体育祭、委員会活動をサポートします。<br class='hidden lg:block' />ToDoには学習計画を作成することができます。<br class='hidden lg:block' />定期試験や受験に対する準備期間を自ら組み立ててそれを実践することをサポートし<br class='hidden lg:block' />ます。こうした計画のナレッジは後輩たちへと引き継がれ、進学に成功した先輩の学<br class='hidden lg:block' />習計画を模倣することにより、効率的な学習計画を組み立てることも可能です。",
      icons: [
        <Reporting_375 className='block md:hidden' />,
        <Reporting_640 className='hidden md:block' />,
      ],
    },
  ]

  const columns = [
    {
      label: 'サービス',
      value: 'service',
      align: 'text-left justify-left',
      className: 'w-[46px] md:w-[70px] lg:w-[122px] xl:w-[164px]',
    },
    {
      label: '区分',
      value: 'category',
      align: 'text-left justify-left',
      className: 'w-14 md:w-[92px] lg:w-[147px] xl:w-[197px]',
    },
    {
      label: '用途',
      value: 'type',
      align: 'text-left justify-left',
      className: 'w-[102px] md:w-[203px] lg:w-[268px] xl:w-[359px]',
    },
    {
      label: '先生',
      value: 'teacher',
      align: 'text-center justify-center',
      className: 'w-[34px] md:w-[49px] lg:w-[89px] xl:w-[120px]',
    },
    {
      label: '相談教師',
      value: 'counselor',
      align: 'text-center justify-center',
      className: 'w-[34px] md:w-[71px] lg:w-[89px] xl:w-[120px]',
    },
    {
      label: '学生',
      value: 'student',
      align: 'text-center justify-center',
      className: 'w-[34px] md:w-[49px] lg:w-[89px] xl:w-[120px]',
    },
    {
      label: '保護者',
      value: 'parent',
      align: 'text-center justify-center',
      className: 'w-[34px] md:w-[49px] lg:w-[89px] xl:w-[120px]',
    },
  ] as const

  const rows = [
    {
      service: 'コミュニケーション' as const,
      details: [
        {
          category: '組織図',
          type: 'グループ・学年、クラス別\n使用者-教職員、学生、保護者',
          teacher: 'O',
          counselor: 'O',
          student: 'O',
          parent: 'O'
        },
        {
          category: 'チャット',
          type: '教職員、学生、保護者間のチャット\n個別、グループ別のチャット、ファ\nイル転送',
          teacher: 'O',
          counselor: 'O',
          student: 'O',
          parent: 'O'
        },
        {
          category: 'メッセージ',
          type: '一括通知 - 教職員、学生、保護者\nメッセージ、ファイル、受信確認',
          teacher: 'O',
          counselor: 'O',
          student: 'O',
          parent: 'O'
        },
        {
          category: 'オンライン会\n議・授業',
          type: 'オンライン会議、授業、相談\n画面共有、文書共有',
          teacher: 'O',
          counselor: 'O',
          student: 'O',
          parent: 'O'
        }
      ]
    },
    {
      service: '相談' as const,
      details: [
        {
          category: 'チャット相談',
          type: '学習相談、生活相談、いじ\nめ相談 1:1秘密相談',
          teacher: 'O',
          counselor: 'O',
          student: 'O',
          parent: ''
        }
      ]
    },
    {
      service: '学事支援' as const,
      details: [
        {
          category: 'スケジュール',
          type: '学事日程管理',
          teacher: 'O',
          counselor: '',
          student: 'O',
          parent: ''
        },
        {
          category: 'ToDo',
          type: '学習計画と業務登録、\nステータス把握',
          teacher: 'O',
          counselor: '',
          student: 'O',
          parent: ''
        },
        {
          category: '学事プロ\nジェクト',
          type: '学事に関する担当指づけ、\n業務内容管理',
          teacher: 'O',
          counselor: '',
          student: 'O',
          parent: ''
        },
        {
          category: 'お知らせ\n掲示板',
          type: '学校全体、クラス別お知らせ掲示板、\n授業内容配布',
          teacher: 'O',
          counselor: '',
          student: 'O',
          parent: 'O'
        },
        {
          category: '予約',
          type: '会議室、空き教室、教材、\n体育館など予約',
          teacher: 'O',
          counselor: '',
          student: 'O',
          parent: 'O'
        }
      ]
    },
    {
      service: '登下校' as const,
      details: [
        {
          category: '登下校登録\n/確認',
          type: '生徒の登下校状況の通知',
          teacher: 'O',
          counselor: '',
          student: 'O',
          parent: 'O'
        }
      ]
    },
    {
      service: '学生生活' as const,
      details: [
        {
          category: '欠席/遅刻/早退',
          type: '学生の出席、遅刻、\n早退届出及び通知',
          teacher: 'O',
          counselor: '',
          student: 'O',
          parent: 'O'
        },
        {
          category: '現在地通知',
          type: '災害や緊急事態発生時に現在地と\n状況を学校・保護者に通知',
          teacher: 'O',
          counselor: '',
          student: 'O',
          parent: 'O'
        },
        {
          category: '心の状態',
          type: '生徒の心の状態把握',
          teacher: 'O',
          counselor: 'O',
          student: 'O',
          parent: 'O'
        },
        {
          category: '体の状態',
          type: '生徒の体調把握',
          teacher: 'O',
          counselor: 'O',
          student: 'O',
          parent: 'O'
        }
      ]
    },
    {
      service: 'SOS' as const,
      details: [
        {
          category: 'SOS緊急自信',
          type: 'いじめ、事故、家庭の悩みなどが\nある場合にワンクリックで通知',
          teacher: 'O',
          counselor: 'O',
          student: 'O',
          parent: ''
        }
      ]
    },
    {
      service: 'お知らせ' as const,
      details: [
        {
          category: '通知',
          type: 'リアルタイム通知',
          teacher: 'O',
          counselor: 'O',
          student: 'O',
          parent: 'O'
        }
      ]
    },
  ]

  return (
    <main>
      <section className='h-[305px] md:h-[521px] lg:h-[560px] bg-purple-02 flex items-end justify-center'>
        <div className='w-[342.19px] md:w-[584px] lg:w-[896px] xl:w-[1440px]'>
          <h1 className='text-2xl md:text-[40px] leading-7 md:leading-[48px] font-extrabold tracking-widest text-white'>サービス紹介</h1>
          <div className='inline-flex flex-col items-center justify-end w-full bg-white mt-11 md:mt-[75px] pt-6 md:pt-[42px] lg:py-[61px]'>
            <h2 className='w-[274.22px] md:w-[468px] lg:w-[630px] mb-2 md:mb-[14px] lg:mb-7 text-lg md:text-[32px] leading-5 md:leading-9 lg:leading-[48px] font-bold text-center'>SCHOOL Lineは先生と学生、保護者がコミュニケーションを円滑にサポートします。</h2>
            <p className='w-[274.22px] md:w-[468px] lg:w-full text-xs md:text-[18px] leading-[18px] md:leading-8 mb-1 md:mb-[10px] lg:mb-0 text-center -tracking-[0.04em]'>学校DX化による効率化と、学生たちへのDＸ化適応を目指すトータルコミュニケーション</p>
          </div>
        </div>
      </section>
      <section className='bg-white pb-[34px]'>
        <div className='mt-[58px] md:mt-[100px] lg:mt-[164px] flex flex-col gap-16 lg:gap-40 items-center'>
          {services.map((service, index) =>
            <div
              key={`title_${index}`}
              className='w-[343px] md:w-[584px] lg:w-[659px] xl:w-[1267px] mx-auto xl:flex xl:odd:flex-row-reverse xl:justify-between'
            >
              <div className='flex flex-col items-center lg:items-start xl:justify-center'>
                <h3 className='inline-flex items-center justify-center w-full gap-3 lg:justify-start md:gap-5 lg:gap-6'>
                  {service.titleIcons.map((icon, idx) => <Fragment key={`icon_${idx}`}>{icon}</Fragment>)}
                  <strong className='text-base leading-[19px] md:text-[28px] md:leading-[33px]'>{service.title}</strong>
                </h3>
                {service.subTitle &&
                  <p className='text-base md:text-[28px] lg:text-[32px] leading-5 md:leading-[33px] lg:leading-[38px] mt-[10px] md:mt-[18px] text-center lg:mb-[3px]'>
                    {service.subTitle}
                  </p>
                }
                <span className={`
                rounded-3xl md:rounded-[40px] py-2 md:py-4 px-3 md:px-5 text-sm md:text-xl lg:text-2xl leading-[14px] md:leading-6 lg:leading-7 mt-7 md:mt-12 lg:mt-14 block mx-auto lg:mx-0 w-fit bg-green-06 -tracking-[0.01em]
              `}>
                  {service.label}
                </span>
                <p
                  className='mt-[18px] md:mt-7 lg:mt-6 mb-[30px] md:mb-12 lg:mb-[60px] xl:mb-0 text-xs md:text-lg leading-[18px] md:leading-8 text-center lg:text-left xl:w-[659px]'
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />
              </div>
              {service.icons.map((icon, idx) =>
                <div key={`serviceIcon_${idx}`} className='mx-auto w-fit lg:mx-0'>
                  {icon}
                </div>)}
            </div>
          )}
        </div>
      </section>
      <section className='py-8 md:py-[72px] bg-gray-01 h-fit'>
        <ul className='w-fit mx-auto rounded-lg md:rounded-[10px] lg:rounded-[15px] flex flex-col border-[0.10px] overflow-hidden shadow-[0px_0.29px_6px_0px_#0000001F] bg-white'>
          <li className='flex w-full'>
            {columns.map(col =>
              <div
                key={col.label}
                className={[
                  'bg-purple-01 text-white font-semibold text-[4px] leading-[5px] md:text-xs lg:text-base border-r-[0.10px] last-of-type:border-r-0 border-gray-06',
                  col.align,
                  'py-[6px] md:py-[14px] xl:py-6 px-[9px] md:px-[7px] lg:px-6 xl:px-8 md:text-nowrap',
                  col.className,
                ].join(' ')}>
                {col.label}
              </div>
            )}
          </li>
          {rows.map((row) => (
            <li key={row.service} className='flex w-full odd:bg-gray-02'>
              {columns.map(col =>
                col.value === 'service' ?
                  <div
                    key={col.value}
                    className={[
                      'inline-flex text-[4px] leading-[5px] md:text-xs xl:text-[15] xl:leading-[17x] border-t-[0.10px] border-gray-06 px-[9px] md:px-[10px] py-[6px] md:py-[14px] lg:px-6 xl:px-8 lg:whitespace-normal',
                      row.details.length === 1 && 'items-center',
                      col.align,
                      col.className,
                    ].join(' ')}
                  >
                    {row[col.value]}
                  </div>
                  :
                  <div
                    key={col.value}
                    className={[
                      'inline-flex flex-col items-center justify-center border-t-[0.10px] border-gray-06',
                      col.className,
                    ].join(' ')}
                  >
                    {row.details.map((data) =>
                      <span
                        key={data.category}
                        className={[
                          'inline-flex items-center h-[18px] md:h-[55px] text-[4px] leading-[5px] md:text-xs xl:text-[15px] xl:leading-[17px] whitespace-pre lg:whitespace-normal px-[9px] md:px-3 lg:px-6 xl:px-8 border-gray-06 border-l-[0.10px]',
                          col.align,
                          col.className,
                          row.details.length > 1
                            ? row.details.length % 2 === 0
                              ? 'odd:bg-gray-02 even:bg-white'
                              : 'odd:bg-white even:bg-gray-02'
                            : rows.length % 2 === 0 && 'bg-white'
                        ].join(' ')}
                      >{data[col.value]}</span>
                    )}
                  </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Service