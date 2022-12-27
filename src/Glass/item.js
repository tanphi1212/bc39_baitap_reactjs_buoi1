import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const {item,getGlassId} = this.props   
    return (
      <div className='col-lg-2 m-2'>
        <button className=''>
        <img src={item.url} className="img-fluid" alt={item.name} onClick={()=>{
            getGlassId(item.id)
        }}/>
        </button>

      </div>
    )
  }
}
