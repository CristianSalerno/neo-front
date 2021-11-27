import React, { useEffect, useState } from 'react';
import Home from './pages/home/Home';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detail from './pages/detail/Detail';

function App() {
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [apiData, setApiData] = useState([]);

	useEffect(() => {
		const fetchApiData = () =>
			fetch(
				'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline',
			)
				.then(response => response.json())
				.then(
					result => {
						setIsLoading(false);
						setApiData(result);
					},
					error => {
						setIsLoading(false);
						setError(error);
					},
				);
		fetchApiData();
	}, []);

	if (error) {
		return <>Error: {error}</>;
	} else {
		return isLoading ? (
			<div className="loading">
				<h1> Loading ... </h1>
			</div>
		) : (
			<>
				<Router>
					<Routes>
						<Route path="/" element={<Home products={apiData} />} />
						<Route path="detail/:id" element={<Detail />} />
					</Routes>
				</Router>
			</>
		);
	}
}

export default App;
