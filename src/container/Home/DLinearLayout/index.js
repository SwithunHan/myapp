import React, {Component} from 'react'
import {getLinear} from "../../../api";
import ContentLoader, {Facebook} from 'react-content-loader'
import './style.scss'
const MyLoader = props => (
    <ContentLoader
        rtl
        height={180}
        width={300}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="0" ry="0" width="149" height="89"/>
        <rect x="0" y="90" rx="0" ry="0" width="149" height="89"/>
        <rect x="151" y="0" rx="0" ry="0" width="149" height="89"/>
        <rect x="151" y="90" rx="0" ry="0" width="149" height="89"/>
    </ContentLoader>
)

class DLinearLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linear: []
        }
    }

    render() {
        if (this.state.linear) {
            return (
                <div className='DLinearLayout'>
                    <MyLoader/>
                </div>
            )
        } else {
            return (
                <div className='DLinearLayout'>

                </div>
            )
        }

    }

    // componentWillMount() {
    //     getLinear().then((linear) => {
    //         this.setState({
    //             linear
    //         })
    //     })
    // }
}

export default DLinearLayout