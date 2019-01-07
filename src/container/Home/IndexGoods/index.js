import React, {Component} from 'react'
import "./style.scss"
class IndexGoods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexGoodsList:[
                {
                    id:1,
                    imgUrl:"",
                    title:""
                }
            ]
        }
    }

    render() {
        return (
            <div className='IndexGoods'>
                {
                    this.state.indexGoodsList.map((indexGoods)=>(
                        <div className={"indexGoods"} key={indexGoods.id}>
                            <img src={indexGoods.imgUrl} alt=""/>
                            <h1>{indexGoods.title}</h1>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default IndexGoods