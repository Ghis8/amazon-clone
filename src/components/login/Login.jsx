import React,{useState} from 'react'
import './Login.scss'
import {Link,useNavigate} from 'react-router-dom'
import logo from '../assets/Amazon-logo.png'
import {auth} from '../../firebase.js'

const Login = () => {

const navigate=useNavigate()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const signIn=(e)=>{
	e.preventDefault()

	//some firebase login
	auth
	.signInWithEmailAndPassword(email,password)
	.then((auth)=>{
		//successfully createed a new user with email and password
			navigate('/')
		
	})
	.catch((err)=>alert(err.message))
}
const register=(e)=>{
	e.preventDefault()

	//some firebase register

	auth
	.createUserWithEmailAndPassword(email,password)
	.then((auth)=>{
		//successfully createed a new user with email and password

		alert("User Created Successfully!")

		if(auth){
			navigate('/login')
		}
	})
	.catch((err)=>alert(err.message))
}

	return (
		<div className="login">
			<Link to='/'>
				<img src={logo} className="login__logo" alt="amazon-logo"/>
			</Link>

			<div className="login__container">
				<h1>Sign In</h1>
				<form>
					<h5>E-mail</h5>
					<input type="text" value={email} onChange={e=> setEmail(e.target.value)}/>

					<h5>Password</h5>
					<input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>

					<button className="login__signInBtn" onClick={signIn}>Sign In</button>
				</form>
				<p>
					By sign-in you agree to the Amazon-Clone Conditions of Use & Sale. Please
					see our privacy Notice, Our Cookies Notice and Our Interest-Based Ads Notice
				</p>

				<button onClick={register} className="login__registerBtn">Create your Amazon Account</button>
			</div>

		</div>
	)
}

export default Login