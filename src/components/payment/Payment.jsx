import React,{useState,useEffect} from 'react'
import './Payment.css'
import {useStateValue} from '../../StateProvider'
import CheckoutProduct from '../checkout/CheckoutProduct'
import {Link,useNavigate} from 'react-router-dom'
import {cardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import StripeCheckout from 'react-stripe-checkout'
import {getBasketTotal} from '../../reducer'
import axios from '../../axios'
import {toast} from 'react-toastify'



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

	console.log("The secret is>>>> ", clientSecret)

	const handleSubmit=async (event) =>{
		//Does  all stripe stuff 
		event.preventDefault()
		setProcessing(true)


		const payload= await stripe.confirmCardPayment(clientSecret,{
			payment__method:{
				card: elements.getElement(cardElement)
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

	const handleToken=()=>{

	}

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
				</h1>
				{/*<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>KG 679<sup>st</sup></p>
						<p>Kigali, Rwanda</p>
					</div>
				</div>*/}

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
					<div className="card-payment">
						<p>Order Total: <strong>{`$ ${getBasketTotal(basket).toFixed(2)}`}</strong></p>

						{getBasketTotal(basket).toFixed(2)>1 ? <StripeCheckout
								className="paymentBtn"
							 	stripekey='pk_test_51L3JipHBtTeyz9UPomiFC3XksdZNUNzg5ch4E3qhrCVhoryZY5IuioKXMCgRNcyyXFkKMtYpZjpA2SqA3drCUfj900dd4Pg1Xq'
							 	token={handleToken}
							 	bollingAddress
							 	shippingAddress
							 	amount={getBasketTotal(basket)*100}
							 /> : <p style={{color:"gray"}}>Select an Item</p>}
						
					</div>
					
					
				</div>
			</div>
			
		</div>
	)
}

export default Payment