import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../store/search'

@observer
class List extends Component {
    constructor(props) {
        super(props)
        this.goToDetail = this.goToDetail.bind(this)
    }

    goToDetail() {
        console.log(this.props.text, this.props.code)
    }
    render() {
        return (
            <li onClick={this.goToDetail}>{this.props.info.text}</li>
        );
    }
}

@observer
export default class Hospital extends Component {
    render() {
        const list = store.result_hos.list.map(item => {
            return <List key={item.code} info={item}></List>
        })
        return (
            <ul style={{ display: store.resultCurrent === 'hos' ? 'block' : 'none'}}>{list}</ul>
        );
    }
}
