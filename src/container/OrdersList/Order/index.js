import React, {Component} from 'react'
import './style.scss'
import {Link} from 'react-router-dom'

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (

            <Link to={`/odetail/${this.props.order.id}`} target="_blank">
                <div className='Order'>
                    <img src={this.props.order.imgUrl} alt=""/>
                </div>
            </Link>
        )
    }

}

export default Order