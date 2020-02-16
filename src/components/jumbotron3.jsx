import React, { Component } from 'react'
import LINE from '../support/img/garis.png'
import ICON5 from '../support/img/theatre-masks.png'
import ICON6 from '../support/img/youtube.png'
import ICON7 from '../support/img/ide.png'
import ICON8 from '../support/img/org.png'



export class Jumbotron3 extends Component {
    render() {
        return (
            <div className='App-jumbotron2'>
               <div className='App-jumbotron2'>

                <div data-aos="fade-up" data-aos-duration="1000">
                    <span className='dot' style={{marginTop:'2cm',marginLeft:'6cm'}}/>
                    <img src={ICON5} 
                    style={{width:'130px',height:'120px'}} 
                    className='icon1'
                    />
                    <h4 style={{color:'white',fontSize:'18px',fontWeight:'900px'}} className='f'>f. Art Director</h4>
                </div>

                <div data-aos="fade-up" data-aos-duration="1500">
                    <span className='dot' style={{marginTop:'2cm',marginLeft:'1.5cm'}}/>
                    <img src={ICON6} 
                    style={{width:'130px',height:'120px'}} 
                    className='icon2'
                    />
                    <h2 style={{color:'white',fontSize:'18px',fontWeight:'900px'}} className='h1'>g. Content Provider</h2>
                </div>

                <div data-aos="fade-up" data-aos-duration="2000">
                    <span className='dot' style={{marginTop:'2cm',marginLeft:'0cm'}}/>
                    <img src={ICON7} 
                    style={{width:'130px',height:'120px'}} 
                    className='icon1'
                    />
                    <h2 style={{color:'white',fontSize:'18px',fontWeight:'900px'}} className='g1'>i. Creative Group Head</h2>
                </div>

                <div data-aos="fade-up" data-aos-duration="2500">
                    <span className='dot' style={{marginTop:'2cm',marginLeft:'0cm'}}/>
                    <img src={ICON8} 
                    style={{width:'120px',height:'135px'}} 
                    className='icon3'
                    />
                    <h2 style={{color:'white',fontSize:'18px',fontWeight:'900px'}} className='h1'>i. Perorangan</h2>
                </div>

                <div style={{marginTop:'8cm',marginLeft:'-26cm'}}>
                    <img 
                    src={LINE}
                    style={{width:'1200px',height:'50px'}}
                    />
                </div>
            </div>
            </div>
        )
    }
}

export default Jumbotron3
