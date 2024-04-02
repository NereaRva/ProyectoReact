import { Link } from "react-router-dom"
import logo from '../../assets/disney.png'
const Intro = () => {
  return (
    <>
    <div className="container mt-5 shadow rounded w-100" >
        <div className="container m-auto p-3  w-100">
            <div className="col-12 text-center pt-3 pb-3">
                <h2>Bienvenido a tu mundo Disney, si estás registrado inicie sesión, si no regístrese</h2>
            </div>
            <div className="d-flex pt-5 align-items-center">
                <div className="offset-1 col-3">
                    <img className="w-100" src= {logo}></img>
                </div>
                <div className="d-flex gap-3 offset-3 col-6">
                    <Link to={`/login`} className="card-link btn btn-dark d-flex align-items-center h-50">Iniciar sesión</Link>
                    <Link to={`/singup`} className="card-link btn btn-dark d-flex align-items-center h-50">Registrarse</Link>
                </div>
            </div>
        </div>
    </div>
    </>     
  )
}


export default Intro
