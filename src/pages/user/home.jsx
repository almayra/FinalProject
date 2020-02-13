import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa'
import KELAS from '../../support/img/kosong.png'

export class Home extends Component {
    render() {
        return (
            <div className='App-kelas'>
                <div className='sidebar'>
                <div class="container white topBotomBordersOut" style={{marginLeft:'-8.5cm',marginTop:'-3cm'}}>
                        <a>BERANDA</a>
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
                </div>
                <div className='kecuali'>
                    {/* <div className='saya'>
                        Kelas Saya
                        <div className='line'/>
                    </div> */}
                </div>
                <div>
                    <img
                    style={{marginTop:'-12cm',marginLeft:'-8cm',width:'22cm',  position: 'relative'}}
                    src={KELAS}
                    />
                </div>
                <div className='kosong'>
                    Halo, (nama). Kelasmu masih kosong.<br/>
                    Tambahkan kelas yang kamu suka! :)
                </div>
                <div className='telusuri'>
                    <Link to='/kelas' style={{cursor:'pointer',color:'#8474A1',textDecoration:'none',fontWeight:'bold'}}>Telusuri Kelas</Link>
                </div>
            
            </div>
        )
    }
}

export default Home
