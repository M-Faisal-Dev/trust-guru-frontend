import React from 'react'

const Head = (props) => {
  return (
    <th scope="col" className="lg:px-5 md:px-2 sm:px-3 xxs:px-3 pt-[17px] pb-5 ">
    {props.tablehead}
    </th>
  )
}

export default Head