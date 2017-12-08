import React, { Component } from 'react'
import { observer } from 'mobx-react'

import ResultList from '../components/ResultList'

@observer
export default class ResultBar extends Component {
    constructor(props) {
        super(props)
        this.goDetail = this.goDetail.bind(this)
    }

    goDetail(item) {
        console.log(item.code, item.text)
    }
    render() {
        const { store } = this.props
        return (
            <ResultList list={store.resultRecommend.list}
                show={store.resultCurrent === 'recommend'}
                goDetail={this.goDetail}
            />
        );
    }
}
