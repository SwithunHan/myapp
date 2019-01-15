import React, {Component} from 'react'
import {Link} from "react-router-dom"
import "./style.scss"
class IndexGoods extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Link to={this.props.link} className='IndexGoods'>
                <img src={this.props.imgUrl} alt=""/>
            </Link>
        )
    }
}

export default IndexGoods