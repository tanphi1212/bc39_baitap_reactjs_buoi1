import React, { Component } from 'react'
import data from './dataGlasses.json'
import GlassList from './glassList';
import "./index.css"
export default class Glass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glassList: data,
      glass: {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    }

  }

  handleGlass = (id) => {
    let glass = this.state.glassList.filter((item) => item.id === id)
    console.log(glass)
    this.setState({
      glass: glass[0],
    })
  }
  render() {
    const {glass} = this.state
    console.log(glass[0])
    return (
      <section id='glass'>
        <header className='text-center'>
          <h1>TRY GLASS APP ONLINE</h1>
        </header>
        <div className='container'>
          <div className='row'>
            <div className="col-lg-6">
              <div className='d-flex justify-content-center '>
                <div id="model">
                  <img src="./glassesImage/model.jpg" width={'300px'} height={'auto'} alt="" />
                  <img className='model_glass' src={glass.url} alt="" />
                  <div className='model_content'>
                    <h4>{glass.name}</h4>
                    <p>{glass.desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className='d-flex justify-content-center'>
                <img src="./glassesImage/model.jpg" width={'300px'} height={'auto'} alt="" />
              </div>
            </div>
          </div>
          <div className='content mt-3 p-5'>
            <GlassList glassList={this.state.glassList} getGlassId={this.handleGlass} />
          </div>
        </div>
      </section>

    )
  }
}
