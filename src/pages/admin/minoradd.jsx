import React, { Component } from 'react'
import {FaLongArrowAltRight} from 'react-icons/fa'

export class MinorAdd extends Component {
continue=e=>{
    e.preventDefault()
    this.props.nextStep()
}

    render() {
        const {handleChange, namaKelas, Kategori, Deskripsi}= this.props;
        // console.log(this.props.handleChange)
        return (
            <div className='d-flex'>
                <div style={{marginLeft:'9.2cm'}}>
                    <label style={{width:'10cm'}}>
                        <input className='form-control mt-5'
                        style={{fontFamily:'Montserrat'}}
                        placeholder='Cantumkan Judul Kelas'
                        name='namaKelas'
                        value={namaKelas}
                        type='text'
                        onChange={handleChange('namaKelas')}
                        />
                    </label>
                    <p style={{fontSize:'11px',marginLeft:'-40px'}}>Contoh : Iklan Radio yang Menjual, Membuat Web Sederhana</p>
                </div>

                <div style={{marginTop:'3cm', marginLeft:'-10cm'}}>
                    <label style={{width:'10cm'}}>
                        <select 
                        className='form-control' 
                        value={Kategori} 
                        style={{fontFamily:'Montserrat'}}>
                            <option hidden>--Pilih Kategori--</option>
                            <option>Branding</option>
                            <option>Marketing</option>
                        </select>
                    </label>
                </div>

                <div style={{marginTop:'3.5cm', marginLeft:'-10cm'}}>
                    <label style={{width:'10cm'}}>
                        <textarea rows='5' className='form-control mt-5' 
                        style={{fontFamily:'Montserrat'}}
                        placeholder='Deskripsikan Kelasmu'
                        name='Deskripsi'
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
