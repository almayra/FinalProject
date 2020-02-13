import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa'
import IMG1 from '../../support/img/marketing.png'
import IMG2 from '../../support/img/socialmed.png'
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap'
import {MdEdit} from 'react-icons/md'
import {IoMdTrash} from 'react-icons/io'

export class Admin extends Component {
    state={
        modalprofil:false
    }

    render() {
        return (
            <div className='login1-admin'>
                <Modal isOpen={this.state.modalprof} toggle={()=>this.setState({modalprof:false})}>
                    <ModalHeader>
                        EDIT STUDIOS
                    </ModalHeader>
                    <ModalBody>
                        <input type='text' className='form-control mb-3' ref='editstudio' placeholder='Studio name'/>
                        <input type='number' className='form-control' ref='editkursi' placeholder='Seats'/>
                    </ModalBody>
                    <ModalFooter>
                        <button type="button" className="btn btn-primary" onClick={this.onClickEditStudio}>Save Change</button>
                    </ModalFooter>
                </Modal>

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
                            style={{marginTop:'-1.5cm',marginLeft:'40cm',color:'#4b4b4b'}}
                            />
                        </div>
                </div>
                <div className='kecuali'>
                    <div className="box1">
                        <Link to='/tambahkelas'>
                            <div className='tambahkelas' style={{textDecoration:'none', marginTop:'0.8cm'}}>Tambah Kelas</div>
                        </Link>
                        <div className='bebas1' style={{fontSize:'32px',color:'#4e4e4e',fontWeight:'bolder',marginLeft:'-14cm'}}>
                            Mulai Unggah Kelasmu
                        </div>
                    </div>
                    
                    <div className='d-flex'>
                        <div style={{marginLeft:'-20cm',marginTop:'1cm'}}>
                            <div class="card" style={{width: '20rem', borderRadius:'2rem', height:'24rem'}}>
                            <img class="card-img-top" style={{borderRadius:'2rem',borderBottomLeftRadius:'0rem'}} src={IMG1} alt="Card image cap"/>
                                <div class="card-body">
                                    <p class="card-text" style={{fontSize:'15px',fontWeight:'500',color:'#8B8B8B',textAlign:'left'}}>Digital Marketing</p>
                                    <p class="card-text" style={{fontWeight:'bolder',fontSize:'25px',textAlign:'left',color:'#222E35'}}>Strategi Digital Marketing</p>
                                    <div className='d-flex'>
                                        <div className='outerijo'> <MdEdit color='#58b800' size={32} /> </div>
                                        <div className='outermerah'> <IoMdTrash color='grey' size={32} /> </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{marginLeft:'1cm',marginTop:'1cm'}}>
                            <div class="card" style={{width: '20rem', borderRadius:'2rem', height:'24rem'}}>
                            <img class="card-img-top" style={{borderRadius:'2rem',borderBottomLeftRadius:'0rem'}} src={IMG2} alt="Card image cap"/>
                            <div class="card-body">
                                <p class="card-text" style={{fontSize:'15px',fontWeight:'500',color:'#8B8B8B',textAlign:'left'}}>Copywriting</p>
                                <p class="card-text" style={{fontWeight:'bolder',fontSize:'25px',textAlign:'left',color:'#222E35'}}>Copywriting yang Menjual</p>
                                <div className='d-flex'>
                                    <div className='outerijo'> <MdEdit color='#58b800' size={32} /> </div>
                                    <div className='outermerah'> <IoMdTrash color='grey' size={32} /> </div>
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Admin
