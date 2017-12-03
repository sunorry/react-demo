import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../store/search'

@observer
export default class ResultBar extends Component {
    constructor(props) {
        super(props)
        this.goToDetail = this.goToDetail.bind(this)
    }

    goToDetail(item) {
        store.setResultCurrent(item.key)
        // store.fetchResultList(item.key)
    }
    render() {
        const list = store.resultBar.map((item) => {
            return <li key={item.key} className={store.resultCurrent === item.key ? 'current' : '' } onClick={() => { this.goToDetail(item) }}>{item.text}</li>
        })
        return (
            <ul>{list}</ul>
        );
    }
}
