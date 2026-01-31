import "./productCard.css";

export default function ProductCard(props) {
    console.log(props)
    return (
        <div className="product-card">
            <img className="productImage" src={props.picture} />
            <h1>{props.name}</h1>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <span>{props.price}</span>
            <button className="addToCart">Add to Cart</button>
        </div>
    )

}