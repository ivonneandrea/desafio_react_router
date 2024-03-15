import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const BarraNavegacion = () => {
    return (
        <Navbar className="navBar">
            <section className="navigation">
                <Link to="/" className="navLink">
                    🏠 Home
                </Link>

                <Link to="/contact" className="navLink">
                    💌 Contacto
                </Link>
            </section>
            <section className="navBrandContainer">
                <Navbar.Brand>
                    <strong className="navBrand">Happy cake 🍰</strong>
                </Navbar.Brand>
            </section>
        </Navbar>
    );
};
export default BarraNavegacion;