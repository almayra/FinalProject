import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import CEWE from '../../support/img/kelas.png'
import {FaUserAlt} from 'react-icons/fa'
import IMG1 from '../../support/img/marketing.png'
import IMG2 from '../../support/img/socialmed.png'

export class Kelas extends Component {
    render() {
        return (
            <div className='login2'>
                <div class="container white topBotomBordersOut" style={{marginLeft:'-8.5cm',marginTop:'-3cm'}}>
                        <Link a to='beranda' style={{color:'black'}}>
                            BERANDA
                        </Link>
                        <Link a to='kelas' style={{color:'black'}}>
                            KELAS
                        </Link>
                        <Link a to='galeri' style={{color:'black'}}>
                            GALERI PKC
                        </Link>                            
                        <FaUserAlt
                            size={30}
                            style={{marginTop:'-1.5cm',marginLeft:'40cm',color:'#4b4b4b'}}
                        />
                    </div>    
                <div className='kecuali'>
                   <div className='box'>
                        <div className='bebas' style={{fontSize:'35px',color:'white',fontWeight:'bold',marginTop:'3cm'}}>
                            Jadilah Bebas. Berlangganan Sekarang.
                        </div>
                        <Link to='/paketbelajar' style={{textDecoration:'none',color:'white'}}>
                            <button className='btn btn-info' style={{borderRadius:'20px',fontWeight:'900px',marginLeft:'-10cm',marginTop:'-2.5cm'}}>Paket Belajar</button>
                        </Link>
                        <img
                        style={{width:'12cm',marginLeft:'-23cm',marginTop:'-3.5cm'}}
                        src={CEWE}
                        />
                        <div className='block d-flex'>
                            <div className="materi mt-3">
                                Kategori Materi
                            </div>
                            <div className='kategori mr-4' style={{marginLeft:'1cm'}}>
                                Semua Program
                            </div>
                            <div className='kategori mr-4'>
                                Copywriting
                            </div>
                            <div className='kategori'>
                                Marketing
                            </div>
                        </div>
                   </div>
                </div>

                <div className='d-flex' style={{marginTop:'10.5cm'}}>
                        <Link to='/kelasdetail' style={{marginLeft:'-32cm',marginTop:'1cm'}}>
                            <div class="card" style={{width: '20rem', borderRadius:'2rem', height:'20rem'}}>
                            <img class="card-img-top" style={{borderRadius:'2rem',borderBottomLeftRadius:'0rem'}} src={IMG1} alt="Card image cap"/>
                                <div class="card-body">
                                    <p class="card-text" style={{fontSize:'15px',fontWeight:'500',color:'#8B8B8B',textAlign:'left'}}>Digital Marketing</p>
                                    <p class="card-text" style={{fontWeight:'bolder',fontSize:'25px',textAlign:'left',color:'#222E35'}}>Strategi Digital Marketing</p>
                                </div>
                            </div>
                        </Link>

                        <div style={{marginLeft:'1cm',marginTop:'1cm'}}>
                            <div class="card" style={{width: '20rem', borderRadius:'2rem', height:'20rem'}}>
                            <img class="card-img-top" style={{borderRadius:'2rem',borderBottomLeftRadius:'0rem'}} src={IMG2} alt="Card image cap"/>
                            <div class="card-body">
                                <p class="card-text" style={{fontSize:'15px',fontWeight:'500',color:'#8B8B8B',textAlign:'left'}}>Copywriting</p>
                                <p class="card-text" style={{fontWeight:'bolder',fontSize:'25px',textAlign:'left',color:'#222E35'}}>Copywriting yang Menjual</p>
                            </div>
                            </div>
                            </div>
                        </div>

            </div>
        )
    }
}

export default Kelas
