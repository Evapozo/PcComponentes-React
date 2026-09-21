import "./LoginRegistro.css";






function LoginRegistro() {
    

    const cajasTexto = ["Nombre", "Email", "Contraseña", "Repetir Contraseña"];

    
    return <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <img src="/imagenes/logo-pccomponentes-registro.svg" alt="logo" width="200" height="100" />
                </div>
            </div>

            <div className="row">

                <div className="col-md-6">
                    <img src="/imagenes/Captura de pantalla 2026-09-17 190515.png" alt="Captura" width="516"  />
                </div>
                <div className="col-md-6">
                    <h2>Crear cuenta</h2>

                    {cajasTexto.map((elemento, posicion) => (
                        <div key={posicion} className="form-floating mb-3">
                            <input type="text" className="form-control" id={`floatingInput${posicion}`} placeholder={elemento}/>
                            <label htmlFor={`floatingInput${posicion}`}>{elemento}</label>
                        </div>
                    ))}

                    <button type="submit" className="btn btn-primary">Crear cuenta</button>
                </div>
            </div>  
        </div>
}

export default LoginRegistro;
