import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {

	return (
		<div className="footer">
			<div className="sign_in">
				<p>see personalized recommendation</p>
				<Link to="/login">
				<button className="button">Sign In</button>
				</Link>
				
			</div>

			<div className="features">
				<div className="abouts">
					<h4>get to know us</h4>
					<ul>
						<li>careers</li>
						<li>blog</li>
						<li>about amazon</li>
						<li>investor relations</li>
						<li>amazon devices</li>
						<li>amaozon science</li>
					</ul>
				</div>
				<div className="abouts">
					<h4>make money with us</h4>
					<ul>
						<li>sell products on amazon</li>
						<li>sell on amazon business</li>
						<li>sell app on amaon</li>
						<li>become affiliate</li>
						<li>advertise your products</li>
						<li>self-publish with us</li>
						<li>host an amazon hub</li>

					</ul>
				</div>
				<div className="abouts">
					<h4>amazon payment products</h4>
					<ul>
						<li>amazon business card</li>
						<li>shop with points</li>
						<li>reload your balance</li>
						<li>investor relations</li>
						<li>amazon currency converter</li>
						
					</ul>
				</div>
				<div className="abouts">
					<h4>let us help you</h4>
					<ul>
						<li>amazon and COVID-19</li>
						<li>your aacount</li>
						<li>your orders</li>
						<li>shipping rates and policies</li>
						<li>returns and replacements</li>
						<li>manage your content and devices</li>
						<li>amazon assistant</li>
						<li>help</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Footer