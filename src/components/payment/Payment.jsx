import React,{useState,useEffect} from 'react'
import './Payment.css'
import {useStateValue} from '../../StateProvider'
import CheckoutProduct from '../checkout/CheckoutProduct'
import {Link,useNavigate} from 'react-router-dom'
import {cardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import {getBasketTotal} from '../../reducer'
import axios from '../../axios'



const Payment = () => {
	const navigate=useNavigate()
	const [{basket,user}, dispatch]=useStateValue()
	const stripe=useStripe()
	const elements=useElements()

	const [succeeded, setSucceeded] = useState(false)
	const [processing, setProcessing] = useState("")

	const [error, setError] = useState(null)
	const [disabled, setDisabled] = useState(true)
	const [clientSecret, setClientSecret] = useState(true)

	useEffect(() => {
		//generate the speacial stripe secret which will allow us to charge a customer
		const getClientSecret=async ()=>{
			const response=await axios({
				Method:'post',
				//Stripe expects the total in a currencies sumbits
				url:`/payments/create?total=${getBasketTotal(basket) * 100}`
			});
			setClientSecret(response.data.clientSecret)
		}

		getClientSecret() 
	}, [basket])

	const handleSubmit=async (event) =>{
		//Does  all stripe stuff 
		event.preventDefault()
		setProcessing(true)


		const payload= await stripe.confirmCardPayment(clientSecret,{
			payment__method:{
				card:elements.getElement(cardElement)
			}
		}).then(({paymentIntent})=>{
			//paymentIntent =payment Confirmation

			setSucceeded(true)
			setError(null)
			setProcessing(false)

			navigate.replace('/orders')
		})
	}
	const handleChange= event =>{
		setDisabled(event.empty)
		setError(event.error ? event.error.message:"")
	}

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
				</h1>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>KG 679<sup>st</sup></p>
						<p>Kigali, Rwanda</p>
					</div>
				</div>

				<div className="payment__section">
					<div className="payment_title">
						<h3>Review items and Delivery</h3>
					</div>
					<div className="payment__items">
						{basket.map(item=>(
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

				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment__details">
						{/*stripe will go here!*/}
						<form action="" onSubmit={handleSubmit}>
							<cardElement onChange={handleChange} />
							<div className="payment__priceContainer">
								<CurrencyFormat 
									renderText={(value)=>(
										
											<p>
												Order Total: <strong>{value}</strong>
											</p>
											
										
										)}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
								</button>
							</div>
						{/*Error*/}
						{error && <div>{error}</div>}
						</form>

					</div>
				</div>
			</div>
			
		</div>
	)
}

export default Payment