import React, {Component} from 'react'
import Header from "../../components/Header";
import FooterNav from "../../components/FooterNav";
import HomeWrapper from './HomeWrapper'
import HomeSwiper from "./HomeSwiper";
import DFrameLayout from "./DFrameLayout";
import DLinearLayout from "./DLinearLayout";
import {observer} from "mobx-react"
import IndexGoods from "./IndexGoods";

@observer
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoadingMore:false
        }
    }
    componentDidMount() {
        // 使用滚动时自动加载更多

        const Home = this.refs.Home;
        let timeoutId;
        function callback() {
            const top = Home.getBoundingClientRect().top;
            const windowHeight = window.screen.height;
            if (top && top < windowHeight) {
                // 证明已经被滚动到暴露在页面可视范围之内了
                this.setState({
                    isLoadingMore:true
                })
            }
        }
        window.addEventListener('scroll', function () {
            if (this.props.isLoadingMore) {
                return
            }
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 50)
        }.bind(this), false);
    }

    render() {
        return (
            <div className='Home' ref="Home">
                <Header/>
                <HomeSwiper/>
                <HomeWrapper/>
                <DFrameLayout/>
                <DLinearLayout/>
                <FooterNav/>
                <IndexGoods/>
                <div>{this.state.isLoadingMore?"加载更多":"正在加载。。。"}</div>
            </div>
        )
    }


}

export default Home