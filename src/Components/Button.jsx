import React from 'react'

const Button = ({label ,iconURL,borderColor,backgroundColor,textcColor,fullwidth}) => {
  return (
    <button className={`flex justify-center items-center gap-1 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${fullwidth && 'w-full'}
${backgroundColor ? `${backgroundColor} ${borderColor} ${textcColor} `:'bg-coral-red  text-white border-coral-red'}`}>
        {label}
        {iconURL && <img src={iconURL} alt="arrowRight icon" className='ml-2  rounded-full w-5 h-5' />}
    </button>
  )
}

export default Button
