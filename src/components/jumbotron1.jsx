import React, { Component } from 'react'
import { IMG1,IMG2, LINE } from '../support/url'
import { Link } from 'react-router-dom';

export class Jumbotron1 extends Component {
    render() {
        return (
            <div className='App-jumbotron'>
                <div className='text1 css-typing'>
                    <p>
                        Materi Berkualitas.
                    </p>
                    <p>
                        Akses Tanpa Batas.
                    </p>
                    <p>
                        Join Komunitas.
                    </p>
                </div>
                <div className='daftar' style={{cursor:'pointer',}}>
                    <Link to='/register' style={{cursor:'pointer',color:'white',textDecoration:'none',fontWeight:'bold'}}>Daftar</Link>
                </div>
                <div style={{marginLeft:'9cm',marginTop:'1cm'}}>
                    <div class="card" style={{width: '20rem', borderRadius:'2rem'}}>
                    <img class="card-img-top" style={{borderRadius:'2rem',borderBottomLeftRadius:'0rem'}} src={IMG1} alt="Card image cap"/>
                    <div class="card-body">
                        <p class="card-text" style={{fontSize:'15px',fontWeight:'500',color:'#8B8B8B',textAlign:'left'}}>Digital Marketing</p>
                        <p class="card-text" style={{fontWeight:'bolder',fontSize:'25px',textAlign:'left',color:'#222E35'}}>Strategi Digital Marketing</p>
                        <div className='d-flex'>
                            <p class="card-text mt-6" style={{fontSize:'12px',fontWeight:'normal',color:'#8B8B8B',textAlign:'left',marginTop:'50px'}}>28 Video</p>
                            <p class="card-text mt-5" style={{fontSize:'20px',fontWeight:'bold',color:'#8B8B8B',textAlign:'right',marginLeft:'2cm'}}>120 Menit</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div style={{marginLeft:'2cm',marginTop:'1cm'}}>
                    <div class="card" style={{width: '20rem', borderRadius:'2rem'}}>
                    <img class="card-img-top" style={{borderRadius:'2rem',borderBottomLeftRadius:'0rem'}} src={IMG2} alt="Card image cap"/>
                    <div class="card-body">
                        <p class="card-text" style={{fontSize:'15px',fontWeight:'500',color:'#8B8B8B',textAlign:'left'}}>Copywriting</p>
                        <p class="card-text" style={{fontWeight:'bolder',fontSize:'25px',textAlign:'left',color:'#222E35'}}>Copywriting yang Menjual</p>
                        <div className='d-flex'>
                            <p class="card-text mt-6" style={{fontSize:'12px',fontWeight:'normal',color:'#8B8B8B',textAlign:'left',marginTop:'50px'}}>15 Video</p>
                            <p class="card-text mt-5" style={{fontSize:'20px',fontWeight:'bold',color:'#8B8B8B',textAlign:'right',marginLeft:'2cm'}}>85 Menit</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div style={{marginTop:'13cm',marginLeft:'-29.5cm',alignContent:'center'}}>
                    <img 
                    src={LINE}
                    style={{width:'1200px',height:'50px'}}
                    />
                </div>
            </div>
        )
    }
}

export default Jumbotron1
