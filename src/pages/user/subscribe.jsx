import React, { Component } from 'react'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {FaLongArrowAltLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import GRATIS from '../../support/img/gratis.png'
import STANDAR from '../../support/img/standar.png'
import PREMIUM from '../../support/img/premium.png'


export class Subscribe extends Component {
    render() {
        return (
            <div className='subscribe'>
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
                            <li class="list-group-item">
                                <IoMdCheckmarkCircleOutline size={20} color='#77dd88' className='mr-3'/>
                                Join komunitas
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                    <button className='btn btn-success' style={{borderRadius:'15px',fontSize:'20px',fontWeight:'bold',marginTop:'1cm'}}>
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
                                Akses tanpa batas
                            </li>
                            <li class="list-group-item">
                                <IoMdCheckmarkCircleOutline size={20} color='#77dd88' className='mr-3'/>
                                Sertifikat kelulusan
                            </li>
                            <li class="list-group-item">
                                <IoMdCheckmarkCircleOutline size={20} color='#77dd88' className='mr-3'/>
                                Join komunitas
                            </li>
                            <li class="list-group-item">
                                <IoMdCheckmarkCircleOutline size={20} color='#77dd88' className='mr-3'/>
                                Hemat 20%
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <button className='btn btn-success' style={{borderRadius:'15px',fontSize:'20px',fontWeight:'bold'}}>
                        IDR 700
                        <div style={{fontSize:'12px',fontWeight:'lighter',textTransform:'lowercase'}}>per tahun</div> 
                        </button>
                    </div>
                    </div>
               </div>
            </div>
        )
    }
}

export default Subscribe
