import React, { Component } from 'react'

export default class Seat extends Component {
    renderSeat = () => {
        const { seat, hang } = this.props;
        if (hang === ''){
            return seat.map(item => {
                return <td key={item.soGhe}>{item.soGhe}</td>
            })
        }else{
            return seat.map(item => {
                return  <td key={item.soGhe}>
                <input type="checkbox" className="seats" defaultValue="B1" />
              </td>
            })
        }
    }

    render() {

        return (
            <>
            {this.renderSeat()}
            </>
            
        )
    }
}
