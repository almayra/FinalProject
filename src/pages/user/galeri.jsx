import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa'
import COPY from '../../support/img/copy2.jpg'

export class Kelolagaleri extends Component {
    render() {
        return (
            <div className='login3'>
                <div class="container blue12 topBotomBordersOut" style={{marginLeft:'-8.5cm',marginTop:'-3cm'}}>
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
                <div style={{marginLeft:'-20cm'}}>
                    <div className='galeritext'>GALERI PKC</div>
                    <div className="textkecil">
                        Dunia adalah lembar utuh,<br/>
                        dan pikiranmu tintanya.<br/><br/>
                        Buat iklan yang nyata,<br/>
                        sebagai upah hadiahnya.
                    </div>
                </div>
                    <a className='disini' href='#uwiw' style={{textDecoration:'none', color:'#f8f9fb'}}>
                        Mulai Disini
                    </a>
                <div>
                    <img src={COPY} style={{width:'27cm', height:'15cm', marginTop:'2cm', marginRight:'-5cm'}} />
                </div>
                <div id='uwiw' style={{marginTop:'170vh'}}>
                    uwiw
                </div>
            </div>
        )
    }
}

export default Kelolagaleri
