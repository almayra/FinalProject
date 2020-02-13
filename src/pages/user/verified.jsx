import React, { Component } from 'react'
import Axios from 'axios'
import queryString from 'query-string'
import {APIURL} from '../../support/url'
import BERHASIL from '../../support/img/berhasilver.png'
import GAGAL from '../../support/img/gagal.png'


export class Verified extends Component {
    state={
        loading:true,
        status:'unverified'
    }

    componentDidMount(){
        console.log(this.props.location.search)
        var params=queryString.parse(this.props.location.search)
        console.log(params)
        var username=params.username
        var password=params.password

        Axios.put(`${APIURL}auth/verifikasiemail`, {username,password})
        .then((res)=>{
            console.log('berhasil')
            this.setState({status:'berhasil'})
        }).catch((err)=>{
            console.log('error')
            this.setState({status:'gagal'})
        })

    }

    render() {
        if(this.state.status==='berhasil'){
            return (
                <div className='verifikasi1'>
                    <img 
                    src={BERHASIL}
                    style={{height:'15cm', marginTop:'1cm'}}
                    />
                    <h1 style={{fontSize:'45px',fontWeight:'bold', marginTop:'5cm',color:'#f1cea3'}}> Berhasil Terverifikasi </h1>
                    <div style={{marginLeft:'-10.8cm', marginTop:'7cm', fontSize:'20px', color:'#4e4e4e'}}>
                        Kembali ke <a href='/' style={{color:'#41677D', fontWeight:'900px',textDecoration:'underline'}}>Pesantren Kilat Copywriting</a>
                    </div>
                </div>
            )
        }else if(this.state.status==='gagal'){
            return(
                <div className='ver2'>
                    <img 
                    src={GAGAL}
                    style={{height:'15cm', marginTop:'2cm',marginLeft:'-2cm'}}
                    />
                    <h1 style={{fontSize:'45px',fontWeight:'bold', marginTop:'5cm',color:'#f1cea3'}}> Gagal Terverifikasi </h1>
                    <div style={{marginLeft:'-7.3cm', marginTop:'7cm', fontSize:'20px', color:'#4e4e4e'}}>
                        Silakan coba lagi!
                    </div>
                </div>
            )
        }
        return (
            <div>
                <center>
                    <h1>Sedang Memverifikasi</h1>
                </center>
            </div>
        )
    }
}

export default Verified
