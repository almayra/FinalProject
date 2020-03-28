import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa'
import Axios from 'axios'
import {APIURL, APIURLIMG} from '../../support/url'
import {IoMdTrash} from 'react-icons/io'

export class Transaksi extends Component {
    state={
        datauser:[],
        dataaprove:[]
    }

    componentDidMount(){
        Axios.get(`${APIURL}transaksi/gettransaksi`)
        .then(res =>{
            console.log(res.data)
            this.setState({datauser:res.data})
        }).catch(err =>{
            console.log(err)
        })
    }

    // approveTransaksi=(id, iduser, status)=>{
    //     console.log(id, iduser, status)
    //     Axios.put(`${APIURL}transaksi/apprivepay/${id}`, {iduser, status})
    //     .then(res =>{
    //         this.setState({})
    //     })
    // }

    renderUser=()=>{
        var user = this.state.datauser
        if(user.length){
            return user.map((val, index)=>{
                return(
                    <tr>
                        <td style={{ fontWeight:'regular', fontSize:'13px'}}> {val.username} </td>
                        <td style={{ fontWeight:'regular', fontSize:'13px'}}> {val.tglmulai} </td>
                        <td style={{ fontWeight:'regular', fontSize:'13px'}}>Desember 24, 2014</td>
                        <td style={{ fontWeight:'regular', fontSize:'13px'}} > {val.namapaket} </td>
                        <td> <img src={`${APIURLIMG+val.bukti}`} height='100px' /> </td>
                        <td> <button class="ui small teal button mr-4 ml-2">Konfirmasi</button> <IoMdTrash size={28} color='#292929' style={{marginRight:'-25px'}} /> </td>
                    </tr>

                )
            })
        }
    }


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
                        <Link a to='/admingaleri' style={{color:'black'}}>
                            KELOLA GALERI
                        </Link>                         
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
                                <th style={{ fontWeight:'bold', fontSize:'15px'}}>Nama</th>
                                <th style={{ fontWeight:'bold', fontSize:'15px'}}>Tanggal Berlangganan</th>
                                <th style={{ fontWeight:'bold', fontSize:'15px'}}>Tanggal Berakhir</th>
                                <th style={{ fontWeight:'bold', fontSize:'15px'}}>Paket Belajar</th>
                                <th style={{ fontWeight:'bold', fontSize:'15px'}}>Bukti Pembayaran</th>
                                <th style={{fontWeight:'bold', fontSize:'15px'}}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.renderUser()}
                        </tbody>
                        <tfoot class="full-width">
                            <tr>
                            <th colspan="6">
                                {/* <div class="ui small primary button" style={{ fontWeight:'bolder', fontSize:'13px'}}>
                                Konfirmasi
                                </div> */}
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
