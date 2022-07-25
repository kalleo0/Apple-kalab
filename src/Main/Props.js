
import React, { Component } from 'react'

 class Props extends Component {
  

  render() {
    return (
		<div className="container">

			<div className="new-alert">
				{this.props.alter}
			</div>

			<div className="title-wraper bold black">
				{this.props.title}
			</div> 
            <div className="description-wrapper black">
				{this.props.Description}
			</div>

			<div className="price-wrapper grey">
				{this.props.price}
			</div>       

			<div className="links-wrapper">
				<ul>
					<li><a href="">{this.props.learn}</a></li>
					<li><a href="">{this.props.order}</a></li>
				</ul> 
			</div>

			{/* <div className="ipod-caption row">
				<div className="col-sm-12 col-md-6 text-md-right">iPad Pro available starting 3.25</div>
				<div className="col-sm-12 col-md-6 text-md-left">Magic Keyboard coming in May</div>
			</div> */}
		</div>)
  }
}
export default Props