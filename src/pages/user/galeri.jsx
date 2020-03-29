import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa'
import COPY from '../../support/img/copy2.jpg'
import Axios from 'axios';
import {APIURL, APIURLIMG} from '../../support/url'
import {logOut} from '../../redux/action'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'


const logOutUser=()=>{
    localStorage.clear()
    logOut()
}

class Kelolagaleri extends Component {
    state={
        dataGaleri:[],
        modalprofil:false
    }

    componentDidMount(){
        Axios.get(`${APIURL}galeri/getgaleri`)
        .then(res1 =>{
            this.setState({dataGaleri:res1.data})
            console.log(this.state.dataGaleri)
        }).catch(err =>{
            console.log(err)
        })
    }

    renderGallery=()=>{
        var galeri=this.state.dataGaleri
        if(galeri.length){
            return galeri.map((val, index)=>{
                return(
                    <div>
                        <img src={`${APIURLIMG+val.foto}`} style={{height:'12rem', borderRadius:'1rem'}} />
                    </div>
                )
            })
        }
    }

    onModalOpen=()=>{
        this.setState({modalprofil:true})
    }

    render() {
        return (
            <div className='login3'>
                <Modal isOpen={this.state.modalprofil} centered toggle={() => this.setState({ modalprofil: false })}>
                    <ModalHeader>
                        <div style={{fontSize:'15px', fontWeight:'bold'}}>
                            Profil
                        </div>                    
                    </ModalHeader>
                    <ModalBody>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item" style={{cursor:'pointer'}}>Ganti Password  </li>
                            <li class="list-group-item" style={{cursor:'pointer'}}>Keluar </li>
                        </ul>
                    </ModalBody>
                </Modal>

               <div>
                    <div class="container blue12 topBotomBordersOut" style={{marginLeft:'-8.5cm',marginTop:'-3cm'}}>
                        <Link a to='beranda' style={{color:'black'}}>
                            BERANDA
                        </Link>
                        <Link a to='kelas' style={{color:'black'}}>
                            KELAS
                        </Link>
                        <Link a to='galeri' style={{color:'black'}}>
                            GALERI PKC
                        </Link>     
                    </div>
                    <div>
                        <FaUserAlt
                        onClick={()=>this.onModalOpen()}
                        size={30}
                        style={{marginTop:'-8.9cm',marginLeft:'88rem',color:'#4b4b4b', cursor:'pointer'}}
                        />
                    </div>
                </div>
                <div style={{marginLeft:'-26cm'}}>
                    <div className='galeritext'>GALERI PKC</div>
                    <div className="textkecil">
                        Dunia adalah lembar utuh,<br/>
                        dan pikiranmu tintanya.<br/><br/>
                        Buat iklan yang nyata,<br/>
                        dimana pikiran bercerita.
                    </div>
                </div>
                    <a className='disini' href='#pkc' style={{textDecoration:'none', color:'#f8f9fb'}}>
                        Mulai Disini
                    </a>
                <div>
                    <img src={COPY} style={{width:'27cm', height:'15cm', marginTop:'2cm', marginRight:'-7cm'}} />
                </div>
                <div id='pkc' className='galleryloop1' style={{marginTop:'100vh'}}>
                    {this.renderGallery()}
                </div>
            </div>
        )
    }
}

export default Kelolagaleri
