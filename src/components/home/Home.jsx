import React,{useState, useEffect} from 'react'
import './Home.scss'
import homeBg from '../assets/homeBg.jpg'
import Thelean from '../assets/thelean.jpeg'
import kenwood from '../assets/kenwood.jpeg'
import lcd from '../assets/samsungLED.jpeg'
import smartSpeaker from '../assets/smartSpeaker.jpg'
import ipad from '../assets/ipad.jpeg'
import watch from '../assets/appleWatch.jpeg'
import cube from '../assets/cube.jpg'
import iphone11 from '../assets/iphone11.jpg'
import projector from '../assets/projector.jpg'
import router from '../assets/router.jpg'
import notebook from '../assets/Notebook.jpg'
import Case from '../assets/laptop_case.jpg'
import stand from '../assets/laptop_stand.jpg'

import Product from './Product'


const Home = () => {
	const [showButton, setShowButton]=useState(false)
	useEffect(()=>{
		window.addEventListener('scroll',()=>{
			if(window.pageYOffset>300){
				setShowButton(true)
			}else{
				setShowButton(false)
			}

		})
	},[])

	const scrollToTop=()=>{
		window.scrollTo({
			top:0,
			behavior:'smooth'
		})
	}
	return (
		<div className="home" id="home">
			<div className="home__container">
				<img className="home__image"  src={homeBg} alt="bg"/>
				<div className="home__row">
					 <Product
					 	id="121314"
					 	title="The Lean Startup"
					 	price={29.99}
					 	image={Thelean}
					 	rating={5}
					 />
					 <Product
					 	id="1232454"
					 	title="Kenwood Kmix Stand Mixer for baking, Stylish Kitchen Mixer With K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
					 	price={240}
					 	image={kenwood}
					 	rating={4}
					 />

				</div>
				<div className="home__row">
					 <Product
					 	id="12324"
					 	title="Samsung LC49R 49' Curved LED Gaming Monitor"
					 	price={205.44}
					 	image={lcd}
					 	rating={3}
					 />
					 <Product
					 	id="122454"
					 	title="Amazon Echo smart speaker with alexa, charcoal Fabric"
					 	price={85.66}
					 	image={smartSpeaker}
					 	rating={5}
					 />
					 <Product
					 	id="232454"
					 	title="New Apple Ipad pro"
					 	price={599.99}
					 	image={ipad}
					 	rating={4}
					 />
					 <Product
					 	id="1225488"
					 	title="Apple iPhone 11 128GB Black ( Refurbished )"
					 	price={739}
					 	image={iphone11}
					 	rating={4}
					 />
				</div>
				<div className="home__row">
					 <Product
					 	id="12254"
					 	title="Apple Watch can open up a whole new world for older family members. They get the same connectivity benefits of Apple Watch, like calling, texting, and location sharing to stay close to the family."
					 	price={429}
					 	image={watch}
					 	rating={5}
					 />
					  <Product
					 	id="1225499"
					 	title="It’s one of the most iconic puzzle toys, but it was never meant to be a toy. The Rubik’s cube is a cube-shaped puzzle that has nine small squares on each side"
					 	price={10}
					 	image={cube}
					 	rating={3}
					 />
					 
					 
				</div>

				<div className="home__row">
					 <Product
					 	id="145254"
					 	title="YG3000 Pro LED Mini Projector 480x272 Pixels Supports 1080P HDMI USB Audio Portable Home Media Video Player"
					 	price={70}
					 	image={projector}
					 	rating={5}
					 />
					  <Product
					 	id="12135499"
					 	title="Router Tenda F3 Wireless Router Fiber English international Version"
					 	price={40}
					 	image={router}
					 	rating={4}
					 />
					 <Product
					 	id="13225499"
					 	title="Original HP 8440p i5 $gb/8Gb +128gb/256gb/320gb 14 inch 1366*768 window7 Coputer Notebook"
					 	price={360}
					 	image={notebook}
					 	rating={5}
					 />
					
					 <Product
					 	id="126257499"
					 	title="Laptop stand Adjustable Riser bracket foldable Holder notebook for Mackbook Huawei Support Base Coputer Accessories"
					 	image={stand}
					 	rating={4}
					 />
					 
					 
				</div>
			</div>
			{showButton && (
		        <button onClick={scrollToTop} className="back-to-top">
		          &#8679;
		        </button>
      )}
		</div>
	)
}

export default Home