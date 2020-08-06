import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa'
import KELAS from '../../support/img/kosong.png'
import {connect} from 'react-redux'
import Axios from 'axios';
import { APIURL, APIURLIMG } from '../../support/url';
import {AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, FormText, CustomInput, Button } from 'reactstrap'
import {logOut} from '../../redux/action'


export class Home extends Component {
    state={
        cardKelasBaru:[],
        cardKelas:[],
        page:1,
        pager:{},
        search:'',
        modalprofil:false,
        username:''
    }

    usernameCap=(username)=>{
        if(username){
            var nama=username.split('')
            nama[0]=nama[0].toUpperCase()
            return nama.join('')
        }else{
            return(
                <div> {this.usernameCap} </div>
            )
        }
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
        Axios.get(`${APIURL}kelas/getkelasbaru`)
        .then(res1=>{
            this.setState({cardKelasBaru:res1.data})
            console.log('get kelas baru', res1.data)
        }).catch(err =>{
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

    renderCard=()=>{
        var card=this.state.cardKelas
        if(card.length){
            return card.map((val, index)=>{
                return(
                    <Link to={'/kelasdetail/' +val.id} style={{marginLeft:'36rem',marginTop:'-15rem', marginRight:'-35rem'}}>
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

    renderCardBaru=()=>{
        var cardbaru= this.state.cardKelasBaru
        if(cardbaru.length){
            return cardbaru.map((val, index)=>{
                return(
                    <Link to={'/kelasdetail/' +val.id} style={{marginTop:'30px'}}>
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

    onProfilOpen=()=>{
        this.setState({modalprofil:true})
    }

    logOutUser=()=>{
        localStorage.clear()
        logOut()
    }

    render() {
        var {pager}=this.state
        return (
            <div className='App-kelas' style={{height:'40vh'}}>
                <Modal isOpen={this.state.modalprofil} centered toggle={() => this.setState({ modalprofil: false })}>
                    <ModalHeader>
                        <div style={{fontSize:'15px', fontWeight:'bold'}}>
                            Profil
                        </div>                    
                    </ModalHeader>
                    <ModalBody>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item" style={{cursor:'pointer', color:'black'}}>Ganti Password  </li>
                            <a href ='login' class="list-group-item" style={{cursor:'pointer', color:'black'}} onClick={this.logOutUser} >Keluar </a>
                        </ul>
                    </ModalBody>
                </Modal>
                <div className='sidebar'>
                <div>
                    <div class="container white topBotomBordersOut" style={{marginLeft:'-8.5cm',marginTop:'-3cm'}}>
                            <Link a to='beranda' style={{color:'black'}}>
                                BERANDA
                            </Link>
                            <Link a to='kelas' style={{color:'black'}}>
                                KELAS
                            </Link>
                            {/* <Link a to='galeri' style={{color:'black'}}>
                                GALERI PKC
                            </Link>                           */}
                    </div>   
                    <div>
                        <FaUserAlt
                            size={30}
                            onClick={()=>this.onProfilOpen()}
                            style={{marginTop:'-24rem',marginLeft:'80.7rem',color:'#4b4b4b'}}
                        />
                    </div> 
                </div>    
                </div>
                <div className='kecuali1'></div>
                {
                    this.props.idpaketbljr===1?
                    <div>
                        <div>
                            <img
                            style={{marginTop:'-4cm',marginLeft:'-8cm',width:'22cm',  position: 'relative'}}
                            src={KELAS}
                            />
                        </div>
                        <div className='kosong'>
                            Halo, {this.usernameCap(this.props.username)}. Kelasmu masih kosong.<br/>
                            Tambahkan kelas yang kamu suka! :)
                        </div>
                        <div className='telusuri'>
                            <Link to='/kelas' style={{cursor:'pointer',color:'#8474A1',textDecoration:'none',fontWeight:'bold'}}>Telusuri Kelas</Link>
                        </div>
                    </div>
                    : null
                }
                {
                    this.props.idpaketbljr===2?
                    <div>
                        <h1 style={{color: 'black', size: '50px', marginTop:'-100px', fontWeight:'bold', marginLeft:'-20cm'}}>Hi {this.usernameCap(this.props.username)}, ada kelas baru nih!</h1>
                        <div className='kelasloop2'>
                            {this.renderCardBaru() }
                        </div>
                        <h1 style={{color: 'black', size: '50px', marginTop:'-55rem', fontWeight:'bold', marginLeft:'-24.7cm'}}>Semua Kelas</h1>
                        <div className="kelasloop" style={{marginTop:'20rem'}}>
                            {this.renderCard()}
                        </div>
                        <div style={{ maxWidth:'fit-content', marginLeft:'36rem',marginTop:'-15rem'}}>
                        {pager.pages && pager.pages.length &&
                            <ul className="pagination pagination-lg" style={{ backgroundColor: '#f5f5f5', color: 'black', maxWidth:'fit-content' }}>
                                <li className={`page-item first-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                                    <Link to={{ search: `?page=1` }} className="page-link" onClick={() => this.setState({ page: pager.startPage })}> <AiOutlineDoubleLeft/> </Link>
                                </li>
                                <li className={`page-item previous-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                                    <Link className="page-link" onClick={() => this.setState({ page: pager.currentPage - 1 })}> <AiOutlineLeft/> </Link>
                                </li>
                                {pager.pages.map(page =>
                                    <li key={page} className={`page-item number-item ${pager.currentPage === page ? 'active' : ''}`}>
                                        <Link className="page-link" onClick={() => this.setState({ page: page })}>{page}</Link>
                                    </li>
                                )}
                                <li className={`page-item next-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                                    <Link className="page-link" onClick={() => this.setState({ page: pager.currentPage + 1 })}> <AiOutlineRight/> </Link>
                                </li>
                                <li className={`page-item last-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                                    <Link className="page-link" onClick={() => this.setState({ page: pager.endPage })}> <AiOutlineDoubleRight/> </Link>
                                </li>
                            </ul>
                        }
                        </div>
                    </div>

                    : null
                }
            
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        username: state.Auth.username,
        idpaketbljr:state.Auth.idpaketbljr
    }
}

export default connect(mapStateToProps)(Home)