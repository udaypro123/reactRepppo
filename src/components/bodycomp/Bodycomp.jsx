import React from 'react'
import './bodycomp.css'
const Bodycomp = (props) => {
  return (
    <div className='bodycompodiv'>
    <div className='relativediv'>

      <img src={props.img} alt="" />
      <p>{props.name}</p>
    </div>
    </div>
  )
}

export default Bodycomp;
