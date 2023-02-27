import React from 'react'
import Navbar from './Navbar'
import CompleteFormation from './CompleteFormation'
import { langue } from './DataAllLangue'
const OneFormation = () => {
  return (
    <div>
      <div className='AllNav'><Navbar /></div>


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