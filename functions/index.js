const functions = require("firebase-functions");

const cors =require('cors')
const express=require('express')
const stripe=require('stripe')("sk_test_51L3JipHBtTeyz9UPAiDXn7Ie5NKkwvEVeuDqVZJjwqSiTlcybvrMrf9M8Gm7GHGaG8AMEqZgHxruYpcp6ddJ43xJ00n4PhEEmR")
const uuid=require('uuidv4')

const app=express()

app.use(express.json())
app.use(cors({origin:true}))

app.get('/',(req,res)=>{
	res.send("Hello world")
})

app.post('/payment/create',async (req,res)=>{
	try{
		const total=req.body.total

		const paymentIntent=await stripe.paymentIntents.create({
			amount:total,
			currency:"usd"
		})

		res.status(201).send({
			clientScecret:paymentIntent.client_secret,

		})
	}catch(err){
		res.status(500).json({message: err.message})
	}
})

exports.api=functions.https.onRequest(app)