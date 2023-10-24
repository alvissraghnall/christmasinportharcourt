import Navbar from "../components/Navbar"
import styles from './styles/Merch.module.css';

const ProductCard = ({ image, title, price }) => {
    return (
        <div className={styles.productCard}>
            <img src={image} alt={title} className={styles.productImg} />
            <h3 className={styles.productTitle}>{title}</h3>
            <p className={styles.productPrice}>${price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

const products = [
    {
        id: 1,
        title: 'Product 1',
        price: 19.99,
        image: 'assets/product1.jpg',
    },
    {
        id: 2,
        title: 'Product 2',
        price: 24.99,
        image: 'assets/product2.jpg',
    },
];


const Merch = () => {
    return (
        <section className="container py-2 py-lg-4 py-xl-5 mb-2 mb-md-3 mt-5">

            <div className={styles.merchandise}>
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </section>
    );
}

export default Merch