import React, {Component} from 'react'
import './style.scss'
class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className='NotFound'>
                <h1>404 未找到</h1>
            </div>
        )
    }
}

export default NotFound