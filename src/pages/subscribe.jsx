import React, { Component } from 'react'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {FaLongArrowAltLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom';

export class Subscribe extends Component {
    render() {
        return (
            <div className='notfound'>
                        <Link to='/kelas' style={{textDecoration:'none',color:'#4b4b4b'}}>
                            <FaLongArrowAltLeft
                            style={{marginLeft:'1cm'}}
                            size={50}
                            color='#4b4b4b'
                            className='ikon'
                            />
                        </Link>
               <div className='d-flex'>
                    <div class="card" style={{width:'20rem',height:'15cm',marginTop:'1.5cm',marginLeft:'2.5cm',borderRadius:'20px'}}>
                    <img class="card-img-top" src="https://cdn1.imggmi.com/uploads/2020/1/18/fcd750cfc89ab7d3390845ec3dcdd46d-full.png" alt="Card image cap"/>
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

                    <div class="card" 
                    style={{width:'20rem',height:'15cm',marginTop:'1.5cm',marginLeft:'2cm',borderRadius:'20px'}}
                    >
                    <img class="card-img-top" src="https://cdn1.imggmi.com/uploads/2020/1/18/cb8cd55eb9a69ca83f84e1314f8e47d0-full.png" alt="Card image cap"/>
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
                    
                    <div class="card" 
                    style={{width:'20rem',height:'15cm',marginTop:'1.5cm',marginLeft:'2cm',borderRadius:'20px'}}
                    >
                    <img class="card-img-top" src="https://cdn1.imggmi.com/uploads/2020/1/18/91ef879c1a9baeda62b8acd6d28b23ae-full.png" alt="Card image cap"/>
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
                                Portofolio
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <button className='btn btn-success' style={{borderRadius:'15px',fontSize:'20px',fontWeight:'bold'}}>
                        IDR 800
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
