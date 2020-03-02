import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa'
import {IoIosArrowBack} from 'react-icons/io'


export class Kelasdetail extends Component {
    render() {
        return (
            <div className='login1-admin'>
                <div class="container white topBotomBordersOut" style={{marginLeft:'-8.5cm',marginTop:'-3cm'}}>
                        <Link to='beranda' style={{color:'black'}}>BERANDA</Link>
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
                <div className='login1-detailkelas'>
                    <div className='detailtext'>
                        <div className='d-flex' style={{width:'400px'}} >
                            <Link to='kelas'>
                                <IoIosArrowBack size={32} className='mr-2'color='black' />
                            </Link>
                            <div className='mt-1' style={{fontFamily:'Roboto', fontWeight:'bold', color:'black', textAlign:'left', fontSize:'30px'}}>Digital Marketing</div>
                        </div>
                    </div>
                    <div>
                    <iframe width="700" 
                        height="415" 
                        style={{marginTop:'-7cm'}}
                        src="https://www.youtube.com/embed/3gK_2XdjOdY" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        allowFullScreen
                    />
                    </div>

                </div>
            </div>
        )
    }
}

export default Kelasdetail
