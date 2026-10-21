import Header from "./components/Header";
import UserCard from "./components/UserCard";
import Footer from "./components/Footer";
import ProductList from "./views/productList";
import { getProducts, getProductByCategory, getProductSortedByPrice } from "./controllers/productController";
// import produktImg from "./img/1.png";

    const products = getProducts();
    const drinks = getProductByCategory("Napoje");
    console.log(drinks);
    const sortedProducts = getProductSortedByPrice();
    const users = [
        {
            name: "Jan Kowalski",
            age: 19,
            city: "Warszawa"
        },
        {
            name: "Anna Nowak",
            age: 19,
            city: "Radzymin"
        },
    ];

function App() {

    return (
        <div>

            <Header />
            <ProductList products={products}/>
            {users.map((user) =>(
                <UserCard
                name={user.name}
                age={user.age}
                city={user.city}/>
            ))}

            <Footer />

        </div>
    );
}

export default App;