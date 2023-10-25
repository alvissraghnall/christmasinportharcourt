import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import styles from './styles/Merch.module.css';

const ProductCard = ({ image, discount, title, price, link, options }) => {
    return (
        <div class="align-self-stretch bg-transparent h-auto col-12 col-sm-6 col-lg-4">
            <div class="card border border-transparent position-relative overflow-hidden h-100 transparent">
                <div class="card-img position-relative">
                    <div class="card-badges">
                        <span class="badge badge-card"><span class="f-w-2 f-h-2 bg-danger rounded-circle d-block me-1"></span> Sale</span>
                    </div>
                    <picture class={"d-block mb-4 position-relative overflow-hidden bg-light " + styles.imgClipShapeOne}>
                        <img className="w-100 img-fluid position-relative z-index-10" src={image} alt={title} />
                    </picture>
                </div>

                <div class="card-body px-0">
                    <Link to={`/merch/${link}`} class="text-decoration-none link-cover" style={{ textDecoration: "none", color: "#111827" }}>{ title }</Link>
                    <small class="text-muted d-block">{ options }</small>
                    <p class="mt-2 mb-0 small"><s class="text-muted">₦ { price }</s> <span class="text-danger">₦ {price - (price * discount / 100) }</span></p>
                    
                    {/* <p class="mt-2 mb-0 small">{{ currency }}{{ price }}</p> */}
                    
                </div>
            </div>
            {/* <div class="me-xl-n4 me-xxl-n5" >
                <picture class={"d-block mb-4 " + styles.imgClipShapeOne}>
                    <img className="w-100" src={image} alt={title} />
                </picture>
                <p className={`mb-2 text-muted ${styles.titleSmall}`}>{title}</p>
                <h4 className="lead fw-bold">{price}</h4>
                <Link to={`/merch/${link}`} className={"btn align-self-start " + styles.btnPseudo}>
                    Buy Now
                </Link>
            </div> */}
        </div>
    );
};

const products = [
    {
        id: 1,
        title: 'CIPH Hoodie',
        price: 8000,
        image: 'assets/img/merch/merch-hoodie-01.jpeg',
        link: "hoodie-01",
        options: "5 sizes, 2 colours",
        discount: 20
    },
    {
        id: 2,
        title: 'CIPH Hoodie',
        price: 8000,
        image: 'assets/img/merch/merch-hoodie-02.jpeg',
        link: "hoodie-01",
        options: "5 sizes, 2 colours",
        discount: 20
    },
    {
        id: 2,
        title: 'CIPH Hoodie',
        price: 8000,
        image: 'assets/img/merch/merch-hoodie-03.jpeg',
        link: "hoodie-01",
        options: "5 sizes, 2 colours",
        discount: 20
    },
    {
        id: 2,
        title: 'CIPH Shirt',
        price: 8000,
        image: 'assets/img/merch/merch-shirt-02.jpeg',
        link: "hoodie-01",
        options: "5 sizes, 2 colours",
        discount: 20
    },
    {
        id: 2,
        title: 'CIPH Shirt',
        price: 8000,
        image: 'assets/img/merch/merch-shirt-01.jpeg',
        link: "hoodie-01",
        options: "5 sizes, 2 colours",
        discount: 20
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