import React,{Component } from 'react'
import logo from "../CommonResource/images/icons/logo-sm.png"
import search from "../CommonResource/images/icons/search-icon-sm.png"
import cart from "../CommonResource/images/icons/cart-sm.png"
import Link from './Link'
import Img from './Img'
import "./Header.css"
class Header extends Component {
    render(){
  return (
    <div className="nav-wrapper fixed-top">
    <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                ☰
            </button>
           

            <div className="navbar-collapse collapse">
                <ul className="navbar-nav nav-justified w-100 nav-fill">
                     <Img linkImg={logo} linkId="/logo/"/>
                    <Link linkName="Mac" linkUrl ="/mac"/>
                    <Link linkName="iphone"linkUrl="/iphone"/>
                    <Link linkName="ipad"linkUrl="/ipad"/>
                    <Link linkName="watch"linkUrl="/applewatch"/>
                    <Link linkName="tv"linkUrl="/tv"/>
                    <Link linkName="music"linkUrl="/music"/>
                    <Link linkName="support"linkUrl="/support"/>

                    
                    <Img linkImg={search} linkId="/search/"/>
                    <Img linkImg={cart} linkId="/cart/"/>
                
                </ul>
            </div>
        </nav>
    </div>
</div>

  )}
}

export default Header