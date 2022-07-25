import React, { Component } from 'react'

 class Flink extends Component {
  render() {
    return (
        <li><a href={this.props.linkID}>{this.props.linkName}</a></li>
    )
  }
}
export default Flink