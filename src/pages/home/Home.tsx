import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';

const Home = props => {
	const [productData, setProductData] = useState(null);

	return (
		<div className="app-wrapper">
			<Navbar product={productData} />
			<div className="list-container">
				{props.products.map((item, key) => (
					<div
						key={key}
						onMouseOver={() => setProductData(item)}
						onMouseLeave={() => setProductData('')}
					>
						<Link to={`/detail/${item.id}`} state={item}>
							<Card product={item} />
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
