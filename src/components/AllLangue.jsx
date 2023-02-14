import React from 'react'
import {langues} from './DataLangue'
import CompleteFormation from './CompleteFormation'

const AllLangue = () => {

  return (
    <div>{langues.map(item=>(
      <CompleteFormation  data={item}/>
      ))}</div>
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
        <div className='row'>
        <div className='col-md-12'><CompleteFormation data={propsData[4]}/></div>
        </div>
        <div className='row'>
        <div className='col-md-12'><CompleteFormation data={propsData[5]}/></div>
        </div>
        <div className='row'>
        <div className='col-md-12'><CompleteFormation data={propsData[6]}/></div>
        </div>
        <div className='row'>
        <div className='col-md-12'><CompleteFormation data={propsData[7]}/></div>
        </div>
        <div className='row'>
        <div className='col-md-12'><CompleteFormation data={propsData[8]}/></div>
        </div>
        </div>
    </div>*/
  )
}

export default AllLangue