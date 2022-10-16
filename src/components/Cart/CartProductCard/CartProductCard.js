import React, { useState } from 'react'
import {BiEdit} from 'react-icons/bi'
import classes from './CartProductCard.module.css'

const CartProductCard = ({product}) => {
	const [input, setInput] = useState(1)

	const inputHandler = (e) => {
		setInput(e.target.value)
	}

	const decQtyHandler = () => {
		if (input > 0)
			setInput(prev => +prev - 1)
	}

	const incQtyHandler = () => {
			setInput(prev => +prev + 1)
	}
	
	return (
		<div className = {classes.container}>
				<div className = {classes.imagewrapper}>
					<img className = {classes.image} src = {product?.item?.image} alt = 'product'/>
				</div>
				<div className = {classes.detailswrapper}>
					<h2 className = {classes.producttitle}>{product?.item?.title}</h2>
					<div className = {classes['size-color-editbtn']}>
						<span className = {classes['size-color']}>S / {product?.colorPicked?.color}</span>
						<span className = {classes['editbtn']}>
							<BiEdit className = {classes.editicon}/>
						</span>
					</div>
					<span>${product?.item?.price}</span>
					<div className = {classes.qty}>
						<button className = {classes.decqty} onClick = {decQtyHandler}>-</button>
						<input type = "text" className = {classes.input} value = {input} onChange = {inputHandler}/>
						<button className = {classes.incqty} onClick = {incQtyHandler}>+</button>
					</div>
				</div>
		</div>
	)
}

export default CartProductCard