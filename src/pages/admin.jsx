import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa'

export class Admin extends Component {
    render() {
        return (
            <div className='login1'>
                <div class="container white topBotomBordersOut" style={{marginLeft:'-8cm',marginTop:'-3cm'}}>
                        <Link a to='' style={{color:'black'}}>
                            KURSUS
                        </Link>
                        <Link a to='' style={{color:'black'}}>
                            PERFORMA
                        </Link>
                        <a>KELOLA GALERI</a>
                        <div>
                            <FaUserAlt
                            size={30}
                            style={{marginTop:'-1.5cm',marginLeft:'40cm',color:'#4b4b4b'}}
                            />
                        </div>
                </div>
                <div className='kecuali'>
                    <div className="box1">
                        <div className='bebas1' style={{fontSize:'32px',color:'#4e4e4e',fontWeight:'bolder',marginLeft:'-14cm'}}>
                            Mulai Unggah Kelasmu
                        </div>
                        <div className='tambahkelas'>Tambah Kelas</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin
