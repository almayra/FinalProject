import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa'

export class Performa extends Component {
    render() {
        return (
            <div className='login1'>
                <div class="container white topBotomBordersOut" style={{marginLeft:'-6.7cm',marginTop:'-3cm'}}>
                        <Link a to='/kursus' style={{color:'black'}}>
                            KURSUS
                        </Link>
                        <Link a to='/performa' style={{color:'black'}}>
                            PERFORMA
                        </Link>
                        <Link a to='/transaksi' style={{color:'black'}}>
                            TRANSAKSI
                        </Link>
                        <a>KELOLA GALERI</a>
                        <div>
                            <FaUserAlt
                            size={30}
                            style={{marginTop:'-1.5cm',marginLeft:'40cm',color:'#4b4b4b'}}
                            />
                        </div>
                </div>
                <div className='table'>
                    <table class="ui striped table" style={{marginLeft:'-20.5cm', width:'30cm'}}>
                        <thead>
                            <tr>
                            <th style={{fontFamily:'Montserrat', fontWeight:'bold', fontSize:'15px'}}>Nama</th>
                            <th style={{fontFamily:'Montserrat', fontWeight:'bold', fontSize:'15px'}}>Tanggal Registrasi</th>
                            <th style={{fontFamily:'Montserrat', fontWeight:'bold', fontSize:'15px'}}>Alamat Email</th>
                            <th style={{fontFamily:'Montserrat', fontWeight:'bold', fontSize:'15px'}}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>John Lilki</td>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>September 14, 2013</td>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>jhlilk22@yahoo.com</td>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>Tidak Berlangganan</td>
                            </tr>
                            <tr>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>Jamie Harington</td>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>January 11, 2014</td>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>jamieharingonton@yahoo.com</td>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>Yes</td>
                            </tr>
                            <tr>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>Jill Lewis</td>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>May 11, 2014</td>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>jilsewris22@yahoo.com</td>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>Yes</td>
                            </tr>
                            <tr>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>John Lilki</td>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>September 14, 2013</td>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>jhlilk22@yahoo.com</td>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>No</td>
                            </tr>
                            <tr>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>John Lilki</td>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>September 14, 2013</td>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>jhlilk22@yahoo.com</td>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>No</td>
                            </tr>
                            <tr>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>Jamie Harington</td>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>January 11, 2014</td>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>jamieharingonton@yahoo.com</td>
                                <td style={{fontFamily:'Montserrat', fontWeight:'regular', fontSize:'13px'}}>Yes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Performa
