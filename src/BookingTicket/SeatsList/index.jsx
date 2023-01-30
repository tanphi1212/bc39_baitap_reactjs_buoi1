import React, { Component } from 'react'
import {connect} from 'react-redux'
import Seat from './Seat';

class SeatsList extends Component {
  renderSeatsList = ()=>{
    const {seatsList} = this.props;
    return seatsList.map(seats => {
      return (
        <tr key={seats.hang}>
          <td >{seats.hang}</td>
          <Seat key={seats.hang} seat={seats.danhSachGhe} hang={seats.hang}/>
        </tr>
      )
    })
  }
  render() {
   
    return (
      <div className="seatStructure txt-center" style={{ overflowX: 'auto' }}>
                <p id="notification" /><table id="seatsBlock">
                  <tbody>
                  {this.renderSeatsList()}
                    
                  </tbody></table>
                <div className="screen">
                  <h2 className="wthree">Screen this way</h2>
                </div>
                <button >Confirm Selection</button>
              </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    seatsList: state.tickerReducer.seatsList,
  }
}


export default connect(mapStateToProps,null) (SeatsList);