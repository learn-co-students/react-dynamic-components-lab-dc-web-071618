import React, { Component } from 'react';

export default class ColorBox extends Component {
    render() {
      const opcityValue = this.props.opacity
      //   if (opcityValue >= 0.2){
      //     return (
      //       <div className="color-box" style={{opacity: opcityValue - .1}}>
      //       </div>
      //     )
      //   } else{
      //     return(
      //       null
      //     )
      //   }
      return (
        <div className="color-box" style={{opacity: opcityValue}}>
          {opcityValue >= 0.2 ? <ColorBox opacity={opcityValue - .1} /> : null}
        </div>
      )
    }

}
