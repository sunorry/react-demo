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
        console.log(item.key, item.text)
    }
    render() {
        const list = store.resultBar.map((item) => {
            return <li key={item.key} onClick={() => { this.goToDetail(item) }}>{item.text}</li>
        })
        return (
            <ul>{list}</ul>
        );
    }
}
