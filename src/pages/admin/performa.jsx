import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa'
import { APIURL } from '../../support/url';
import { Card } from 'reactstrap';
import Axios from 'axios'


export class Performa extends Component {
    state={
        datauser:[]
    }

    componentDidMount(){
        Axios.get(`${APIURL}auth/datauser`)
        .then(res1 =>{
            this.setState({datauser:res1.data})
            console.log(this.state.datauser)
        }).catch(err =>{
            console.log(err)
        })
    }

    renderTable=()=>{
        var table=this.state.datauser
        if(Card.length){
            return table.map((val, index)=>{
                return(
                        <tr>
                            <td style={{ fontWeight:'regular', fontSize:'13px'}}> {val.username} </td>
                            <td style={{ fontWeight:'regular', fontSize:'13px'}}> {val.email} </td>
                            <td style={{ fontWeight:'regular', fontSize:'13px'}}> {val.status} </td>
                        </tr>
                )
            })
        }
    }

    render() {
        return (
            <div className='login1'>
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
                            style={{marginTop:'-1.5cm',marginLeft:'38cm',color:'#4b4b4b'}}
                            />
                        </div>
                </div>
                <div className='table'>
                    <table class="ui striped table" style={{marginLeft:'-20.5cm', width:'30cm'}}>
                        <thead>
                            <tr>
                            <th style={{ fontWeight:'bold', fontSize:'15px'}}>Nama</th>
                            <th style={{ fontWeight:'bold', fontSize:'15px'}}>Alamat Email</th>
                            <th style={{ fontWeight:'bold', fontSize:'15px'}}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Performa
