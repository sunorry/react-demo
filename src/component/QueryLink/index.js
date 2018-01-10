import React from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

const QueryLink = (props) => {
    return <Link {...props} to={{ ...props.to, search: queryString.stringify(props.to.query) }} />
}

export default QueryLink
