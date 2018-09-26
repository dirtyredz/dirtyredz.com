import React from 'react'
import './greyBox.css'

const GreyBox = props => {
  const { nobottomedge, children, ...rest } = props
  return(
    <div className="GreyBox" style={nobottomedge ? {paddingBottom: 0} : {}}>
      <div className="GreyBox_Content" {...rest}>
        <div className="GreyBox_UpperEdge"></div>
        {children}
        <div className="GreyBox_BottemEdge"></div>
      </div>
    </div>
  )
}

export default GreyBox