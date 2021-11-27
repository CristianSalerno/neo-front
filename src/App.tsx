import React, { useEffect, useState } from 'react';
import Home from './pages/home/Home';
import './App.scss';

function App() {
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [apiData, setApiData] = useState([]);
	const [dataFiltered, setDataFiltered] = useState([]);

	const filterProducts = (filterType: string) => {
		if (filterType !== 'all') {
			debugger;
			setDataFiltered(
				apiData.filter(product => product.product_type === filterType),
			);
		} else {
			setDataFiltered(apiData);
		}
	};

	useEffect(() => {
		const fetchApiData = () =>
			fetch(
				'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline',
			)
				.then(response => response.json())
				.then(
					result => {
						setIsLoading(true);
						setApiData(result);
						setDataFiltered(result);
					},
					error => {
						setIsLoading(true);
						setError(error);
					},
				);
		fetchApiData();
	}, []);

	if (error) {
		return <>Error: {{ error }}</>;
	} else {
		return !isLoading ? (
			<div className="loading">
				<h1> Loading ... </h1>
			</div>
		) : (
			<>
				<div className="select-wrapper">
					<select name="filter" onChange={e => filterProducts(e.target.value)}>
						<option value="all">all</option>
						<option value="mascara">Mask</option>
						<option value="eyeliner">Eyeliner</option>
					</select>
				</div>

				<Home products={dataFiltered} />
			</>
		);
	}
}

export default App;
