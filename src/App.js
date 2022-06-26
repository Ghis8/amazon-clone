import React,{useEffect} from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {auth} from './firebase'
import {useStateValue} from './StateProvider'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'


import Header from './components/header/Header'
import Home from './components/home/Home'
import Checkout from './components/checkout/Checkout'
import Payment from './components/payment/Payment'
import Login from './components/login/Login'
import Footer from './components/footer/Footer'

const promise=loadStripe("pk_test_51L3JipHBtTeyz9UPomiFC3XksdZNUNzg5ch4E3qhrCVhoryZY5IuioKXMCgRNcyyXFkKMtYpZjpA2SqA3drCUfj900dd4Pg1Xq")

const App = () => { 
	const [{},dispatch]=useStateValue()
	useEffect(() => {
		// will only run once when the app component loads	
		auth.onAuthStateChanged(authUser=>{
			console.log('The User is >>>>',authUser)
			if(authUser){

				//the user just logged in 
				dispatch({
					type:'SET_USER',
					user:authUser
				})
			}else{
				dispatch({
					type:'SET_USER',
					user:null
				})
			}
		})

	},[])
	return (
		<Router>
			<div className="app">
				
				<Routes>
					<Route path="/login" element={<Login/>}/>
					<Route path="/checkout" element={
						<>
							<Header/>
							<Checkout/>
							<Footer/>
						</>
					}/>
					<Route path='/payment' element={
						<>
							<Header/>
							<Elements stripe={promise}>
								<Payment/>
							</Elements>
						</>
					}/>
					<Route path="/" element={
						<>
							<Header/>
							<Home/>
							<Footer/>

						</>
					}/>

				</Routes>

					
			</div>
		</Router>
	)
}

export default App