import React, {Component} from 'react'
class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='Person'>
                <h1>个人中心</h1>
            </div>
        )
    }
}

export default Person