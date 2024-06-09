import React from 'react'

const Tablebody = (props) => {
  return (
    <td className="lg:px-5 md:px-2 xxs:px-1 pt-[30px] pb-[38px]">
           {props.tablebody}
    </td>
  )
}

export default Tablebody