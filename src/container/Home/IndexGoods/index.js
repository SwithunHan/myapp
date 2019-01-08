import React, {Component} from 'react'
import "./style.scss"
import {Link} from "react-router-dom";
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
                        <Link to={"/"} className={"indexGoods"} key={indexGoods.id}>
                            <img src={indexGoods.imgUrl} alt=""/>
                            <h1>{indexGoods.title}</h1>
                        </Link>
                    ))
                }
            </div>
        )
    }
}

export default IndexGoods