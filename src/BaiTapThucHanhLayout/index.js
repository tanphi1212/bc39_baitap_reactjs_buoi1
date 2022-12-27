import React, { Component } from 'react'
import Header from './header'
import Body from './body'
import Footer from './footer'
export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <><Header/>
        <Body/>
        <Footer/>
      </>

    )
  }
}
