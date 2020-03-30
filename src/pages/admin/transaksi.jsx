import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa'
import Axios from 'axios'
import {APIURL, APIURLIMG} from '../../support/url'
import {IoMdTrash} from 'react-icons/io'
import moment from 'moment'
import UANG from '../../support/img/uang.png'
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, FormText, CustomInput, Button } from 'reactstrap'
import {AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import {logOut} from '../../redux/action'


export class Transaksi extends Component {
    state={
        datauser:[],
        dataaprove:[],
        page:1,
        pager:{},
        modalprofil:false,
        search:''
    }

    componentDidMount(){
        Axios.get(`${APIURL}transaksi/gettransaksi/${this.state.page}`)
        .then(res =>{
            console.log(res.data)
            this.setState({datauser:res.data.pageOfData, pager:res.data.pager})
        }).catch(err =>{
            console.log(err)
        })
    }

    componentDidUpdate(_, prevState){
        if(prevState.page !== this.state.page){
            Axios.get(`${APIURL}transaksi/gettransaksi/${this.state.page}`)
            .then(res =>{
                console.log(res.data)
                this.setState({datauser:res.data.pageOfData, pager:res.data.pager})
            }).catch(err =>{
                console.log(err)
            })
        }
    }

    approveTransaksi=(idtransaksi, iduser, status)=>{
        console.log(idtransaksi, iduser, status)
        Axios.put(`${APIURL}transaksi/approvepay/${idtransaksi}`, {iduser, status})
        .then(res =>{
            console.log(res.data, 'line 44')
            this.setState({datauser:res.data.pageOfData, pager: res.data.pager})
        }).catch(err =>{
            console.log(err)
        })
    }

    onProfilOpen=()=>{
        this.setState({modalprofil:true})
    }

    logOutUser=()=>{
        localStorage.clear()
        logOut()
    }

    renderUser=()=>{
        var user = this.state.datauser
        if(user.length){
            return user.map((val, index)=>{
                return(
                    <tr>
                        <td style={{ fontWeight:'regular', fontSize:'13px'}}> {val.username} </td>
                        {/* <td style={{ fontWeight:'regular', fontSize:'13px'}}> {moment(val.tglmulai).format('LL')} </td> */}
                        {/* <td style={{ fontWeight:'regular', fontSize:'13px'}}> {moment(val.tglmulai).add(1, 'M').format('LL')} </td> */}
                        <td style={{ fontWeight:'regular', fontSize:'13px'}} > {val.namapaket} </td>
                        <td> <img src={`${APIURLIMG+val.bukti}`} height='100px' /> </td>
                        <td> 
                            <button class="ui small teal button mr-4 ml-2" onClick={()=>this.approveTransaksi(val.idtransaksi, val.iduser, true)}>Konfirmasi</button> 
                            <IoMdTrash size={28} color='#292929' style={{marginRight:'-25px'}} onClick={()=>this.approveTransaksi(val.idtransaksi, val.iduser, false)} />
                        </td>
                    </tr>

                )
            })
        }else{
            return(
                <tr>
                    <td></td>
                    <td></td>
                    <img src={UANG} className='md-auto' style={{height:'20rem'}} />
                </tr>
            )
        }
    }


    render() {
        var {pager} = this.state
        return (
            <div className='login1'>
                <Modal isOpen={this.state.modalprofil} centered toggle={() => this.setState({ modalprofil: false })}>
                    <ModalHeader>
                        <div style={{fontSize:'15px', fontWeight:'bold'}}>
                            Profil
                        </div>                    
                    </ModalHeader>
                    <ModalBody>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item" style={{cursor:'pointer', color:'black'}}>Ganti Password  </li>
                            <a href ='login' class="list-group-item" style={{cursor:'pointer', color:'black'}} onClick={this.logOutUser} >Keluar </a>
                        </ul>
                    </ModalBody>
                </Modal>
                <div>
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
                            {/* <Link a to='/admingaleri' style={{color:'black'}}>
                                KELOLA GALERI
                            </Link>                          */}
                    </div>
                    <div>
                        <FaUserAlt
                        size={30}
                        onClick={()=>this.onProfilOpen()}
                        style={{marginTop:'-24rem',marginLeft:'87.5rem',color:'#4b4b4b'}}
                        />
                    </div>
                </div>
                <div className='table'>
                    <table class="ui compact celled definition table large" style={{marginLeft:'-81rem', width:'30cm'}}>
                        <thead class="full-width" >
                            <tr>
                                <th style={{ fontWeight:'bold', fontSize:'15px'}}>Nama</th>
                                {/* <th style={{ fontWeight:'bold', fontSize:'15px'}}>Tanggal Berlangganan</th> */}
                                {/* <th style={{ fontWeight:'bold', fontSize:'15px'}}>Tanggal Berakhir</th> */}
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
                            <div>
                            {pager.pages && pager.pages.length &&
                                <ul className="pagination pagination-lg" style={{ backgroundColor: '#f5f5f5', color: 'black', maxWidth:'fit-content' }}>
                                    <li className={`page-item first-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                                        <Link to={{ search: `?page=1` }} className="page-link" onClick={() => this.setState({ page: pager.startPage })}> <AiOutlineDoubleLeft/> </Link>
                                    </li>
                                    <li className={`page-item previous-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                                        <Link className="page-link" onClick={() => this.setState({ page: pager.currentPage - 1 })}> <AiOutlineLeft/> </Link>
                                    </li>
                                    {pager.pages.map(page =>
                                        <li key={page} className={`page-item number-item ${pager.currentPage === page ? 'active' : ''}`}>
                                            <Link className="page-link" onClick={() => this.setState({ page: page })}>{page}</Link>
                                        </li>
                                    )}
                                    <li className={`page-item next-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                                        <Link className="page-link" onClick={() => this.setState({ page: pager.currentPage + 1 })}> <AiOutlineRight/> </Link>
                                    </li>
                                    <li className={`page-item last-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                                        <Link className="page-link" onClick={() => this.setState({ page: pager.endPage })}> <AiOutlineDoubleRight/> </Link>
                                    </li>
                                </ul>
                            }
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
