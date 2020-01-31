import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { IMG1,IMG2, LINE } from '../support/url'
import {FaUserAlt} from 'react-icons/fa'



export class Kelas extends Component {
    render() {
        return (
            <div className='login2'>
                <div class="container white topBotomBordersOut" style={{marginLeft:'-8.5cm',marginTop:'-3cm'}}>
                        <Link a to='home' style={{color:'black'}}>
                            BERANDA
                        </Link>
                        <Link a to='kelas' style={{color:'black'}}>
                            KELAS
                        </Link>
                        <a>GALERI PKC</a>
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
                        src='https://cdn1.imggmi.com/uploads/2020/1/18/51e94102d277d43b2ce9d8a5aa2a5b03-full.png'
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
            </div>
        )
    }
}

export default Kelas
