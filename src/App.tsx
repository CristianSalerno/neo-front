import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './components/card/Card';
import Navbar from './components/navbar/Navbar';
import './App.scss';
import Home from './pages/home/Home';

function App() {
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [apiData, setApiData] = useState([]);

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
			<Home products={apiData} />
		);
	}
}

export default App;
