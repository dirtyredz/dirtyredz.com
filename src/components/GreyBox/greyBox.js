import React from 'react'
import './greyBox.css'

const GreyBox = props => {
  return(
    <div className="GreyBox" style={props.NoBottomEdge ? {paddingBottom: 0} : {}}>
      <div className="GreyBox_Content" {...props}>
        <div className="GreyBox_UpperEdge"></div>
        {props.children}
        <div className="GreyBox_BottemEdge"></div>
      </div>
    </div>
  )
}

export default GreyBox