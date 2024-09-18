interface ProcessCardProps {
  idx: number;
  title: string;
  description: string;
}

const ProcessCard = ({ idx, title, description }: ProcessCardProps) => {
  const step = idx < 10 ? `0${idx + 1}` : idx + 1
  return (<div className={`
    h-32 rounded-xl shadow-[0px_1px_12px_0px_#00000014] gap-7 pl-7 pr-[17px]
    md:h-[200px] md:rounded-[20px] md:shadow-[0px_1px_20px_0px_#00000014] md:gap-[34px] md:pl-[53px] md:pr-[60px]
    lg:h-[180x] lg:gap-[68px] lg:pl-[72px] lg:pr-[80px]
    xl:justify-start
    w-full flex justify-center items-center bg-white
  `}>
    <strong className={`
      text-[28px] leading-[34px]
      md:text-[50px] md:leading-[60px]
      text-purple-01
    `}>{step}</strong>
    <ul>
      <li className={`
        text-xs leading-[14px] mb-[10px]
        md:text-xl md:leading-6 md:mb-5
        font-bold
      `}
        dangerouslySetInnerHTML={{ __html: title }}
      >
      </li>
      <li className={`
        text-[10px] leading-[14px] -tracking-[0.03em]
        md:text-sm md:leading-6 md:-tracking-[0.02em]
      `}
        dangerouslySetInnerHTML={{ __html: description }}
      >
      </li>
    </ul>
  </div>)
}

export default ProcessCard