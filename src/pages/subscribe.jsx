import React, { Component } from 'react'

export class Subscribe extends Component {
    render() {
        return (
            <div className='notfound'>
               <div className='d-flex'>
                    <div class="card" style={{width:'20rem',height:'15cm',marginTop:'1.5cm',marginLeft:'2cm'}}>
                    <img class="card-img-top" src="https://cdn1.imggmi.com/uploads/2020/1/18/dec315c1124af3377876a16e0c68dbf5-full.png" alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                    </div>
               </div>
            </div>
        )
    }
}

export default Subscribe
