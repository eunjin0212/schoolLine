import { ListCheck_375, ListCheck_640 } from '../assets/ListCheck';

interface PlanCardProps {
  name: string;
  titleClass?: string;
  price: number;
  scopes: { title: string, list: string[] }[];
  description: string;
  scopeClass?: string;
}

const PlanCard = ({ name, titleClass, price, description, scopes, scopeClass }: PlanCardProps) => {
  return (
    <div
      className={[`
        rounded-xl shadow-[0px_1px_11px_0px_#00000014]
        md:rounded-3xl md:shadow-[0px_1px_20px_0px_#00000014]
        overflow-hidden w-full bg-white flex flex-col`,
      ].join(' ')}
    >
      <strong className={[
        `text-sm leading-4 py-3
        md:text-2xl md:leading-7 md:py-[22px]
        flex justify-center items-center tracking-[0.04em] text-white bg-gray-10`,
        titleClass
      ].join(' ')}>
        {name}
      </strong>
      <div className={`px-4 pb-4 flex flex-col h-full`}>
        <strong className={`
          text-[40px] leading-[48px] my-6
          md:text-[60px] md:leading-[71px] md:mt-12
          flex justify-center items-end md:gap-2 text-[#8430BB]
        `}>
          <span className='text-2xl md:text-[32px] block'>¥</span>{price}
        </strong>
        <p className={`text-xs leading-[14px] mb-3 md:text-sm md:leading-4 md:mb-7 text-center text-[#777777]`}>1人契約基準</p>
        <p className={`
        text-xs leading-[14px] mb-4
        md:text-sm md:leading-6 md:mb-8
        lg:mx-[31px]
        font-medium text-center`}>{description}</p>
        <ul className={[`
          rounded-lg p-3 gap-5
          md:rounded-xl md:p-7
        bg-purple-02/[0.15] flex flex-col flex-1`,
          scopeClass
        ].join(' ')}>
          {scopes.map(scope =>
            <li key={scope.title}>
              <p className={`
                text-[10px] leading-3 mb-2 
                md:text-sm md:leading-4 md:mb-3 
                font-semibold -tracking-[0.04em]
              `}>{scope.title}</p>
              <div className='flex flex-col gap-[10px]'>
                {scope.list.map((text) =>
                  <div key={text} className={`
                  text-[10px] leading-[11px] gap-3
                  md:text-sm md:leading-4
                  flex items-center
                  `}>
                    <ListCheck_375 className='block md:hidden' />
                    <ListCheck_640 className='hidden md:block' />
                    {text}
                  </div>
                )}
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default PlanCard
