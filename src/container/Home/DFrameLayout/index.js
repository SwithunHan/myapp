import React, {Component} from 'react'
// import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/css/swiper.min.css'
import {getdframeinfo} from '../../../api'
import './style.scss'

class DFrameLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dframeList: []
        }
    }

    render() {
        return (
            <div className='DFrameLayout'>
                <div className="image-view"/>
                <div className="info-swiper">
                    {
                        this.state.dframeList.map((item) => (
                            <div key={item.id} className="info-box swiper-slide">
                                <a href={item.url} className="info">
                                    {
                                        item.info.map((text) => (
                                            <div className="info-name" key={text.id}>
                                                <span className="info-type">{text.type}</span>
                                                <p className="info-text">{text.text}</p>
                                            </div>
                                        ))
                                    }
                                </a>
                                <div className="right-img">
                                    <div style={{
                                        backgroundImage: `url(${item.imgURL})`,
                                        backgroundSize:"cover",
                                        width: "100%",
                                        height: "100%"
                                    }}/>
                                    <div className="left-shadow"/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    componentDidMount() {
        try {
            getdframeinfo().then((dframeList) => {
                this.setState({
                    dframeList
                })
            })
        } catch (e) {
            console.log(e);
        }

    }
}

export default DFrameLayout