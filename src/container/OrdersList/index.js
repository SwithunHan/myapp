import React, {Component} from 'react'
import "./style.scss"
import {getOrderList} from "../../api"
import {observer} from "mobx-react"

import FooterNav from "../../components/FooterNav";
import Order from "./Order";

@observer
class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goodsList: [],
            nav: "all"
        }
    }

    changeLink = (link) => {
        this.setState({
            nav: link
        })
    };
    getOrder = (link) => {
        try {
            getOrderList(`/api/orders/${link}`).then((goodsList) => {
                if (goodsList) {
                    this.setState({
                        goodsList
                    })
                }

            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className='OrderList'>
                <nav className={"tab-bar"}>
                    <ul>
                        <li className={this.state.nav === "all" ? "active" : ""} onClick={() => {
                            this.changeLink("all");
                            this.getOrder("all");
                        }}>
                            全部
                        </li>
                        <li className={this.state.nav === "payment" ? "active" : ""} onClick={() => {
                            this.changeLink("payment");
                            this.getOrder("payment");
                        }}>
                            待付款
                        </li>
                        <li className={this.state.nav === "ship" ? "active" : ""} onClick={() => {
                            this.changeLink("ship");
                            this.getOrder("ship");
                        }}>
                            待发货
                        </li>
                        <li className={this.state.nav === "reward" ? "active" : ""} onClick={() => {
                            this.changeLink("reward");
                            this.getOrder("reward");
                        }}>
                            待收货
                        </li>
                        <li className={this.state.nav === "evaluation" ? "active" : ""} onClick={() => {
                            this.changeLink("evaluation");
                            this.getOrder("evaluation");
                        }}>
                            待评价
                        </li>
                    </ul>
                </nav>
                <div className={"order-info"}>
                    {
                        this.state.goodsList.length > 0 ? this.state.goodsList.map((order) => {
                            return <Order key={order.id} order={order} className={'order-item'}/>
                        }) : <h1>暂无订单</h1>
                    }
                </div>
                <FooterNav/>
            </div>
        )
    }

    componentWillMount() {
        this.getOrder("all")
    }
}

export default OrderList