import React from 'react'
import NavBar2 from './NavBar2'
import CompleteFormation from './CompleteFormation'
import { langue } from './DataAllLangue'
const OneFormation = () => {
  return (
    <div>
      <div className='AllNav'><NavBar2 /></div>
<div></div>

        <div className='container'>
        <div className='row'>

        <div className='col-md-3'></div>

        <div className='col-md-6'>       
         {langue.map((item, index) => (
        <CompleteFormation key={index} data={item}/>
        ))}     
        </div>

        <div className='col-md-3'></div>

        </div>
        </div>
    </div>
  )
}

export default OneFormation