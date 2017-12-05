import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../store/search'

import ResultList from '../components/ResultList'

@observer
export default class ResultBar extends Component {
    constructor(props) {
        super(props)
        this.goToDetail = this.goToDetail.bind(this)
    }

    goToDetail(item) {
        console.log(item.code, item.text)
    }
    render() {
        return (
            <ResultList list={store.result_recommend.list}
                show={store.resultCurrent === 'recommend'}
                goDetail={this.goDetail}
            />
        );
    }
}
