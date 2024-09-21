import { Link } from 'react-router-dom';

interface ContactCardProps {
  title: string;
  description: string;
  button: string;
  buttonPath: string;
}

const ContactCard = ({ title, description, button, buttonPath }: ContactCardProps) => {
  return (
    <div className={`
      shadow-[0px_1px_11px_0px_#00000014] rounded-xl mt-12 px-10 py-[30px]
      md:shadow-[0px_1px_20px_0px_#00000014] md:rounded-[20px] md:mt-[51px] lg:mt-[80px] md:px-[102px] md:py-[52px]
      flex flex-col items-center justify-center
    `}>
      <strong className={`
        text-sm leading-4 
        md:text-xl md:leading-6 
        font-semibold text-center
      `}>
        {title}
      </strong>
      <p className={`
        text-xs leading-[14px] mt-2 
        md:text-sm md:leading-4 md:mt-5
        text-center
      `}>
        {description}
      </p>
      <Link className={`
        mt-7 w-[178px] py-2 rounded-[30px] text-xs leading-[14px]
        md:mt-[23px] md:w-[304px] md:py-[14px] md:rounded-[52px] md:text-xl md:leading-6
        lg:mt-10
        inline-flex justify-center font-bold text-white bg-purple-05
      `}
        to={buttonPath}
      >
        {button}
      </Link>
    </div>
  )
}
export default ContactCard