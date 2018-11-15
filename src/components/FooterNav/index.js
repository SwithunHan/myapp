import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faShoppingCart, faClipboardList, faUser, faEllipsisH} from '@fortawesome/free-solid-svg-icons'
import "./style.scss"


const Nav = function ({text, icon, url}) {
    return (
        <Link className="nav" to={`${url}`}>
            <FontAwesomeIcon icon={icon}/>
            <p style={{marginTop:'5px'}}>{text}</p>
        </Link>
    )
};

class FooterNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: [
                {
                    id: 1,
                    text: "首页",
                    icon: faHome,
                    url: "/home"
                },
                {
                    id: 2,
                    text: "购物车",
                    icon: faShoppingCart,
                    url: "/cart"
                },
                {
                    id: 3,
                    text: "订单列表",
                    icon: faClipboardList,
                    url: "/orderList"
                },
                {
                    id: 4,
                    text: "我的淘宝",
                    icon: faUser,
                    url: "/person"
                },
                {
                    id: 5,
                    text: "更多",
                    icon: faEllipsisH,
                    url: "/more"
                },
            ]
        }
    }

    render() {
        return (
            <div className='FooterNav'>
                {
                    this.state.navList.map((nav) => (
                        <Nav key={nav.id} text={nav.text} icon={nav.icon} url={nav.url}/>))
                }
            </div>
        )
    }
}

export default FooterNav