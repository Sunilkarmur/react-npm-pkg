import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div onClick={()=>{
          this.props.onCheckOutClick(this.props.data)
        }}>Add To Cart</div>
    );
  }
}

export default Cart;
