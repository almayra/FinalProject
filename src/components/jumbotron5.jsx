import React, { Component } from 'react'
import {LINE} from './../support/url'

export class Jumbotron5 extends Component {
    render() {
        return (
            <div className='App-jumbotron4'>
                <div style={{fontWeight:'bold',fontSize:'45px',color:'white',marginTop:'-2.5cm'}} className='mx-auto' data-aos="fade-down" data-aos-duration="1000">
                    Cerita Peserta
                </div>
                <div>
                    <div style={{marginLeft:'-33.3cm',marginTop:'1cm'}} data-aos="fade-down-left" data-aos-duration="1000">
                        <div class="card" style={{width:'24rem',borderRadius:'1rem'}}>
                            <div class="card-body">
                                <p className='mt-3' style={{fontSize:'16px',color:'#222E35',fontWeight:'700px'}}>Buat saya yang masih noob, cara ngajar mentornya mudah dipahami banget sih parah</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"></li>
                                <p class="mt-3 mb-4" style={{fontWeight:'bold',fontSize:'20px'}}>Pradana Raihan</p>
                                <p class="mb-4" style={{fontWeight:'initial',fontSize:'15px',color:'#8B8B8B'}}>Cerdikiawan</p>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{marginLeft:'-22.3cm',marginTop:'1cm'}} data-aos="fade-down-left" data-aos-duration="2000">
                        <div class="card" style={{width:'24rem',borderRadius:'1rem'}}>
                            <div class="card-body">
                                <p className='mt-3' style={{fontSize:'16px',color:'#222E35',fontWeight:'700px'}}>Buat saya yang masih noob, cara ngajar mentornya mudah dipahami banget sih parah</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"></li>
                                <p class="mt-3 mb-4" style={{fontWeight:'bold',fontSize:'20px'}}>Pradana Raihan</p>
                                <p class="mb-4" style={{fontWeight:'initial',fontSize:'15px',color:'#8B8B8B'}}>Cerdikiawan</p>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{marginLeft:'-11.3cm',marginTop:'1cm'}} data-aos="fade-down-left" data-aos-duration="3000">
                        <div class="card" style={{width:'24rem',borderRadius:'1rem'}}>
                            <div class="card-body">
                                <p className='mt-3' style={{fontSize:'16px',color:'#222E35',fontWeight:'700px'}}>Buat saya yang masih noob, cara ngajar mentornya mudah dipahami banget sih parah</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"></li>
                                <p class="mt-3 mb-4" style={{fontWeight:'bold',fontSize:'20px'}}>Pradana Raihan</p>
                                <p class="mb-4" style={{fontWeight:'initial',fontSize:'15px',color:'#8B8B8B'}}>Cerdikiawan</p>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:'10cm',marginLeft:'-33.5cm',marginRight:'2cm'}}>
                    <img 
                    src={LINE}
                    style={{width:'1200px',height:'50px'}}
                    />
                </div>
            </div>
        )
    }
}

export default Jumbotron5
