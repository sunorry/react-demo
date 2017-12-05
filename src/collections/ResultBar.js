import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../store/search'

import BarList from '../components/BarList'

@observer
export default class ResultBar extends Component {
    constructor(props) {
        super(props)
        this.goDetail = this.goDetail.bind(this)
    }

    goDetail(item) {
        store.setResultCurrent(item.key)
        // store.fetchResultList(item.key)
    }
    render() {
        return (
            <BarList list={store.resultBar}
                onTap={this.goDetail}
                current={store.resultCurrent}
            />
        );
    }
}
