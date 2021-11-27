import React from 'react';
import './card.scss';

interface CardProps {
	products: {
		id: number;
		brand: string;
		name: string;
		price: string;
		price_sign: string;
		image_link: string;
		product_link: string;
		description: string;
		tag_list: string[];
		product_colors: string[];
	};
}

const Card: React.FunctionComponent<CardProps> = props => {
	return (
		<div className="container">
			<img src={props.product?.image_link} />
			<h5>{props.product.name}</h5>
			<p>
				<b>Category: </b>
				{props.product.category || '--'}
			</p>
			<p>
				{props.product.price} {props.product.price_sign}
			</p>
			<div className="product-colors">
				{props.product.product_colors?.map((color, key) => {
					return (
						<div
							key={key}
							style={{
								backgroundColor: color.hex_value,
								width: '15px',
								height: '15px',
								borderRadius: '50%',
							}}
						></div>
					);
				})}
			</div>
		</div>
	);
};

export default Card;
