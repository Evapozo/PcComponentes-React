import './Header.css'
import OffCanvasCats from './OffCanvasCategorias/OffCanvasCats.jsx'

function Header(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <img src="/imagenes/miniLogo_pccomponentes.png" alt="logo" className="img-fluid"/>
                </div>
                
                {/* offcanvas de bootstrap para cargar categorias... */}
                <div className="col-2"><OffCanvasCats/></div>


                <div className="col-4"></div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}

export default Header 