import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { IMG1,IMG2, LINE } from '../support/url'
import {FaUserAlt} from 'react-icons/fa'

export class Profil extends Component {
    render() {
        return (
            <div className='login1'>
                <div class="container white topBotomBordersOut" style={{marginLeft:'-9cm',marginTop:'-3cm'}}>
                        <Link a to='home' style={{color:'black'}}>
                            HOME
                        </Link>
                        <Link a to='kelas' style={{color:'black'}}>
                            KELAS
                        </Link>
                        <a>GALLERY OF PKC</a>
                        <div>
                            <FaUserAlt
                            size={30}
                            style={{marginTop:'-1.5cm',marginLeft:'40cm',color:'#4b4b4b'}}
                            />
                        </div>
                    </div>    
            </div>
        )
    }
}

export default Profil
