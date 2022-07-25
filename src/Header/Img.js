import React, { Component } from 'react'
class Img extends Component{
    // static propTypes = {second: third}
    render() {
        return (
            <li className="nav-item" ><a 
            className="nav-link js-scroll-trigger" 
            href={this.props.linkId}>
                <img src={this.props.linkImg}/></a></li> 

        )
      }
}
export default Img