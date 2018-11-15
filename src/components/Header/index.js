import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './style.scss'
import vue from '../../static/images/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className='Header'>
                <img src={vue} alt="" className="logo"/>
                <Link to="/search">
                    <span className="search">
                        <FontAwesomeIcon icon={faSearch} color={"#fff"} size={"sm"} className={"searchIcon"}/>
                        寻找宝贝店铺
                    </span>
                </Link>
            </div>
        )
    }
}

export default Header