import React, { Component } from 'react'
import Banner from './banner'
import Item from './item'
export default class Body extends Component {
  render() {
    return (
      <div>
        <Banner/>
        <Item/>
      </div>
    )
  }
}
