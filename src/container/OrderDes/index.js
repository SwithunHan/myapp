import React, {Component} from 'react'
import {observer} from "mobx-react"
@observer
class OrderDes extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className='OrderDes'>
                {this.props.match.params.id}
            </div>
        )
    }
}

export default OrderDes