import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import LOGO from '../../support/img/logoitem.png'
import GAMBAR from '../../support/img/regis.png'
import {FaLongArrowAltRight} from 'react-icons/fa'
import { Link, Redirect } from 'react-router-dom';
import {UserRegister} from '../../redux/action'
import {connect} from 'react-redux'
import {AiOutlineExclamationCircle} from 'react-icons/ai'
import Loader from 'react-loader-spinner'

export class Register extends Component {
    state={
        error:'',
        loading:false
    }

    btnRegister=()=>{
        var username = this.username.value
        var email = this.email.value
        var password = this.password.value
        
        this.props.UserRegister({
            username,
            email,
            password
        })
        
    }

    renderError=()=>{
        if (this.props.error==='') {
            return null
        }else{
            return <p className='block-example border border-danger' style={{width:'90%', marginLeft:'1cm',color:'#dd3c3c', fontSize:'12px',paddingTop:'11px'}}> <AiOutlineExclamationCircle size={20} className='mr-2' style={{marginTop:'-5px'}} /> {this.props.error} </p>
        }
    }


    render() {
        if (this.props.register) {
            return <Redirect to='/beranda' />
        }
        return (
            <div className='login1'>
                <Link to='/' style={{cursor:'pointer'}}>
                    <img src={LOGO}
                    className='d-flex logo'
                    style={{height:'150px',width:'150px'}}
                    />
                </Link>
                <div className='login1-halfbox'>
                    <img
                    style={{width:'18cm',height:'14cm',marginTop:'2cm',marginLeft:'-0.6cm'}}
                    src={GAMBAR}
                    />
                </div>
                <div className='login1-halfblock'>
                    <div className='tuliss'>
                        Daftar Akun
                    </div>
                    <div style={{marginLeft:'3cm',marginTop:'-3cm'}}>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md="9">
                                <form>
                                    <div className="grey-text">
                                    <MDBInput
                                        label="Nama kamu"
                                        icon="user"
                                        group
                                        type="text"
                                        inputRef={ref => this.username = ref}
                                        />
                                    <MDBInput
                                        label="Email kamu"
                                        icon="envelope"
                                        group
                                        type="email"
                                        inputRef={ref => this.email = ref}
                                        />
                                    <MDBInput
                                        label="Password kamu"
                                        icon="lock"
                                        group
                                        type="password"
                                        inputRef={ref => this.password = ref}
                                        />
                                    </div>
                                    <div>
                                        {this.renderError()}
                                    </div>
                                    <div className="text-center">
                                        {this.props.auth.loading?
                                            <Loader type="Hearts" color="pink" height={100} width={100} />
                                        :
                                            <MDBBtn onClick={this.btnRegister} style={{marginTop:'2cm'}} >Daftar</MDBBtn>
                                    }
                                    </div>
                                </form>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                    <div style={{marginTop:'-1cm',fontWeight:'initial'}}>
                        <Link to='/login' className='buat' style={{cursor:'pointer',color:'#4e4e4e',textDecoration:'none'}}>Punya Akun? <FaLongArrowAltRight/></Link>
                    </div>
                </div>
            </div>
        )
    }
}

const MapStateToProps=(state)=>{
    return{
        error:state.Auth.error,
        register:state.Auth.register,
        auth:state.Auth
    }
}

export default connect(MapStateToProps, {UserRegister}) (Register)
