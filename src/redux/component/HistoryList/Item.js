import React from 'react'
import PropTypes from 'prop-types';
import { NOOP } from '../../constant';

function Item(props) {
  const { data, onClick } = props;
  const handleClick = () => {
    onClick(data.key);
  }

  return (
    <li key={data.key} onClick={handleClick}>{data.text}</li>
  )
}

Item.propTypes = {
  data: PropTypes.shape({
    key: PropTypes.string,
    text: PropTypes.string,
  }),
  onClick: PropTypes.func,
}

Item.defaultProps = {
  data: {
    key: '',
    text: '',
  },
  onClick: NOOP,
}

export default Item;
