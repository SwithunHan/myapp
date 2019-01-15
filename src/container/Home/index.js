import React, {Component} from 'react'
import Header from "../../components/Header";
import FooterNav from "../../components/FooterNav";
import HomeWrapper from './HomeWrapper'
import HomeSwiper from "./HomeSwiper";
import DFrameLayout from "./DFrameLayout";
import DLinearLayout from "./DLinearLayout";
import {observer} from "mobx-react"
import IndexGoodsList from "./IndexGoodsList";
import "./style.scss"

@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoadingMore: false,
            isEnd:false,
            indexGoodsList: [
                {
                    id: 1,
                    imgUrl: "//p1.meituan.net/100.0/deal/b23f19b528b0e280f39b57eb76dfe102136300.jpg",
                    title: "[为你推荐]加厚整理筐水草蒲草编藤编收纳筐托盘书报筐茶几零食筐杂物篮收纳",
                    link: "/"
                },
                {
                    id: 2,
                    imgUrl: "//p1.meituan.net/100.0/deal/b23f19b528b0e280f39b57eb76dfe102136300.jpg",
                    title: "[为你推荐]加厚整理筐水草蒲草编藤编收纳筐托盘书报筐茶几零食筐杂物篮收纳",
                    link: "/"
                }
            ]
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
                    isLoadingMore: true
                });
                setTimeout(function () {
                    this.addGoods()
                }.bind(this), 1000)
            } else {
                this.setState({
                    isLoadingMore: false
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
            timeoutId = setTimeout(callback.bind(this), 50)
        }.bind(this), false);
    }

    addGoods() {
        if(this.state.indexGoodsList.length<=20){
            this.setState({
                indexGoodsList: this.state.indexGoodsList.concat([{
                    id: this.state.indexGoodsList[this.state.indexGoodsList.length - 1] + 1,
                    imgUrl: "//p1.meituan.net/100.0/deal/b23f19b528b0e280f39b57eb76dfe102136300.jpg",
                    title: "[为你推荐]加厚整理筐水草蒲草编藤编收纳筐托盘书报筐茶几零食筐杂物篮收纳",
                    link: "/"
                }, {
                    id: this.state.indexGoodsList[this.state.indexGoodsList.length - 1] + 2,
                    imgUrl: "//p1.meituan.net/100.0/deal/b23f19b528b0e280f39b57eb76dfe102136300.jpg",
                    title: "[为你推荐]加厚整理筐水草蒲草编藤编收纳筐托盘书报筐茶几零食筐杂物篮收纳",
                    link: "/"
                }])
            })
        }else{
            this.setState({
                isEnd:false
            })
        }

    }

    render() {
        return (
            <div className='Home' ref="Home">
                <Header/>
                <HomeSwiper/>
                <HomeWrapper/>
                <DFrameLayout/>
                <DLinearLayout/>
                <IndexGoodsList indexGoodsList={this.state.indexGoodsList}/>
                <div className={"load_more"}>{this.state.isLoadingMore&&(!this.state.isEnd) ? "正在加载。。。" : "加载完成"}</div>
                <FooterNav/>
            </div>
        )
    }


}

export default Home