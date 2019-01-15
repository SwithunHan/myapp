import React, {Component} from 'react'
import "./style.scss"
import IndexGoods from './IndexGoods'
class IndexGoodsList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='IndexGoodsList'>
                {
                    this.props.indexGoodsList.map((indexGoods)=>(
                        <IndexGoods key={indexGoods.id} link={indexGoods.link} title={indexGoods.title} imgUrl={indexGoods.imgUrl}/>
                    ))
                }
            </div>
        )
    }
}

export default IndexGoodsList