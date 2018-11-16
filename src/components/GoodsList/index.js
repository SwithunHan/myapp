import React, {Component} from 'react'
import Goods from "./Goods/index";
import {host} from "../../api/index";

class GoodsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goodsList:[
                {
                    id:1
                }
            ]
        }
    }

    render() {
        return (
            <div className='GoodsList'>
                {
                    this.state.goodsList.map((goods)=>{
                        return <Goods key={goods.id} goods={goods}/>
                    })
                }
            </div>
        )
    }
    componentWillMount(){
        fetch(`${host}/getgoodslist`).then((res)=>(
            res.json()
        )).then((data)=>{
            this.setState({
                goodsList:data.goodsList
            })
        }).catch((error)=>(
            console.log(error)
        ))
    }
}

export default GoodsList