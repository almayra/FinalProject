import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import CEWE from '../../support/img/kelas.png'
import {FaUserAlt} from 'react-icons/fa'

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
            </div>
        )
    }
}

export default Kelas
