const FormularioContacto = () => {
    return (
        <>
            <section className="homePage">
                <div className="contactPage">
                    <article>
                        <h2>Cuéntanos, ¿En que te podemos ayudar? </h2>
                    </article>
                    <form>
                        <p>Correo</p>
                        <input
                            type="email"
                            placeholder="name@example.com"
                        />
                        <p>Descripcion</p>
                        <input
                        className="formDescription"
                            type="text"
                        />
                    </form>
                     <button  type="submit">Enviar</button>
                </div>
            </section>
        </>
    );
};
export default FormularioContacto;