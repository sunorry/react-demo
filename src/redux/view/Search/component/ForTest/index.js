import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class ForTest extends Component {
    handleClick() {
        this.props.handleClick()
    }
    render() {
        return (
            <div onClick={() => this.handleClick()}>
                <p>{this.props.text}</p>
            </div>
        )
    }
}