import { useRef, useState } from 'react';
import { DownArrow_375, DownArrow_640 } from '../assets/DownArrow';

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion = ({ question, answer }: AccordionProps) => {
  const [open, isOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null);

  const arrowClassName = 'mr-[3px] md:mr-[6px] ml-4'
  const badgeClassName = 'w-5 h-5 mr-[15px] text-xs leading-[14px] md:w-9 md:h-9 md:mr-6 md:text-xl md:leading-6 rounded-full flex-shrink-0 flex items-center justify-center'
  return (
    <aside>
      <div
        className={`
          p-4 shadow-[0px_1px_12px_0px_#00000014] rounded-xl  
          md:py-[26px] md:px-7 md:shadow-[0px_1px_20px_0px_#00000014] md:rounded-[20px] 
          w-full flex items-center justify-between bg-white cursor-pointer
        `}
        onClick={() => isOpen((prev) => !prev)}
      >
        <strong className={['bg-purple-03 text-white', badgeClassName].join(' ')}>
          Q
        </strong>
        <div className={`
          text-xs leading-[18px]
          md:text-base md:leading-5
          flex-1
        `}>
          {question}
        </div>
        <DownArrow_375 className={['block md:hidden', arrowClassName].join(' ')} />
        <DownArrow_640 className={['hidden md:block', arrowClassName].join(' ')} />
      </div>
      <div
        className="overflow-hidden duration-300 ease-in-out transition-max-height"
        style={{ maxHeight: open ? `${contentRef.current?.scrollHeight}px` : '0px' }}
        ref={contentRef}
      >
        <div className='flex items-start p-4 md:p-7'
        >
          <strong className={['bg-green-05 text-white', badgeClassName].join(' ')}>
            A
          </strong>
          <div className='flex-1 text-xs leading-[18px] md:text-base md:leading-8' dangerouslySetInnerHTML={{ __html: answer }}>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Accordion