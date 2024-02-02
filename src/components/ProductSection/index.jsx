import ProductCard from "../ProductCard";

const products = [
  {
    productImg: "/product/1.png",
    productName: "Standing Lamp",
    productPrice: "N45,000",
    promo:5
  },
  {
    productImg: "/product/2.png",
    productName: "Lamp",
    productPrice: "N4,000",
  },
  {
    productImg: "/product/2.png",
    productName: "Lamp",
    productPrice: "N4,000",
    promo:'20'
  },
];

export default function ProductSection() {
  return (
    <div style={{
        display:'flex',
        gap:'4px'
    }}>
      {products.map(function(product, i) {
        return (
          <ProductCard
            productImg={product.productImg}
            productName={product.productName}
            productPrice={product.productPrice}
            promo={product.promo}
            key={i}
          />
        );
      })}
    </div>
  );
}
