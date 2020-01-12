import React, { Component } from 'react'
import {ICON9, ICON10, ICON11, LINE1, LINE} from './../support/url'

export class Jumbotron4 extends Component {
    render() {
        return (
            <div className='App-jumbotron3'>
                <div data-aos="fade-up" data-aos-duration="1000" style={{fontWeight:'bold',fontSize:'50px',color:'white',marginTop:'-0.5cm',marginLeft:'2cm'}}>
                    Mengapa Pesantren Kilat Copywriting?
                </div>
                <div data-aos="fade-up" data-aos-duration="1500">
                    <img
                    src={ICON9}
                    style={{width:'100px',height:'100px',marginLeft:'-45cm',marginTop:'3cm'}}
                    />
                    <div className='tulisan' style={{marginLeft:'-45cm', marginTop:'1cm'}}>
                    Berpengalaman di Dunia Periklanan <br/>
                    Indonesia selama lebih dari 29 tahun
                    </div>
                    <img
                    data-aos="fade-up" data-aos-duration="1600"
                    src={LINE1}
                    style={{width:'8px',height:'6cm', marginLeft:'-34.8cm',marginTop:'-5cm'}}
                    />
                </div>
                <div data-aos="fade-up" data-aos-duration="2000">
                    <img
                    src={ICON10}
                    style={{width:'100px',height:'100px',marginLeft:'-23cm',marginTop:'3cm'}}
                    />
                    <div className='tulisan' style={{marginLeft:'-23cm', marginTop:'1cm'}}>
                    Memperoleh pemahaman terkait Copywriting <br/>
                    dan Digital Marketing dalam bentuk <br/>
                    praktek dan video
                    </div>
                    <img
                    data-aos="fade-up" data-aos-duration="2100"
                    src={LINE1}
                    style={{width:'8px',height:'6cm', marginLeft:'-10.5cm',marginTop:'-5.5cm'}}
                    />
                </div>
                <div data-aos="fade-up" data-aos-duration="2500">
                    <img
                    src={ICON11}
                    style={{width:'100px',height:'100px',marginLeft:'-4cm',marginTop:'3cm'}}
                    />
                    <div className='tulisan' style={{marginLeft:'-4cm', marginTop:'1cm'}}>
                    50% pemasukan PKC didonasikan
                    </div>
                </div>
                <div style={{marginTop:'11.5cm',marginLeft:'-30.7cm'}}>
                    <img 
                    src={LINE}
                    style={{width:'1200px',height:'50px'}}
                    />
                </div>
            </div>
        )
    }
}

export default Jumbotron4