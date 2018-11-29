import React, {Component} from 'react'
import Order from "./Orders";
import "./style.scss"
import {getOrderList} from "../../api"
import {observer} from "mobx-react"

@observer
class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goodsList: []
        }
    }

    render() {
        return (
            <div className='OrderList'>
                <h1>订单列表</h1>
                {
                    this.state.goodsList.length > 0 ? this.state.goodsList.map((order) => {
                        return <Order key={order.id} order={order} className={'order-item'}/>
                    }) : null
                }
            </div>
        )
    }

    componentWillMount() {
        try {
            getOrderList().then((goodsList) => {
                if(goodsList){
                    this.setState({
                        goodsList
                    })
                }

            })
        } catch (e) {
            console.log(e);
        }
    }
}

export default OrderList