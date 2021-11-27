import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';

const Home = props => {
	const [productData, setProductData] = useState(null);
	const [currentFilter, setCurrentFilter] = useState('all');

	const filtered = useMemo(() => {
		if (currentFilter !== 'all') {
			return props.products.filter(
				product => product.product_type === currentFilter,
			);
		} else {
			return props.products;
		}
	}, [props.products, currentFilter]);

	return (
		<div className="app-wrapper">
			<Navbar product={productData} />
			<div className="select-wrapper">
				<select name="filter" onChange={e => setCurrentFilter(e.target.value)}>
					<option value="all">All</option>
					<option value="mascara">Mask</option>
					<option value="eyeliner">Eyeliner</option>
				</select>
			</div>
			<div className="list-container">
				{filtered?.map((item, key) => (
					<div
						key={key}
						onMouseOver={() => setProductData(item)}
						onMouseLeave={() => setProductData(null)}
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
