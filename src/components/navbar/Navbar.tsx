import './navbar.scss'

const Navbar: React.FunctionComponent<any> = (props) => {
    return(
        <nav> 
            <h3>Listing Blushes</h3>
            <div className="product-detail">
                <p><b>Product: </b>  {props.product?.name || '--'}</p>
                <p><b>Category: </b>  {props.product?.id || '--'}</p>
            </div>
        </nav>
    );
};

export default Navbar;