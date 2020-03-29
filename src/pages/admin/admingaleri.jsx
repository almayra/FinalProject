import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa'
import Axios from 'axios'
import {APIURL, APIURLIMG} from '../../support/url'
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, FormText, CustomInput, Button } from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {IoMdTrash} from 'react-icons/io'
import {MdAddAPhoto} from 'react-icons/md'


const MySwal=withReactContent(Swal)

export class AdminGaleri extends Component {
    state={
        modaladdfoto:false,
        modalprofil:false,
        addimagefile:{},
        dataGaleri:[]
    }

    componentDidMount(){
        Axios.get(`${APIURL}galeri/getgaleri`)
        .then(res1 =>{
            this.setState({dataGaleri:res1.data})
            console.log(this.state.dataGaleri)
        }).catch(err =>{
            console.log(err)
        })
    }

    onChangeImage=(event)=>{
        var file=event.target.files[0]
        if(file){
            this.setState({addimagefile:event.target.files[0]})
            console.log(event.target.files[0])
        }else{
            alert('Masukkan Foto')
        }
    }

    onSaveAddClick=()=>{
        var formdata= new FormData()
        var foto=this.state.addimagefile
        console.log('foto', this.state.addimagefile)

        var dataGaleri={
            foto
        }

        console.log(dataGaleri)
        formdata.append('image', foto)
        formdata.append('data', JSON.stringify(dataGaleri))

        if(foto===''){
            MySwal.fire('Gagal', 'Kamu belum memilih foto! :)', 'error')
        }else{
            MySwal.fire('Berhasil!', 'Berhasil tambah ke Galeri', 'success')
        }

        Axios.post(`${APIURL}galeri/tambahgaleri`, formdata, Headers)
        .then(res =>{
            console.log(res.data)
        }).catch(err =>{
            console.log(err)
        })
        console.log(this.state)
    }


    onModalOpen=()=>{
        this.setState({modaladdfoto:true})
    }

    onProfilOpen=()=>{
        this.setState({modalprofil:true})
    }

    onDeleteClick=(index)=>{
        MySwal.fire({
            title: `Kamu yakin?`,
            icon:'question',
            showCancelButton:true,
            confirmButtonText:'Iyaa!',
            cancelButtonText:'Gajadi',
            reverseButtons:true
        }).then((result)=>{
            if(result.value){
                var deletefoto=this.state.dataGaleri
                var selectedId=deletefoto[index].id
                console.log(selectedId)
                Axios.delete(`${APIURL}galeri/deletegaleri/${selectedId}`)
                .then((res)=>{
                    console.log('berhasil', res.data)
                    this.setState({dataGaleri:res.data.dataFoto})
                }).catch((err)=>{
                    console.log('error', err)
                })
                deletefoto.splice(index, 1)
                MySwal.fire(
                    'Terhapus!',
                    'Datamu berhasil dihapus',
                    'success'
                )
            }else if(
                result.dismiss===Swal.DismissReason.cancel
            ){
                MySwal.fire(
                    'Gagal',
                    'Fotomu tidak terhapus',
                    'error'
                )
            }
        })
    }

    renderGallery=()=>{
        var galeri=this.state.dataGaleri
        if(galeri.length){
            return galeri.map((val, index)=>{
                return(
                    <div className='containergallery'>
                        <img src={`${APIURLIMG+val.foto}`} style={{height:'12rem', borderRadius:'1rem'}} />
                        <div className='buttondelete' onClick={()=>this.onDeleteClick(index)} >
                            <a> <IoMdTrash size={32} color='white' /> </a>
                        </div>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div className='login3'>
                <Modal isOpen={this.state.modalprofil} centered toggle={() => this.setState({ modalprofil: false })}>
                    <ModalHeader>
                        <div style={{fontSize:'15px', fontWeight:'bold'}}>
                            Profil
                        </div>                    
                    </ModalHeader>
                    <ModalBody>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item" style={{cursor:'pointer'}}>Ganti Password  </li>
                            <li class="list-group-item" style={{cursor:'pointer'}}>Keluar </li>
                        </ul>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.modaladdfoto} centered toggle={() => this.setState({ modaladdfoto: false })} >
                    <ModalHeader>
                        <div style={{fontSize:'15px', fontWeight:'bolder'}}>
                            Tambah Foto
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <CustomInput type="file" name="file" label='Pilih Foto' onChange={this.onChangeImage} />
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="cyan lighten-2" onClick={this.onSaveAddClick}>Simpan</Button>
                        <Button color="cyan lighten-2" onClick={() => this.setState({ modaladdfoto: false })}>Batal</Button>
                    </ModalFooter>
                </Modal>
                <div>
                    <div class="container blue12 topBotomBordersOut" style={{marginLeft:'-6.7cm',marginTop:'-3cm'}}>
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
                    </div>
                            <div>
                                <FaUserAlt
                                onClick={()=>this.onProfilOpen()}
                                size={30}
                                style={{marginTop:'-8.9cm',marginLeft:'87.5rem',color:'#4b4b4b',cursor:'pointer'}}
                                />
                            </div>
                </div>
                <div style={{marginTop:'8rem', color:'#8474A1', marginLeft:'-5rem'}} className='tambahfoto1' onClick={()=>this.onModalOpen()} >
                    <MdAddAPhoto size={32} />
                </div>
                <div className='galleryloop'>
                   {this.renderGallery()}
                </div>
            </div>
        )
    }
}

export default AdminGaleri
