import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa'
import { APIURL } from '../../support/url';
import { Card } from 'reactstrap';
import Axios from 'axios'


export class Performa extends Component {
    state={
        datauser:[],
        page:1,
        pager:{},
        search:''
    }

    componentDidMount(){
        Axios.get(`${APIURL}auth/datauser/${this.state.page}`)
        .then(res1 =>{
            this.setState({datauser:res1.data.pageOfData, pager:res1.data.pager})
            console.log(this.state.datauser)
        }).catch(err =>{
            console.log(err)
        })
    }

    componentDidUpdate(_, prevState){
        if(prevState.page !== this.state.page){
            Axios.get(`${APIURL}auth/datauser/${this.state.page}`)
            .then(res1 =>{
                this.setState({datauser:res1.data.pageOfData, pager:res1.data.pager})
                console.log(this.state.datauser)
            }).catch(err =>{
                console.log(err)
            })
        }
    }

    renderTable=()=>{
        var table=this.state.datauser
        if(Card.length){
            return table.map((val, index)=>{
                return(
                        <tr>
                            <td style={{ fontWeight:'regular', fontSize:'13px'}}> {index + 1}. </td>
                            <td style={{ fontWeight:'regular', fontSize:'13px'}}> {val.username} </td>
                            <td style={{ fontWeight:'regular', fontSize:'13px'}}> {val.email} </td>
                            <td style={{ fontWeight:'regular', fontSize:'13px'}}> {val.status} </td>
                        </tr>
                )
            })
        }
    }
    

    render() {
        var {pager} = this.state
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
                        <Link a to='/admingaleri' style={{color:'black'}}>
                            KELOLA GALERI
                        </Link> 
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
                                <th style={{ fontWeight:'bold', fontSize:'15px'}}>No.</th>
                                <th style={{ fontWeight:'bold', fontSize:'15px'}}>Nama</th>
                                <th style={{ fontWeight:'bold', fontSize:'15px'}}>Alamat Email</th>
                                <th style={{ fontWeight:'bold', fontSize:'15px'}}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTable()}
                        </tbody>
                        <tfoot class="full-width">
                            <tr>
                            <th colspan="6">
                                <div>
                                {pager.pages && pager.pages.length &&
                                    <ul className="pagination pagination-lg" style={{ backgroundColor: '#f5f5f5', color: 'black', justifyContent:'center' }}>
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
                                {/* <div class="ui right floated small teal labeled icon button">
                                    <i class="user icon"></i> 10
                                </div> */}
                            </th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

export default Performa
