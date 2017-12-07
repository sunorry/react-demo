import React, { Component} from 'react'
import { observer } from 'mobx-react'

export default @observer class NoSuggess extends Component {
    render() {
        return (
            <p style={{ display: this.props.store.showNoSuggest ? 'block' : 'none' }}>
                无搜索内容
            </p>
        );
    }
}