import React, {Component} from 'react'
import Header from "../../components/Header";
import FooterNav from "../../components/FooterNav";
import HomeWrapper from './HomeWrapper'
import HomeSwiper from "./HomeSwiper";
import DFrameLayout from "./DFrameLayout";

class Home extends Component {

    render() {
        return (
            <div className='Home'>
                <Header/>
                <HomeSwiper/>
                <HomeWrapper/>
                <DFrameLayout/>
                <FooterNav/>
            </div>
        )
    }



}

export default Home