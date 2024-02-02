import './index.css'

export default function ProductCard({
  productImg,
  productName,
  productPrice,
  promo,
}) {
  return (
    <div className="productCard">
      <div className="content">
        <img src={productImg} alt="Img" />
        <p>{productName}</p>
        <h4>{productPrice}</h4>
      </div>

      {promo && <div className="promo">
        <p>{promo}% OFF</p>
      </div>}
    </div>
  );
}
