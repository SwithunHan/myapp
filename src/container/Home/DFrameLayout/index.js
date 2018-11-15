import React, {Component} from 'react'
// import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import {host} from '../../../Host'
import './style.scss'
class DFrameLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dframelist: []
        }
    }

    render() {
        return (
            <div className='DFrameLayout'>
                <div className="image-view"/>
                <div className="info-swiper">
                    {
                        this.state.dframelist.map((item) => (
                            <div key={item.id}>
                                <a href={item.infoUrl}>
                                    <div className="info-name">
                                        <span className="info-type">{item.infoType}</span>
                                        <span>{item.infoText}</span>
                                    </div>
                                </a>
                                <div style={{background:`url:('${item.infoImg}')`}}/>
                            </div>

                        ))
                    }
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.getdframeinfo()
    }

    getdframeinfo() {
        fetch(`${host}/getdframeinfo`).then((res)=>(
            res.json()
        )).then((data)=>{
            this.setState({
                dframelist: data.dframelist
            })
        }).catch((error)=>{
            console.log(error);
        })
    }
}

export default DFrameLayout