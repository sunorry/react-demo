import React, { Component} from 'react'
import { observer } from 'mobx-react'

import store from '../store/search'

export default @observer class NoSuggess extends Component {
    render() {
        return (
            <p style={{ display: store.showNoSuggest ? 'block' : 'none' }}>
                无搜索内容
            </p>
        );
    }
}