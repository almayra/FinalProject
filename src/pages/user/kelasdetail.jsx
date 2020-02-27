import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa'


export class Kelasdetail extends Component {
    render() {
        return (
            <div className='login1'>
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
        )
    }
}

export default Kelasdetail
