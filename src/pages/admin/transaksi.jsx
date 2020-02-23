import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa'

export class Transaksi extends Component {
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
                            style={{marginTop:'-1.5cm',marginLeft:'38cm',color:'#4b4b4b'}}
                            />
                        </div>
                </div>
                <div className='table'>
                    <table class="ui compact celled definition table large" style={{marginLeft:'-20.5cm', width:'30cm'}}>
                        <thead class="full-width" >
                            <tr>
                                <th></th>
                                <th style={{ fontWeight:'bold', fontSize:'15px'}}>Nama</th>
                                <th style={{ fontWeight:'bold', fontSize:'15px'}}>Tanggal Berlangganan</th>
                                <th style={{ fontWeight:'bold', fontSize:'15px'}}>Alamat E-mail</th>
                                <th style={{ fontWeight:'bold', fontSize:'15px'}}>Paket Belajar</th>
                                <th style={{ fontWeight:'bold', fontSize:'15px'}}>Bukti Pembayaran</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td class="collapsing">
                                <div class="ui fitted slider checkbox">
                                    <input type="checkbox"/> <label></label>
                                    </div>
                                </td>
                                    <td style={{ fontWeight:'regular', fontSize:'13px'}}>John Lilki</td>
                                    <td style={{ fontWeight:'regular', fontSize:'13px'}}>September 14, 2013</td>
                                    <td style={{ fontWeight:'regular', fontSize:'13px'}}>jhlilk22@yahoo.com</td>
                                    <td style={{ fontWeight:'regular', fontSize:'13px'}}>Standar</td>
                                    <td></td>
                                </tr>
                                <tr>
                                <td class="collapsing">
                                    <div class="ui fitted slider checkbox">
                                    <input type="checkbox"/> <label></label>
                                    </div>
                                </td>
                                    <td style={{ fontWeight:'regular', fontSize:'13px'}}>Jamie Harington</td>
                                    <td style={{ fontWeight:'regular', fontSize:'13px'}}>January 11, 2014</td>
                                    <td style={{ fontWeight:'regular', fontSize:'13px'}}>jamieharingonton@yahoo.com</td>
                                    <td style={{ fontWeight:'regular', fontSize:'13px'}}>Standar</td>
                                    <td></td>
                                </tr>
                                <tr>
                                <td class="collapsing">
                                    <div class="ui fitted slider checkbox">
                                    <input type="checkbox"/> <label></label>
                                    </div>
                                </td>
                                    <td style={{ fontWeight:'regular', fontSize:'13px'}}>Jill Lewis</td>
                                    <td style={{ fontWeight:'regular', fontSize:'13px'}}>May 11, 2014</td>
                                    <td style={{ fontWeight:'regular', fontSize:'13px'}}>jilsewris22@yahoo.com</td>
                                    <td style={{ fontWeight:'regular', fontSize:'13px'}}>Premium</td>
                                    <td></td>
                                </tr>
                            </tbody>
                            <tfoot class="full-width">
                                <tr>
                                <th></th>
                                <th colspan="5">
                                    {/* <div class="ui right floated small primary labeled icon button">
                                    <i class="user icon"></i> Add User
                                    </div> */}
                                    <div class="ui small primary button" style={{ fontWeight:'bolder', fontSize:'13px'}}>
                                    Konfirmasi
                                    </div>
                                    <div class="ui small  disabled button" style={{ fontWeight:'bolder', fontSize:'13px'}}>
                                    Konfirmasi Semua
                                    </div>
                                </th>
                                </tr>
                            </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

export default Transaksi
