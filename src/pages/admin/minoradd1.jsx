import React, { Component } from 'react'
import {FaLongArrowAltRight, FaLongArrowAltLeft} from 'react-icons/fa'
import { Table, CustomInput } from 'reactstrap';

export class MinorAdd1 extends Component {
    continue=e=>{
        e.preventDefault()
        this.props.nextStep()
    }

    back=e=>{
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const {handleChange, Materi, babPelajaran }= this.props;
        // console.log(this.props.handleChange)
        return (
            <div className='d-flex'>
                <div style={{marginLeft:'9.2cm'}}>
                    <label style={{width:'10cm', fontFamily:'Montserrat'}}>
                        <CustomInput type='file' className='cover mt-5' style={{textAlign:'left', width:'10cm'}} label='Pilih Cover Kelas' />
                    </label>
                </div>

                <div style={{marginTop:'1.5cm', marginLeft:'-10cm'}}>
                    <label style={{width:'10cm', fontFamily:'Montserrat'}}>
                        <input className='form-control mt-5 mb-2' 
                        style={{fontFamily:'Montserrat'}}
                        placeholder='Judul Bab'
                        name='babPelajaran'
                        value={babPelajaran}
                        type='text'
                        onChange={handleChange('babPelajaran')}
                        />
                        <p style={{fontSize:'11px',marginRight:'5.5cm'}}>Contoh : 38 Tips Copywriting</p>
                    </label>
                </div>


                <div style={{marginTop:'3.5cm', marginLeft:'-10cm'}}>
                    <label style={{width:'10cm'}}>
                        <input className='form-control mt-5' 
                        style={{fontFamily:'Montserrat'}}
                        placeholder='Masukkan URL Materi'
                        name='Materi'
                        value={Materi}
                        type='text'
                        onChange={handleChange('Materi')}
                        />
                    </label>
                </div>

                <div style={{fontSize:'12px', color:'#2bbbad', fontWeight:'900px', marginTop:'5.8cm', marginLeft:'-2.8cm', cursor:'pointer', fontFamily:'Montserrat'}}>
                    + Tambah Materi
                </div>
                <div style={{marginLeft:'0.2cm'}}>
                    <button className='next' onClick={this.back} style={{marginTop:'9.3cm', marginLeft:'-10cm'}}>
                        <FaLongArrowAltLeft size={32}/>
                    </button>
                    <button className='next' onClick={this.continue} style={{marginTop:'9.5cm', marginLeft:'6cm'}}>
                        <FaLongArrowAltRight size={32}/>
                    </button>
                </div>
            </div>
        )
    }
}

export default MinorAdd1
