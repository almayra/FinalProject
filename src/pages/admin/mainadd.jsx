import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa'
import MinorAdd from './minoradd'
import MinorAdd1 from './minoradd1'
import Axios from 'axios';
import { APIURL } from '../../support/url';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal=withReactContent(Swal)


export class Mainadd extends Component {
    state ={
        step: 1,

        //step1
        namaKelas:'',
        Kategori:0,
        Deskripsi:'',

        //step2
        Materi:'',
        babPelajaran:'',

        //image
        addimagefile:''
    }

    nextStep=()=>{
        const {step} = this.state;
        this.setState({
            step: step+1
        })
    }

    prevStep=()=>{
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    }

    handleChange=input=>e=>{
        this.setState({[input]:e.target.value})
    }

    onChangeImage=(event)=>{
        var file=event.target.files[0]
        if(file){
            this.setState({addimagefile:event.target.files[0]})
            console.log(event.target.files[0])
            // console.log()
        }else{
            alert('Masukkan Foto')
        }
        // console.log(this.props.addimagefile)
    }

    showStep=()=>{
        const {step, namaKelas, Kategori, Deskripsi, Materi, babPelajaran, addimagefile } =this.state;
        if(step === 1)
            return <MinorAdd
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    namaKelas={namaKelas}
                    Kategori={Kategori}
                    Deskripsi={Deskripsi}
                    onSaveData={this.onSaveData}
                    />
        if(step===2)
            return <MinorAdd1
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    Materi={Materi}
                    babPelajaran={babPelajaran}
                    onSaveData={this.onSaveData}
                    addimagefile={addimagefile}
                    onChangeImage={this.onChangeImage}
                    />
    }

    onSaveData=()=>{
        var formdata=new FormData()
        var foto = this.state.addimagefile
        var bab = this.state.babPelajaran
        var materi = this.state.Materi
        var judul=this.state.namaKelas
        var deskripsi=this.state.Deskripsi
        var idkategori=this.state.Kategori

        console.log('foto',this.state.addimagefile )

        var dataKelas={
            bab,
            materi,
            judul,
            deskripsi,
            idkategori            
        }

        var Headers={
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }

        console.log(dataKelas)
        formdata.append('image', foto)
        formdata.append('data', JSON.stringify(dataKelas))

        if(judul===''||bab===''||materi===''||deskripsi===''||idkategori===''||foto===''){
            MySwal.fire('Gagal', 'Kamu belum masukin semuanya sayang','error')
        }else{
            MySwal.fire('Berhasil', 'Berhasil simpan data cinta!', 'success')
        }

        Axios.post(`${APIURL}kelas/tambahkelas`, formdata, Headers)
        .then(res =>{
            console.log(res.data)
        }).catch(err =>{
            console.log(err)
        })
        console.log(this.state)

    }

    render() {
        const {step } =this.state;
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
                <div className='login1-progresform d-block'>
                    <div className='langkah' style={{marginLeft:'-0.5cm', marginTop:'1cm'}}> Langkah {step} dari 2 </div>
                    {this.showStep()}
                </div>
            </div>
        )
    }
}

export default Mainadd
