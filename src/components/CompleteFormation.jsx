import React from 'react'

const CompleteFormation = (props) => {
  return (
    <div className='container'>
    <div className='row'>
    
    <div className='col-md-4'>
    <img src={props.data.image} alt='pic' className='langpic'></img>
    </div>
    
    <div className='col-md-8'>
        <h1>{props.data.title}</h1>
        <p>{props.data.description}</p>
    </div>

    </div>
    </div>
  )
}

export default CompleteFormation