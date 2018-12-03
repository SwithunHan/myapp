import React, {Component} from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import './style.scss'
import {getbannerimg} from "../../../api/index";
import { Facebook } from 'react-content-loader'

const MyFacebookLoader = () => <Facebook />
class HomeSwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerImg: [],
        }
    }

    render() {
        if (!this.state.bannerImg) {
            return <MyFacebookLoader/>
        } else {
            return (
                <div className='HomeBanner'>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {this.state.bannerImg.map((item) => (
                                <div key={item.id} className="swiper-slide"
                                     style={{backgroundImage: `url(${item.src})`}}>
                                    <a href={item.href}/>
                                </div>))}
                        </div>
                        <div className='swiper-pagination'/>
                    </div>
                </div>)

        }

    }

    componentDidMount() {
        getbannerimg().then((bannerImg) => {
            this.setState({
                bannerImg
            })
        });
    }

    componentDidUpdate() {
        if (this.swiper) {
            this.swiper = null
        } else {
            this.swiper = new Swiper('.swiper-container', {
                loop: true,     //循环
                autoplay: {      //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
                    delay: 2500,
                    disableOnInteraction: false,    //户操作swiper之后，是否禁止autoplay。默认为true：停止。
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,    // 允许点击跳转
                },
            });
        }
    }
}

export default HomeSwiper