import { Link, useLocation } from 'react-router-dom';
import './detail.scss';

const Detail = () => {
	const props = useLocation();
	console.log(props.state);
	return (
		<div className="detail-container">
			<div className="back-btn">
				<Link to="/">Go Back</Link>
			</div>

			<div className="detail">
				<header>
					<h2>{props.state.name}</h2>
				</header>
				<section>
					<img src={props.state.image_link} alt="" />
					<p>{props.state.brand}</p>
					<p>{props.state.category}</p>
					<p>
						{props.state.price} {props.state.currency || '$'}
					</p>
					<div className="product-colors">
						{props.state.product_colors?.map((color, key) => {
							return (
								<div
									key={key}
									style={{
										backgroundColor: color.hex_value,
										width: '15px',
										height: '15px',
										borderRadius: '50%',
										margin: '5px',
									}}
								></div>
							);
						})}
					</div>
					<p className="product-info">{props.state.description}</p>
				</section>
			</div>
		</div>
	);
};

export default Detail;
