import notFound from "../assets/img/facetriste.jpeg"

const NotFound = () => {
    return (
        <section className="homePage">
            <h3 className="notFound">
                💔 La pagina que estas buscando no existe  💔 
            </h3>
            <img className="notFoundImg" src={notFound} alt="Sad fake draw" />
        </section>
    );
};
export default NotFound;