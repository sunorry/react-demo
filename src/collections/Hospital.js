import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../store/search'

import ResultList from '../components/ResultList'

@observer
export default class Hospital extends Component {
    constructor(props) {
        super(props)
        this.goDetail = this.goDetail.bind(this)
    }

    goDetail(data) {
        console.log(data.code, data.text)
    }

    render() {
        return (
            <ResultList list={store.resultHos.list}
                  show={store.resultCurrent === 'hos'}
                  goDetail={this.goDetail}
            />
        );
    }
}
