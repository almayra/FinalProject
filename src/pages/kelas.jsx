import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { IMG1,IMG2, LINE } from '../support/url'
import {FaUserAlt} from 'react-icons/fa'



export class Kelas extends Component {
    render() {
        return (
            <div className='login2'>
                <div class="container white topBotomBordersOut" style={{marginLeft:'-9cm',marginTop:'-3cm'}}>
                        <Link a to='home' style={{color:'black'}}>
                            HOME
                        </Link>
                        <Link a to='kelas' style={{color:'black'}}>
                            KELAS
                        </Link>
                        <a>TENTANG PKC</a>
                        <div>
                            <FaUserAlt
                            size={30}
                            style={{marginTop:'-1.5cm',marginLeft:'40cm',color:'#4b4b4b'}}
                            />
                        </div>
                    </div>    
                <div className='kecuali'>
                   <div className='box'>
                        <div className='bebas' style={{fontSize:'35px',color:'white',fontWeight:'bold',marginTop:'3cm'}}>
                            Jadilah Bebas. Berlangganan Sekarang.
                        </div>
                        <Link to='/paketbelajar' style={{textDecoration:'none',color:'white'}}>
                            <button className='btn btn-info' style={{borderRadius:'20px',fontWeight:'900px',marginLeft:'-8cm',marginTop:'-2.5cm'}}>Paket Belajar</button>
                        </Link>
                        <img
                        style={{width:'12cm',marginLeft:'-21cm',marginTop:'-3.5cm'}}
                        src='https://cdn1.imggmi.com/uploads/2020/1/18/51e94102d277d43b2ce9d8a5aa2a5b03-full.png'
                        />
                        <div className='block d-flex'>
                            <div className='kategori mr-5'>
                                Semua Program (24)
                            </div>
                            <div className='kategori mr-5'>
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
