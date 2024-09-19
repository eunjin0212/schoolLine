import { useEffect, useState } from 'react';

export interface FieldProps {
  label: string;
  value: string;
  onChange: (arg: string) => void;
  type?: 'text' | 'textarea' | 'email' | 'tel';
  required?: boolean;
  name?: string;
}
const Field = ({ label, value, onChange, required = true, type = 'text' }: FieldProps) => {
  const [inputValue, setInputValue] = useState(value)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const inputClass = 'rounded md:rounded-lg bg-gray-03 p-2 md:p-3 border-0 ring-0 outline-0 focus:ring-0 focus:shadow-none focus:border-none focus:outline-none focus:ring-offset-0'
  return (
    <label
      className={`
        gap-[10px]
        md:gap-4
        flex flex-col
      `}
    >
      <span className='text-sm leading-4 md:text-base md:leading-5'>{label} {required ? '*' : ''}</span>
      {type !== 'textarea'
        ? <input
          className={`h-10 md:h-11 ${inputClass}`}
          type={type}
          onChange={(e) => onChange(e.target.value)}
          value={inputValue}
        />
        : <textarea
          className={`h-20 md:h-[120px] ${inputClass}`}
          onChange={(e) => onChange(e.target.value)}
          value={inputValue}
        />
      }
    </label>
  )
}

export default Field