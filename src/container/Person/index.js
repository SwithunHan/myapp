import React, {Component} from 'react'
import {inject,observer} from "mobx-react"
@inject("loginStore")
@observer
class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='Person'>
                <h1>{"username：" + this.props.loginStore.username}</h1>
            </div>
        )
    }
}

export default Person