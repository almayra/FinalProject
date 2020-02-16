import React, { Component } from 'react'
import Axios from 'axios'
// import { ICON, ICON1, ICON2, ICON3, ICON4 } from '../support/url'
import ICON from '../support/img/toa.png'
import ICON1 from '../support/img/ukm.png'
import ICON2 from '../support/img/speech.png'
import ICON3 from '../support/img/teacher.png'
import ICON4 from '../support/img/pen.png'
import AOS from 'aos'


const url = 'http://localhost:2000/'

class Jumbotron2 extends Component {
    render() {
        AOS.init()
        return (
            <div className='App-jumbotron2'>
                <div data-aos="fade-up" data-aos-duration="900" style={{fontWeight:'bold',fontSize:'50px',color:'white',marginTop:'4.5cm',marginLeft:'2cm'}}>
                    Apakah saat ini kamu seorang...
                </div>
                <div></div>

                <div data-aos="fade-up" data-aos-duration="1000">
                    <span className='dot' style={{marginTop:'7.5cm',marginLeft:'-31.5cm'}}/>
                    <img src={ICON} 
                    style={{width:'130px',height:'120px'}} 
                    className='icon1'
                    />
                    <h4 style={{color:'white',fontSize:'18px',fontWeight:'900px'}} className='a'>a. Marketing Director</h4>
                </div>

                <div data-aos="fade-up" data-aos-duration="1500">
                    <span className='dot' style={{marginTop:'7.5cm',marginLeft:'-20cm'}}/>
                    <img src={ICON1} 
                    style={{width:'130px',height:'120px'}} 
                    className='icon1'
                    />
                    <h4 style={{color:'white',fontSize:'18px',fontWeight:'900px'}} className='b'>b. Praktisi UKM</h4>
                </div>

                <div data-aos="fade-up" data-aos-duration="2000">
                    <span className='dot' style={{marginTop:'7.5cm',marginLeft:'-8.5cm'}}/>
                    <img src={ICON2} 
                    style={{width:'130px',height:'120px'}} 
                    className='icon1'
                    />
                    <h4 style={{color:'white',fontSize:'18px',fontWeight:'900px'}} className='c'>c. Politisi</h4>
                </div>

                <div data-aos="fade-up" data-aos-duration="2500">
                    <span className='dot' style={{marginTop:'7.5cm',marginLeft:'0cm'}}/>
                    <img src={ICON3} 
                    style={{width:'130px',height:'120px'}} 
                    className='icon1'
                    />
                    <h4 style={{color:'white',fontSize:'18px',fontWeight:'900px'}} className='d'>d. Dosen Fakultas <br/> Ilmu Komunikasi</h4>
                </div>

                <div data-aos="fade-up" data-aos-duration="3000">
                    <span className='dot' style={{marginTop:'7.5cm',marginLeft:'2.5cm'}}/>
                    <img src={ICON4} 
                    style={{width:'130px',height:'120px'}} 
                    className='icon1'
                    />
                    <h4 style={{color:'white',fontSize:'18px',fontWeight:'900px'}} className='e'>e. Copywriter</h4>
                </div>
            </div>
        )
    }
}

export default Jumbotron2
