import React, {Component} from 'react'

class NotFound extends Component
{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div className='404'>
                {"not found 404"}
            </div>
        )
    }
}
export default NotFound