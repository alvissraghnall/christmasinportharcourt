import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import styles from './styles/Merch.module.css';
import { motion } from 'framer-motion';

const ProductCard = ({ image, discount, title, price, link, options }) => {
    const cardVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className="align-self-stretch bg-transparent h-auto col-12 col-sm-6 col-lg-4"
            variants={cardVariants}
        >
            <div
                className="card border border-transparent position-relative overflow-hidden h-100 transparent"
            >
                <div className="card-img position-relative">
                    <div className="card-badges">
                        <span className="badge badge-card">
                            <span className="f-w-2 f-h-2 bg-danger rounded-circle d-block me-1"></span>
                            Sale
                        </span>
                    </div>
                    <picture className={"d-block mb-4 position-relative overflow-hidden bg-light " + styles.imgClipShapeOne}>
                        <motion.img
                            className="w-100 img-fluid position-relative z-index-10"
                            src={image}
                            alt={title}
                            whileHover={{ scale: 0.85 }}
                            transition={{ duration: .3, ease: "easeInOut" }}
                            style={{ cursor: "pointer" }}
                        />
                    </picture>
                </div>

                <div className="card-body px-0">
                    <Link to={`/merch/${link}`} className="text-decoration-none link-cover lead fw-bold" style={{ textDecoration: "none", color: "#111827" }}>
                        {title}
                    </Link>
                    <small className={"text-muted d-block " + styles.titleSmall}>{options}</small>
                    <p className={"mt-2 mb-0 small " + styles.merchPrice}>
                        <s className="text-muted ">₦{Math.round(price)}</s> <span className="text-success">₦{Math.round(price - (price * discount / 100))}</span>
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const products = [
    {
        id: 1,
        title: 'CIPH Hoodie',
        price: 31250,
        image: 'assets/img/merch/merch-hoodie-01.jpeg',
        link: "hoodie-01",
        options: "3 sizes, 4 colours",
        discount: 20
    },
    {
        id: 2,
        title: 'CIPH Hoodie',
        price: 31250,
        image: 'assets/img/merch/merch-hoodie-02.jpeg',
        link: "hoodie-01",
        options: "5 sizes, 2 colours",
        discount: 20
    },
    {
        id: 2,
        title: 'CIPH Hoodie',
        price: 31250,
        image: 'assets/img/merch/merch-hoodie-03.jpeg',
        link: "hoodie-01",
        options: "2 sizes, 2 colours",
        discount: 20
    },
    {
        id: 2,
        title: 'CIPH Shirt',
        price: 11428,
        image: 'assets/img/merch/merch-shirt-02.jpeg',
        link: "hoodie-01",
        options: "5 sizes, 2 colours",
        discount: 30
    },
    {
        id: 2,
        title: 'CIPH Shirt',
        price: 11428,
        image: 'assets/img/merch/merch-shirt-01.jpeg',
        link: "hoodie-01",
        options: "4 sizes, 1 colour",
        discount: 30
    },
];


const Merch = () => {
    return (
        <section className="container py-2 py-lg-4 py-xl-5 mb-2 mb-md-3 mt-5">

            <div className="container my-4 mb-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="display-4 fw-bold mb-3">Welcome to Our Merchandise Store</h1>
                        <p className="lead">
                            Explore a world of premium merchandise that allows you to wear your passion proudly.
                            From stylish apparel to accessories and more, our collection is designed with love just for you.
                        </p>
                        {/* <p>
                            Whether you're a dedicated fan, an enthusiast, or simply looking for unique gifts, you'll find something special here.
                            Our merchandise represents not just products but a piece of the lifestyle we permeate.
                        </p> */}
                    </div>
                    <div className="col-lg-6">
                        <img
                            src="assets/img/banner-3.jpg"
                            alt="Merchandise"
                            className="img-fluid rounded"
                        />
                    </div>
                </div>
            </div>

            <div className={styles.merchandise + " row g-4"}>
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </section>
    );
}

export default Merch