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
        console.log(item)
    }
    render() {
        const list = store.resultRecommend.map((item) => {
            return <li key={item} onClick={() => { this.goToDetail(item) }}>{item}</li>
        })
        return (
            <ul style={{ display: store.resultCurrent === 'recommend' ? 'block' : 'none' }}>{list}</ul>
        );
    }
}
