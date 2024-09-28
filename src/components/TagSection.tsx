import { useEffect, useRef, useState } from 'react';

interface TagSectionProps {
  cards: {
    title: string;
    items: {
      imgs: JSX.Element[];
      itemTags: string[];
    }[];
  }[]
}

const TagSection = ({ cards }: TagSectionProps) => {
  const cardImgWrapper = useRef<(HTMLDivElement | null)[]>([])
  const [heights, setHeights] = useState<string[]>([]); // 높이 상태를 문자열 배열로 관리

  const updateHeights = () => {
    // 이미지의 가시성을 감지하여 적절한 Tailwind 클래스를 설정
    const newHeights = cardImgWrapper.current.map((el) => {
      const img = el?.querySelector('img');
      if (img) {
        const display = window.getComputedStyle(img).display;
        return display === 'none' ? 'hidden' : 'h-[184px] md:max-h-[240px] md:min-h-[240px] md:h-[240px]';
      }
      return 'hidden'; // 기본적으로 이미지가 없거나 가려진 경우 hidden 적용
    });
    setHeights(newHeights);
  };

  useEffect(() => {
    // 초기 실행 시 높이 업데이트
    updateHeights();

    window.addEventListener('resize', updateHeights);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', updateHeights);
    };
  }, [cards]);
  return (
    <section className={`
      py-16 gap-3 flex flex-col justify-center items-center
      md:py-[100px]
      lg:grid lg:grid-cols-[repeat(2,auto)] lg:items-stretch
      xl:pt-[120px] xl:gap-8
      bg-light-gray-01 relative w-full`}>
      <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 
        border-l-[calc(64px/2)] border-r-[calc(64px/2)] border-t-[23px] 
        md:border-l-[calc(111px/2)] md:border-r-[calc(111px/2)] md:border-t-[39px]
        border-l-transparent border-r-transparent border-white`}>
      </div>
      {cards.map((card, idx) =>
        <div key={card.title} className={`
        w-[343px] py-10 px-[35px] rounded-[36px]
        md:w-[400px] md:p-10
        lg:flex lg:flex-col
        xl:w-[476px]
        ${cards.length % 2 !== 0 && idx === cards.length - 1 ? 'md:col-span-2 md:mx-auto' : ''}
        bg-white border border-green-06
      `}>
          <h6 className={`
            text-base leading-[19px] mb-6
            md:text-2xl md:leading-7 md:mb-9
            text-gray-12 font-bold
          `}>
            {card.title}
          </h6>
          {card.items.map((item, idx) =>
            <div key={`item_${idx}`} className={`h-full inline-flex flex-col justify-between ${idx ? 'mt-11' : ''}`}>
              <ul className='inline-flex flex-wrap gap-[6px] mb-5 md:gap-2 md:mb-11'>
                {item.itemTags.map(tag => <li
                  key={tag}
                  className={`
                    py-[6px] px-3 text-xs leading-[14px] rounded-[26px] tracking-[0.02em]
                    md:py-2 md:px-[14px] md:text-base md:leading-5 md:rounded-[32px]
                    text-white font-medium bg-green-06
                  `}
                ># {tag}</li>)}
              </ul>
              {item.imgs.map((img, imgIdx) =>
                <div
                  ref={(el) => (cardImgWrapper.current[imgIdx] = el)}
                  className={`rounded-xl inline-flex justify-center items-end w-full flex-1 bg-[#E2F5BB] ${heights[imgIdx]}`}
                  key={`img_${imgIdx}`}>
                  {img}
                </div>)}
            </div>)}
        </div>)}
    </section>
  )
}

export default TagSection