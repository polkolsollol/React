import ProductCard from "../components/ProductCard";

function ProductList ({products}){
    return(
        <div>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    category={product.category}
                />
            ))}
        </div>
    );
}
export default ProductList