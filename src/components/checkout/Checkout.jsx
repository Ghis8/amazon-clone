import React from 'react'
import './Checkout.scss'
import Subtotal from './Subtotal'
import amazonAd from '../assets/amazon_ad.jpg'
import {useStateValue} from '../../StateProvider'
import CheckoutProduct from './CheckoutProduct'

const Checkout = () => {
	const [{basket,user},dispatch]=useStateValue()
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img className="checkout__ad" src={amazonAd} alt=""/>
				<div>
					<h3>Hello, {user?.email}</h3>
					<h2 className="checkout__title">Your Shopping Basket</h2>

					{basket.map(item => (

						<CheckoutProduct
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
						))}

				</div> 
			</div>
			<div className="checkout__right">
				<Subtotal/>
			</div>
			
		</div>
	)
}

export default Checkout