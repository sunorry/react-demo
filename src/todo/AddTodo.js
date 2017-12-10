import React from 'react'

export default class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     value: ''
        // }
        this.changeInputValue = this.changeInputValue.bind(this)
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    ref={text => this.input = text}
                    // value={value}
                    // onChange={this.changeInputValue}
                />
                <button onClick={e => this.handleClick(e)}>Add</button>
            </div>
        )
    }

    handleClick(e) {
        const inputEl = this.input
        this.props.onAddClick(inputEl.value)
        inputEl.value = ''
    }

    changeInputValue(e) {

    }
}