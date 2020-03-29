import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import CEWE from '../../support/img/kelas.png'
import {FaUserAlt} from 'react-icons/fa'
import Axios from 'axios';
import {connect} from 'react-redux'
import { APIURL, APIURLIMG } from '../../support/url';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal=withReactContent(Swal)

export class Kelas extends Component {
    state={
        cardKelas:[],
        page:1,
        pager:{},
        search:'',
        notloginyet:false,
        kelasdetail:false        
    }

    componentDidMount(){
        Axios.get(`${APIURL}kelas/getkelas`)
        .then(res1 =>{
            this.setState({cardKelas:res1.data})
            console.log('get kelas', res1.data)
        }).catch(err =>{
            console.log(err)
        })
        Axios.get(`${APIURL}kelas/getkelaspage/${this.state.page}`)
        .then(res1 =>{
            console.log('get kelas', res1.data)
            this.setState({cardKelas: res1.data.pageOfData, pager:res1.data.pager})
        }).catch( err=>{
            console.log(err)
        })
    }

    componentDidUpdate(_, prevState){
        if(prevState.page !== this.state.page){
            Axios.get(`${APIURL}kelas/getkelaspage/${this.state.page}`)
            .then((res1)=>{
                console.log('get kelas', res1.data)
                this.setState({cardKelas: res1.data.pageOfData, pager:res1.data.pager})
            }).catch((err)=>{
                console.log(err)
            })
        }
    }

    onSubscribeClick=()=>{
        return(
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Kamu belum ada paket kelas! :)',
                footer: '<a href="/paketbelajar">Berlangganan Sekarang</a>'
              })
        )
    }

    renderCard1=()=>{
        var card=this.state.cardKelas
        if(card.length){
            return card.map((val, index)=>{
                return(
                    <div onClick={this.onSubscribeClick} style={{marginLeft:'-20cm',marginTop:'40px'}}>
                        <div className='d-flex'>
                            <div class="card" style={{width: '20rem', borderRadius:'2rem', height:'22rem'}}>
                            <div className='gambar'>
                                <img class="card-img-top" style={{borderRadius:'2rem',borderBottomLeftRadius:'0rem', borderBottomRightRadius:'0rem', height:'11rem' }} src={`${APIURLIMG+val.cover}`} alt="Card image cap"/>
                            </div>
                                <div class="card-body">
                                <p class="card-text" style={{fontSize:'15px',fontWeight:'500',color:'#8B8B8B',textAlign:'left'}}>{val.namakategori}</p>
                                <p class="card-text" style={{fontWeight:'bolder',fontSize:'25px',textAlign:'left',color:'#222E35'}}>{val.judul}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }else{
            return(
                <div> loading </div>
            )
        }
    }
         

    getBranding(){
        Axios.get(`${APIURL}kelas/getbranding`)
        .then(res1 =>{
            this.setState({cardKelas:res1.data})
            console.log(res1.data, 'branding')
        }).catch(err =>{
            console.log(err)
        })
    }

    getMarketing(){
        Axios.get(`${APIURL}kelas/getmarketing`)
        .then(res1 =>{
            this.setState({cardKelas:res1.data})
            console.log(res1.data, 'branding')
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
                            <div className='gambar'>
                                <img class="card-img-top" style={{borderRadius:'2rem',borderBottomLeftRadius:'0rem', borderBottomRightRadius:'0rem', height:'11rem' }} src={`${APIURLIMG+val.cover}`} alt="Card image cap"/>
                            </div>
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
        var {pager}=this.state
        return (
            <div className='login1-admin1'>
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
                            <div className='kategori mr-4' style={{marginLeft:'1cm'}} onClick={()=>this.componentDidMount()} >
                                Semua Program
                            </div>
                            <div className='kategori mr-4' onClick={()=>this.getBranding()}>
                                Branding
                            </div>
                            <div className='kategori' onClick={()=>this.getMarketing()}>
                                Marketing
                            </div>
                        </div>
                   </div>
                </div>
                <div>
                    <div className='d-flex' style={{marginTop:'10.5cm'}} className='kelasloop'>
                        {this.props.idpaketbljr===1? this.renderCard1() : this.renderCard()}
                    </div>

                <div style={{ maxWidth:'fit-content', marginLeft:'-53rem',marginTop:'2rem', marginBottom:'3rem'}}>
                    {pager.pages && pager.pages.length &&
                        <ul className="pagination pagination-lg" style={{ backgroundColor: '#f5f5f5', color: 'black' }}>
                            <li className={`page-item first-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                                <Link to={{ search: `?page=1` }} className="page-link" onClick={() => this.setState({ page: pager.startPage })}  >First</Link>
                            </li>
                            <li className={`page-item previous-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                                <Link className="page-link" onClick={() => this.setState({ page: pager.currentPage - 1 })}>Previous</Link>
                            </li>
                            {pager.pages.map(page =>
                                <li key={page} className={`page-item number-item ${pager.currentPage === page ? 'active' : ''}`}>
                                    <Link className="page-link" onClick={() => this.setState({ page: page })}>{page}</Link>
                                </li>
                            )}
                            <li className={`page-item next-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                                <Link className="page-link" onClick={() => this.setState({ page: pager.currentPage + 1 })}>Next</Link>
                            </li>
                            <li className={`page-item last-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                                <Link className="page-link" onClick={() => this.setState({ page: pager.endPage })}>Last</Link>
                            </li>
                        </ul>
                    }
                </div>
                </div>
            </div>
        )
    }
}

const MapStateToProps=(state)=>{
    return{
        Authlog:state.Auth.login,
        idpaketbljr:state.Auth.idpaketbljr
    }
}

export default connect(MapStateToProps) (Kelas)
