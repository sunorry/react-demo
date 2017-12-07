import React, { Component } from 'react'
import { observer } from 'mobx-react'

import ResultList from '../components/ResultList'

@observer
export default class Depts extends Component {
    constructor(props) {
        super(props)
        this.goDetail = this.goDetail.bind(this)
    }

    goDetail(data) {
        console.log(data.code, data.text)
    }

    render() {
        const { store } = this.props
        return (
            <ResultList list={store.resultDepts.list}
                show={store.resultCurrent === 'depts'}
                goDetail={this.goDetail}
            />
        );
    }
}