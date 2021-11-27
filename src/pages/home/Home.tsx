import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';

const Home = props => {
	const [productData, setProductData] = useState(null);
	const [dataFiltered, setDataFiltered] = useState(props.products);

	const filterProducts = (filterType: string) => {
		if (filterType !== 'all') {
			setDataFiltered(
				props.products.filter(product => product.product_type === filterType),
			);
		} else {
			setDataFiltered(props.products);
		}
	};

	return (
		<div className="app-wrapper">
			<Navbar product={productData} />
			<div className="select-wrapper">
				<select name="filter" onChange={e => filterProducts(e.target.value)}>
					<option value="all">All</option>
					<option value="mascara">Mask</option>
					<option value="eyeliner">Eyeliner</option>
				</select>
			</div>
			<div className="list-container">
				{dataFiltered.map((item, key) => (
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
