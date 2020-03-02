import React, { Component } from 'react'
import {FaLongArrowAltRight} from 'react-icons/fa'

export class MinorAdd extends Component {

    state={
        kat:0
    }
    continue=e=>{
        e.preventDefault()
        this.props.nextStep()
    }


    render() {
        const {handleChange, namaKelas, Kategori, Deskripsi}= this.props;
        console.log('kat',this.props.Kategori)
        return (
            <div className='d-flex'>
                <div style={{marginLeft:'9.2cm'}}>
                    <label style={{width:'10cm'}}>
                        <input className='form-control mt-5'
                        placeholder='Cantumkan Judul Kelas'
                        name='namaKelas'
                        value={namaKelas}
                        type='text'
                        ref='judul'
                        onChange={handleChange('namaKelas')}
                        />
                    </label>
                    <p style={{fontSize:'11px',marginLeft:'-60px'}}>Contoh : Iklan Radio yang Menjual, Membuat Web Sederhana</p>
                </div>

                <div style={{marginTop:'3cm', marginLeft:'-10cm'}}>
                    <label style={{width:'10cm'}}>
                        <select 
                        className='form-control' 
                        onChange={handleChange('Kategori')}
                         >
                            <option hidden selected>--Pilih Kategori--</option>
                            <option value={1}>Branding</option>
                            <option value={2}>Marketing</option>
                        </select>
                    </label>
                </div>

                <div style={{marginTop:'3.5cm', marginLeft:'-10cm'}}>
                    <label style={{width:'10cm'}}>
                        <textarea rows='5' className='form-control mt-5' 
                        placeholder='Deskripsikan Kelasmu'
                        name='Deskripsi'
                        ref='deskripsi'
                        value={Deskripsi}
                        type=''
                        onChange={handleChange('Deskripsi')}
                        />
                    </label>
                </div>

                <button className='next' onClick={this.continue} style={{marginTop:'9.5cm', marginLeft:'-2cm'}}>
                    <FaLongArrowAltRight size={32}/>
                </button>
            </div>
        )
    }
}

export default MinorAdd
