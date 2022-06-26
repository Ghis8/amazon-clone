import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'
import logo from '../assets/amazon_PNG11.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from '../../StateProvider'
import {auth} from '../../firebase'

const Header = () => {
	const [{ basket,user },dispatch] =useStateValue()
	const handleAuthentification=()=>{
		if(user){
			auth.signOut()
		}
	} 



	return (
		<div className="header" >
			<Link to='/'>
				<img src={logo} className="amazon__logo" alt="logo"/>
			</Link>
			
			<div className="header__search">
				<input type="text"/>
				<SearchIcon className="header__searchIcon"/>
			</div>
			<div className="header__nav">
				<Link to={!user &&"/login"}>
					<div onClick={handleAuthentification} className="header__option">
						<span className="header__optionLineOne">Hello,{!user ? 'Guest' : user.email} </span>
						<span className="header__optionLineTwo signIn">{user ? 'Sign Out' : 'Sign In'}</span>
					</div>
				</Link>
			

				<div className="header__option">
					<span className="header__optionLineOne">Returns</span>
					<span className="header__optionLineTwo">&Orders</span>
				</div>

				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>
				<Link to='/checkout'>
					<div className="header__optionBasket">
						<ShoppingBasketIcon />
						<span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
					</div>
				</Link>
				
			</div>
		</div>
	)
}

export default Header