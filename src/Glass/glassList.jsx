import React, { Component } from 'react'
import Item from './item';
export default class GlassList extends Component {
    renderTable = () => {
        const { glassList,getGlassId } = this.props;
        return glassList.map((item) => {
            return <Item key={item.id} item={item}  getGlassId={getGlassId}/>
        })

    }
    render() {
        return (
            <div className='row'>
                {this.renderTable()}
            </div>
        )
    }
}
