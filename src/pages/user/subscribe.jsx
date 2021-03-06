import React, { Component } from 'react'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {FaLongArrowAltLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {Modal,ModalBody,ModalFooter,ModalHeader, CustomInput} from 'reactstrap'
import GRATIS from '../../support/img/gratis.png'
import Swal from 'sweetalert2'
import STANDAR from '../../support/img/standar.png'
import withReactContent from 'sweetalert2-react-content'
import PREMIUM from '../../support/img/premium.png'
import { Button, Icon } from 'semantic-ui-react'
import Axios from 'axios'
import {APIURL, APIURLIMG} from '../../support/url'


const MySwal=withReactContent(Swal)

class Subscribe extends Component {
    state={
        modalstandar:false,
        modalpremium:false,
        databukti:[],
        addimagefile:{},
        idpaket:0
    }

    onChangeImage=(event)=>{
            this.setState({addimagefile:event.target.files[0]})
            console.log(event.target.files[0])
    }

    onKirimDataClick=()=>{
        var formdata= new FormData()
        var bukti = this.state.addimagefile
        var tglmulai = new Date()
        var idpaket = this.state.idpaket
        var iduser= localStorage.getItem('id')
        console.log('foto', this.state.addimagefile)
        var databukti={
            bukti,
            tglmulai,
            idpaket,
            status:'waiting confirmation',
            iduser
        }

        console.log(databukti)
        formdata.append('image', bukti)
        formdata.append('data', JSON.stringify(databukti))

        if(bukti===''){
            MySwal.fire('Gagal', 'Kamu belum mengirim bukti', 'error')
        }else{
            MySwal.fire('Berhasil!', 'Tunggu konfirmasi ya!', 'success')
        }

        Axios.post(`${APIURL}transaksi/postbukti`, formdata, Headers)
        .then(res =>{
            console.log(res.data)
        }).catch(err =>{
            console.log(err)
        })
        console.log(this.state)
    }

    render() {
        return (
            <div className='subscribe'>
                <Modal isOpen={this.state.modalstandar} toggle={()=>this.setState({modalstandar:false})}>
                    <ModalHeader>
                        <div style={{fontSize:'25px', fontWeight:'bold', alignItems:'center'}}> Pembayaran </div>
                    </ModalHeader>
                    <ModalBody>
                    <table class="ui celled table">
                    <thead>
                        <tr>
                            <th>Bank</th>
                            <td style={{textAlign:'center', alignItems:'center'}}>BCA</td>
                        </tr>
                        <tr>
                            <th>No Rekening</th>
                            <td style={{textAlign:'center', alignItems:'center'}}>7330464989</td>
                        </tr>
                        <tr>
                            <th>Penerima</th>
                            <td style={{textAlign:'center', alignItems:'center'}}>Almayra</td>
                        </tr>
                        <tr>
                            <th>Paket</th>
                            <td style={{textAlign:'center', alignItems:'center'}} value={2} >Standar</td>
                        </tr>
                    </thead>                     
                    </table>
                    <div className='mt-5'>
                        <CustomInput type='file' label='Pilih Bukti Pembayaran' onChange={this.onChangeImage} />
                    </div>
                    </ModalBody>
                    <ModalFooter>
                    <Button animated onClick={this.onKirimDataClick} >
                        <Button.Content visible>Kirim</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                        </Button>                    
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modalpremium} toggle={()=>this.setState({modalpremium:false})}>
                    <ModalHeader>
                        <div style={{fontSize:'25px', fontWeight:'bold', alignItems:'center'}}> Pembayaran </div>
                    </ModalHeader>
                    <ModalBody>
                    <table class="ui celled table">
                    <thead>
                        <tr>
                            <th>Bank</th>
                            <td style={{textAlign:'center', alignItems:'center'}}>BCA</td>
                        </tr>
                        <tr>
                            <th>No Rekening</th>
                            <td style={{textAlign:'center', alignItems:'center'}}>7330464989</td>
                        </tr>
                        <tr>
                            <th>Penerima</th>
                            <td style={{textAlign:'center', alignItems:'center'}}>Almayra</td>
                        </tr>
                        <tr>
                            <th>Paket</th>
                            <td style={{textAlign:'center', alignItems:'center'}} value={3} >Premium</td>
                        </tr>
                    </thead>                     
                    </table>
                    <div className='mt-5'>
                        <CustomInput type='file' label='Pilih Bukti Pembayaran' onChange={this.onChangeImage}/>
                    </div>
                    </ModalBody>
                    <ModalFooter>
                    <Button animated onClick={this.onKirimDataClick} >
                        <Button.Content visible>Kirim</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                        </Button>                    
                    </ModalFooter>
                </Modal>

                <Link to='/kelas' style={{textDecoration:'none',color:'#4b4b4b'}}>
                    <FaLongArrowAltLeft
                    style={{marginLeft:'1cm'}}
                    size={50}
                    color='#f8f8f8'
                    className='ikon fadeIn fourth'
                    />
                </Link>
               <div className='d-flex'>
                    <div class="card fadeIn first" style={{width:'20rem',height:'15cm',marginTop:'1.5cm',marginLeft:'2.5cm',borderRadius:'20px'}}>
                    <img class="card-img-top" src={GRATIS} alt="Card image cap"/>
                    <div class="card-body">
                        <h2 style={{fontSize:'25px',fontWeight:'bolder',color:'black',marginTop:'-5cm'}}>GRATIS</h2>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <IoMdCheckmarkCircleOutline size={20} color='#77dd88' className='mr-3'/>
                                Akses ke materi dasar
                            </li>
                            <li class="list-group-item">
                                <IoMdCheckmarkCircleOutline size={20} color='#77dd88' className='mr-3'/>
                                Akses ke Gallery of PKC
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <button className='btn btn-success' style={{borderRadius:'15px',fontSize:'20px',fontWeight:'bold',marginTop:'1.4cm'}} disabled>
                        IDR 0
                        </button>
                        <p className='mt-3' style={{color:'grey', marginBottom:'-35px'}}>Harga dalam ribuan rupiah</p>                    
                        </div>
                    </div>

                    <div class="card fadeIn second" 
                    style={{width:'20rem',height:'15cm',marginTop:'1.5cm',marginLeft:'2cm',borderRadius:'20px'}}
                    >
                    <img class="card-img-top" src={STANDAR} alt="Card image cap"/>
                    <div class="card-body">
                        <h2 style={{fontSize:'25px',fontWeight:'bolder',color:'black',marginTop:'-5cm'}}>STANDAR</h2>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <IoMdCheckmarkCircleOutline size={20} color='#77dd88' className='mr-3'/>
                                Akses semua kelas
                            </li>
                            <li class="list-group-item">
                                <IoMdCheckmarkCircleOutline size={20} color='#77dd88' className='mr-3'/>
                                Sertifikat kelulusan
                            </li>
                            {/* <li class="list-group-item">
                                <IoMdCheckmarkCircleOutline size={20} color='#77dd88' className='mr-3'/>
                                Join komunitas
                            </li> */}
                        </ul>
                    </div>
                    <div class="card-body">
                    <button className='btn btn-success' style={{borderRadius:'15px',fontSize:'20px',fontWeight:'bold',marginTop:'1cm'}} onClick={()=>this.setState({modalstandar:true, idpaket:2})} >
                        IDR 75
                        <div style={{fontSize:'12px',fontWeight:'lighter',textTransform:'lowercase'}}>per bulan</div> 
                        </button>
                    </div>
                    </div>
                    
                    <div class="card fadeIn third" 
                    style={{width:'20rem',height:'15cm',marginTop:'1.5cm',marginLeft:'2cm',borderRadius:'20px'}}
                    >
                    <img class="card-img-top" src={PREMIUM} alt="Card image cap"/>
                    <div class="card-body">
                        <h2 style={{fontSize:'25px',fontWeight:'bolder',color:'black',marginTop:'-5cm'}}>PREMIUM</h2>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <IoMdCheckmarkCircleOutline size={20} color='#77dd88' className='mr-3'/>
                                Akses semua kelas
                            </li>
                            <li class="list-group-item">
                                <IoMdCheckmarkCircleOutline size={20} color='#77dd88' className='mr-3'/>
                                Sertifikat kelulusan
                            </li>
                            <li class="list-group-item">
                                <IoMdCheckmarkCircleOutline size={20} color='#77dd88' className='mr-3'/>
                                Join komunitas
                            </li>
                            {/* <li class="list-group-item">
                                <IoMdCheckmarkCircleOutline size={20} color='#77dd88' className='mr-3'/>
                                Hemat 20%
                            </li> */}
                        </ul>
                    </div>
                    <div class="card-body">
                        <button className='btn btn-success' style={{borderRadius:'15px',fontSize:'20px',fontWeight:'bold'}} onClick={()=>this.setState({modalpremium:true, idpaket:3})}>
                        IDR 100
                        <div style={{fontSize:'12px',fontWeight:'lighter',textTransform:'lowercase'}}>per bulan</div> 
                        </button>
                    </div>
                    </div>
               </div>
            </div>
        )
    }
}

export default Subscribe
