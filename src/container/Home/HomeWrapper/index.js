import React, {Component} from 'react'
import "./style.scss"
import {getBannerList} from "../../../api";

class HomeWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerList: []
        }
    }

    render() {
        return (
            <div className='HomeWrapper'>
                <div
                    style={{
                        background: `url(https://gw.alicdn.com/tps/TB155AUPpXXXXajXVXXXXXXXXXX-1125-480.png_.webp) no-repeat`,
                        backgroundSize: '100%',
                        height: "10px",
                        fontSize: "0"
                    }}/>
                <ul className="banner">
                    {
                        this.state.bannerList.map((item) => (
                            <li key={item.id}>
                                <a href={item.href}>
                                    <span style={{backgroundImage: `url(${item.src})`}}/>
                                    <p>{item.text}</p>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }

    componentWillMount() {
        getBannerList().then((bannerList)=>{
            this.setState({
                bannerList
            })
        })
    }
}

export default HomeWrapper