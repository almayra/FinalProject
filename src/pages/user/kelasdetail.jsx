import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa'
import {IoIosArrowBack} from 'react-icons/io'
import Axios from 'axios';
import { APIURL} from '../../support/url';
import { Menu } from 'semantic-ui-react'



export class Kelasdetail extends Component {
    state={
        detailkelas:[],
        activeItem: 'home'
    }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  
  componentDidMount(){
        var id=this.props.match.params.id
        console.log(id)
        Axios.get(`${APIURL}kelas/getdetailkelas/${id}`)
        .then(res => {
            this.setState({detailkelas:res.data[0]})
        }).catch(err =>{
            console.log(err)
        })
    }
    
    render() {
        const { activeItem } = this.state
        if(this.state.detailkelas){
            return (
                <div className='login4'>
                <div class="container white topBotomBordersOut" style={{marginLeft:'-8.5cm',marginTop:'-3cm'}}>
                        <Link to='beranda' style={{color:'black'}}>
                            BERANDA
                        </Link>
                        <Link a to='/kelas' style={{color:'black'}}>
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
                <div className='login1-detailkelas'>
                    <div className='detailtext'>
                        <div className='d-flex' style={{width:'400px'}} >
                            <Link to='/kelas'>
                                <IoIosArrowBack size={32} className='mr-2'color='black' />
                            </Link>
                            <div className='mt-1' style={{fontFamily:'Roboto', fontWeight:'bold', color:'black', textAlign:'left', fontSize:'30px'}}> {this.state.detailkelas.bab} </div>
                        </div>
                    </div>
                    <div>
                    <iframe width="700" 
                        height="415" 
                        style={{marginTop:'-7cm'}}
                        src={this.state.detailkelas.materi} 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        allowFullScreen
                        />
                    </div>
                    <div className='d-flex'>
                        <Menu pointing secondary vertical className='mt-5 ml-5'>
                            <Menu.Item
                            name='Deskripsi'
                            active={activeItem === 'home'}
                            />
                        </Menu>
                        <div style={{marginTop:'50px', marginLeft:'35px', fontSize:'14px'}} >{this.state.detailkelas.deskripsi}</div>
                    </div>
                    
                </div>
            </div>
        )
    }return(
        <h1>loading</h1>
    )
    }
}

export default Kelasdetail