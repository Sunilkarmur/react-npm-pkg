import React from 'react';
import Cart from './container/Cart';
import { instance } from './utils/Axios';

class Fancy extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div onClick={()=>{
          console.log(123456);
        }}>This is so Test Package For React Js!</div>
    );
  }
}
  export {Fancy,Cart,instance};
