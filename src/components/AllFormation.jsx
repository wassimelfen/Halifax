import React from 'react'
import {formation} from './DataFormation'
import CompleteFormation from './CompleteFormation'

const AllFormation = () => {

  return (
    <div>
      {formation.map(item=>(
      <CompleteFormation  data={item}/>
      ))}
    </div>
    



    
    /*
    <div className='container'>
        
        <div className='row'>
        <div className='col-md-12'><CompleteFormation data={propsData[0]}/></div>
        </div>
        <div className='row'>
        <div className='col-md-12'><CompleteFormation data={propsData[1]}/></div>
        </div>
        <div className='row'>
        <div className='col-md-12'><CompleteFormation data={propsData[2]}/></div>
        <div className='row'>
        <div className='col-md-12'><CompleteFormation data={propsData[3]}/></div>
        </div>
        
        
        </div>
    </div>*/
  )
}

export default AllFormation