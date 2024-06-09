import React from 'react'

const MainParagraph = (props) => {
  return (
    // <div>MainParagraph</div>
    <p className='pt-[15px] text-light-purple md:text-base xxs:text-sm font-normal font-Inter max-w-[900px]'>
        {props.mainparagraph}
        </p>
  )
}

export default MainParagraph