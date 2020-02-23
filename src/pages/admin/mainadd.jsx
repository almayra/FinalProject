import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa'
import MinorAdd from './minoradd'
import MinorAdd1 from './minoradd1'

export class Mainadd extends Component {
    state ={
        step: 1,

        //step1
        namaKelas:'',
        Kategori:'',
        Deskripsi:'',

        //step2
        Materi:'',
        babPelajaran:''
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

    showStep=()=>{
        const {step, namaKelas, Kategori, Deskripsi, Materi, babPelajaran } =this.state;
        if(step === 1)
            return <MinorAdd
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    namaKelas={namaKelas}
                    Kategori={Kategori}
                    Deskripsi={Deskripsi}
                    />
        if(step===2)
            return <MinorAdd1
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    Materi={Materi}
                    babPelajaran={babPelajaran}
                    />
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
                        <a>KELOLA GALERI</a>
                        <div>
                            <FaUserAlt
                            size={30}
                            style={{marginTop:'-1.5cm',marginLeft:'38cm',color:'#4b4b4b'}}
                            />
                        </div>
                </div>
                <div className='login1-progresform d-block'>
                    <div className='langkah' style={{marginLeft:'-0.5cm', marginTop:'1cm'}}> Langkah {step} dari 3 </div>
                    {this.showStep()}
                </div>
            </div>
        )
    }
}

export default Mainadd
