import React,{Component} from 'react'
import I16 from'../CommonResource/images/icons/16.png'
import "./Toogle"
import Fimg from './Fimg'
import Flink from './Flink'
import H3 from './H3'
import "./Footer.css"
class Footer extends Component  {
    render(){
  return (
    <div>
<footer className="footer-wrapper">
		<div className="container"> 
			<div className="upper-text-container">
				<p>1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X in good condition. Additional trade‑in values require purchase of a new iPhone, subject to availability and limits. Must be at least 18. Apple or its trade-in partners reserve the right to refuse or limit any Trade In transaction for any reason. In‑store trade‑in requires presentation of a valid, government-issued photo ID (local law may require saving this information). Sales tax may be assessed on full value of new iPhone. Additional terms from Apple or Apple’s trade-in partners may apply. Monthly pricing: Available to qualified customers and requires 0% APR, 24-month installment loan with Citizens One or Apple Card Monthly Installments and iPhone activation with AT&T, Sprint, T-Mobile, or Verizon. Taxes and shipping not included. Additional Apple Card Monthly Installments terms are in the <a href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf" target="_blank"> Customer Agreement</a>. Additional iPhone Payments terms are <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/"> here</a>.</p>
				<p>2. Subscription required.<br/><br/>
				Magic Keyboard sold separately.<br/><br/>
				Apple TV+ is $4.99/month after free trial. One subscription per Family Sharing group. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other <a href="https://www.apple.com/promo/">terms </a> apply.</p>
			</div>
			<div className="footer-links-wrapper row"> 
				<div className="links-wrapper-1 col-sm-12 col-md">
					<H3 Name="Shop and Learn"/>
					<ul>
						<Flink linkID="#" linkName="Mac"/>
						<Flink linkID="#" linkName="iPad"/>
						<Flink linkID="#" linkName="iPhone"/>
						<Flink linkID="#" linkName="Watch"/>
						<Flink linkID="#" linkName="TV"/>
						<Flink linkID="#" linkName="Music"/>
						<Flink linkID="#" linkName="AirPods"/>
                        <Flink linkID="#" linkName="HomePod"/>
						<Flink linkID="#" linkName="iPod touch"/>
						<Flink linkID="#" linkName="Accessories"/>
						<Flink linkID="#" linkName="Gift Cards"/>
					</ul>
				</div> 
				<div className="links-wrapper-2 col-sm-12 col-md">
					
			       <H3 Name="Services"/>
					<ul>
					<Flink linkID="#" linkName="Apple Music"/>
					<Flink linkID="#" linkName="Apple News+"/>
					<Flink linkID="#" linkName="Apple TV+"/>
					<Flink linkID="#" linkName="Apple Arcade"/>
					<Flink linkID="#" linkName="Apple Card"/>
					<Flink linkID="#" linkName="iCloud"/>
						
					</ul>
					<H3 Name="Account"/>
					<ul>
					<Flink linkID="#" linkName="Manage Your Apple ID"/>
					<Flink linkID="#" linkName="Apple Store Account"/>
					<Flink linkID="#" linkName="iCloud.com"/>
				
					</ul>					
				</div> 
				<div className="links-wrapper-3 col-sm-12 col-md">
				<H3 Name="Apple Store"/>
					<ul>
					<Flink linkID="#" linkName="Find a Store"/>
					<Flink linkID="#" linkName="Genius Bar"/>
					<Flink linkID="#" linkName="Today at Apple"/>
					<Flink linkID="#" linkName="Apple Camp"/>
					<Flink linkID="#" linkName="Field Trip"/>
					<Flink linkID="#" linkName="Apple Store App"/>
					<Flink linkID="#" linkName="Refurbished and Clearance"/>
					<Flink linkID="#" linkName="Financing"/>
					<Flink linkID="#" linkName="Apple Trade In"/>
					<Flink linkID="#" linkName="Order Status"/>
					<Flink linkID="#" linkName="Shopping Help"/>
					</ul>
				</div>  
				<div className="links-wrapper-4 col-sm-12 col-md">
				<H3 Name="For Business"/>
					<ul>
					<Flink linkID="#" linkName="Apple and Business"/>	
					<Flink linkID="#" linkName="Shop for Business"/>	
					</ul>		
				  <H3 Name="For Education"/>
					<ul>
					<Flink linkID="#" linkName="Apple and Education"/>	
					<Flink linkID="#" linkName="Shop for College"/>
					         	</ul>
					<H3 Name="For Healthcare"/>
					<ul>
					<Flink linkID="#" linkName="Manage Your Apple ID"/>
					<Flink linkID="#" linkName="Apple Store Account"/>
					<Flink linkID="#" linkName="iCloud.com"/>	
                  </ul>	
				  <H3 Name="For Government"/>
					<ul>
					<Flink linkID="#" linkName="Apple and Education"/>
					<Flink linkID="#" linkName="Shop for College"/>
						
					</ul>
				</div> 
				<div className="links-wrapper-5 col-sm-12 col-md">
				<H3 Name="Apple Values"/>
					<ul>
					<Flink linkID="#" linkName="Find a Store"/>
					<Flink linkID="#" linkName="Genius Bar"/>
					<Flink linkID="#" linkName="Today at Apple"/>
					<Flink linkID="#" linkName="Apple Camp"/>
					<Flink linkID="#" linkName="Field Trip"/>
					<Flink linkID="#" linkName="Apple Store App"/>
						
					</ul>
					<H3 Name=" About Apple"/>
					<ul>
					<Flink linkID="#" linkName="Find a Store"/>
					<Flink linkID="#" linkName="Genius Bar"/>
					<Flink linkID="#" linkName="Today at Apple"/>
					<Flink linkID="#" linkName="Apple Camp"/>
					<Flink linkID="#" linkName="Field Trip"/>
					<Flink linkID="#" linkName="Apple Store App"/>
					</ul>						
				</div> 
			</div>
			<div className="my-apple-wrapper"> 
				More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
			</div>
			<div className="copyright-wrapper row">
				<div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
					Copyright &copy; 2020 Apple Inc. All rights reserved.
				</div>
				<div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
					<ul>
					<Flink linkID="#" linkName="Privacy Policy"/>
					<Flink linkID="#" linkName="Terms of Use"/>
					<Flink linkID="#" linkName="Sales and Refunds"/>
					<Flink linkID="#" linkName="Legal"/>
					<Flink linkID="#" linkName="Site Map"/>
					   
		     </ul>
				</div>
				<div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
					<Fimg fimg={I16}/> <div className="footer-country-name">United States</div> 
				</div>
			</div>
		</div>
	</footer> 



    </div>
  )
}
}
export default Footer