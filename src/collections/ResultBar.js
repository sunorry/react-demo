import React, { Component } from 'react'
import { observer } from 'mobx-react'

import BarList from '../components/BarList'

@observer
export default class ResultBar extends Component {
    constructor(props) {
        super(props)
        this.goDetail = this.goDetail.bind(this)
    }

    goDetail(item) {
        this.props.store.setResultCurrent(item.key)
    }

    render() {
        const { store } = this.props
        return (
            <BarList list={store.resultBar}
                onTap={this.goDetail}
                current={store.resultCurrent}
            />
        );
    }
}
