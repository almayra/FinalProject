import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import CEWE from '../../support/img/kelas.png'
import {FaUserAlt} from 'react-icons/fa'
import Axios from 'axios';
import { APIURL, APIURLIMG } from '../../support/url';

export class Kelas extends Component {
    state={
        cardKelas:[]
    }

    componentDidMount(){
        Axios.get(`${APIURL}kelas/getkelas`)
        .then(res1 =>{
            this.setState({cardKelas:res1.data})
            console.log('get kelas', res1.data)
        }).catch(err =>{
            console.log(err)
        })
    }

    renderCard=()=>{
        var card=this.state.cardKelas
        if(card.length){
            return card.map((val, index)=>{
                return(
                        <Link to={'/kelasdetail/' +val.id} style={{marginLeft:'-20cm',marginTop:'40px'}}>
                            <div className='d-flex'>
                                <div class="card" style={{width: '20rem', borderRadius:'2rem', height:'22rem'}}>
                                <img class="card-img-top" style={{borderRadius:'2rem',borderBottomLeftRadius:'0rem', borderBottomRightRadius:'0rem', height:'11rem' }} src={`${APIURLIMG+val.cover}`} alt="Card image cap"/>
                                    <div class="card-body">
                                    <p class="card-text" style={{fontSize:'15px',fontWeight:'500',color:'#8B8B8B',textAlign:'left'}}>{val.namakategori}</p>
                                    <p class="card-text" style={{fontWeight:'bolder',fontSize:'25px',textAlign:'left',color:'#222E35'}}>{val.judul}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                )
            })
        }else{
            return(
                <div> loading </div>
            )
        }
    }

    render() {
        return (
            <div className='login1-admin'>
                <div class="container white topBotomBordersOut" style={{marginLeft:'-8.5cm',marginTop:'-3cm'}}>
                        <Link a to='beranda' style={{color:'black'}}>
                            BERANDA
                        </Link>
                        <Link a to='kelas' style={{color:'black'}}>
                            KELAS
                        </Link>
                        <Link a to='galeri' style={{color:'black'}}>
                            GALERI PKC
                        </Link>                          
                        <FaUserAlt
                            size={30}
                            style={{marginTop:'-1.5cm',marginLeft:'40cm',color:'#4b4b4b'}}
                        />
                    </div>    
                <div className='kecuali'>
                   <div className='box'>
                        <div className='bebas' style={{fontSize:'35px',color:'white',fontWeight:'bold',marginTop:'1cm'}}>
                            Jadilah Bebas. Berlangganan Sekarang.
                        </div>
                        <Link to='/paketbelajar' style={{textDecoration:'none',color:'white'}}>
                            <button className='btn btn-info' style={{borderRadius:'20px',fontWeight:'900px',marginLeft:'-10cm',marginTop:'-2.5cm'}}>Paket Belajar</button>
                        </Link>
                        <img
                        style={{width:'12cm',marginLeft:'-23cm',marginTop:'-3.5cm'}}
                        src={CEWE}
                        />
                        <div className='block d-flex'>
                            <div className="materi mt-3">
                                Kategori Materi
                            </div>
                            <div className='kategori mr-4' style={{marginLeft:'1cm'}}>
                                Semua Program
                            </div>
                            <div className='kategori mr-4'>
                                Branding
                            </div>
                            <div className='kategori'>
                                Marketing
                            </div>
                        </div>
                   </div>
                </div>

                <div className='d-flex' style={{marginTop:'10.5cm'}} className='kelasloop'>
                    {this.renderCard()}
                </div>

            </div>
        )
    }
}

export default Kelas
