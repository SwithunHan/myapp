import React, {Component} from 'react'
// import Swiper from 'swiper/dist/js/swiper.js'
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
                            <div key={item.id} className="info-box">
                                <a href={item.url} className="info">
                                    {
                                        item.info.map((text)=>(
                                            <div className="info-name" key={text.id}>
                                                <span className="info-type">{text.type}</span>
                                                <span>{text.text}</span>
                                            </div>
                                        ))
                                    }
                                </a>
                                <div style={{background: `url:('${item.imgURL}')`}}/>
                                <div className="left-shadow" style={{background:"url:('http://gw.alicdn.com/mt/TB1tzxrrTtYBeNjy1XdXXXXyVXa-390-255.png')"}}/>
                            </div>

                        ))
                    }
                </div>
            </div>
        )
    }

    componentDidMount() {
        try {
            getdframeinfo().then((dframeList)=>{
                this.setState({
                    dframeList
                })
            })
        }catch (e) {
            console.log(e);
        }

    }
}

export default DFrameLayout